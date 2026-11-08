import React, { useState, useEffect, useRef } from "react";

export const creativeQuestionsData = [
  {
    id: 1,
    title: "Q1. Mr. Rafik's High-Yield Rice & Automatic Door",
    passage:
      "Mr. Rafik is a renowned researcher... discovered a high-yield variety of rice with a purple color... Shafik tried to enter his lab by placing his hand near the door, but instead of opening, the door triggered an alarm. However, when Mr. Rafik stood in front of the door, it opened automatically.",
    questions: [
      {
        q: "a. What is e-learning?",
        a: "E-learning means receiving education through electronic means, utilizing computers, mobile devices, and the internet to access educational materials and classes remotely.",
      },
      {
        q: 'b. "Using technology, it is possible to treat diseased cells directly" — explain.',
        a: "This refers to Nanotechnology. Through molecular-level devices and nanoparticles, scientists can directly target and deliver drugs to diseased cells without affecting healthy ones, enabling highly precise treatments like cancer therapy.",
      },
      {
        q: "c. Why did the door open when Mr. Rafik stood in front of it, but not when Shafik placed his hand near it? Explain.",
        a: "The door uses Biometrics (specifically Facial or Iris recognition). The system was pre-programmed with Mr. Rafik's biometric data (authorized personnel). When he stood in front, the sensor matched his face/eyes and opened the door. Shafik was unauthorized, so his data didn't match, triggering the alarm.",
      },
      {
        q: "d. Describe the working method of the technology used in discovering the high-yield rice variety, and mention its contributions to the agricultural sector.",
        a: "The technology is Genetic Engineering. It involves isolating a specific gene (for high yield and purple color) and inserting it into the DNA of a rice plant to create a Genetically Modified Organism (GMO). Contributions: It creates pest/disease-resistant crops, increases crop yield to meet food demands, and improves nutritional value.",
      },
    ],
  },
  {
    id: 2,
    title: "Q2. Garment Factory Automation",
    passage:
      "A garment manufacturing company... set up a world-class factory aligned with the Fourth Industrial Revolution. In this factory, most of the clothing production work will be carried out using actuators and computers without human assistance. To set up the factory, engineers created a simulated artificial environment and developed a three-dimensional model of the factory.",
    questions: [
      {
        q: "a. What is e-learning?",
        a: "E-learning is a method of receiving education through electronic means using devices like computers and mobiles via the Internet.",
      },
      {
        q: 'b. Explain the statement: "Connectivity is the driving force of the global village."',
        a: "Connectivity (via the internet, Wi-Fi, and telecommunications) is what allows computers, mobile devices, and people to communicate across borders instantly. Without this seamless connectivity, the exchange of information, commerce, and culture that defines the global village would be impossible.",
      },
      {
        q: "c. Explain the technology used by the engineers in designing the model.",
        a: "Engineers used Virtual Reality (VR) and CAD (Computer-Aided Design) software. VR creates simulated, three-dimensional environments that mimic reality, allowing engineers to design, test, and visualize the factory layout and machinery before actual construction.",
      },
      {
        q: "d. What impact will the mentioned technology in the garment industry have on the labor market?",
        a: "The technology (Robotics/Automation) will reduce the demand for human labor, particularly for manual and repetitive tasks. While it increases production efficiency and reduces errors, it creates a risk of unemployment and job displacement for unskilled workers.",
      },
    ],
  },
  {
    id: 3,
    title: "Q3. Arif's Nano-scale Research",
    passage:
      "Arif conducts research on nano-scale product manufacturing. Although the products they produce are very fine and small, they are strong and durable. For attendance, he has to give a fingerprint on a device at the office, and to enter the lab, he has to look at a monitor.",
    questions: [
      {
        q: "a. What is telepresence?",
        a: "Telepresence is a technology that gives the feeling of being present at a distant place virtually, often using advanced computer graphics, VR, and sensors, allowing users to interact with remote environments as if they were there.",
      },
      {
        q: 'b. Explain: "It is possible to learn motor driving using technology."',
        a: "This is achieved through Virtual Reality (VR) and driving simulators. They create a highly realistic, risk-free virtual environment that mimics real road conditions, allowing trainees to practice driving safely without the risk of accidents.",
      },
      {
        q: "c. Describe the areas of application of the technology used in product manufacturing mentioned in the passage.",
        a: "The technology is Nanotechnology. Applications include: Healthcare (targeted drug delivery, cancer treatment), Electronics (smaller, faster computer chips), Energy (low-cost batteries, solar cells), and Food packaging/preservation.",
      },
      {
        q: "d. Between the two technologies used for entering the office and the lab mentioned in the passage, which one is better? Give your opinion with analysis.",
        a: "The lab technology (Facial/Iris Recognition) is better. Fingerprint scanning requires physical contact, which can be slow, unhygienic, or fail if the finger is dirty/sweaty. Facial recognition is contactless, faster, and more convenient, although it may struggle in poor lighting.",
      },
    ],
  },
  {
    id: 4,
    title: "Q4. DNA Testing and Army Simulation",
    passage:
      "Scenario 1: A family intending to go abroad undergoes DNA testing to determine the identities of its members. Scenario 2: Currently, the Bangladesh Army is being trained in an advanced manner by creating artificial environments through simulation technology.",
    questions: [
      {
        q: "a. What is e-commerce?",
        a: "E-commerce (Electronic Commerce) is a system of buying and selling goods or services, and conducting financial transactions, electronically through the internet or digital networks.",
      },
      {
        q: 'b. Explain: "Bloodless surgery is possible."',
        a: "This refers to minimally invasive Robotic Surgery or Nanotechnology-driven procedures. Using precise robotic arms and tiny instruments, surgeons can perform complex operations through very small incisions, drastically reducing blood loss compared to traditional open surgery.",
      },
      {
        q: "c. Explain the technology used to identify the family members in Scenario 1.",
        a: "DNA Profiling is used. It analyzes the unique genetic code (DNA) found in a person's cells (blood, hair, etc.). Since children inherit DNA from their parents, comparing these profiles can accurately determine biological relationships and identities.",
      },
      {
        q: 'd. Analyze the statement: "The technology used for training the army in Scenario 2 is widely used in education, research, and healthcare."',
        a: "The technology is Virtual Reality (VR) / Simulation. In education, it creates 3D interactive models (e.g., exploring the human body). In research, it simulates complex scientific experiments. In healthcare, it is used to train surgeons and practice complex operations safely without risking real patients.",
      },
    ],
  },
  {
    id: 5,
    title: "Q5. Mr. Shishir's Driving Simulator",
    passage:
      "Mr. Shishir is a driving instructor. Before providing real-world training, he gives lessons in a specially equipped room. To enter that room, he places his hand on a device, and the door opens. A trainee mentioned that his father uses facial recognition to enter a research lab.",
    questions: [
      {
        q: "a. What is a global village?",
        a: "A global village is a technology-driven concept where people around the world are interconnected and can communicate instantly despite geographical distances, just like villagers in a small community.",
      },
      {
        q: 'b. Explain: "The use of information technology has made human life much more comfortable and convenient."',
        a: "IT automates daily tasks (online banking, e-commerce), enables instant global communication, and provides remote services (telemedicine, online education). This saves time, reduces physical effort, and makes accessing information and services much easier.",
      },
      {
        q: "c. Explain the special training method mentioned in the passage used by Mr. Shishir.",
        a: "He uses a Virtual Reality (VR) driving simulator. The specially equipped room uses 3D screens and simulated controls to recreate realistic road environments, allowing trainees to practice safely and experience various driving conditions without real-world risks.",
      },
      {
        q: "d. Between the two biometric methods mentioned in the passage, which one is more convenient? Explain.",
        a: "Facial recognition (used by the father) is more convenient. It is a contactless method, meaning the user doesn't have to physically touch a device. It is faster, more hygienic, and seamless, whereas fingerprint scanning requires physical contact.",
      },
    ],
  },
  {
    id: 6,
    title: "Q6. Climate-Resistant Crops and AI Machines",
    passage:
      "Due to the application of technology in plants, it has now become possible to produce high-yield and climate-resistant crops. On the other hand, in the industrial sector, tasks that require intense labor are now easily accomplished using artificially intelligent machines.",
    questions: [
      {
        q: "a. What is a smart home?",
        a: "A smart home is a modern residence where appliances, heating, lighting, security cameras, and other systems are connected to the internet (IoT) and can be controlled remotely via smartphones or automated through programmed devices.",
      },
      {
        q: 'b. Explain the statement: "Buyers and sellers do not need to go elsewhere to sell or purchase their products."',
        a: "This highlights the impact of E-commerce. Online platforms allow sellers to list their products globally and buyers to browse and purchase them from the comfort of their homes. Physical travel to markets or shops is completely eliminated.",
      },
      {
        q: "c. Explain the technology mentioned in the passage that is used in crop production.",
        a: "The passage mentions Genetic Engineering. This technology involves modifying the DNA of plants to introduce desirable traits like high yield, drought resistance, and pest resistance, creating Genetically Modified Organisms (GMOs).",
      },
      {
        q: "d. Apart from the fields mentioned in the passage, where else and how can this type of machine be used? Discuss.",
        a: "AI machines and robotics can be used in: 1) Healthcare (performing precise robotic surgeries), 2) Space Exploration (unmanned drones and rovers on Mars), 3) Defense (bomb disposal, surveillance drones), and 4) Disaster management (search and rescue in hazardous zones).",
      },
    ],
  },
  {
    id: 7,
    title: "Q7. ICT Class and 3D Movie",
    passage:
      "In an ICT class, the teacher was explaining how modern essential devices such as televisions, mobile phones, and radios have become smaller in size but more powerful... At one point, he discussed a technology that creates a real-life-like experience, as experienced by a student while watching a 3D movie at the National Museum of Science and Technology.",
    questions: [
      {
        q: "a. What is biometrics?",
        a: "Biometrics is the science and technology of measuring and analyzing unique physical or behavioral characteristics of a person (such as fingerprints, iris patterns, facial structure, or voice) to identify and authenticate them.",
      },
      {
        q: 'b. Explain: "With the help of technology, it is possible to join the genomes of multiple organisms to create a new cell."',
        a: "This refers to Recombinant DNA Technology (Genetic Engineering). Scientists extract a specific gene from one organism and insert it into the DNA of another. This creates a new, genetically modified organism (GMO) with combined traits.",
      },
      {
        q: "c. Explain the role of the special technology mentioned in the passage in the fields of medicine and the food industry.",
        a: "The special technology is Nanotechnology. In medicine, it enables targeted drug delivery and early disease detection. In the food industry, nanoparticles are used in packaging to block oxygen and bacteria, keeping food fresh for longer periods.",
      },
      {
        q: "d. The movie-viewing technology mentioned in the passage can modernize education and research - analyze and express your opinion.",
        a: "The technology is Virtual Reality (VR). In education, VR allows students to explore 3D environments (like historical sites or the human brain), making abstract concepts tangible. In research, it allows scientists to visualize and manipulate complex data and molecular structures in real-time.",
      },
    ],
  },
  {
    id: 8,
    title: "Q8. Mr. Bashar's Hard Disk",
    passage:
      "Mr. Bashar bought a hard disk from a computer fair. The hard disk is very small in size but has a high storage capacity. He visited his friend Prince's office to show it. There, he saw that employees were opening the office door just by looking at a device.",
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the branch of science and engineering that involves manipulating and controlling matter at the atomic and molecular level (1 to 100 nanometers) to create new materials and devices with unique properties.",
      },
      {
        q: 'b. Explain: "Surgery is possible without excessive blood loss."',
        a: "This is achieved through Robotic Surgery or minimally invasive techniques. Instead of large incisions, surgeons use tiny instruments attached to robotic arms controlled by computers, resulting in much less bleeding, smaller scars, and faster recovery times.",
      },
      {
        q: "c. Explain the technology used to create the device mentioned in the passage.",
        a: "The device is created using Nanotechnology. By manipulating atoms and molecules, engineers can create incredibly dense storage media. This allows a physically small hard drive to hold terabytes of data.",
      },
      {
        q: "d. Analyze the technology used at the door in Prince's office.",
        a: "The technology is Biometrics, specifically Facial Recognition. A camera scans the employee's facial features and matches them against a secure database. If the data matches an authorized user, the door unlocks automatically.",
      },
    ],
  },
  {
    id: 9,
    title: "Q9. Research at 'K' College",
    passage:
      "Students at the ICT lab of 'K' College enter using fingerprint authentication. In that lab, they are conducting research on human-like machines controlled by special programs.",
    questions: [
      {
        q: "a. What is virtual reality?",
        a: "Virtual Reality (VR) is a computer-generated simulation of a three-dimensional environment that can be interacted with in a seemingly real or physical way using special electronic equipment, such as helmets and gloves.",
      },
      {
        q: "b. Explain the technology that builds large objects from ultra-small components.",
        a: "This is the 'Bottom-Up' approach of Nanotechnology. It involves assembling atoms and molecules one by one to create larger, highly precise structures and materials from the ground up.",
      },
      {
        q: "c. Describe the technology used for accessing the ICT lab in the passage.",
        a: "Fingerprint Recognition Biometrics. A sensor scans the unique ridges and patterns on a student's finger. The system compares this pattern with pre-stored templates in the database to grant or deny access.",
      },
      {
        q: "d. The special program used in the students' research will play a significant global role - analyze your opinion based on the passage.",
        a: "The students are researching Artificial Intelligence (AI) and Robotics. AI programs enable machines to learn, reason, and make decisions like humans. Globally, this will revolutionize industries, healthcare, and transportation by automating complex tasks and improving efficiency.",
      },
    ],
  },
  {
    id: 10,
    title: "Q10. Soldier Combat Training",
    passage:
      "Nowadays, soldiers can learn different combat techniques from home through a special technology that simulates a battlefield environment. To enter the training camp, one must provide a fingerprint to one device and look at another device.",
    questions: [
      {
        q: "a. What is bioinformatics?",
        a: "Bioinformatics is an interdisciplinary field that combines biology, computer science, and mathematics to collect, store, analyze, and interpret vast amounts of biological data (like DNA and protein sequences).",
      },
      {
        q: 'b. Explain: "Now machines are performing surgeries alongside doctors."',
        a: "This refers to Robotic Surgery. AI and computer-controlled robotic arms assist surgeons by providing high precision, stability, and flexibility during operations. They do not replace doctors but act as highly advanced tools.",
      },
      {
        q: "c. Describe the technology used in the training of soldiers as mentioned in the passage.",
        a: "The technology is Virtual Reality (VR) / Simulation. It creates an immersive, realistic 3D battlefield environment where soldiers can practice tactics, use virtual weapons, and experience combat scenarios safely without any physical risk.",
      },
      {
        q: "d. Provide a comparative analysis of the two technologies used for entering the training camp.",
        a: "The camp uses Fingerprint and Facial/Iris recognition. Fingerprint scanning is highly accurate, cheap, and widely used, but requires physical touch and can fail if the finger is dirty. Facial/Iris scanning is contactless, faster, and more hygienic, making it ideal for high-security, high-traffic areas.",
      },
    ],
  },
  {
    id: 11,
    title: "Q11. Dr. Pia's Genome Research",
    passage:
      "Dr. Pia is conducting genome sequencing research on the HMPV virus and is working to create an electronic database. The vehicle she uses to commute to her lab is lightweight and requires very little fuel.",
    questions: [
      {
        q: "a. What is machine learning?",
        a: "Machine Learning is a subfield of Artificial Intelligence (AI) that uses algorithms and datasets to enable computers to learn from experience, identify patterns, and make predictions or decisions without being explicitly programmed for every task.",
      },
      {
        q: 'b. Explain: "Defense and ICT are complementary to each other."',
        a: "Modern defense relies heavily on ICT for communication, surveillance (drones, satellites), and precision weaponry (GPS-guided missiles). ICT provides the technological backbone, while defense protects the critical infrastructure and communication networks.",
      },
      {
        q: "c. Describe the technology used in the research mentioned in the passage.",
        a: "Dr. Pia is using Bioinformatics. This involves using computer algorithms and databases to analyze, store, and interpret massive amounts of biological data, specifically the genome sequence of the HMPV virus.",
      },
      {
        q: "d. Describe the areas of use for the technology used in the vehicle mentioned in the passage.",
        a: "The vehicle uses Nanotechnology (lightweight materials, advanced batteries). Nanotech is used in the automotive industry to create strong, lightweight composite materials, more efficient solar cells, and high-capacity batteries for electric vehicles.",
      },
    ],
  },
  {
    id: 12,
    title: "Q12. Garment Factory Automation (Duplicate)",
    passage:
      "A garment manufacturing company in Bangladesh has planned to establish a world-class factory in line with the Fourth Industrial Revolution. In this factory, most of the production will be done using actuators and computers without human assistance. To set up the factory, engineers have created an artificial simulated environment and developed a three-dimensional model of the factory.",
    questions: [
      {
        q: "a. What is e-learning?",
        a: "E-learning is a method of receiving education through electronic means using devices like computers and mobiles via the Internet.",
      },
      {
        q: 'b. Explain: "Connectivity is the main driving force of the global village."',
        a: "Connectivity (via the internet, Wi-Fi, and telecommunications) is what allows computers, mobile devices, and people to communicate across borders instantly. Without this seamless connectivity, the exchange of information, commerce, and culture that defines the global village would be impossible.",
      },
      {
        q: "c. Explain the technology used by the engineers to design the model.",
        a: "Engineers used Virtual Reality (VR) and CAD (Computer-Aided Design) software. VR creates simulated, three-dimensional environments that mimic reality, allowing engineers to design, test, and visualize the factory layout and machinery before actual construction.",
      },
      {
        q: "d. What kind of impact will the mentioned technology in the garment industry have on the labor market?",
        a: "The technology (Robotics/Automation) will reduce the demand for human labor, particularly for manual and repetitive tasks. While it increases production efficiency and reduces errors, it creates a risk of unemployment and job displacement for unskilled workers.",
      },
    ],
  },
  {
    id: 13,
    title: "Q13. Neural Net Diagram and Scenarios",
    passage:
      "Scenario 1: Diagram showing Input Layer, Hidden Layer, Output Layer (Neural Net). Scenario 2: Listed items: Molecular medicine, Gene therapy, DNA mapping, Gene finding.",
    questions: [
      {
        q: "a. What is a nano-particle?",
        a: "A nanoparticle is a microscopic particle of matter that is between 1 and 100 nanometers in diameter. Because of their tiny size, they have unique physical and chemical properties, making them useful in medicine, electronics, and materials science.",
      },
      {
        q: 'b. Explain: "It is possible to train soldiers by simulating a battlefield environment."',
        a: "Using Virtual Reality (VR), trainees can be immersed in a 3D simulated battlefield. This allows them to practice combat strategies, experience the sights and sounds of war, and react to threats in a safe, controlled environment without the risk of real injury.",
      },
      {
        q: "c. Explain the technology used in Scenario 1.",
        a: "Scenario 1 represents Artificial Intelligence (AI) and Neural Networks. A neural net is a computing system inspired by the human brain, designed to process data, learn from patterns, and make intelligent decisions.",
      },
      {
        q: "d. Analyze how the technology mentioned in Scenario 2 differs from the one used to achieve desired traits by transferring genes between organisms.",
        a: "Scenario 2 represents Bioinformatics (analyzing biological data like DNA mapping and gene finding using computers). This differs from Genetic Engineering, where the DNA of organisms is physically altered or combined to create new traits.",
      },
    ],
  },
  {
    id: 14,
    title: "Q14. Mr. X the Pilot and Mr. Y the Scientist",
    passage:
      "Due to the blessings of technology, Mr. X is a pilot without directly flying an aircraft. Agricultural scientist Mr. Y develops high-yielding jute seeds, and farmers benefit from cultivating them. He stores the data from his research activities using technology.",
    questions: [
      {
        q: "a. What is a neural net?",
        a: "A neural net is a computer system inspired by the biological neural networks of the human brain. It consists of interconnected nodes (artificial neurons) that process information, allowing the system to learn from data and make decisions.",
      },
      {
        q: "b. Explain the technology that works in a top-down approach.",
        a: "In Nanotechnology, the top-down approach involves taking larger materials and cutting, milling, or etching them down to the nanoscale (e.g., creating microchips from silicon wafers). It is the opposite of building up from atoms.",
      },
      {
        q: "c. Describe the flight training technology mentioned in the passage.",
        a: "Flight Simulation (Virtual Reality). Pilots are trained in realistic simulators that mimic the cockpit of an aircraft and simulate various flying conditions, emergencies, and weather scenarios safely on the ground.",
      },
      {
        q: "d. The technologies used in Mr. Y's activities are complementary to each other - express your opinion with analysis.",
        a: "Mr. Y uses Genetic Engineering (to develop high-yield seeds) and Bioinformatics/Databases (to store and analyze research data). One modifies the biological material, while the other manages and analyzes the resulting data; they work together to improve agricultural output.",
      },
    ],
  },
  {
    id: 15,
    title: "Q15. Scenario 1 (Creation) and Scenario 2 (Industry 4.0)",
    passage:
      "Scenario 1: Creation of new cells, Hybrid crop, Increasing protein content in milk. Scenario 2: Limiting human involvement in security, research, and entertainment (Fourth Industrial Revolution).",
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the manipulation and control of matter at the atomic and molecular scale (1 to 100 nanometers) to create new materials, devices, and systems with unique properties.",
      },
      {
        q: 'b. "Nowadays, it is possible to travel in driverless cars" - explain.',
        a: "Driverless cars use Artificial Intelligence (AI), sensors (Lidar, radar), and GPS to perceive their environment, navigate roads, and make real-time driving decisions without human input.",
      },
      {
        q: "c. Explain the technology referred to in Scenario 1 sign (?) of the passage.",
        a: "The technology is Genetic Engineering (Recombinant DNA Technology). It involves modifying an organism's genes to create new traits, such as new cells, hybrid crops, or enhanced nutritional content (like protein in milk).",
      },
      {
        q: "d. Evaluate the role of the technology mentioned in Scenario 2 in the context of the Fourth Industrial Revolution.",
        a: "Scenario 2 refers to Artificial Intelligence and Robotics. In the Fourth Industrial Revolution (Industry 4.0), these technologies automate production, enable smart factories, and perform tasks without human intervention, leading to massive gains in efficiency, precision, and speed.",
      },
    ],
  },
  {
    id: 16,
    title: "Q16. Dr. J.C. Deb's Medical Training",
    passage:
      "Dr. J.C. Deb went to Japan to receive special training on a temperature-controlled treatment method. Staying in a specially arranged computer-controlled environment, he gained practical experience... Now, he successfully applies this treatment in operations of some complex diseases.",
    questions: [
      {
        q: "a. What is CAD?",
        a: "CAD stands for Computer-Aided Design. It is a software tool used by engineers and designers to create, modify, analyze, and optimize designs in 2D or 3D digitally.",
      },
      {
        q: 'b. Explain "behavioral data."',
        a: "In Biometrics, behavioral data refers to unique patterns in a person's actions, such as their typing rhythm (keystroke dynamics), voice tone, or handwritten signature. These are used to verify identity.",
      },
      {
        q: "c. Explain the technology used in the doctor's training mentioned in the passage.",
        a: "Dr. Deb used Virtual Reality (VR) / Simulation training. The computer-controlled environment simulated complex medical scenarios, allowing him to practice the temperature-controlled surgery safely and gain practical, hands-on experience without risking real patients.",
      },
      {
        q: "d. Evaluate the contribution of information and communication technology in the treatment method described in the passage.",
        a: "ICT enabled the creation of highly precise, computer-controlled environments necessary for advanced procedures like Cryosurgery (temperature-controlled treatment). It allows for real-time monitoring, precise instrument control, and simulation-based training, making complex surgeries safer and more effective.",
      },
    ],
  },
  {
    id: 17,
    title: "Q17. Mr. X's Smart Stay",
    passage:
      "Mr. X reached country 'K' for research. After getting off the airplane, he traveled to his destination in a driverless automatic car. There, he was allowed to stay in a house where everything is controlled by modern information technology.",
    questions: [
      {
        q: "a. What is e-commerce?",
        a: "E-commerce is the buying, selling, and exchanging of goods, services, or information over electronic systems such as the Internet and other computer networks.",
      },
      {
        q: 'b. Explain: "The future world will be the world of nanotechnology."',
        a: "Nanotechnology allows the manipulation of matter at the atomic level, enabling the creation of incredibly strong, lightweight materials, ultra-fast computer chips, targeted medicines, and highly efficient energy sources. It will revolutionize every industry, from healthcare to manufacturing.",
      },
      {
        q: "c. Discuss the technology used to create the car mentioned in the passage.",
        a: "The driverless car uses Artificial Intelligence (AI), Robotics, and IoT. It relies on sensors, cameras, and GPS to navigate, perceive its surroundings, and make autonomous driving decisions without human intervention.",
      },
      {
        q: "d. Explain the reasons why the popularity of the house described in the passage is increasing day by day compared to a normal house.",
        a: "The house is a Smart Home. It is popular because it offers unprecedented convenience (voice-controlled lights/fans), enhanced security (remote monitoring), energy efficiency, and the ability to manage daily tasks (like ordering groceries or monitoring health) remotely via IoT.",
      },
    ],
  },
  {
    id: 18,
    title: "Q18. The Mechanical Engineer's Memory Device",
    passage:
      "A mechanical engineer has created a memory device that is small in size but has a high data storage capacity using a special technology. To improve the device, he created a virtual three-dimensional model using another special technology.",
    questions: [
      {
        q: "a. What is biometrics?",
        a: "Biometrics is the technology of measuring and analyzing unique physical or behavioral characteristics of a person (like fingerprints, facial features, or iris patterns) for the purpose of identification and authentication.",
      },
      {
        q: "b. Which technology enables year-round mango production? Explain.",
        a: "Genetic Engineering and modern agricultural technology. By modifying the genes of the mango plant to resist off-season diseases and adapt to varied climates, or by using controlled environment agriculture (greenhouses), year-round production can be achieved.",
      },
      {
        q: "c. Describe the technology used to create the memory device mentioned in the passage.",
        a: "The device is created using Nanotechnology. Nanofabrication techniques allow data to be stored at the molecular or atomic level, enabling massive storage capacities in extremely small physical spaces.",
      },
      {
        q: "d. Evaluate the appropriateness of the technology used to improve the device mentioned in the passage.",
        a: "The engineer used CAD (Computer-Aided Design) and Virtual Reality (VR) to create a 3D model. This is highly appropriate as it allows for rapid prototyping, testing, and visualization of the tiny device's internal structure without the expense and time of creating physical prototypes at the nanoscale.",
      },
    ],
  },
  {
    id: 19,
    title: "Q19. The Mayor's Network System",
    passage:
      "For the convenience of city residents, the mayor arranged a network to transfer data at the speed of light. Due to high costs, upon the engineer's advice, he decided to establish another wireless network.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the branch of technology that deals with the design, construction, operation, and application of robots—computer-controlled machines capable of performing complex tasks automatically.",
      },
      {
        q: 'b. Explain: "Medical treatment is possible at low temperatures."',
        a: "This refers to Cryosurgery, a technique where extreme cold (using liquid nitrogen or argon gas) is used to freeze and destroy abnormal or diseased tissue, such as tumors or warts, without major surgery.",
      },
      {
        q: "c. Describe the network system implemented by the mayor.",
        a: "The system is a Fiber Optic network. It uses thin strands of glass or plastic to transmit data as pulses of light, allowing for extremely high-speed, high-capacity data transfer.",
      },
      {
        q: "d. Analyze the rationale behind the wireless network recommended by the engineer.",
        a: "Wireless networks (Wi-Fi, cellular) are more cost-effective to deploy over large areas compared to laying physical fiber optic cables. They offer flexibility, allow residents to connect on the move, and can reach areas where physical cabling is difficult or expensive.",
      },
    ],
  },
  {
    id: 20,
    title: "Q20. Himel's Virtual Experience",
    passage:
      "Himel was trying to solve biological problems in the dry lab. One day, his friend took him to a room where they experienced space travel virtually.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the design, construction, and operation of machines (robots) that can carry out tasks autonomously or semi-autonomously, often mimicking human actions.",
      },
      {
        q: "b. Explain the method of identifying a person through behavior.",
        a: "This is Behavioral Biometrics. It identifies individuals by analyzing unique patterns in their actions, such as keystroke dynamics (typing rhythm), voice recognition (tone/pitch), or signature verification.",
      },
      {
        q: "c. Which technology is Himel using? Explain.",
        a: "Himel is using Bioinformatics. By working in a 'dry lab', he uses computers, algorithms, and databases to analyze complex biological data (like DNA sequences) and solve biological problems.",
      },
      {
        q: "d. Which technology is utilized in the room? Evaluate its role in daily life.",
        a: "The room utilizes Virtual Reality (VR). In daily life, VR is used for immersive entertainment (gaming), education (virtual field trips), healthcare (surgery simulation), and real estate (virtual property tours), enhancing how we learn, train, and have fun.",
      },
    ],
  },
  {
    id: 21,
    title: "Q21. The Modern Laboratory",
    passage:
      'Mr. "Y" entered his father\'s laboratory by looking at a special sensor... Inside, he saw that the first room was conducting research on organizing biological data and creating information systems, while the second room was conducting research on recombinant DNA.',
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the manipulation of matter at the atomic and molecular scale to create new structures, devices, and systems with unique properties.",
      },
      {
        q: 'b. Explain: "Information technology and communication technology are complementary to each other."',
        a: "IT involves collecting, processing, and storing data (using computers/software). Communication Technology involves transmitting that data (using networks, satellites). Together, they form ICT, allowing information to be both processed and shared globally.",
      },
      {
        q: "c. Describe the technology used on the laboratory door.",
        a: "The door uses Biometrics, likely Iris or Facial Recognition. The sensor scans the unique patterns of Mr. Y's eyes or face, verifies it against a secure database, and automatically unlocks the door.",
      },
      {
        q: "d. Analyze the comparative differences between the technologies researched in the laboratory.",
        a: "Room 1 uses Bioinformatics (handling vast biological data using computers). Room 2 uses Genetic Engineering/Recombinant DNA (physically altering and combining genetic material). Bioinformatics analyzes the data of life, while Genetic Engineering modifies the code of life.",
      },
    ],
  },
  {
    id: 22,
    title: "Q22. Ima's 3D Movie Experience",
    passage:
      "Ima watched a movie on her new TV at home. While watching the movie, if she uses a special type of glasses, she feels like she is part of the movie. ... Ima shared her happiness and experience with her friends through her Facebook account.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the technology related to the design, construction, and operation of robots, which are automated machines capable of performing tasks.",
      },
      {
        q: 'b. Explain the concept of "Digital Bangladesh."',
        a: "Digital Bangladesh is a vision to ensure the appropriate use of technology in every sector of the country. It aims to provide easy access to information, e-governance, online education, and digital financial services to all citizens, fostering economic growth.",
      },
      {
        q: "c. Explain the technology used in the passage.",
        a: "The technology is Virtual Reality (VR) / 3D technology. The special glasses allow the user to view slightly different images in each eye, creating a three-dimensional effect that immerses the viewer in the virtual environment of the movie.",
      },
      {
        q: "d. Explain the rationale of Ima sharing her happiness with friends in relation to the concept of the global village.",
        a: "Sharing experiences on Facebook demonstrates the core concept of the global village: the ability to instantly connect and share thoughts, emotions, and cultures with people worldwide, regardless of geographical distance.",
      },
    ],
  },
  {
    id: 23,
    title: "Q23. Jaman's Success Abroad",
    passage:
      "Jaman got a job as a driver in an organization in South Korea. There, he underwent training in a special artificial environment for one month... Besides his job, Jaman also worked in another organization doing data entry. The money he sent home helped transform his semi-pucca house into a two-storied building.",
    questions: [
      {
        q: "a. What is artificial intelligence?",
        a: "Artificial Intelligence (AI) is the simulation of human intelligence in machines, enabling them to learn, reason, problem-solve, and make decisions like humans.",
      },
      {
        q: "b. What is meant by social media?",
        a: "Social media are interactive digital platforms (like Facebook, Twitter, Instagram) that allow users to create, share, and interact with content, information, and networks online.",
      },
      {
        q: "c. Which technology is mentioned in Jaman's expatriate life? Explain.",
        a: "The passage mentions Virtual Reality/Simulation (training in an artificial environment). This technology creates realistic, computer-generated environments to train individuals safely and effectively for real-world tasks like driving.",
      },
      {
        q: "d. Evaluate the role of information technology in Jaman's life.",
        a: "IT played a transformative role. It provided him with the skills (via simulation) for a job abroad, and enabled him to earn additional income through online data entry. This remote work (outsourcing) allowed him to improve his family's financial status and living standards.",
      },
    ],
  },
  {
    id: 24,
    title: "Q24. Hasan's Non-Surgical Treatment",
    passage:
      "ICT-based knowledge and technology are leading people towards progress in various fields. Hasan studied ICT and learned about a non-surgical medical treatment method. Later, Hasan gained knowledge about ICT-based biodiversity creation technology and felt very happy.",
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the engineering of functional systems at the molecular scale (1 to 100 nanometers), involving the manipulation of atoms and molecules.",
      },
      {
        q: "b. Explain the technology used for personal identification.",
        a: "Biometrics is used for personal identification. It measures unique physical traits (fingerprints, iris, face) or behavioral traits (voice, signature) to automatically verify a person's identity.",
      },
      {
        q: "c. Identify and explain Hasan's medical treatment method.",
        a: "Hasan learned about Robotic Surgery or minimally invasive techniques. These methods use small incisions and computer-controlled robotic instruments to perform complex operations without large cuts, reducing blood loss and recovery time.",
      },
      {
        q: "d. Give your opinion on the role of the technology mentioned in the passage that brought joy to Hasan in improving agricultural resources.",
        a: "The technology is Genetic Engineering. It improves agricultural resources by creating high-yield, disease-resistant, and climate-resilient crops. This ensures food security, increases farmers' profits, and reduces reliance on chemical pesticides.",
      },
    ],
  },
  {
    id: 25,
    title: "Q25. Election Commission Database",
    passage:
      "The Election Commission has created an excellent database for generating national ID cards by collecting facial photographs, fingerprints, and signatures of adult citizens. ... Some dishonest individuals attempted to hack the database to create fake passports but ultimately failed.",
    questions: [
      {
        q: "a. What is video conferencing?",
        a: "Video conferencing is a technology that allows people in different locations to communicate and hold meetings in real-time using audio and video transmitted over the internet.",
      },
      {
        q: 'b. Explain: "Safe driving training is possible using special technology."',
        a: "Using Virtual Reality (VR) simulators, trainees can practice driving in realistic, computer-generated environments. This allows them to experience dangerous scenarios (like heavy rain or traffic) safely without any real-world risk.",
      },
      {
        q: "c. Analyze, in the light of the passage, the technology the Election Commission used to create the database.",
        a: "The Election Commission used Biometrics (Facial recognition, Fingerprint scanning) to create the database. These technologies capture unique biological identifiers, ensuring that each citizen has only one secure, verifiable identity, which prevents fraud.",
      },
      {
        q: "d. Explain the ethical aspects of the failed attempt by some individuals in the passage.",
        a: "The individuals attempted to hack the database, which is highly unethical and illegal. Hacking violates privacy, compromises national security, and breaches computer ethics (unauthorized access to computer resources). It is a punishable cybercrime.",
      },
    ],
  },
  {
    id: 26,
    title: "Q26. Dr. Hatem's Surgery Training",
    passage:
      "Dr. Hatem went to China for training in surgery. During enrollment, his fingerprint was taken and he was issued an ID card. Each time before entering the training room, he had to scan his fingerprint... He wore special equipment on his hands, head, and eyes. He completed the initial phase of the training by viewing various scenes on a computer monitor.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the branch of technology that deals with the design, construction, and operation of robots to perform tasks automatically.",
      },
      {
        q: 'b. Explain: "Hacking is an unethical act."',
        a: "Hacking involves gaining unauthorized access to computer systems or networks to steal data, cause damage, or disrupt services. It violates personal privacy, breaches security, and is a criminal offense, making it highly unethical.",
      },
      {
        q: "c. What technology was used at the door mentioned in the passage? Explain.",
        a: "Fingerprint Recognition Biometrics. The door was equipped with a sensor that scanned Dr. Hatem's unique fingerprint ridges. It matched the scan with his stored ID data to grant secure access.",
      },
      {
        q: "d. Evaluate the role of the technology used in Dr. Hatem's training.",
        a: "The technology is Virtual Reality (VR) / Simulation. Its role is crucial: it allows surgeons to practice complex procedures in a risk-free, controlled environment. They can make mistakes, learn from them, and perfect their skills before operating on real patients.",
      },
    ],
  },
  {
    id: 27,
    title: "Q27. Mr. Mokhles' Fisheries Tech",
    passage:
      "Mr. Mokhles is a fisheries expert. To meet the shortage of fish in the country, he uses technology to produce new species of fish. To enter his office, he scans his fingerprint on a machine... Then to enter his room, the door opens when he looks at another machine.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the design, construction, and operation of robots to perform tasks automatically.",
      },
      {
        q: 'b. Explain: "Driving training is possible using technology."',
        a: "Virtual Reality (VR) simulators create realistic driving environments. Trainees use mock steering wheels and pedals to interact with a 3D screen, practicing driving safely and learning to handle various road conditions without real-world risks.",
      },
      {
        q: "c. Describe the technology used in fish production in the passage.",
        a: "Genetic Engineering is used to produce new fish species. By modifying the genes of fish (e.g., transferring growth hormones), scientists can create species that grow faster, are larger, or are resistant to diseases.",
      },
      {
        q: "d. Based on the passage, which method of entering (office vs. room) is more convenient? Analyze.",
        a: "Entering the room (using facial/iris recognition) is more convenient. It is a contactless technology, meaning Mr. Mokhles doesn't have to touch a shared device. It is faster, more hygienic, and eliminates the risk of transmission of germs.",
      },
    ],
  },
  {
    id: 28,
    title: "Q28. The World-Class Factory",
    passage:
      "A world-class factory is planned to be established near the capital of Bangladesh using ICT... Skilled programmers of the factory will create a simulated environment to allow visitors to view different landmarks of the city from home.",
    questions: [
      {
        q: "a. What is hacking?",
        a: "Hacking is the unauthorized access to a computer system or network, usually with the intent to steal data, cause damage, or disrupt operations.",
      },
      {
        q: 'b. Explain: "The ICT-based world is a global village."',
        a: "ICT (internet, instant messaging, video calls) removes geographical barriers, allowing people worldwide to communicate, share information, and conduct business instantly as if they were in the same small village.",
      },
      {
        q: "c. Identify and explain the technology used in the factory.",
        a: "The factory uses Robotics/Automation and IoT. Computer-controlled actuators and robots perform manufacturing tasks automatically, increasing precision, speed, and efficiency without human intervention.",
      },
      {
        q: "d. Evaluate how the programmers' technology contributes to preserving history and heritage.",
        a: "Programmers use Virtual Reality (VR) and 3D modeling to create virtual replicas of historical landmarks. This allows anyone to explore and learn about heritage sites virtually, preserving them digitally for future generations even if physically damaged.",
      },
    ],
  },
  {
    id: 29,
    title: "Q29. Chips Packaging Factory",
    passage:
      "Chips are a favorite snack for everyone. A special technology is used during the packaging of chips. To ensure factory security, a fingerprint scanning device is installed at the entrance.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the technology of designing and building machines (robots) that can perform tasks automatically.",
      },
      {
        q: 'b. Explain: "It is possible to learn motor driving through technology."',
        a: "Using Virtual Reality (VR) simulators, individuals can practice driving in a computer-generated, safe environment. This allows them to experience real-world scenarios and learn vehicle control without the risk of accidents.",
      },
      {
        q: "c. Describe the fingerprint scanning technology used in the factory.",
        a: "It is Biometric fingerprint recognition. It captures the unique pattern of ridges on the employee's finger, compares it with a pre-stored database, and unlocks the door if a match is found, ensuring only authorized access.",
      },
      {
        q: "d. Analyze the advantages and disadvantages of the technology used in chip packaging and give your opinion.",
        a: "The technology is Nanotechnology. Advantages: It creates highly effective packaging that blocks oxygen and moisture, keeping chips fresh for longer. Disadvantages: Nanoparticles can be harmful to human health if inhaled, and the technology is very expensive.",
      },
    ],
  },
  {
    id: 30,
    title: "Q30. Surjo and Protap's Success",
    passage:
      "After completing his education, Surjo chose to earn money by working online from home... Later, many people in his area followed his path and became self-sufficient. His brother Protap obtained a higher degree from an American university while staying at home.",
    questions: [
      {
        q: "a. What is plagiarism?",
        a: "Plagiarism is the act of copying someone else's literary work, research, or ideas and publishing them under one's own name without giving proper credit or citation to the original creator.",
      },
      {
        q: "b. What type of data is used in bioinformatics? Explain.",
        a: "Bioinformatics uses vast amounts of biological data, primarily DNA sequences, RNA, proteins, and genetic information. This data is stored in electronic databases and analyzed using computer algorithms to understand biological systems.",
      },
      {
        q: "c. Explain the process by which Protap obtained his higher degree.",
        a: "Protap used Distance Learning / E-learning. Through the internet, he accessed online classes, digital libraries, and video conferencing platforms provided by the American university, allowing him to study and earn a degree remotely from Bangladesh.",
      },
      {
        q: "d. Analyze the justification of Surjo's activities in the context of Bangladesh.",
        a: "Surjo's activities (Freelancing/Outsourcing) are highly justified and beneficial. Bangladesh has a large, educated youth population. Online work allows them to earn foreign currency, reduce unemployment, and drive economic growth without needing to migrate physically.",
      },
    ],
  },
  {
    id: 31,
    title: "Q31. Dr. Jamil's Research and Surgery",
    passage:
      "Dr. Jamil is an agricultural researcher. A farmer harvested more crops than before using seeds discovered by him. One day, Dr. Jamil went to his doctor friend for surgery to remove a wart... His friend performed a bloodless operation at -20°C within a short time.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the field of technology dealing with the design, construction, and operation of robots to perform tasks automatically.",
      },
      {
        q: "b. Explain the technology used for personal identification.",
        a: "Biometrics is used for personal identification. It uses physiological traits (like fingerprints, iris patterns, or facial structure) or behavioral traits (like voice or signature) to uniquely verify a person's identity.",
      },
      {
        q: "c. Explain the type of technology used in Dr. Jamil's research.",
        a: "Dr. Jamil used Genetic Engineering. He modified the DNA of seeds to introduce desirable traits (like high yield or disease resistance), creating Genetically Modified (GM) crops that benefit farmers.",
      },
      {
        q: "d. Evaluate the justification of the treatment method used by Dr. Jamil's friend.",
        a: "The method is Cryosurgery. It is highly justified as it is minimally invasive, causes less bleeding, requires less time, and allows the patient to recover quickly. It is an excellent application of ICT and medical technology.",
      },
    ],
  },
  {
    id: 32,
    title: "Q32. Dr. Khalil's Crop Research",
    passage:
      "Dr. Khalil is conducting research using a technology to invent high-yielding crop seeds to address the country's food shortage. His assistant tried to access data from the computer without permission.",
    questions: [
      {
        q: "a. What is biometrics?",
        a: "Biometrics is the science of analyzing unique physical or behavioral characteristics (like fingerprints or voice) to identify an individual.",
      },
      {
        q: 'b. Explain: "It is possible to learn driving inside a room."',
        a: "Through Virtual Reality (VR) simulators, a person can sit in a mock vehicle inside a room and interact with a 3D screen. The simulator replicates real-world driving conditions, allowing safe practice indoors.",
      },
      {
        q: "c. Describe the technology used in Dr. Khalil's research.",
        a: "Dr. Khalil uses Genetic Engineering / Bioinformatics. He alters the genetic makeup of crops using recombinant DNA technology to create high-yield, resilient seeds, and likely uses computer databases to analyze the results.",
      },
      {
        q: "d. Analyze Dr. Khalil's assistant's actions from an ethical perspective.",
        a: "The assistant's actions are highly unethical and illegal. Accessing data without permission is a form of hacking, which violates computer ethics, breaches data privacy, and compromises the security of the research.",
      },
    ],
  },
  {
    id: 33,
    title: "Q33. Alpha Research Center",
    passage:
      "Scientists at the Alpha Research Center are trying to develop a molecular-level device to directly deliver drugs to diseased cells. They created a simulated environment to observe the internal structure of the brain and cells.",
    questions: [
      {
        q: "a. What is telemedicine?",
        a: "Telemedicine is the remote delivery of healthcare services, such as consultations and diagnoses, using telecommunications technology like video conferencing and digital health records.",
      },
      {
        q: 'b. Explain: "Artificial intelligence is a type of expert system."',
        a: "An expert system is a computer program designed to mimic the decision-making ability of a human expert. Since AI aims to simulate human intelligence and expertise to solve complex problems, it encompasses expert systems.",
      },
      {
        q: "c. Describe the technology used for the scientists' observations.",
        a: "The scientists use Virtual Reality (VR) / Simulation and 3D modeling. This allows them to create immersive, interactive visualizations of complex molecular and cellular structures that are impossible to see with the naked eye.",
      },
      {
        q: "d. Analyze the impact of the technology mentioned in the passage on the food industry.",
        a: "The technology is Nanotechnology. In the food industry, it is used to create advanced packaging that blocks bacteria and oxygen (extending shelf life), and to create nanosensors that can detect spoilage or contamination, improving food safety.",
      },
    ],
  },
  {
    id: 34,
    title: "Q34. Army Chief's Tech Training",
    passage:
      "The army chief decided that soldiers would be trained in a technology-based environment so they can gain real battlefield experience. He instructed the food supply unit to provide dry food that remains fresh and crispy in the battlefield for a long time.",
    questions: [
      {
        q: "a. What is hand geometry?",
        a: "Hand geometry is a biometric method that analyzes the physical dimensions of a person's hand (length, width, and thickness of fingers) to uniquely identify them.",
      },
      {
        q: 'b. Explain: "Despite technological advancement, criminal behavior hasn\'t been eliminated."',
        a: "Technology has given rise to new forms of crime (Cybercrimes), such as hacking, phishing, and identity theft. The anonymity and global reach of the internet make these crimes easier to commit and harder to track, so crime persists.",
      },
      {
        q: "c. Describe the food supply technology used in the battlefield as mentioned in the passage.",
        a: "The food uses Nanotechnology packaging. Nanoparticles are integrated into the packaging material to create a strong barrier against moisture and oxygen, ensuring the dry food remains fresh and crispy for a long time in harsh conditions.",
      },
      {
        q: "d. Give your opinion on why the soldier training technology is effective and logical.",
        a: "The technology is Virtual Reality (VR). It is highly effective because it allows soldiers to practice combat in realistic, dangerous scenarios without the risk of injury or death. It is cost-effective, repeatable, and prepares them mentally for the battlefield.",
      },
    ],
  },
  {
    id: 35,
    title: "Q35. Mr. Shafik's Lychee Research",
    passage:
      "Mr. Shafik conducts research on lychees to preserve the heritage of Dinajpur. He stores his findings in the lab. At the lab entrance, he has installed a device that grants access to authorized individuals who look at it for a specific time.",
    questions: [
      {
        q: "a. What is a smart home?",
        a: "A smart home is a residence equipped with IoT technology, where appliances, lighting, heating, and security can be controlled remotely via smartphones or automated through programmed devices.",
      },
      {
        q: "b. Explain the minimally invasive surgery method.",
        a: "Minimally invasive surgery uses robotic systems and tiny instruments inserted through small incisions. It allows surgeons to perform complex operations with greater precision, resulting in less pain, less blood loss, and faster recovery for the patient.",
      },
      {
        q: "c. Describe the technology used at the laboratory entrance.",
        a: "The device is an Iris or Facial Recognition biometric scanner. It captures the unique patterns of the authorized person's eyes or face, verifies it against a database, and unlocks the door if access is granted.",
      },
      {
        q: "d. Analyze the application of information and communication technology reflected in the research and discuss its fields of use.",
        a: "The research involves Bioinformatics (storing and analyzing agricultural data). ICT is used to create databases for genetic information. Fields of use include: agriculture (crop improvement), medicine (disease research), and environmental science (biodiversity tracking).",
      },
    ],
  },
  {
    id: 36,
    title: "Q36. Mrs. Papia's Hospital Visit",
    passage:
      "Mrs. Papia was admitted to a specialized hospital for surgery... The doctors used fingerprint scans to enter the hospital. ... As her blood sugar was high, the doctor administered insulin to control her diabetes.",
    questions: [
      {
        q: "a. What is e-commerce?",
        a: "E-commerce is the electronic buying and selling of goods and services over the internet.",
      },
      {
        q: 'b. Explain: "ICT has brought the world into our hands."',
        a: "ICT, via smartphones and the internet, allows us to access global information, communicate with anyone, shop, learn, and manage finances instantly from a single device in our hands, transcending physical borders.",
      },
      {
        q: "c. Identify and explain the technology used by doctors to enter the hospital.",
        a: "The doctors use Fingerprint Biometrics. The scanner reads the unique ridges on their fingers and matches them to a secure database to control access to sensitive areas like hospital wards or surgical theaters.",
      },
      {
        q: "d. Give your opinion on how the technology used to manufacture the medicine in Mrs. Papia's treatment contributes to agricultural research success.",
        a: "The medicine is Insulin, produced using Genetic Engineering (recombinant DNA technology). This same technology is applied in agriculture to create high-yield, pest-resistant, and climate-resilient crops, boosting agricultural success.",
      },
    ],
  },
  {
    id: 37,
    title: "Q37. Padma Bridge TV Commercial",
    passage:
      "Rafi saw in a TV commercial of the Padma Bridge that cars and trains were moving across the bridge. ... Zaman explained the technology and said that nowadays it is also possible to instantly know when, where, and in what condition any vehicle is located.",
    questions: [
      {
        q: "a. What is robotics?",
        a: "Robotics is the design, construction, and operation of machines (robots) that can perform tasks automatically or semi-automatically.",
      },
      {
        q: 'b. Explain: "Nowadays, anyone can join a news broadcast from anywhere."',
        a: "Through social media and online news portals, citizens can use their smartphones to record and share news events instantly from any location, acting as 'citizen journalists' and participating in the global information flow.",
      },
      {
        q: "c. Describe the technology that Zaman explained.",
        a: "Zaman explained GPS (Global Positioning System) and GIS (Geographic Information System). GPS uses satellites to pinpoint the exact location of a vehicle, while GIS maps and analyzes this data to track conditions and routes.",
      },
      {
        q: "d. Give your argument in favor of the opinion that knowing the location of vehicles can play a strong role in ensuring the safety of both passengers and vehicles.",
        a: "Real-time GPS tracking allows monitoring of vehicle speed and routes, preventing theft and unauthorized use. In emergencies, exact locations can be shared with rescue teams. Fleet managers can also ensure drivers follow safe routes and speeds, reducing accidents.",
      },
    ],
  },
  {
    id: 38,
    title: "Q38. Dr. Hasib's Bandaged Finger",
    passage:
      "Researcher Dr. Hasib could not open the door while trying to enter his lab in the morning... he had bandaged one of his fingers due to a cut... As a result, he had to wait outside until a colleague arrived. Annoyed by this, he requested the authorities to use password-based technology to open the lab door.",
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the manipulation of matter at the atomic and molecular scale (1 to 100 nanometers) to create new materials and devices.",
      },
      {
        q: "b. Explain how Bangladesh has become self-sufficient in food due to information technology.",
        a: "IT has enabled e-agriculture. Farmers receive weather forecasts, pest control advice, and market prices via mobile phones. Genetic engineering and bioinformatics have also created high-yield, disease-resistant crop varieties.",
      },
      {
        q: "c. What technology did Dr. Hasib use to open the lab door? Explain.",
        a: "He originally used Fingerprint Biometrics. However, because his finger was bandaged, the scanner could not read the unique ridges, so the system denied access.",
      },
      {
        q: "d. Is Dr. Hasib's proposal to the authorities reasonable? Analyze.",
        a: "Yes, it is reasonable. Biometrics, while highly secure, can fail due to physical changes (cuts, dirt, sweat). Having an alternative system like a strong password or a smart card provides a necessary backup for emergencies, ensuring authorized users are not locked out.",
      },
    ],
  },
  {
    id: 39,
    title: "Q39. Biplobi and Keya's Assignment",
    passage:
      "Biplobi and Keya are both studying at the higher secondary level... Biplobi prepared the assignment by reading books in the college library and other libraries and collecting information from the internet. She also mentioned all the sources in her assignment. Keya, however, took a senior university student's assignment from the internet, made slight changes, and submitted it.",
    questions: [
      {
        q: "a. What is virtual reality?",
        a: "Virtual Reality (VR) is a computer-generated 3D environment that users can interact with using special equipment, creating an immersive, realistic experience.",
      },
      {
        q: 'b. Explain the statement: "Fundamental research is not possible through artificial intelligence."',
        a: "AI is excellent at analyzing vast datasets, recognizing patterns, and optimizing existing processes. However, AI lacks true consciousness, intuition, and the ability to conceptualize entirely new, fundamental scientific paradigms without human guidance. It mimics intelligence but cannot create new knowledge from scratch.",
      },
      {
        q: "c. What contribution of information and communication technology did Biplobi use? Explain.",
        a: "Biplobi used the Internet for research and word processing software for typing. She also practiced academic ethics by citing her sources, which is a crucial part of responsible ICT use.",
      },
      {
        q: "d. Evaluate the differences in the work of Biplobi and Keya based on the use of technology.",
        a: "Biplobi used technology ethically: she researched, synthesized information, and properly cited sources. Keya used technology unethically: she committed plagiarism by copying someone else's work without permission or citation. Biplobi's work is original and honest; Keya's is theft.",
      },
    ],
  },
  {
    id: 40,
    title: "Q40. Mr. Rafique's Smart Lab",
    passage:
      "Mr. Rafique is a scientist. For the security of his laboratory, he uses CCTV cameras, which he can monitor from anywhere in the world using his mobile phone. To enter the lab, he simply looks at a device, and the door opens.",
    questions: [
      {
        q: "a. What is plagiarism?",
        a: "Plagiarism is the act of using someone else's work, ideas, or intellectual property without proper permission or citation, and presenting it as one's own.",
      },
      {
        q: 'b. Explain the term "Internet of Things."',
        a: "The Internet of Things (IoT) is a network of everyday physical devices (like cameras, home appliances, cars) connected to the internet, allowing them to collect and exchange data, and be controlled remotely.",
      },
      {
        q: "c. Explain the technology Mr. Rafique uses to enter his lab.",
        a: "Mr. Rafique uses Facial Recognition or Iris Scanning Biometrics. The device scans his unique facial features or eye patterns, verifies them against a database, and automatically unlocks the door.",
      },
      {
        q: "d. In light of the passage, evaluate how effective it is to monitor the lab using a mobile phone.",
        a: "Monitoring via mobile phone is highly effective. It provides real-time, remote surveillance, allowing Mr. Rafique to ensure the lab's security from anywhere. It enables immediate detection of unauthorized access and allows for quick response to emergencies.",
      },
    ],
  },
  {
    id: 41,
    title: "Q41. Dr. X's Questionable Research",
    passage:
      "Dr. X has been conducting research for a long time to produce high-quality crops. For advanced research, he collects data from various researchers via the internet but publishes it under his own name without giving any credit.",
    questions: [
      {
        q: "a. What is IoT?",
        a: "IoT (Internet of Things) is the interconnection via the Internet of computing devices embedded in everyday objects, enabling them to send and receive data.",
      },
      {
        q: 'b. Explain: "Plagiarism is an unethical practice."',
        a: "Plagiarism involves stealing someone else's intellectual work and claiming it as one's own. It violates the principles of academic integrity, dishonesty, and disrespects the original creator's effort, making it a serious ethical violation.",
      },
      {
        q: "c. Explain the subject of Dr. X's research in the passage.",
        a: "Dr. X is researching Genetic Engineering and Agricultural Science. He is using technology to develop high-quality, high-yield crop varieties to improve food production.",
      },
      {
        q: "d. Evaluate Dr. X's behavior in terms of ICT ethics.",
        a: "Dr. X's behavior is highly unethical. By collecting data via the internet and publishing it under his own name without crediting the original researchers, he is committing plagiarism. This violates ICT ethics (specifically the commandment to not appropriate other people's intellectual output) and is a serious academic offense.",
      },
    ],
  },
  {
    id: 42,
    title: "Q42. Global Village and the Internet",
    passage:
      "Marshall McLuhan first used the term 'Global Village' in the 1960s. He explained this in his famous books: 'The Gutenberg Galaxy: The Making of Typographic Man' (1962) and 'Understanding Media: The Extensions of Man' (1964). Today, with the help of the internet, people can communicate instantly from one end of the world to the other.",
    questions: [
      {
        q: "a. What is a global village?",
        a: "A global village is a concept where, with the help of information and communication technology, all the people of the world remain connected to each other despite being far apart, making the world feel like a small village.",
      },
      {
        q: "b. Explain the contribution of ARPANET and TCP/IP to the internet.",
        a: "ARPANET, created in 1969 by the U.S. Department of Defense, was the early network for internal communication. In 1982, the invention of the TCP/IP protocol made it possible to connect different computers to a common network, establishing the foundation of the modern internet.",
      },
      {
        q: "c. Explain the technology referred to in the passage that allows instant global communication.",
        a: "The technology is the Internet. It is a vast global network of computers that allows users to exchange information, emails, and messages instantly across the world, eliminating geographical barriers.",
      },
      {
        q: "d. Evaluate the advantages and disadvantages of the concept mentioned in the passage.",
        a: "Advantages: People can communicate quickly and securely, management costs are reduced, and access to global education and healthcare is possible from home. Disadvantages: Risk of hacking and data theft, spread of false information, cultural erosion, and overuse causing physical/eye problems.",
      },
    ],
  },
  {
    id: 43,
    title: "Q43. E-Learning and Online Employment",
    passage:
      "Alongside books, the internet is now a major source of knowledge. Example: www.khanacademy.org, founded by Salman Khan, has over 10 million students. On the other hand, freelancing and outsourcing have emerged as large industries. Popular freelancing marketplaces include Upwork.com and Fiverr.com.",
    questions: [
      {
        q: "a. What is E-learning?",
        a: "E-learning means receiving education through electronic means, utilizing computers, mobile devices, and the internet to access educational materials and classes remotely.",
      },
      {
        q: "b. What is an e-book?",
        a: "An e-book (Electronic Book) is a digital version of a book that is easily downloadable and portable. It may include text, images, videos, and animations. The father of the e-book is Michael S. Hart.",
      },
      {
        q: "c. Explain the technology used by students on Khan Academy.",
        a: "The students use E-learning technology. This involves accessing educational materials, video lectures, and interactive exercises over the internet using computers or mobile devices, allowing them to study from home.",
      },
      {
        q: "d. Analyze how the technology mentioned in the passage helps in economic development.",
        a: "The passage mentions Freelancing/Outsourcing. Through online marketplaces like Upwork and Fiverr, individuals can work independently for foreign clients over the internet. This earns foreign currency, reduces unemployment, and boosts the national economy.",
      },
    ],
  },
  {
    id: 44,
    title: "Q44. Telemedicine and Teleconferencing",
    passage:
      "Telemedicine is a healthcare method where doctors and patients communicate remotely through video conferencing, email, or other digital media. It saves both time and cost. Teleconferencing, invented by Murray Turoff in 1975, is the act of holding meetings remotely using phones or computers.",
    questions: [
      {
        q: "a. What is telemedicine?",
        a: "Telemedicine is a healthcare method where doctors and patients communicate remotely through video conferencing, email, or other digital media to evaluate conditions and provide necessary advice.",
      },
      {
        q: "b. Explain the use of Virtual Reality in medical training.",
        a: "VR allows new surgeons to practice operations on virtual patients before actual surgery. This eliminates risk to real patients while allowing practical experience. Psychiatrists also use VR to reduce patients' mental stress and help them overcome fears.",
      },
      {
        q: "c. Explain the technology used by doctors to treat patients in remote areas.",
        a: "The technology is Telemedicine. It relies on ICT tools like video conferencing, email, and EHR (Electronic Health Records) databases to connect doctors with patients in remote areas, allowing diagnosis and treatment without physical travel.",
      },
      {
        q: "d. Analyze the importance of teleconferencing in modern offices.",
        a: "Teleconferencing saves time and travel expenses. It allows multiple people from different locations to participate in meetings simultaneously, making communication safe, fast, and efficient, which is vital for global business operations.",
      },
    ],
  },
  {
    id: 45,
    title: "Q45. Artificial Intelligence and Neural Networks",
    passage:
      "In 1956, John McCarthy first mentioned the term artificial intelligence. However, many consider Alan Turing as the father of AI, because in 1950, through a test called the 'Turing Test,' he showed how one could understand whether a machine can think. Modern AI uses neural networks, which can have millions of artificial neurons.",
    questions: [
      {
        q: "a. What is Artificial Intelligence?",
        a: "Artificial Intelligence (AI) is the means artificially embedding human thinking into computers or computer-based devices so they can solve problems, learn, and make decisions like humans.",
      },
      {
        q: "b. Explain the Turing Test.",
        a: "The Turing Test, proposed by Alan Turing in 1950, is a test to determine if a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.",
      },
      {
        q: "c. Explain the technology mentioned in the passage that mimics the human brain.",
        a: "The technology is a Neural Network (or Neural Net). It is a computing system with input, hidden, and output layers that processes vast amounts of data, learns from mistakes, and corrects itself, much like the human brain.",
      },
      {
        q: "d. Analyze the impact of the technology mentioned in the passage on daily life.",
        a: "AI is used in smartphones (Face Unlock, voice commands), social media (content recommendations), navigation (Google Maps traffic analysis), language translation, and creative work (generating stories and code). It makes tasks faster and easier.",
      },
    ],
  },
  {
    id: 46,
    title: "Q46. Space Missions and Satellite Tech",
    passage:
      "Space exploration refers to sending humans or robots into outer space for research purposes. In 1957, the Soviet Union launched Sputnik-1, the first artificial satellite. Satellites are used for communication, weather forecasting, mapping, environmental monitoring, and intelligence.",
    questions: [
      {
        q: "a. What is space exploration?",
        a: "Space exploration refers to sending humans or robots into outer space for research purposes. Any mission beyond Earth's atmosphere and gravitational force is called space exploration.",
      },
      {
        q: "b. Explain the use of satellites in disaster management.",
        a: "Satellites provide early warnings for earthquakes, floods, and storms by monitoring weather patterns and atmospheric changes. They also aid in relief operations by providing real-time mapping of affected areas.",
      },
      {
        q: "c. Identify and explain the technology used for global positioning.",
        a: "The technology is GPS (Global Positioning System). It is a satellite-based one-way communication system that enables accurate determination of any location on Earth's surface by processing signals from satellites.",
      },
      {
        q: "d. Evaluate the use of the technology mentioned in the passage in the military sector.",
        a: "Satellites and ICT are crucial for defense. They are used to monitor enemy movements, guide precision weapons (missiles, drones), maintain seamless communication among forces, and gather secret military intelligence, significantly enhancing national security.",
      },
    ],
  },
  {
    id: 47,
    title: "Q47. Biometrics and Bioinformatics",
    passage:
      "Biometrics refers to the science and technology of measuring and analyzing biological data to uniquely identify individuals, such as fingerprints and DNA. Bioinformatics is an interdisciplinary subject formed through the integration of biology, computer science, and statistics to process vast biological data using a 'dry lab'.",
    questions: [
      {
        q: "a. What is biometrics?",
        a: "Biometrics is the science and technology of measuring and analyzing unique biological data (like DNA, fingerprints, retina, and voice) to uniquely identify individuals.",
      },
      {
        q: "b. Explain the difference between a dry lab and a wet lab.",
        a: "A dry lab involves biological research conducted within a computer using data and algorithms (no chemical reagents required). A wet lab is a physical laboratory where experiments are conducted using chemical reagents.",
      },
      {
        q: "c. Identify and explain the technology used to identify the deceased in a disaster.",
        a: "DNA Profiling (DNA Biometrics) is used. It collects DNA samples from blood, hair, or bone cells to create a unique profile, which can accurately identify mutilated or decomposed bodies.",
      },
      {
        q: "d. Analyze the role of the technology mentioned in the passage in agriculture.",
        a: "Bioinformatics and Genetic Engineering help in agriculture. Bioinformatics analyzes crop genomes to find desirable traits, while Genetic Engineering modifies DNA to create high-yield, pest-resistant, and drought-resistant crops to meet food demands.",
      },
    ],
  },
  {
    id: 48,
    title: "Q48. Nanotechnology and Plagiarism",
    passage:
      "Nanotechnology operates at the nanoscale, ranging from 1 to 100 nanometers. The concept was introduced by Richard Feynman in 1959. Meanwhile, in the academic world, copying someone else's work without citation is called plagiarism, which can be detected using software like Turnitin.",
    questions: [
      {
        q: "a. What is nanotechnology?",
        a: "Nanotechnology is the study, analysis, and control of substances at the molecular and atomic level (from 1 to 100 nanometers) to create new materials and devices with unique properties.",
      },
      {
        q: "b. Explain the 'Top-Down' approach in nanotechnology.",
        a: "In the top-down approach, larger materials are cut, milled, or reduced to a smaller size (nanoscale) and given a specific shape. This process is generally associated with lithography.",
      },
      {
        q: "c. Identify and explain the unethical act mentioned in the passage.",
        a: "The unethical act is Plagiarism. It refers to copying someone else's literary work, research, or ideas and publishing them under one's own name without giving proper credit to the original creator.",
      },
      {
        q: "d. Analyze the impact of the technology mentioned in the passage on computer hardware.",
        a: "Nanotechnology enables the creation of lightweight, strong, and energy-efficient computer hardware. It allows for smaller processors (like Intel chips at 30nm), massive hard drive storage capacities (terabytes), and more efficient displays.",
      },
    ],
  },
  {
    id: 49,
    title: "Q49. E-Governance and Digital Bangladesh",
    passage:
      "Digital Bangladesh means ensuring appropriate use of technology in every sector of the country. The government's a2i project works towards building a Smart Bangladesh. To build a cashless economy, Bangladesh Bank has launched a QR-code based fast payment system called 'Saj'.",
    questions: [
      {
        q: "a. What is Digital Bangladesh?",
        a: "Digital Bangladesh means ensuring the appropriate use of technology in every sector of the country, including government services (e-governance), education, and banking, to build a modern, information-based society.",
      },
      {
        q: "b. Explain E-Purjee.",
        a: "E-Purjee is the digital version of the traditional supply permit issued by sugar mills for sugarcane delivery. It allows farmers to access supply information quickly via mobile phones, eliminating physical hassle.",
      },
      {
        q: "c. Identify and explain the technology used for cashless transactions.",
        a: "The technology is the QR-code based universal fast payment system 'Saj'. It allows people to conduct financial transactions digitally using app-based cashless codes via mobile phones.",
      },
      {
        q: "d. Analyze the role of the a2i project in Bangladesh's development.",
        a: "The a2i (Aspire to Innovate) project establishes information offices at every district and sub-district. It strengthens grassroots administration and ensures citizens in the remotest areas have access to government service information.",
      },
    ],
  },
  {
    id: 50,
    title: "Q50. Augmented Reality and the Metaverse",
    passage:
      "Augmented Reality (AR) is a technology that enhances the real world by adding virtual information or objects to our surroundings, making it more realistic and useful. The Metaverse is a digital world created by combining virtual reality, augmented reality, and other technologies.",
    questions: [
      {
        q: "a. What is Augmented Reality?",
        a: "Augmented Reality (AR) is a technology that enhances the real world by overlaying virtual information, objects, images, or sounds onto our physical surroundings using cameras, sensors, and computers.",
      },
      {
        q: "b. Explain the use of AR in navigation.",
        a: "When walking on the street, a phone's camera can display directions, nearby shops, and relevant information directly on the screen overlaid on the real-world view, making navigation easier.",
      },
      {
        q: "c. Explain the technology used to play games like Pokemon Go.",
        a: "The technology is Augmented Reality (AR). It brings virtual characters into the real world by using the phone's camera and GPS, allowing players to see and interact with digital elements in their physical environment.",
      },
      {
        q: "d. Analyze the concept of the Metaverse in the future of the internet.",
        a: "The Metaverse is considered the future form of the internet. It combines VR and AR to create immersive digital worlds where users can 'live' virtually—exploring, shopping, working, and meeting friends, bringing real-world experiences into the digital realm.",
      },
    ],
  },
];

export default function CreativeQuestions() {
  const [openPassage, setOpenPassage] = useState(null);
  const [openSubQuestion, setOpenSubQuestion] = useState(null);
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

  const togglePassage = (id) => {
    setOpenPassage(openPassage === id ? null : id);
    setOpenSubQuestion(null); // Close any open sub-questions when switching passages
  };

  const toggleSubQuestion = (id) => {
    setOpenSubQuestion(openSubQuestion === id ? null : id);
  };

  // Updated Search Logic (Strict ID Search for Numbers)
  const filteredData = creativeQuestionsData.filter((item) => {
    const searchLower = searchTerm.toLowerCase().trim();

    // If search is empty, show all
    if (searchLower === "") return true;

    // Check if the search term is purely a number (e.g., "9", "15")
    const isStrictNumber = /^\d+$/.test(searchLower);

    if (isStrictNumber) {
      // If it's a pure number, strictly match ONLY the exact ID.
      return item.id.toString() === searchLower;
    }

    // Otherwise, perform standard text search on title, passage, and questions
    const matchesTitle = item.title.toLowerCase().includes(searchLower);
    const matchesPassage = item.passage.toLowerCase().includes(searchLower);
    const matchesQuestions = item.questions.some(
      (qa) =>
        qa.q.toLowerCase().includes(searchLower) ||
        qa.a.toLowerCase().includes(searchLower),
    );

    return matchesTitle || matchesPassage || matchesQuestions;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          passages
        </span>
        <span className="hidden sm:inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
          Page {currentPage} of {totalPages || 1}
        </span>
      </div>

      {/* Main Accordion List */}
      <div className="space-y-4 flex-grow max-w-4xl mx-auto w-full">
        {currentItems.length > 0 ? (
          currentItems.map((item) => {
            const isPassageOpen = openPassage === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                  isPassageOpen
                    ? "border-primary ring-1 ring-primary/20"
                    : "border-gray-200"
                }`}
              >
                {/* Main Passage Header */}
                <button
                  onClick={() => togglePassage(item.id)}
                  className="w-full flex items-start justify-between p-5 text-left focus:outline-none bg-gray-50/50 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm mt-0.5 transition-colors ${
                        isPassageOpen
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}
                    >
                      {item.id}
                    </span>
                    <div>
                      <h3
                        className={`font-bold text-lg ${isPassageOpen ? "text-primary" : "text-gray-800"}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {item.passage}
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 mt-2 ml-4">
                    <svg
                      className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
                        isPassageOpen
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

                {/* Main Passage Content (Nested Accordions) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isPassageOpen
                      ? "max-h-[3000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 border-t border-gray-100 bg-white">
                    {/* Full Passage View */}
                    <div className="bg-base-200/50 p-4 rounded-lg mb-6 text-sm text-gray-700 italic border-l-4 border-primary">
                      <strong>Passage:</strong> {item.passage}
                    </div>

                    {/* Sub-questions List */}
                    <div className="space-y-3">
                      {item.questions.map((qa, idx) => {
                        const subId = `${item.id}-${idx}`;
                        const isSubOpen = openSubQuestion === subId;

                        // Extract the letter (a., b., c., d.) and the question text
                        const letterMatch = qa.q.match(/^[a-d]\./);
                        const letter = letterMatch ? letterMatch[0] : "";
                        const questionText = qa.q.replace(/^[a-d]\.\s*/, "");

                        return (
                          <div
                            key={idx}
                            className={`border rounded-lg transition-all duration-300 ${
                              isSubOpen
                                ? "border-primary/50 bg-primary/5"
                                : "border-gray-200 bg-white"
                            }`}
                          >
                            <button
                              onClick={() => toggleSubQuestion(subId)}
                              className="w-full flex items-center justify-between p-4 text-left focus:outline-none group"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`flex items-center justify-center h-6 w-6 rounded-full font-bold text-xs transition-colors ${
                                    isSubOpen
                                      ? "bg-primary text-white"
                                      : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"
                                  }`}
                                >
                                  {letter || String.fromCharCode(97 + idx)}
                                </span>
                                <span
                                  className={`font-semibold text-md ${
                                    isSubOpen ? "text-primary" : "text-gray-700"
                                  }`}
                                >
                                  {questionText}
                                </span>
                              </div>
                              <svg
                                className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${
                                  isSubOpen
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
                            </button>

                            {/* Sub-question Answer */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isSubOpen
                                  ? "max-h-[800px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="p-4 pt-0 text-gray-700 leading-relaxed text-sm ml-9">
                                <div className="p-4 bg-white rounded border border-gray-100 shadow-sm">
                                  <strong className="text-primary block mb-1">
                                    Answer:
                                  </strong>
                                  {qa.a}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
