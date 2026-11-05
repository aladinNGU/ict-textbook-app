import React, { useState } from "react";

// Extracted and cleaned Q&A data from the provided document
const qaData = [
  {
    id: 1,
    q: "What is Information and Communication Technology (ICT)?",
    a: "The technology used for collecting, processing, storing, and exchanging information is called Information and Communication Technology (ICT).",
  },
  {
    id: 2,
    q: "What is a Global Village? [J. Board '25]",
    a: "A global village is a technology-based social system where people from any part of the world stay connected through information technology.",
  },
  {
    id: 3,
    q: "Who introduced the concept of the Global Village?",
    a: "The concept was introduced by Marshall McLuhan, who explained the revolutionary impact of communication technology.",
  },
  {
    id: 4,
    q: "What is the Internet?",
    a: "The Internet is a vast system of interconnected computer networks that allows data exchange.",
  },
  {
    id: 5,
    q: "What is Email?",
    a: "Email is a simple, fast, and reliable way of sending messages or information via the Internet.",
  },
  {
    id: 6,
    q: "What is Teleconferencing?",
    a: "It is a method of participating in discussions from a distance using telephone, computer, and audio-video technologies.",
  },
  {
    id: 7,
    q: "What is Video Conferencing?",
    a: "A remote communication system where multiple people connect in real-time using video and audio.",
  },
  {
    id: 8,
    q: "What is VoIP (Voice over Internet Protocol)?",
    a: "A technology that allows voice communication over the Internet.",
  },
  {
    id: 9,
    q: "What is Zoom?",
    a: "Zoom is a video conferencing app used for online meetings, classes, and webinars.",
  },
  {
    id: 10,
    q: "What is Google Meet?",
    a: "A video meeting platform by Google, easily accessible and free for Gmail users.",
  },
  {
    id: 11,
    q: "What is Facebook Messenger?",
    a: "A popular platform for messaging, audio, and video calls via Facebook.",
  },
  {
    id: 12,
    q: "What is Outsourcing?",
    a: "The process of getting work done through a third party, which is a means of earning money online.",
  },
  {
    id: 13,
    q: "What is Freelancing?",
    a: "Working independently using one's own skills is called freelancing.",
  },
  {
    id: 14,
    q: "What is Uber?",
    a: "An app-based taxi service that can be accessed using a smartphone.",
  },
  {
    id: 15,
    q: "What is E-Learning? [Dhaka Board '24, '25; Dinajpur Board '24]",
    a: "A method of receiving education using electronic devices through the Internet.",
  },
  {
    id: 16,
    q: "What is an E-Book?",
    a: "A book in digital format suitable for reading electronically.",
  },
  {
    id: 17,
    q: "What is Telemedicine? [Rajshahi Board '17; Dhaka, Dinajpur, Sylhet, Jessore Board '18]",
    a: "A method of providing medical services remotely using the Internet.",
  },
  {
    id: 18,
    q: "What is an Electronic Health Record (EHR)?",
    a: "A system of storing patients' health information digitally.",
  },
  {
    id: 19,
    q: "What is Office Automation?",
    a: "A process where office tasks are performed automatically using computer technology.",
  },
  {
    id: 20,
    q: "What is a Smart Home? [Jessore Board '25; Barisal Board '23; Chattogram Board '19]",
    a: "A modern home where lights, temperature, security cameras, doors, and windows can be controlled via remote or mobile apps.",
  },
  {
    id: 21,
    q: "What is IoT (Internet of Things)?",
    a: "A technology where everyday devices or objects are connected to the Internet and can exchange data.",
  },
  {
    id: 22,
    q: "What is E-Commerce? [C. Board '25]",
    a: "A system of buying and selling goods or services through the Internet or digital networks, enabling rapid global transactions.",
  },
  {
    id: 23,
    q: "What is an ATM?",
    a: "A machine that allows 24-hour banking transactions such as cash withdrawal or balance check using debit or credit cards.",
  },
  {
    id: 26,
    q: "What is Social Media?",
    a: "An online platform where people communicate, share photos or messages, and build social relationships.",
  },
  {
    id: 28,
    q: "What is Twitter?",
    a: 'A microblogging site where users exchange short messages (140 characters) called "tweets".',
  },
  {
    id: 29,
    q: "What is GPS?",
    a: "A satellite-based one-way technology that helps determine the location of any place on Earth.",
  },
  {
    id: 30,
    q: "What is Electronic Fund Transfer (EFT)?",
    a: "A system of transferring money from one account to another using Internet or technology in banking.",
  },
  {
    id: 31,
    q: "What is a Blog?",
    a: "An online platform or website where one regularly shares opinions, writings, photos, or videos.",
  },
  {
    id: 32,
    q: "What is E-Governance?",
    a: "A process of conducting government services and operations digitally to ensure easy access for citizens.",
  },
  {
    id: 33,
    q: "What is Virtual Reality (VR)? [Barisal Board '25; Rajshahi Board '24, '23]",
    a: "Virtual Reality is a computer-based environment that creates a real-world-like experience in the user's mind.",
  },
  {
    id: 34,
    q: "What is Telepresence? [Rajshahi Board '25]",
    a: "Telepresence is a technology that gives the feeling of being present at a distant place virtually.",
  },
  {
    id: 35,
    q: "What is Augmented Reality (AR)?",
    a: "Augmented Reality is the combination of real and artificial elements, where artificial information is added to real images to create a unique experience.",
  },
  {
    id: 36,
    q: "What is Simulation?",
    a: "Simulation is the artificial testing of a task using computers before performing it in real life.",
  },
  {
    id: 37,
    q: "What is Flight Simulation?",
    a: "Flight Simulation is a training method where pilots are trained using computer technology in an environment similar to real-life flying.",
  },
  {
    id: 38,
    q: "What is Artificial Intelligence (AI)?",
    a: "Artificial Intelligence is a technology where a computer or machine can think and make decisions like a human.",
  },
  {
    id: 39,
    q: "What is a Neural Net? [Mymensingh Board '24]",
    a: "A neural net is a computer system capable of analyzing data and making decisions like the human brain.",
  },
  {
    id: 40,
    q: "What is Machine Learning? [Sylhet Board '25]",
    a: "Machine Learning is a technology where computers learn from experience and make decisions in the future.",
  },
  {
    id: 41,
    q: "What is an Expert System?",
    a: "An expert system is a computer program that thinks like a specialist and can give advice or make decisions.",
  },
  {
    id: 42,
    q: "What is Fuzzy Logic?",
    a: "Fuzzy Logic is a mathematical method that works in situations that are not just 'yes' or 'no', but also partially yes or partially no. It is used in robotics and smart devices.",
  },
  {
    id: 43,
    q: "What is Robotics? [Mymensingh, Dinajpur Board '23; Dhaka, Cumilla Board '24, '19; Sylhet Board '24]",
    a: "Robotics is a field that deals with the design, operation, and use of robots.",
  },
  {
    id: 44,
    q: "What is a Robot?",
    a: "A robot is an automated machine that can perform various tasks based on human commands or autonomously.",
  },
  {
    id: 45,
    q: 'Who introduced the term "Robot"?',
    a: 'The term "robot" was popularized by Russian writer Isaac Asimov, who introduced it in science fiction.',
  },
  {
    id: 46,
    q: "What is an Actuator?",
    a: "An actuator is a motor or device that helps move or operate a machine.",
  },
  {
    id: 47,
    q: "What is CAD (Computer-Aided Design)? [Dhaka Board '23]",
    a: "CAD is a tool or software used for designing and drafting using a computer.",
  },
  {
    id: 48,
    q: "What is CAM (Computer-Aided Manufacturing)?",
    a: "CAM is a technology that uses computers to control manufacturing equipment.",
  },
  {
    id: 49,
    q: "What is RFID?",
    a: "RFID is a small chip-based device used to identify people or objects.",
  },
  {
    id: 50,
    q: "What is Biometrics? [Dinajpur Board '23; Dhaka, Barisal Board '19]",
    a: "Biometrics is a technology that identifies a person by analyzing their physical features (e.g., fingerprints, retina, facial structure).",
  },
  {
    id: 51,
    q: "What is a Fingerprint Reader?",
    a: "A device that scans fingerprints and matches them with stored data to identify a person.",
  },
  {
    id: 52,
    q: "What is Facial Recognition?",
    a: "Biometrics technology analyzes the shape and features of a person's face to identify them. It is also known as face recognition.",
  },
  {
    id: 53,
    q: "What is Hand Geometry Recognition?",
    a: "A method where the structure of a person's hand is analyzed for identification.",
  },
  {
    id: 54,
    q: "What is DNA Profiling?",
    a: "DNA Profiling is a technology that analyzes a person's DNA to determine their identity.",
  },
  {
    id: 55,
    q: "What is Bioinformatics? [Barisal Board '24; Sylhet Board '17]",
    a: "The use of computer technology to analyze biological data is called Bioinformatics.",
  },
  {
    id: 56,
    q: "What is a Dry Lab?",
    a: "A dry lab is a virtual version of a laboratory where chemical or biological research is conducted using computers without actual reagents.",
  },
  {
    id: 57,
    q: "What is DNA?",
    a: "DNA is a molecule inside organisms that carries genetic information and helps determine inheritance.",
  },
  {
    id: 58,
    q: "What is Genetic Engineering?",
    a: "It is a technology that modifies the DNA of an organism to change its structure or quality.",
  },
  {
    id: 59,
    q: "What is Recombinant DNA Technology?",
    a: "This technology combines the DNA of two organisms to create a new organism with unique traits.",
  },
  {
    id: 60,
    q: "What is a Transgenic Plant?",
    a: "A plant whose DNA has been modified by adding genes from another organism to introduce new traits.",
  },
  {
    id: 61,
    q: "What is GMO (Genetically Modified Organism)?",
    a: "A GMO is a plant or animal whose DNA has been altered to introduce traits such as higher yield or disease resistance.",
  },
  {
    id: 62,
    q: "What is a Gene?",
    a: "A gene is a unit of DNA in a living body that controls hereditary traits like eye color, height, etc.",
  },
  {
    id: 63,
    q: "What is Nanotechnology? [Chattogram Board '24; Rajshahi Board '17]",
    a: "The technology of designing and manipulating matter at the atomic or molecular level is called Nanotechnology.",
  },
  {
    id: 64,
    q: "What is a Molecular Scissor?",
    a: "A chemical or protein used to cut DNA is called a molecular scissor.",
  },
  {
    id: 65,
    q: "What is a Nanometer?",
    a: "A nanometer is a unit of length equal to one-billionth of a meter (1 nanometer = 10⁻⁹ meter).",
  },
  {
    id: 66,
    q: "What is a Nanoparticle? [Mymensingh Board '25]",
    a: "A nanoparticle is a very tiny particle, usually between 1 and 100 nanometers in size, used in medicine, cosmetics, sensors, etc.",
  },
  {
    id: 67,
    q: "What is Ethics?",
    a: "Ethics refers to values and codes of conduct that help determine right and wrong and maintain order in society.",
  },
  {
    id: 68,
    q: "What is a Hacker?",
    a: "A hacker is a person who gains unauthorized access to a computer or network to steal or damage information.",
  },
  {
    id: 69,
    q: "What is Cybercrime?",
    a: "Crimes committed using the Internet or computers, such as hacking, fraud, or data theft.",
  },
  {
    id: 70,
    q: "What is Spamming?",
    a: "Sending the same or unwanted messages repeatedly to many people, causing disruption in email or messaging systems.",
  },
  {
    id: 71,
    q: "What is Phishing?",
    a: "An online technique used to deceive someone into providing confidential information via fake links or forms.",
  },
  {
    id: 72,
    q: "What is Plagiarism? [Jessore Board '19]",
    a: "Using someone else's writing, images, or videos as one's own without permission or citation.",
  },
  {
    id: 73,
    q: "What is Software Piracy? [Jessore Board '24]",
    a: "Copying, installing, or selling software without permission, which is a legal offense.",
  },
  {
    id: 74,
    q: "What is a Virus (Computer Virus)?",
    a: "A malicious program that spreads in a computer, damages files or data, or harms the system.",
  },
  {
    id: 75,
    q: "What is a Drone?",
    a: "A drone is an unmanned flying device or aircraft that can be operated remotely using a controller or software.",
  },
  {
    id: 76,
    q: "What is Space Exploration? [Barisal Board '24]",
    a: "Activities involving spacecraft, satellites, or humans sent into space for research or investigation purposes.",
  },
];

export default function Ch1KBQA() {
  const [openItem, setOpenItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic for search
  const filteredData = qaData.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Knowledge-Based Question and Answer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guide for Information and Communication Technology
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary sm:text-md shadow-sm transition-all"
            placeholder="Search questions or answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const isOpen = openItem === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${isOpen ? "border-primary ring-1 ring-primary/20" : "border-gray-200"}`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <div className="flex items-start">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-xs mr-4 mt-0.5">
                        {item.id}
                      </span>
                      <span
                        className={`font-semibold text-md sm:text-lg ${isOpen ? "text-primary" : "text-gray-800"}`}
                      >
                        {item.q}
                      </span>
                    </div>
                    <span className="ml-6 flex-shrink-0">
                      <svg
                        className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      <p className="mt-4">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No results found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search terms.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Showing {filteredData.length} of {qaData.length} questions
        </div>
      </div>
    </div>
  );
}
