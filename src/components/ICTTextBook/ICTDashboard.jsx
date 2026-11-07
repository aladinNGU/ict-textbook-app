import React, { useState, useEffect } from "react";
import { courseData } from "./CourseData";

// Bump this if you ever change INITIAL_USERS below
const DATA_VERSION = "1.3";

const INITIAL_USERS = {
  kareema: {
    password: "kareema123",
    fullName: "Kareema Juwayriya",
    role: "Student",
  },
  samira: { password: "samira321", fullName: "Samira", role: "Student" },
  teacher: { password: "teach123", fullName: "Jane Smith", role: "Teacher" },
  admin: {
    password: "admin123",
    fullName: "System Admin",
    role: "Administrator",
  },
};

export default function ICTDashboard() {
  // --- Auth / user DB ---
  const [usersDb, setUsersDb] = useState(() => {
    const savedVersion = localStorage.getItem("ict_data_version");
    const savedDb = localStorage.getItem("ict_users_db");
    if (savedVersion !== DATA_VERSION || !savedDb) {
      localStorage.setItem("ict_data_version", DATA_VERSION);
      return INITIAL_USERS;
    }
    return JSON.parse(savedDb);
  });

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("ict_auth_state") === "true",
  );
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("ict_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  // --- Security ---
  const [loginAttempts, setLoginAttempts] = useState(() => {
    const saved = localStorage.getItem("ict_login_attempts");
    return saved ? JSON.parse(saved) : {};
  });
  const [blockedUsers, setBlockedUsers] = useState(() => {
    const saved = localStorage.getItem("ict_blocked_users");
    return saved ? JSON.parse(saved) : [];
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // --- Admin ---
  const [adminTargetUser, setAdminTargetUser] = useState("kareema");
  const [adminNewPassword, setAdminNewPassword] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  // --- Dashboard UI ---
  const [activeChapter, setActiveChapter] = useState(courseData[0]);
  const [activeTopic, setActiveTopic] = useState(
    courseData[0]?.sections?.[0] ?? null,
  );
  const [openSections, setOpenSections] = useState({});

  // --- Persistence ---
  useEffect(() => {
    localStorage.setItem("ict_users_db", JSON.stringify(usersDb));
  }, [usersDb]);
  useEffect(() => {
    localStorage.setItem("ict_blocked_users", JSON.stringify(blockedUsers));
  }, [blockedUsers]);
  useEffect(() => {
    localStorage.setItem("ict_login_attempts", JSON.stringify(loginAttempts));
  }, [loginAttempts]);
  useEffect(() => {
    localStorage.setItem("ict_auth_state", isLoggedIn.toString());
    if (currentUser)
      localStorage.setItem("ict_current_user", JSON.stringify(currentUser));
    else localStorage.removeItem("ict_current_user");
  }, [isLoggedIn, currentUser]);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
    setCaptchaInput("");
  };

  useEffect(() => {
    if (!isLoggedIn) generateCaptcha();
  }, [isLoggedIn]);

  // --- Login ---
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError("");
    const u = username.trim().toLowerCase();

    if (blockedUsers.includes(u)) {
      setAuthError(
        "Your account is locked due to 3 failed attempts. Please contact the Administrator.",
      );
      return;
    }
    if (parseInt(captchaInput) !== captcha.num1 + captcha.num2) {
      setAuthError("Incorrect Captcha answer. Please try again.");
      generateCaptcha();
      return;
    }

    const record = usersDb[u];
    if (record && record.password === password) {
      setIsLoggedIn(true);
      setCurrentUser({
        username: u,
        fullName: record.fullName,
        role: record.role,
      });
      setLoginAttempts({ ...loginAttempts, [u]: 0 });
    } else {
      const newAttempts = (loginAttempts[u] || 0) + 1;
      setLoginAttempts({ ...loginAttempts, [u]: newAttempts });
      if (newAttempts >= 3) {
        setBlockedUsers([...blockedUsers, u]);
        setAuthError(
          "Account Locked! You have reached the maximum of 3 failed attempts. Contact Admin.",
        );
      } else {
        setAuthError(
          `Invalid username or password. Attempts remaining: ${3 - newAttempts}`,
        );
      }
      generateCaptcha();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUsername("");
    setPassword("");
    generateCaptcha();
  };

  // --- Admin actions ---
  const handleUnblock = (u) => {
    setBlockedUsers(blockedUsers.filter((x) => x !== u));
    setLoginAttempts({ ...loginAttempts, [u]: 0 });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (adminNewPassword.trim().length < 6) {
      setAdminMessage("Error: Password must be at least 6 characters long.");
      return;
    }
    setUsersDb((prev) => ({
      ...prev,
      [adminTargetUser]: {
        ...prev[adminTargetUser],
        password: adminNewPassword,
      },
    }));
    setAdminMessage(
      `Success! Password for ${adminTargetUser} has been updated.`,
    );
    setAdminNewPassword("");
    setTimeout(() => setAdminMessage(""), 3000);
  };

  // --- Navigation ---
  const handleChapterClick = (chapter) => {
    setActiveChapter(chapter);
    setActiveTopic(chapter.sections?.[0] ?? null);
    setOpenSections({});
  };

  const toggleSection = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  // ================= LOGIN SCREEN =================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]"></div>

        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10">
          <div className="bg-primary p-6 text-center text-white">
            <h2 className="text-2xl font-bold">ICT Learning Portal</h2>
            <p className="text-sm text-primary-focus mt-1">
              Secure Login Required
            </p>
          </div>

          <form onSubmit={handleLogin} className="p-6 space-y-4">
            <div className="alert alert-warning shadow-sm py-2 px-3 text-sm flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-5 w-5 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                <strong>Note:</strong> Your account will be locked after 3
                failed login attempts. Only an Administrator can unlock it.
              </span>
            </div>

            {authError && (
              <div className="p-3 bg-error/10 border border-error/20 text-error text-sm rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {authError}
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Username</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-primary">
                  Security Verification: <br /> What is the sum of{" "}
                  {captcha.num1} + {captcha.num2}?
                </span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter the sum"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ================= DASHBOARD =================
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <header className="bg-primary text-white shadow-md">
        <div className="flex justify-between max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Information and Communication Technology (ICT) <br />
              <span className="font-thin text-yellow-400">
                <i>for Classes 11 and 12</i>
              </span>
            </h1>
          </div>
          <div className="text-right">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="font-thin"> Developed by:</span> <br /> BD
              Programming
            </h1>
            <p className="text-sm">ICT Experts</p>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <ul className="flex space-x-1 overflow-x-auto py-2">
            {courseData.map((chapter, index) => (
              <li key={chapter.id || `chapter-${index}`}>
                <button
                  onClick={() => handleChapterClick(chapter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeChapter?.id === chapter.id
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="pl-4 border-l border-gray-200 flex items-center">
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline btn-error gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-blue-50 border-b border-blue-100 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <p className="text-blue-900 font-medium flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Welcome,{" "}
            <span className="font-bold uppercase tracking-wide text-primary">
              {currentUser?.fullName}
            </span>
            ! You are logged in as a {currentUser?.role}.
          </p>
          <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            System Secure
          </span>
        </div>
      </div>

      {currentUser?.role === "Administrator" && (
        <div className="bg-gray-50 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Administrator Control Panel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-red-700 font-bold text-base mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Blocked Users
                </h3>
                {blockedUsers.length > 0 ? (
                  <ul className="space-y-2">
                    {blockedUsers.map((u, index) => (
                      <li
                        key={u || `blocked-${index}`}
                        className="flex justify-between items-center bg-red-50 p-2.5 rounded-lg border border-red-100 text-sm"
                      >
                        <span className="font-semibold text-gray-800">{u}</span>
                        <button
                          onClick={() => handleUnblock(u)}
                          className="btn btn-xs btn-success"
                        >
                          Unlock Account
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                    No blocked accounts currently.
                  </div>
                )}
              </div>
              <div className="bg-white border border-indigo-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-indigo-700 font-bold text-base mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reset User Password
                </h3>
                <form onSubmit={handlePasswordChange} className="space-y-3">
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">
                        Select User
                      </span>
                    </label>
                    <select
                      className="select select-bordered select-sm w-full"
                      value={adminTargetUser}
                      onChange={(e) => setAdminTargetUser(e.target.value)}
                    >
                      {Object.keys(usersDb).map((u) => (
                        <option key={u} value={u}>
                          {u} ({usersDb[u].role})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label py-1">
                      <span className="label-text font-medium">
                        New Password
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Min 6 characters"
                      className="input input-bordered input-sm w-full"
                      value={adminNewPassword}
                      onChange={(e) => setAdminNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary w-full mt-2"
                  >
                    Update Password
                  </button>
                </form>
                {adminMessage && (
                  <div
                    className={`text-xs mt-3 font-semibold p-2 rounded ${adminMessage.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
                  >
                    {adminMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 py-8 gap-8">
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
              <h2 className="font-bold text-gray-800 text-lg">
                Table of Contents
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {activeChapter?.fullTitle}
              </p>
            </div>

            <ul className="p-2 space-y-1">
              {(activeChapter?.sections || []).map((section, sIndex) => (
                <li key={section.id || `section-${sIndex}`}>
                  {section.subsections ? (
                    <div>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                          openSections[section.id]
                            ? "bg-base-200 text-primary"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{section.title}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${openSections[section.id] ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections[section.id] && (
                        <ul className="mt-1 ml-4 border-l-2 border-gray-200 pl-2 space-y-1">
                          {section.subsections.map((sub, subIndex) => (
                            <li key={sub.id || `sub-${subIndex}`}>
                              <button
                                onClick={() => setActiveTopic(sub)}
                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                                  activeTopic?.id === sub.id
                                    ? "bg-primary text-white font-medium shadow-sm"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                              >
                                {sub.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveTopic(section)}
                      className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        activeTopic?.id === section.id
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  )}
                </li>
              ))}

              {(!activeChapter?.sections ||
                activeChapter.sections.length === 0) && (
                <li className="p-4 text-center text-sm text-gray-500 italic">
                  No topics available for this chapter yet.
                </li>
              )}
            </ul>
          </div>
        </aside>

        <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-10 min-h-[60vh]">
          {activeTopic ? (
            <article className="prose max-w-none text-gray-800">
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-extrabold text-primary m-0">
                  {activeTopic.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {activeChapter?.fullTitle}
                </p>
              </div>
              <div className="leading-relaxed space-y-4">
                {activeTopic.content || (
                  <p className="text-gray-500 italic">Content coming soon...</p>
                )}
              </div>
            </article>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a topic from the sidebar to view its content.
            </div>
          )}
        </main>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Information and Communication
            Technology. All rights reserved.
          </p>
          <p className="mt-1 text-gray-500">Designed for Classes 11 and 12</p>
        </div>
      </footer>
    </div>
  );
}
