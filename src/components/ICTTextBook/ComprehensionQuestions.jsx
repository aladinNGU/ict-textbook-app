import React, { useState, useEffect, useRef } from "react";

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
  {
    id: 49,
    q: 'Differentiate between "Data" and "Information" with an example from the text.',
    a: "Data is the raw material of information used as input, like random letters or numbers (e.g., a student's subject-wise marks). Information is processed, meaningful data obtained as output that gives a clear understanding (e.g., the student's name, roll number, all subject marks, and total marks combined).",
  },
  {
    id: 50,
    q: 'Explain the etymology (origin) of the word "Technology".',
    a: "The word 'Technology' comes from two Greek words: 'Techne' (meaning art, craft, or skill of the hand) and 'Logos' (meaning study or science). Together, it literally means the study or application of skills or tools.",
  },
  {
    id: 51,
    q: "Explain the significance of the Right to Information Act 2009 in Bangladesh.",
    a: "Enacted in 2009, this act legally recognizes the free flow of information in Bangladesh. It helps people access information easily, with the goal of building a scientific and information-based modern society.",
  },
  {
    id: 52,
    q: 'What is the "digital divide" in the context of the Global Village?',
    a: "The digital divide is the gap between people who have access to modern ICT tools and those who do not. Developed countries often enjoy advanced technologies, while developing countries lack access or use outdated systems, creating a wide global gap.",
  },
  {
    id: 53,
    q: "Describe the evolution of the internet from ARPANET.",
    a: "ARPANET was created in 1969 by the U.S. Department of Defense for internal communication. In 1982, the invention of the TCP/IP protocol made it possible to connect different computers to a common network, establishing the foundation of the modern internet.",
  },
  {
    id: 54,
    q: "What is a notable example of a digital telephone network, and what is its main advantage?",
    a: "ISDN (Integrated Services Digital Network) is a notable example. Its main advantage is that both voice calls and data can be transmitted over the same line, providing advanced security and enabling lower-cost international communication.",
  },
  {
    id: 55,
    q: "Explain the concept of M2M (Machine to Machine) communication.",
    a: "M2M is the forerunner of IoT, where one machine automatically controls another through wired or wireless means. This allowed the collection, processing, and exchange of data without human involvement.",
  },
  {
    id: 56,
    q: "Differentiate between Phishing and Vishing.",
    a: "Phishing involves creating a fake website that mimics a legitimate one to trick users into revealing personal or banking information. Vishing (voice phishing) uses phone calls to deceive people—often claiming they have won a lottery—to steal bank information.",
  },
  {
    id: 57,
    q: "What is a 'Hidden Layer' in a Neural Network?",
    a: "The hidden layer lies between the input and output units in a neural network. Composed of artificial neurons, it is trained to process data, recognize patterns, and produce a likely correct output when a new input is given.",
  },
  {
    id: 58,
    q: "What is the difference between GPS and GIS?",
    a: "GPS (Global Positioning System) is a satellite-based system used to determine the exact location of an object on Earth. GIS (Geographic Information System) is a computer-based system that analyzes geographic data for planning, development, and management (like urban planning or land surveys).",
  },
  {
    id: 59,
    q: "Explain the four steps of a biometric system.",
    a: "1) Capture: Collecting a unique physiological or behavioral sample. 2) Extraction: Analyzing the sample and creating a template stored in a database. 3) Comparison: Comparing a new sample's template with stored templates. 4) Matching: Verifying if the new data matches existing records.",
  },
  {
    id: 60,
    q: 'What is "Recycle Plagiarism"?',
    a: "Recycle plagiarism (also known as self-plagiarism) refers to reusing or borrowing content from one's own previous work or document without proper citation.",
  },
  {
    id: 61,
    q: "What is the significance of the Scanning Tunneling Microscope (STM) in Nanotechnology?",
    a: "Invented in 1980, the STM allowed scientists to observe atoms directly for the first time. This invention made nanotechnology a reality by enabling the study and manipulation of matter at the atomic level.",
  },
  {
    id: 62,
    q: "Differentiate between White Hat and Black Hat hackers.",
    a: "White Hat hackers work to identify security issues for protection and do not cause harm. Black Hat hackers illegally break into systems to steal data, cause financial harm, or damage systems.",
  },
  {
    id: 63,
    q: "What is M-Commerce? Provide examples.",
    a: "M-Commerce (Mobile Commerce) is the convenience of shopping or conducting financial transactions from anywhere using a mobile phone. Examples include mobile banking, buying tickets via mobile, or sending money digitally.",
  },
  {
    id: 64,
    q: 'Explain the concept of "Big Data" and its main characteristics.',
    a: "Big Data refers to a massive collection of rapidly generated, diverse, and complex data that cannot be easily analyzed using traditional software. Its main characteristics are generally known as the 5Vs.",
  },
  {
    id: 65,
    q: "What is the significance of the Curiosity Rover?",
    a: "Launched by NASA in 2012, Curiosity is an advanced robotic vehicle on Mars. It is known as a 'complete chemical laboratory' and includes scientific instruments, powerful cameras, a weather station, and a laser system to break rocks.",
  },
  {
    id: 66,
    q: "Explain how RFID is used in animal tracking.",
    a: "A capsule-shaped RFID tag (containing a chip, coil, and antenna) is inserted into the animal's body using a syringe. This tag allows for the determination of the animal's location and identification without human involvement.",
  },
  {
    id: 67,
    q: "Briefly explain the Digital Security Act 2018 regarding unauthorized access.",
    a: "The act prohibits unauthorized access to electronic devices or systems to collect data or copy content. It also makes it illegal to illegally access critical information infrastructure to damage, destroy, or alter computer systems or networks.",
  },
  {
    id: 68,
    q: "Explain the concept of 'Telepresence' in Virtual Reality.",
    a: "Telepresence is the feeling of presence from a distance. Using advanced computer graphics, users can experience remote environments virtually, such as pilots training in virtual planes or new drivers gaining experience as if they are on real roads.",
  },
  {
    id: 69,
    q: "What is the role of 'Effectors' in Virtual Reality?",
    a: "Effectors are special interface devices used in virtual reality that connect the user to the virtual environment. Examples include head-mounted displays (HMD), data gloves, and full-body suits.",
  },
  {
    id: 70,
    q: "What is a 'Dry Lab' in the context of biological research?",
    a: "A dry lab refers to biological research conducted entirely within a computer using data and algorithms. Unlike a wet lab, it does not require physical chemical reagents, allowing scientists to perform analyses, 3D modeling, and simulations to narrow down candidates before physical testing.",
  },
];

export default function ComprehensionQuestions() {
  const [openItem, setOpenItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPageInput, setJumpPageInput] = useState("");
  const itemsPerPage = 10;

  // Ref for scrolling to top of list
  const listTopRef = useRef(null);

  // Reset to page 1 whenever search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Updated Search Logic (Strict ID Search for Numbers)
  const filteredData = comprehensionData.filter((item) => {
    const searchLower = searchTerm.toLowerCase().trim();

    // If search is empty, show all
    if (searchLower === "") return true;

    // Check if the search term is purely a number (e.g., "9", "15")
    const isStrictNumber = /^\d+$/.test(searchLower);

    if (isStrictNumber) {
      // If it's a pure number, strictly match ONLY the exact ID.
      return item.id.toString() === searchLower;
    }

    // Otherwise, perform standard text search on question and answer
    const matchesQuestion = item.q.toLowerCase().includes(searchLower);
    const matchesAnswer = item.a.toLowerCase().includes(searchLower);

    return matchesQuestion || matchesAnswer;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Handle page change with smooth scroll
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle Jump to specific page
  const handleJumpToPage = (e) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      handlePageChange(pageNum);
      setJumpPageInput("");
    } else {
      alert(`Please enter a valid page number between 1 and ${totalPages}`);
    }
  };

  // Handle Jump to a random page
  const handleRandomPage = () => {
    if (totalPages > 1) {
      const randomPage = Math.floor(Math.random() * totalPages) + 1;
      handlePageChange(randomPage);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pageNumbers.push(i);
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++)
          pageNumbers.push(i);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="w-full font-sans flex flex-col min-h-screen">
      {/* Search Bar Area */}
      <div className="mb-8 sticky top-0 z-10 bg-gray-50/90 backdrop-blur-md pt-4 pb-4 px-2 -mx-2 border-b border-gray-200">
        <div className="relative max-w-4xl mx-auto">
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
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-md shadow-sm transition-all"
            placeholder="Search by strict ID (e.g., 9) or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* List Header Info */}
      <div
        ref={listTopRef}
        className="mb-4 text-sm font-medium text-gray-500 flex justify-between items-center px-2"
      >
        <span>
          Showing{" "}
          <span className="text-gray-900 font-bold">
            {filteredData.length > 0 ? indexOfFirstItem + 1 : 0}
          </span>{" "}
          to{" "}
          <span className="text-gray-900 font-bold">
            {Math.min(indexOfLastItem, filteredData.length)}
          </span>{" "}
          of{" "}
          <span className="text-gray-900 font-bold">{filteredData.length}</span>{" "}
          questions
        </span>
        <span className="hidden sm:inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
          Page {currentPage} of {totalPages || 1}
        </span>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 flex-grow max-w-4xl mx-auto w-full">
        {currentItems.length > 0 ? (
          currentItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                  isOpen
                    ? "border-primary ring-1 ring-primary/20"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-start justify-between p-5 text-left focus:outline-none gap-4 group"
                >
                  <div className="flex items-start">
                    <span
                      className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm mr-4 mt-0.5 transition-colors ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`font-semibold text-md sm:text-lg leading-snug pr-4 ${
                        isOpen ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>
                  <span className="flex-shrink-0 mt-1">
                    <svg
                      className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-primary"
                          : "group-hover:text-gray-600"
                      }`}
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50 ml-4 sm:ml-12">
                    <p className="mt-4 text-base">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
            <svg
              className="mx-auto h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search terms or ID.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Professional Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-10 mb-8 max-w-4xl mx-auto w-full">
          <div className="bg-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-xl shadow-sm gap-4">
            {/* Left: Jump to Page & Random Page */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <form
                onSubmit={handleJumpToPage}
                className="flex items-center gap-2"
              >
                <label
                  htmlFor="jump-page"
                  className="text-sm text-gray-600 font-medium hidden sm:inline-block"
                >
                  Jump to:
                </label>
                <input
                  type="number"
                  id="jump-page"
                  min="1"
                  max={totalPages}
                  value={jumpPageInput}
                  onChange={(e) => setJumpPageInput(e.target.value)}
                  placeholder={`${currentPage}`}
                  className="w-16 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-center py-1.5 border"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Go
                </button>
              </form>

              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>

              <button
                onClick={handleRandomPage}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-bold hover:bg-primary/20 transition-colors"
                title="Go to a random page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Random
              </button>
            </div>

            {/* Right: Standard Pagination Controls */}
            <div className="flex items-center justify-center gap-1 w-full sm:w-auto">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="hidden sm:flex space-x-1">
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof page === "number" && handlePageChange(page)
                    }
                    disabled={page === "..."}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md transition-colors ${
                      currentPage === page
                        ? "z-10 bg-primary border-primary text-white"
                        : page === "..."
                          ? "bg-white border-transparent text-gray-700 cursor-default"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Mobile view of current page */}
              <span className="sm:hidden text-sm text-gray-700 font-medium px-2">
                Page {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
