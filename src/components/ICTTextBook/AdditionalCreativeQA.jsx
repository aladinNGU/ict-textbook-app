import React, { useState } from "react";

export const additionalCreativeQuestions = [
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
