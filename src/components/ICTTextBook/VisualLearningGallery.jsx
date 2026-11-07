import React, { useState } from "react";

// 👇 Image data aligned with the textbook content
export const visualData = [
  // --- Category: Pioneers ---
  {
    id: 1,
    category: "Pioneers",
    title: "Claude Elwood Shannon",
    subtitle: "Father of Information Technology",
    img: "https://i.ibb.co.com/Tqpmpr6K/claude-elwood-shannon.jpg",
    desc: "An American mathematician known as the Father of Information Technology. He published 'A Mathematical Theory of Communication' in 1948, which became the foundation of modern information theory.",
  },
  {
    id: 2,
    category: "Pioneers",
    title: "Marshall McLuhan",
    subtitle: "Global Village Proponent",
    img: "https://i.ibb.co.com/kg8kLGZJ/marshall-mcluhan.jpg",
    desc: "A Canadian author who first used the term 'Global Village' in the 1960s. He explained how communication technology was turning the world into a village in his famous books.",
  },
  {
    id: 3,
    category: "Pioneers",
    title: "Raymond Samuel Tomlinson",
    subtitle: "Father of E-mail",
    img: "https://i.ibb.co.com/1JM9Vr07/raymond-samuel-tomlinson.jpg",
    desc: "He was the first to use an email program to send a message from one host computer to another. For inventing the email communication system, he is known as the Father of Email.",
  },
  {
    id: 4,
    category: "Pioneers",
    title: "Richard Stallman",
    subtitle: "Pioneer of Blogging",
    img: "https://i.ibb.co.com/nsDY4fZP/richard-stallman.jpg",
    desc: "Known as the pioneer of the blogging concept. A blog is an online medium for expressing personal opinions, where posts can be published and commented on.",
  },
  {
    id: 5,
    category: "Pioneers",
    title: "Jawed Karim",
    subtitle: "Co-founder of YouTube",
    img: "https://i.ibb.co.com/Wr1pjDN/jawed-karim.jpg",
    desc: "A co-founder of YouTube, a popular video-sharing platform. He is of Bangladeshi descent.",
  },
  {
    id: 6,
    category: "Pioneers",
    title: "Mark Zuckerberg",
    subtitle: "Founder of Facebook",
    img: "https://i.ibb.co.com/Hfwx6T55/mark-zukerberg.jpg",
    desc: "The founder of Facebook. He views the 'Metaverse' as the future virtual world where people can communicate and work virtually as easily as they do on the internet.",
  },
  {
    id: 7,
    category: "Pioneers",
    title: "Michael S. Hart",
    subtitle: "Father of E-Book",
    img: "https://i.ibb.co.com/zVjwGQCT/michael-s-hart.jpg",
    desc: "Founder of the Gutenberg Project. He is known as the father of the e-book, which is a digital version of a book that is easily downloadable and portable.",
  },
  {
    id: 8,
    category: "Pioneers",
    title: "Joseph Engelberger",
    subtitle: "Father of Robotics",
    img: "https://i.ibb.co.com/nNKmJmLd/joseph-engelberger.jpg",
    desc: "Recognized as the Father of Robotics. Robotics is the branch of technology dealing with the design, structure, operational process, and application of robots—computer-controlled electromechanical systems.",
  },
  {
    id: 9,
    category: "Pioneers",
    title: "Jaron Lanier",
    subtitle: "Father of Virtual Reality",
    img: "https://i.ibb.co.com/ZpgpZw3F/jaron-lanier.jpg",
    desc: "Known as the pioneer of Virtual Reality. VR is a computer-controlled environment created through hardware and software, which, when presented, feels like a real environment to the users.",
  },

  // --- Category: Real-World Tech ---
  {
    id: 10,
    category: "Applications",
    title: "NASA's Curiosity Rover",
    subtitle: "Space Exploration",
    img: "https://i.ibb.co.com/pvc7WtcQ/NASA-Curiosity-Rover.jpg",
    desc: "An advanced robotic spacecraft launched by NASA to Mars in 2012. It is known as a 'complete chemical laboratory' and includes scientific instruments, cameras, and a robotic arm.",
  },
  {
    id: 11,
    category: "Applications",
    title: "Robot Sophia",
    subtitle: "Artificial Intelligence & Robotics",
    img: "https://i.ibb.co.com/rfzJGnhh/robot-sophia.png",
    desc: "A humanoid robot that conversed with the Prime Minister during a digital fair inauguration. It represents the integration of AI, facial recognition, and human-like interaction.",
  },
  {
    id: 12,
    category: "Applications",
    title: "Smart Home",
    subtitle: "Internet of Things (IoT)",
    img: "https://i.ibb.co.com/XGgxVYN/smart-home.webp",
    desc: "A residence where heating, cooling, lighting, security control systems, and other functions can be controlled remotely or through programmed devices via the internet.",
  },
  {
    id: 13,
    category: "Applications",
    title: "Virtual Reality (VR)",
    subtitle: "Immersive Simulation",
    img: "https://i.ibb.co.com/cKZ0C9ww/virtual-reality-2.webp",
    desc: "A technology that artificially creates an environment in front of the user, which looks and feels exactly like reality. It is possible to perform impossible tasks through the creation of three-dimensional images.",
  },

  // --- Category: Biometrics ---
  {
    id: 14,
    category: "Biometrics",
    title: "Types of Biometrics",
    subtitle: "Physiological vs Behavioral",
    img: "https://i.ibb.co.com/YBPdX01Z/types-of-biometrics.webp",
    desc: "A diagram showing how biometrics are categorized. Physiological includes fingerprint, hand geometry, iris, facial, and DNA. Behavioral includes voice, signature, and keystroke dynamics.",
  },
  {
    id: 15,
    category: "Biometrics",
    title: "Facial Recognition",
    subtitle: "Biometric Application",
    img: "https://i.ibb.co.com/PsG9VFJ1/facial-recognition.png",
    desc: "A biometric system that analyzes the geometric shape and structure of the human face to uniquely identify a person by measuring features like the distance between the eyes.",
  },
  {
    id: 16,
    category: "Biometrics",
    title: "Iris Scanning",
    subtitle: "Biometric Application",
    img: "https://i.ibb.co.com/zTw4xCZd/Iris-scanning.jpg",
    desc: "A highly precise and secure technology that captures images of the eye and analyzes the colored ring surrounding the pupil. It detects about 240 unique points in the iris.",
  },

  // --- Category: Genetics & Nano ---
  {
    id: 17,
    category: "Genetics",
    title: "Recombinant DNA Technology",
    subtitle: "Genetic Engineering",
    img: "https://i.ibb.co.com/39JttD2L/recombinant-DNA-technology.png",
    desc: "A process where DNA from different sources is combined. Restriction enzymes cut DNA segments, and ligase joins them into a plasmid, creating new genetic material.",
  },
  {
    id: 18,
    category: "Genetics",
    title: "DNA Structure",
    subtitle: "Nitrogenous Bases",
    img: "https://i.ibb.co.com/twj7TGd2/dna-structure.png",
    desc: "The structure of DNA is double-stranded (double helix) and spiral-shaped. It contains four nitrogenous bases: Adenine, Thymine, Guanine, and Cytosine.",
  },
  {
    id: 19,
    category: "Genetics",
    title: "Nanotechnology Device",
    subtitle: "Molecular Engineering",
    img: "https://i.ibb.co.com/Y4j77w5W/nanotechnology-devices.png",
    desc: "Illustration of nanoscale devices. Nanotechnology operates at the molecular and atomic level (1 to 100 nanometers), making materials extremely small and changing their properties.",
  },
];

const categories = ["Pioneers", "Applications", "Biometrics", "Genetics"];

export default function VisualLearningGallery() {
  const [activeTab, setActiveTab] = useState("Pioneers");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData = visualData.filter((item) => item.category === activeTab);

  return (
    <div className="w-full font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
            Interactive Visual Learning
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the pioneers, groundbreaking technologies, and complex
            diagrams of Chapter 1.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="tabs tabs-boxed bg-white shadow-sm p-1 border border-gray-200 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`tab tab-lg font-semibold transition-all ${activeTab === cat ? "tab-active bg-primary text-white shadow" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="card bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(item)}
            >
              <figure className="h-48 bg-gray-100 overflow-hidden relative">
                {/* Fallback styling if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  [Image Placeholder]
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                  onError={(e) => {
                    e.target.style.opacity = 0;
                  }}
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-20">
                  Click to Expand
                </div>
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm font-medium text-gray-500">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for Full Image View */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {selectedImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body (Image & Details) */}
              <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
                <div className="md:w-3/5 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/5 p-6 flex flex-col justify-center bg-white">
                  <h4 className="font-bold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedImage.desc}
                  </p>
                  <div className="divider my-4"></div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Takeaway</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Understand the core concept visually.</li>
                    <li>Identify the inventor or specific technology.</li>
                    <li>Relate this visual to the MCQ practice section.</li>
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="btn btn-primary btn-sm"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
