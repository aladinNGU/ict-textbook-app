import React, { useState } from "react";

export const comprehensionData = [
  {
    id: 1,
    q: "Explain how information and communication technology (ICT) has brought the world into our hands.",
    a: "ICT has brought the world into our hands through the internet and smart devices. We can instantly communicate with anyone globally, access vast amounts of information, conduct business (e-commerce), and receive services like telemedicine or online education from anywhere, effectively turning the world into a 'Global Village'.",
  },
  {
    id: 2,
    q: "Describe how information technology and communication technology complement each other.",
    a: "Information Technology (IT) focuses on collecting, storing, and processing data using computers and software. Communication Technology focuses on transmitting this data over distances using networks, satellites, and mobile devices. Together, they form ICT; IT processes the information, and CT delivers it.",
  },
  {
    id: 3,
    q: '"The use of information technology has made human life more comfortable and easier" — explain. [Jessore Board 2025]',
    a: "Information technology automates daily tasks. We can shop online from home, pay bills digitally, access remote healthcare through telemedicine, and control smart homes via mobile apps. This saves significant time, physical effort, and costs, making life much more comfortable.",
  },
  {
    id: 4,
    q: '"Buyers and sellers no longer need to go elsewhere to sell or purchase their products" — explain. [Jessore Board 2025]',
    a: "This refers to E-commerce. Platforms like Amazon, Daraz, and eBay allow sellers to list products online and buyers to purchase them from anywhere. It eliminates the need for physical shops and travel, enabling rapid global transactions.",
  },
  {
    id: 5,
    q: 'Explain the statement: "An information technology-dependent world is a global village."',
    a: "A global village implies a world where people are closely connected despite geographical distances. Information technology (the internet, social media, video conferencing) removes these barriers, allowing instant communication and information sharing, making the vast world feel like a small, interconnected village.",
  },
  {
    id: 6,
    q: '"The global village is essentially the Internet system" — explain.',
    a: "The internet is the backbone of the global village. It connects millions of computers worldwide, enabling the instant exchange of data, emails, video calls, and social media interactions. Without the internet, the seamless global connectivity that defines the global village would not exist.",
  },
  {
    id: 7,
    q: "Explain: \"Connectivity is the driving force of the global village.\" [Dhaka '24, Dinajpur '24]",
    a: "Connectivity (via internet, Wi-Fi, satellites, and telecommunications) is what allows devices and people to communicate across borders. Without reliable connectivity, information cannot flow, and the concept of a closely-knit global village would collapse.",
  },
  {
    id: 8,
    q: '"The influence of the global village is making the world smaller" — explain.',
    a: "Because of the global village, physical distance is no longer a barrier. We can see live events happening on the other side of the world, speak to someone in another country instantly, and experience different cultures. This instant access shrinks our perception of the world's size.",
  },
  {
    id: 9,
    q: 'Explain the statement: "Telemedicine is a form of service."',
    a: "Telemedicine is a healthcare service where doctors and patients communicate remotely using video conferencing or digital media. It allows for consultation, diagnosis, and treatment advice without the patient needing to physically visit a hospital.",
  },
  {
    id: 10,
    q: '"It is possible to receive medical treatment while sitting at home" — explain.',
    a: "Through telemedicine and Electronic Health Records (EHR), patients can consult with specialist doctors from their homes via video calls. This is especially beneficial for people in remote areas or those unable to travel, providing them with accessible healthcare.",
  },
  {
    id: 11,
    q: "Describe the role of online libraries in the field of education.",
    a: "Online libraries provide 24/7 access to a vast collection of e-books, e-journals, and research papers. They allow students and researchers to access global knowledge instantly from anywhere, breaking the limitations of physical libraries.",
  },
  {
    id: 12,
    q: "Explain the contribution of information technology in distance education.",
    a: "IT enables distance education through online classes (Zoom, Google Meet), digital whiteboards, and educational websites (like Khan Academy). Students can attend lectures, submit assignments, and take exams remotely, ensuring education continues despite geographical or pandemic-related barriers.",
  },
  {
    id: 13,
    q: '"ICT education creates easy income opportunities for skilled human resources" — explain.',
    a: "Skills in ICT, such as programming, graphic design, and digital marketing, allow individuals to work as freelancers or outsource their services globally. They can earn foreign currency from home using platforms like Upwork or Fiverr.",
  },
  {
    id: 14,
    q: '"E-commerce has simplified trade and business" — explain.',
    a: "E-commerce allows businesses to operate online without physical storefronts, reducing overhead costs. It simplifies buying and selling by allowing customers to browse, order, and pay digitally, with products delivered directly to their doorsteps.",
  },
  {
    id: 15,
    q: '"Nowadays, shopping from home is more convenient" — explain.',
    a: "Online shopping (E-commerce and M-commerce) allows consumers to browse a wide variety of products, compare prices, read reviews, and pay securely from their smartphones or computers. There is no need to travel to crowded markets, saving time and effort.",
  },
  {
    id: 16,
    q: '"Anyone can join the news from anywhere" — explain.',
    a: "With online news portals, blogs, and social media platforms (Facebook, Twitter), ordinary citizens can report events, share information, and express opinions globally. This democratizes news creation, allowing anyone to be a reporter.",
  },
  {
    id: 17,
    q: "What is meant by social media?",
    a: "Social media refers to online platforms (like Facebook, Instagram, Twitter) where users can create profiles, interact with others, share content (photos, videos, text), and build social networks.",
  },
  {
    id: 18,
    q: "Explain the strategy of playing games with foreign friends.",
    a: "Online multiplayer games use the internet to connect players globally in real-time. Using networks and servers, friends from different countries can play together, communicate via voice chat, and share a virtual gaming environment.",
  },
  {
    id: 19,
    q: "Explain: \"Learning motor driving is possible using technology.\" [Rajshahi '25; Dhaka '19]",
    a: "Virtual Reality (VR) and computer simulators allow learners to practice driving in a highly realistic, virtual environment. This technology mimics real-world road conditions safely, eliminating the risk of accidents during training.",
  },
  {
    id: 20,
    q: '"It is possible to touch imagination while staying in the real world" — explain.',
    a: "This refers to Augmented Reality (AR). AR technology overlays computer-generated images, sounds, or data onto the real world (viewed through a smartphone or AR glasses), blending our imagination with physical reality.",
  },
  {
    id: 21,
    q: '"Nowadays, machines are also performing surgeries alongside doctors" — explain. [Barisal Board 2024]',
    a: "Robotic surgery systems allow doctors to perform complex, minimally invasive operations using computer-controlled robotic arms. The robots provide high precision, stability, and flexibility, assisting surgeons during medical procedures.",
  },
  {
    id: 22,
    q: '"Simulation can create a battlefield environment to train soldiers" — explain. [Mymensingh Board 2025]',
    a: "Virtual Reality (VR) and simulation technologies can create highly realistic, safe combat scenarios. Soldiers can practice tactics, use virtual weapons, and experience battlefield conditions without the risk of real-world injury.",
  },
  {
    id: 23,
    q: "Explain the impact of virtual reality on daily life.",
    a: "VR impacts daily life positively by enhancing education (3D learning), healthcare (surgery training), and entertainment (immersive games). However, it can have negative effects like high costs, physical health issues (eye strain), and social isolation if overused.",
  },
  {
    id: 24,
    q: '"Machines can work automatically" — explain.',
    a: "Through Artificial Intelligence (AI) and robotics, machines can be programmed to perform tasks, analyze environments via sensors, and make decisions without constant human intervention. Examples include automated production lines and smart home devices.",
  },
  {
    id: 25,
    q: 'Explain the statement: "Artificial Intelligence is a type of expert system." [Board 2018]',
    a: "An Expert System is a computer program designed to mimic the decision-making ability of a human expert, using a knowledge base and inference engine. Since AI aims to simulate human intelligence, expert systems are considered a prominent subfield of AI.",
  },
  {
    id: 26,
    q: "Explain the concept of Artificial Intelligence.",
    a: "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It involves programming computers to think, learn from data, recognize patterns, solve problems, and make decisions similarly to how humans do.",
  },
  {
    id: 27,
    q: "How is Artificial Intelligence related to medical services? — explain.",
    a: "AI is used in healthcare for early and precise disease diagnosis, analyzing medical images (like X-rays), managing Electronic Health Records (EHR), and powering expert systems that assist doctors in prescribing treatments.",
  },
  {
    id: 28,
    q: 'Explain: "Machines based on computer programs."',
    a: "Computers and automated machines operate based on sets of instructions called programs (software). These programs tell the hardware exactly what tasks to perform, how to process data, and how to respond to user inputs.",
  },
  {
    id: 29,
    q: "Explain the role of Artificial Intelligence in robotics.",
    a: "AI gives robots 'brains.' While traditional robots only follow pre-programmed instructions, AI-enabled robots can process sensory data, learn from their environment, navigate autonomously, and make intelligent decisions to complete complex tasks.",
  },
  {
    id: 30,
    q: '"Risky tasks can be done by machines" — explain. [Cumilla, Jessore Board 2023]',
    a: "Robots are used to perform dangerous, hazardous, or physically demanding tasks that would risk human life. Examples include bomb disposal, exploring deep oceans, working in radioactive zones, and mining.",
  },
  {
    id: 31,
    q: "Explain the method of identifying a person through behavior. [Sylhet '19]",
    a: "This is known as Behavioral Biometrics. It identifies individuals based on their unique behavioral patterns, such as handwriting/signature verification, voice recognition (tone, pitch), and keystroke dynamics (typing rhythm).",
  },
  {
    id: 32,
    q: "Explain the technology of personal identification. [Barisal '17; Cumilla '16]",
    a: "Biometrics is the technology used for personal identification. It analyzes unique physical or behavioral traits—such as fingerprints, iris scans, facial features, and DNA—to accurately identify and authenticate an individual.",
  },
  {
    id: 33,
    q: '"Hand geometry can be used to uniquely identify people" — explain.',
    a: "Hand geometry recognition scanners measure the physical dimensions of a person's hand, including the length and width of fingers and joints. These measurements are unique to each individual and can be used for secure identification.",
  },
  {
    id: 34,
    q: "What is the data used in bioinformatics? — explain. [Dhaka '23; Jessore '19]",
    a: "Bioinformatics uses biological data, primarily DNA sequences, RNA, proteins, and genetic information. This raw biological data is collected, stored, and analyzed using computer algorithms and databases to understand complex biological systems.",
  },
  {
    id: 35,
    q: "Explain the technology of molecular-level research. [Dhaka Board 2017]",
    a: "Nanotechnology is the technology of manipulating matter at the atomic and molecular level (1 to 100 nanometers). It allows researchers to design new materials and devices with unique properties at a microscopic scale.",
  },
  {
    id: 36,
    q: "Explain the technology of building large structures from tiny objects. [Barisal Board 2025]",
    a: "This describes the 'Bottom-Up' approach in Nanotechnology. It involves assembling atoms and molecules one by one or in groups to build larger, highly precise structures and materials from the ground up.",
  },
  {
    id: 37,
    q: "Explain the technology that works using the top-down approach. [Mymensingh Board 2024]",
    a: "In Nanotechnology, the 'Top-Down' approach involves taking larger materials and cutting, milling, or reducing them down to a nanoscale size (e.g., using lithography) to create tiny structures like computer chips.",
  },
  {
    id: 38,
    q: "Explain the technology used to preserve food quality. [Sylhet Board 2024]",
    a: "Nanotechnology is used in food packaging. Nanoparticles are added to plastic packaging to block oxygen and moisture, or to act as antimicrobial agents, which helps preserve food quality and extend its shelf life.",
  },
  {
    id: 39,
    q: "Through which technology has the genetic mystery of jute been revealed? — explain. [Jessore Board 2017]",
    a: "Through Genetic Engineering and Bioinformatics (specifically genome sequencing). In Bangladesh, Dr. Maksudul Alam and his team successfully invented the jute genome sequence, unlocking the genetic mysteries of the crop.",
  },
  {
    id: 40,
    q: '"With the help of technology, the genomes of multiple organisms can be combined to create a new cell" — explain. [Chattigong Board 2025]',
    a: "This refers to Recombinant DNA Technology (Genetic Engineering). Scientists isolate a desired gene from one organism and insert it into the DNA of another organism, creating a genetically modified organism (GMO) with new traits.",
  },
  {
    id: 41,
    q: '"Recent ICT trends are benefiting diabetes patients" — explain.',
    a: "Genetic engineering allows the commercial production of human insulin using genetically modified bacteria and yeast. This provides a safe, reliable, and widely available treatment for diabetes patients.",
  },
  {
    id: 42,
    q: "How is genetic engineering helping humans? — explain.",
    a: "Genetic engineering helps by producing life-saving medicines like insulin, creating high-yield and disease-resistant crops to solve food shortages, and enabling gene therapy to treat genetic disorders.",
  },
  {
    id: 43,
    q: "Explain the modern technology used in producing high-quality seeds.",
    a: "Modern seed production uses Genetic Engineering and hybridization. Scientists alter the DNA of seeds to introduce desirable traits like drought resistance, pest resistance, and higher nutritional value.",
  },
  {
    id: 44,
    q: '"Despite technological advancement, it has not been possible to prevent criminal behavior" — explain.',
    a: "Technology has also given rise to new forms of crime (Cybercrime). Hackers, phishers, and scammers use advanced tools to steal data, commit fraud, and spread misinformation. The anonymity of the internet makes catching these criminals challenging.",
  },
  {
    id: 45,
    q: "Explain the ethics of using information and communication technology. [Jessore Board 2017]",
    a: "ICT ethics are moral principles guiding technology use. This includes the 'Ten Commandments of Computer Ethics'—such as not using computers to harm others, not snooping, not stealing, respecting intellectual property (avoiding plagiarism), and protecting privacy.",
  },
  {
    id: 46,
    q: '"Hacking is an unethical activity" — explain. [Barisal Board 2016]',
    a: "Hacking involves unauthorized access to computer systems or networks. Black hat hackers do this to steal sensitive data, cause financial damage, or disrupt services, which violates privacy and security laws, making it highly unethical.",
  },
  {
    id: 47,
    q: '"Defense and ICT are complementary to each other" — explain. [Sylhet Board 2025]',
    a: "Modern defense relies heavily on ICT for communication, surveillance, and precision weaponry. UAVs (drones), GPS, radar, and encrypted networks are all ICT-driven. The advancement of ICT directly enhances military strategy and national security.",
  },
  {
    id: 48,
    q: '"ICT-based production systems are essential for building developed nations" — explain. [Rajshahi Board 2023]',
    a: "Developed nations rely on automation, CAD/CAM, and CNC machines to maximize production efficiency and quality. ICT streamlines supply chains, reduces human error, and increases industrial output, which is vital for economic growth and development.",
  },
];

export default function ComprehensionQuestions() {
  const [openItem, setOpenItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = comprehensionData.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full font-sans py-4">
      <div className="mb-8">
        {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-primary mb-2">
              Comprehension Questions
            </h1>
            <p className="text-gray-600">
              Chapter 1: Information and Communication Technology
            </p>
          </div>
          <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-primary bg-primary/10 whitespace-nowrap">
            Total: {comprehensionData.length} Questions
          </span>
        </div> */}

        {/* Search Bar */}
        <div className="relative">
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
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary sm:text-md shadow-sm transition-all"
            placeholder="Search questions or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
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
                  className="w-full flex items-start justify-between p-5 text-left focus:outline-none gap-4"
                >
                  <div className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm mr-4 mt-0.5">
                      {item.id}
                    </span>
                    <span
                      className={`font-semibold text-md sm:text-lg leading-snug ${isOpen ? "text-primary" : "text-gray-800"}`}
                    >
                      {item.q}
                    </span>
                  </div>
                  <span className="flex-shrink-0 mt-1">
                    <svg
                      className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
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
                  <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50 ml-12">
                    <p className="mt-4 text-base">{item.a}</p>
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

      <div className="mt-8 text-center text-sm font-medium text-gray-500">
        Showing {filteredData.length} of {comprehensionData.length} questions
      </div>
    </div>
  );
}
