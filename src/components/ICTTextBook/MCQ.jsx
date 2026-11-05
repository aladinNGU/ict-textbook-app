import React, { useState, useEffect } from "react";

export const mcqData = [
  // --- Page 71: Information & Communication Technology ---
  {
    id: 1,
    section: "ICT",
    type: "General",
    q: "Which of the following has contributed the most to the development of information and communication technology?",
    opts: ["Radio", "Telephone", "Television", "Computer"],
    ans: "d",
    exp: "Computers are the fundamental processing machines that drive modern ICT, enabling complex data processing, storage, and exchange.",
  },
  {
    id: 2,
    section: "ICT",
    type: "General",
    q: "Which of the following is required to properly operate computer-related equipment?",
    opts: ["Hardware", "Software", "Internet", "Human knowledge"],
    ans: "b",
    exp: "While hardware is the physical component, software is the set of instructions that tells the hardware what to do and how to operate properly.",
  },
  {
    id: 3,
    section: "ICT",
    type: "General",
    q: "Information and communication technology—",
    opts: [
      "Reduces wastage",
      "Increases physical labor",
      "Increases cost",
      "Reduces use of human intelligence",
    ],
    ans: "a",
    exp: "ICT automates processes and improves efficiency, which significantly reduces time and resource wastage.",
  },
  {
    id: 4,
    section: "ICT",
    type: "Polytomous",
    q: "Contributions of information technology include— i. Easy access to information. ii. Development of human resources. iii. Creating profitable processes in business and commerce. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "IT contributes to all these areas: providing instant information access, developing skills/human resources, and streamlining business processes for profit.",
  },
  {
    id: 5,
    section: "ICT",
    type: "Polytomous",
    q: "ICT is important for jobholders because it— i. Increases efficiency ii. Enables additional income iii. Saves time. Which of the following is correct?",
    opts: ["ii & iii", "i & iii", "i & ii", "i, ii & iii"],
    ans: "d",
    exp: "ICT tools increase efficiency at work, save time through automation, and enable additional income streams like freelancing.",
  },
  {
    id: 6,
    section: "ICT",
    type: "General",
    q: "Who is the proponent of the concept of the global village?",
    opts: [
      "Marshall McLuhan",
      "Tim Berners-Lee",
      "Mark Zuckerberg",
      "E. F. Codd",
    ],
    ans: "a",
    exp: "Herbert Marshall McLuhan first used the term 'Global Village' in the 1960s to describe how technology was shrinking the world.",
  },
  {
    id: 7,
    section: "ICT",
    type: "General",
    q: "Which technological advancement opened the door to the creation of the global village?",
    opts: [
      "Information and Communication Technology",
      "Communication Technology",
      "Information Technology",
      "Telecommunication Technology",
    ],
    ans: "a",
    exp: "The integration of information processing (IT) and transmission (CT) into ICT is what enabled the global village.",
  },
  {
    id: 8,
    section: "ICT",
    type: "General",
    q: "Which of the following is especially associated with the concept of the global village?",
    opts: [
      "Easy communication between village and city",
      "Widespread availability of internet services",
      "Converting villages into cities globally",
      "Expansion of unrestricted access to education",
    ],
    ans: "b",
    exp: "The internet is the core infrastructure that connects people globally, making the global village a reality.",
  },
  {
    id: 9,
    section: "ICT",
    type: "General",
    q: "Herbert Marshall McLuhan was a citizen of which of the following countries?",
    opts: ["Germany", "France", "Greece", "Canada"],
    ans: "d",
    exp: "McLuhan was born in Edmonton, Canada, and was a Canadian philosopher and author.",
  },
  {
    id: 10,
    section: "ICT",
    type: "General",
    q: "What is the most important for the global village?",
    opts: ["Information", "Hardware", "Software", "Connectivity"],
    ans: "a",
    exp: "Information is the core element being exchanged; without information, connectivity serves no purpose.",
  },
  {
    id: 11,
    section: "ICT",
    type: "General",
    q: "Which element is most important in the context of the global village?",
    opts: ["Internet", "Newspaper", "Television", "Mobile"],
    ans: "a",
    exp: "The internet provides the immediate, global, two-way communication backbone necessary for the global village.",
  },
  {
    id: 12,
    section: "ICT",
    type: "Polytomous",
    q: "What does the term 'global village' refer to? i. Real-time exchange of services ii. Easy access to information and entertainment iii. Interconnection among villages of the world. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "The global village is about global connection (not just physical villages) providing real-time services and information.",
  },
  {
    id: 13,
    section: "ICT",
    type: "Polytomous",
    q: "Which of the following are famous books by Herbert Marshall McLuhan? i. The Gutenberg Galaxy: The Making of Typographic Man ii. Understanding Media iii. The C Programming Language. Which of the following is correct?",
    opts: ["ii", "iii", "i & ii", "i & iii"],
    ans: "c",
    exp: "McLuhan wrote 'The Gutenberg Galaxy' (1962) and 'Understanding Media' (1964). 'The C Programming Language' is by Kernighan and Ritchie.",
  },
  {
    id: 14,
    section: "ICT",
    type: "Polytomous",
    q: "What are the necessary components for establishing a global village? i. Connectivity ii. Data iii. Competence. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Connectivity (internet), Data (information), and Competence (human knowledge/skills) are all essential elements as described in the textbook.",
  },
  {
    id: 15,
    section: "ICT",
    type: "Polytomous",
    q: "What is required for implementing a global village? i. Network connectivity ii. Hardware & Software iii. Human knowledge or competence. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "All these components are essential to build and maintain the infrastructure and usage of a global village.",
  },

  // --- Page 72: Global Village & Communication ---
  {
    id: 16,
    section: "Global Village",
    type: "Polytomous",
    q: "What are the benefits of the global village? i. Safe and fast communication ii. Creation of vast sources of information iii. Controlled use of information. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Benefits include fast communication and vast information. However, information is generally open and free, not strictly controlled.",
  },
  {
    id: 17,
    stem: "The entire world has now become a village. People from different countries are now easily sharing their joys and sorrows like close neighbors.",
    section: "Global Village",
    type: "Uniform Stem",
    q: "What topic is described in the passage?",
    opts: ["Global Village", "Virtual Reality", "Nanotechnology", "Network"],
    ans: "a",
    exp: "The description of the world shrinking into a connected neighborhood perfectly describes the concept of the Global Village.",
  },
  {
    id: 18,
    stem: "The entire world has now become a village. People from different countries are now easily sharing their joys and sorrows like close neighbors.",
    section: "Global Village",
    type: "Uniform Stem",
    q: "What has made the situation described in the passage possible? i. Newspapers ii. Information Technology iii. Internet Technology. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "While newspapers help, the modern instant sharing of joys/sorrows is made possible primarily by IT and the Internet.",
  },
  {
    id: 19,
    section: "Communication",
    type: "General",
    q: "Who invented the teleconferencing system?",
    opts: [
      "Herbert Marshall",
      "Maritaf",
      "Raymond Samuel Tomlinson",
      "Herbert Marshall McLuhan",
    ],
    ans: "b",
    exp: "According to the textbook, Murray Turoff (listed as Maritaf in this specific option set, though likely a typo for Turoff) invented teleconferencing in 1975.",
  },
  {
    id: 20,
    section: "Communication",
    type: "General",
    q: "How many types can the communication system be divided into?",
    opts: ["2", "3", "4", "5"],
    ans: "a",
    exp: "Communication systems are divided into two types: Information-based Communication and Transportation-based Communication.",
  },
  {
    id: 21,
    section: "Communication",
    type: "General",
    q: "Which invention greatly improved the communication system?",
    opts: ["Computer", "Telephone", "Printer", "Telegraph"],
    ans: "a",
    exp: "The computer, especially when combined with internet technology, revolutionized the speed and capacity of communication.",
  },
  {
    id: 22,
    section: "Communication",
    type: "General",
    q: "What is it called when a meeting is held via telecommunication?",
    opts: [
      "Teleconference",
      "Telecommunication",
      "Video conference",
      "Video chatting",
    ],
    ans: "a",
    exp: "A meeting held via audio telecommunication is called a teleconference.",
  },
  {
    id: 23,
    section: "Communication",
    type: "General",
    q: "What is a meeting using audio-visual method called?",
    opts: [
      "Teleconferencing",
      "Video conferencing",
      "Video chatting",
      "Telemedicine",
    ],
    ans: "b",
    exp: "Video conferencing involves both audio and visual (video) elements for real-time meetings.",
  },
  {
    id: 24,
    section: "Communication",
    type: "Polytomous",
    q: "A medium for instant communication with any corner of the world is— i. E-mail ii. WhatsApp iii. Zoom. Which of the following is correct?",
    opts: ["i", "i & ii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Email, WhatsApp, and Zoom all provide instant digital communication globally.",
  },
  {
    id: 25,
    section: "Communication",
    type: "Polytomous",
    q: "In the context of the global village, to conduct any virtual meeting one will need— i. Video conferencing software ii. Audio conferencing software iii. Simulation software. Which of the following is correct?",
    opts: ["ii", "iii", "i & ii", "i & iii"],
    ans: "c",
    exp: "Virtual meetings require audio and/or video conferencing software. Simulation software is not necessary for basic meetings.",
  },
  {
    id: 26,
    section: "Communication",
    type: "Polytomous",
    q: "The main reason for the popularity of internet-based communication systems is— i. Time-saving ii. Cost-saving iii. Audio-visual technology. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Internet communication is highly popular primarily because it saves both time and money compared to physical travel.",
  },
  {
    id: 27,
    stem: "Mr. Moin works in a government office. He uses the internet to exchange official information and uses video conferencing to make urgent decisions.",
    section: "Communication",
    type: "Uniform Stem",
    q: "Apart from official activities, in which other field is the technology used in the passage applied? i. Education ii. Intelligence surveillance iii. Social communication. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Internet and video conferencing are widely used in education (online classes), surveillance (CCTV over internet), and social communication (Skype, etc.).",
  },
  {
    id: 28,
    stem: "Mr. Moin works in a government office. He uses the internet to exchange official information and uses video conferencing to make urgent decisions.",
    section: "Communication",
    type: "Uniform Stem",
    q: "What type of activity is Mr. Moin's use of information and technology? i. Positive ii. Effective iii. Timely. Which of the following is correct?",
    opts: ["i", "i & ii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Using ICT for official work is positive, makes work effective, and allows for timely urgent decisions.",
  },
  {
    id: 29,
    stem: "Mr. Shuvo's younger brother Neel went on a UN mission. One day, using a technology, Shuvo arranged for Neel to talk with their sick mother. On another day, using a second technology, he made it possible for them to talk and see each other.",
    section: "Communication",
    type: "Uniform Stem",
    q: "Which component of the global village is indicated in the passage?",
    opts: ["Education", "Communication", "Healthcare", "Office"],
    ans: "b",
    exp: "The passage describes talking over a distance (phone) and seeing each other (video call), which are components of communication.",
  },

  // --- Page 73: Employment & Education ---
  {
    id: 30,
    stem: "Mr. Shuvo's younger brother Neel went on a UN mission. One day, using a technology, Shuvo arranged for Neel to talk with their sick mother. On another day, using a second technology, he made it possible for them to talk and see each other.",
    section: "Communication",
    type: "Uniform Stem",
    q: "Regarding the technology used by Neel in the passage— i. Special software is needed ii. Telemedicine service will be available iii. Residential security will be ensured. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Video conferencing requires software (i). It can be used for telemedicine (ii). It can also be integrated into smart home security systems (iii).",
  },
  {
    id: 31,
    stem: "Arman regularly talks to his sister in Kuwait over the phone. But when his mother insisted on seeing and talking to her daughter and grandsons, he agreed to arrange something.",
    section: "Communication",
    type: "Uniform Stem",
    q: "What arrangement will Arman make to fulfill his mother's request?",
    opts: ["Teleconferencing", "E-mail", "Fax", "Video conferencing"],
    ans: "d",
    exp: "To both see and talk in real-time, Arman needs video conferencing.",
  },
  {
    id: 32,
    stem: "Arman regularly talks to his sister in Kuwait over the phone. But when his mother insisted on seeing and talking to her daughter and grandsons, he agreed to arrange something.",
    section: "Communication",
    type: "Uniform Stem",
    q: "An easy way for Arman's mother to communicate with her daughter and grandsons could be— i. Facebook ii. Bing iii. Skype. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Facebook and Skype offer video calling features. Bing is primarily a search engine.",
  },
  {
    id: 33,
    section: "Employment",
    type: "General",
    q: "Which one is a marketplace for outsourcing?",
    opts: ["Facebook", "Microspace", "Upwork", "Dig"],
    ans: "c",
    exp: "Upwork is a well-known global freelancing/outsourcing platform.",
  },
  {
    id: 34,
    section: "Employment",
    type: "General",
    q: "What is it called when foreign currency is earned by working from home via the Internet?",
    opts: ["Free-sourcing", "E-marketing", "E-job", "Outsourcing"],
    ans: "d",
    exp: "Outsourcing involves earning foreign currency by performing tasks for foreign companies over the internet.",
  },
  {
    id: 35,
    section: "Employment",
    type: "General",
    q: "What is freelancing?",
    opts: [
      "Working on a long-term contract",
      "Working at a regular 10-to-5 office",
      "Working independently for any person or institution",
      "Working with a specific work license",
    ],
    ans: "c",
    exp: "Freelancing means working independently based on one's skills, not being tied to a single long-term employer.",
  },
  {
    id: 36,
    section: "Employment",
    type: "General",
    q: "What is outsourcing?",
    opts: [
      "Working fixed hours",
      "Internet-based work",
      "Special browsing facilities",
      "Global network system",
    ],
    ans: "b",
    exp: "In this context, outsourcing refers to internet-based work performed for third-party companies.",
  },
  {
    id: 37,
    section: "Employment",
    type: "General",
    q: "Which topic is related to outsourcing?",
    opts: ["Facebooking", "Freelancing", "Tweeting", "Automation"],
    ans: "b",
    exp: "Freelancing is a primary method of performing outsourced work.",
  },
  {
    id: 38,
    section: "Employment",
    type: "General",
    q: "Which of the following has added a new dimension to boosting the country's economy?",
    opts: ["Facebook", "Outsourcing", "Google", "Newspapers"],
    ans: "b",
    exp: "Outsourcing brings foreign currency into the country, significantly boosting the national economy.",
  },
  {
    id: 39,
    section: "Employment",
    type: "General",
    q: "Which one is an outsourcing marketplace?",
    opts: ["Twitter", "MySpace", "Upwork", "Digg"],
    ans: "c",
    exp: "Upwork is a popular platform for finding and doing outsourced work.",
  },
  {
    id: 40,
    section: "Employment",
    type: "General",
    q: "What is the opportunity of employment using the Internet called?",
    opts: ["E-commerce", "Outsourcing", "E-business", "E-governance"],
    ans: "b",
    exp: "Internet-based job opportunities for foreign clients are known as outsourcing.",
  },
  {
    id: 41,
    section: "Employment",
    type: "General",
    q: "Which of the following is not included in outsourcing?",
    opts: ["SEO", "Ride sharing", "Google AdSense", "Affiliate marketing"],
    ans: "b",
    exp: "Ride sharing (like Uber) is a local service, whereas SEO, AdSense, and Affiliate marketing are digital services typically outsourced globally.",
  },
  {
    id: 42,
    section: "Employment",
    type: "General",
    q: "What is Fiverr.com?",
    opts: [
      "A software",
      "An e-commerce site",
      "An outsourcing marketplace",
      "A hardware",
    ],
    ans: "c",
    exp: "Fiverr is a well-known online marketplace for freelance services (outsourcing).",
  },
  {
    id: 43,
    section: "Employment",
    type: "General",
    q: "What is www.bdjobs.com?",
    opts: ["Web portal", "News portal", "Game portal", "Job portal"],
    ans: "d",
    exp: "bdjobs.com is a popular online portal in Bangladesh for finding jobs.",
  },
  {
    id: 44,
    section: "Employment",
    type: "Polytomous",
    q: "For employment nowadays— i. Work can be done from home ii. Internet facilities can be used iii. Various web services are available. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & ii", "i, ii & iii"],
    ans: "d",
    exp: "Modern employment (like freelancing) uses the internet, web services, and is often done from home.",
  },
  {
    id: 45,
    section: "Employment",
    type: "Polytomous",
    q: "In the field of transportation, which of the following has created employment opportunities for many in the country? i. Pathao ii. Uber iii. UberPool. Which of the following is correct?",
    opts: ["i", "i & ii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "All three ride-sharing services have created significant employment for drivers and delivery personnel.",
  },
  {
    id: 46,
    section: "Education",
    type: "General",
    q: "What is the term for conducting educational activities through online mutual interaction?",
    opts: ["E-Study", "E-Learning", "Unlearning", "Interactive Class"],
    ans: "d",
    exp: "An interactive class specifically refers to the mutual interaction enabled by online platforms.",
  },
  {
    id: 47,
    section: "Education",
    type: "General",
    q: "Through which of the following can students be directly taught in a live class?",
    opts: ["WebEx", "Google", "Facebook", "Yahoo"],
    ans: "a",
    exp: "WebEx is a dedicated video conferencing tool used for live online classes.",
  },

  // --- Page 74: Education & Medical ---
  {
    id: 48,
    section: "Education",
    type: "General",
    q: "In what format can textbooks published by the National Curriculum and Textbook Board be downloaded from the website?",
    opts: ["E-Learning", "E-Book", "E-Journal", "E-Text"],
    ans: "b",
    exp: "A digital version of a printed book is called an E-Book.",
  },
  {
    id: 49,
    section: "Education",
    type: "General",
    q: "During the COVID-19 outbreak, which method was used to conduct educational activities?",
    opts: ["Online Class", "Facebook Class", "E-Class", "On-term Class"],
    ans: "a",
    exp: "Online classes using platforms like Zoom/Google Meet became the primary method during the pandemic.",
  },
  {
    id: 50,
    section: "Education",
    type: "General",
    q: "What type of website is www.khanacademy.org?",
    opts: [
      "Medical Website",
      "Entertainment Website",
      "Business Website",
      "Educational Website",
    ],
    ans: "d",
    exp: "Khan Academy is a famous non-profit educational organization providing free online lessons.",
  },
  {
    id: 51,
    section: "Education",
    type: "General",
    q: "What is the term for conducting educational activities through online mutual interaction?",
    opts: ["E-Study", "E-Learning", "Unlearning", "Interactive Class"],
    ans: "b",
    exp: "E-Learning is the broad term for education delivered electronically.",
  },
  {
    id: 52,
    section: "Education",
    type: "General",
    q: "Which of the following is a disadvantage of e-learning?",
    opts: [
      "Teaching many students at once",
      "Studying from home",
      "Interactive teaching",
      "Absence of human elements",
    ],
    ans: "d",
    exp: "A major drawback of e-learning is the lack of physical, face-to-face human interaction and emotional connection.",
  },
  {
    id: 53,
    section: "Education",
    type: "Polytomous",
    q: "Through distance learning systems, students can— i. Submit homework with the help of the Internet ii. Participate in various online exams iii. View teacher lecture notes on websites. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Distance learning allows for online submission, exams, and access to digital notes.",
  },
  {
    id: 54,
    section: "Education",
    type: "Polytomous",
    q: "The benefits of e-learning are— i. Interactive teaching ii. Teaching from any location iii. Training for officials and employees. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "E-learning offers interactive tools, location independence, and is widely used for corporate/official training.",
  },
  {
    id: 55,
    stem: "During the COVID-19 pandemic, Ebad's school was closed. However, his teachers continued the curriculum from home without interruption.",
    section: "Education",
    type: "Uniform Stem",
    q: "Which method did Ebad's teachers use for teaching?",
    opts: ["Virtual Class", "Online Class", "Tele Class", "Home Class"],
    ans: "b",
    exp: "Conducting classes over the internet during the pandemic is known as online classes.",
  },
  {
    id: 56,
    stem: "During the COVID-19 pandemic, Ebad's school was closed. However, his teachers continued the curriculum from home without interruption.",
    section: "Education",
    type: "Uniform Stem",
    q: "To attend the lessons, which app could Ebad use? i. Google meet ii. Skype iii. Zoom. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Google Meet, Skype, and Zoom are all popular video conferencing apps used for online classes.",
  },
  {
    id: 57,
    section: "Medical",
    type: "General",
    q: "Which system delivers healthcare to people's doorsteps?",
    opts: ["Telemedicine", "E-Medicine", "Teleconferencing", "E-Hospital"],
    ans: "a",
    exp: "Telemedicine delivers healthcare services remotely via telecommunications.",
  },
  {
    id: 58,
    section: "Medical",
    type: "General",
    q: "What is the telemedicine system related to?",
    opts: ["Communication", "Employment", "Healthcare", "Education"],
    ans: "c",
    exp: "Telemedicine is the application of ICT in the healthcare sector.",
  },
  {
    id: 59,
    section: "Medical",
    type: "General",
    q: "What is it called when a patient receives treatment from a doctor via video conferencing?",
    opts: ["E-Medicine", "Telemedicine", "E-Telephone", "Medical Service"],
    ans: "b",
    exp: "Remote diagnosis and treatment via video is a primary form of telemedicine.",
  },
  {
    id: 60,
    section: "Medical",
    type: "Polytomous",
    q: "What are essential for telemedicine services? i. Specialist doctors ii. Diagnostic centers iii. Specialized networks. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Telemedicine requires specialists, diagnostic support for tests, and robust networks to connect them.",
  },
  {
    id: 61,
    section: "Medical",
    type: "Polytomous",
    q: "Which telemedicine-related website offers online medical services from anywhere in the world? i. Teladoc ii. MDLive iii. Epic care. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Teladoc, MDLive, and Epic care (EHR system) are all related to digital healthcare delivery.",
  },
  {
    id: 62,
    section: "Medical",
    type: "Polytomous",
    q: "Which software is used to store patient information? i. Therapy Notes ii. iCliniq iii. Care 360. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "c",
    exp: "Therapy Notes and Care 360 are specific software solutions for managing patient data (EHR).",
  },
  {
    id: 63,
    stem: "Dr. Raj, though based in the city, provides direct medical services to rural areas. He treats his friend's wart using a low-temperature technique, and his friend recovers quickly and returns home.",
    section: "Medical",
    type: "Uniform Stem",
    q: "What is the process called by which treatment is provided in remote areas? i. Video Conferencing ii. Telemedicine iii. E-mail. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Providing medical care remotely often uses video conferencing (i) and is termed telemedicine (ii).",
  },

  // --- Page 75: Medical, Research, & Office ---
  {
    id: 64,
    stem: "At the Diabetes Hospital in Pirganj Upazila, specialized doctors in Dhaka provide treatment via video conferencing.",
    section: "Medical",
    type: "Uniform Stem",
    q: "What is this method of providing medical service called?",
    opts: ["Telemedicine", "E-Health", "Teleconference", "Telepathy"],
    ans: "a",
    exp: "Using video conferencing to provide medical care is called telemedicine.",
  },
  {
    id: 65,
    stem: "At the Diabetes Hospital in Pirganj Upazila, specialized doctors in Dhaka provide treatment via video conferencing.",
    section: "Medical",
    type: "Uniform Stem",
    q: "Through telemedicine— i. Healthcare services can be provided to remote areas via video conferencing ii. A patient's report can be analyzed via email to diagnose the disease iii. Doctors can consult each other in complex diagnosis or surgery. Which of the following is correct?",
    opts: ["i", "i & ii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Telemedicine covers remote consultations via video, sharing reports via email, and doctor-to-doctor collaboration.",
  },
  {
    id: 66,
    section: "Research",
    type: "General",
    q: "Which of the following is essential for research in the modern world?",
    opts: [
      "Data processing technology",
      "Information and Communication Technology (ICT)",
      "Satellite technology",
      "Telecommunication technology",
    ],
    ans: "b",
    exp: "ICT is the broad foundational technology required for modern data collection, analysis, and sharing in research.",
  },
  {
    id: 67,
    section: "Research",
    type: "Polytomous",
    q: "ICT is applied in research— i. For simulation and equipment control ii. For data storage and processing iii. For researchers to share their ideas with each other. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "ICT is used for simulation, data processing/storage, and global communication.",
  },
  {
    id: 68,
    section: "Research",
    type: "Polytomous",
    q: "ICT helps overcome research-related obstacles by— i. Introducing the concept of e-journals ii. Opening up patent databases iii. Reducing the cost of publishing research papers. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "E-journals and patent databases are direct ICT solutions for accessing and sharing research easily.",
  },
  {
    id: 69,
    section: "Office",
    type: "General",
    q: "Automating all office tasks is called—",
    opts: [
      "Automation",
      "Telecommunication",
      "Digitalization",
      "One-stop support",
    ],
    ans: "a",
    exp: "Office automation refers to the use of computer systems to handle routine office tasks.",
  },
  {
    id: 70,
    section: "Office",
    type: "General",
    q: "Which service is currently used for securely storing and sharing files?",
    opts: ["Twitter", "Facebook", "Dropbox", "Next Gen"],
    ans: "c",
    exp: "Dropbox is a cloud storage service designed for securely storing and sharing files.",
  },
  {
    id: 71,
    section: "Office",
    type: "Polytomous",
    q: "Risks of office automation include— i. Decrease in job opportunities for inexperienced workers ii. Reduced interaction with customers iii. Uncontrolled use of giant tech companies' data centers. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Automation can lead to job losses, reduced human interaction, and data security risks from reliance on major tech infrastructure.",
  },
  {
    id: 72,
    section: "Smart Home",
    type: "General",
    q: "What is a residence fully equipped with modern ICT called?",
    opts: ["Modern home", "Smart home", "Tech home", "Sci-fi home"],
    ans: "b",
    exp: "A smart home is one where appliances and systems are connected and controlled via ICT.",
  },
  {
    id: 73,
    section: "Smart Home",
    type: "Polytomous",
    q: "In a smart home, the automated systems controlled by devices include— i. Fire system ii. Garage system iii. Temperature control system. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Smart homes can automate security (fire), access (garage), and climate (temperature) controls.",
  },
  {
    id: 74,
    section: "Smart Home",
    type: "Polytomous",
    q: "Benefits of a smart home include— i. Round-the-clock security ii. Automated control systems iii. Disability-friendly environment. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Smart homes offer 24/7 security, automated convenience, and can be designed to assist people with disabilities.",
  },
  {
    id: 75,
    stem: "Mr. Raihan has built a home that uses modern ICT, where all devices and appliances are remotely controlled via software.",
    section: "Smart Home",
    type: "Uniform Stem",
    q: "What is Mr. Raihan's home called?",
    opts: ["Home tech", "Tech home", "Smart home", "Automation"],
    ans: "c",
    exp: "A home with remotely controlled, internet-connected appliances is a smart home.",
  },
  {
    id: 76,
    stem: "Mr. Raihan has built a home that uses modern ICT, where all devices and appliances are remotely controlled via software.",
    section: "Smart Home",
    type: "Uniform Stem",
    q: "Building such a home requires— i. Substantial financial investment ii. Skilled personnel for maintenance iii. Voice-controlled devices. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Smart homes are expensive, require skilled tech support, and often include voice-controlled features like Alexa.",
  },
  {
    id: 77,
    section: "Business & Commerce",
    type: "General",
    q: "What is it called when business is conducted over the internet?",
    opts: ["E-mail", "E-commerce", "E-trade", "E-governance"],
    ans: "b",
    exp: "E-commerce refers to commercial transactions conducted electronically on the internet.",
  },

  // --- Page 76: Business & Commerce / News / Entertainment ---
  {
    id: 78,
    section: "Business & Commerce",
    type: "General",
    q: "Which of the following is not included in e-commerce?",
    opts: ["Marketing", "Supply", "Transactions", "Promotion"],
    ans: "d",
    exp: "While marketing, supply, and transactions are core processes, 'Promotion' is a broader marketing concept not exclusively defining e-commerce.",
  },
  {
    id: 79,
    section: "Business & Commerce",
    type: "General",
    q: "What is one advantage of e-commerce?",
    opts: [
      "Advertising and marketing",
      "Legislation and enforcement",
      "Transaction security",
      "Verification of product quality",
    ],
    ans: "a",
    exp: "E-commerce provides a powerful platform for global advertising and marketing at low costs.",
  },
  {
    id: 80,
    section: "Business & Commerce",
    type: "General",
    q: "What is www.daraz.com?",
    opts: ["E-book site", "E-mail site", "E-Bank site", "E-commerce site"],
    ans: "d",
    exp: "Daraz is a major online marketplace (e-commerce site) in South Asia.",
  },
  {
    id: 81,
    section: "Business & Commerce",
    type: "General",
    q: "What is the full form of EFT?",
    opts: [
      "Electronic Fund Transfer",
      "Emotional Freedom Techniques",
      "Enterprising Fund Transfer",
      "Electronic Fund Techniques",
    ],
    ans: "a",
    exp: "EFT stands for Electronic Fund Transfer, transferring money electronically between banks.",
  },
  {
    id: 82,
    section: "Business & Commerce",
    type: "General",
    q: "What is not required for online banking?",
    opts: [
      "Debit or credit card",
      "Physically visiting the bank",
      "Computer or smartphone",
      "Internet connection",
    ],
    ans: "b",
    exp: "The primary purpose of online banking is to avoid physically visiting the bank.",
  },
  {
    id: 83,
    section: "Business & Commerce",
    type: "General",
    q: "What is it called when tenders are invited online?",
    opts: ["E-commerce", "E-mail", "E-tender", "E-post"],
    ans: "c",
    exp: "Inviting bids or tenders via the internet is known as an e-tender.",
  },
  {
    id: 84,
    section: "Business & Commerce",
    type: "Polytomous",
    q: "What are the benefits of e-shopping? i. Cost saving ii. Access to many products in one place iii. Time saving. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "E-shopping saves time and travel costs, and allows access to a vast array of products.",
  },
  {
    id: 85,
    section: "Business & Commerce",
    type: "Polytomous",
    q: "EFT enables transactions between— i. Accounts of different branches of the same bank ii. Accounts of different financial institutions iii. Foreign bank accounts. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "EFT can be used for internal transfers, transfers to other institutions, and international transfers.",
  },
  {
    id: 86,
    section: "Business & Commerce",
    type: "Polytomous",
    q: "Which of the following terms are related to e-payment? i. Credit card ii. Debit card iii. Identity card. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Credit and debit cards are used for electronic payments. An identity card is not a payment method.",
  },
  {
    id: 87,
    stem: "A farmer from Chapainawabganj planted about 200 tree saplings on his land. During winter, gentle winds helped the trees grow large mangoes. The farmer was happy to see this. He used the internet from home to sell the mangoes and made a profit.",
    section: "Business & Commerce",
    type: "Uniform Stem",
    q: "According to the passage, the mango selling process is related to:",
    opts: ["E-service", "E-commerce", "E-banking", "E-business"],
    ans: "b",
    exp: "Selling goods over the internet is a direct example of e-commerce.",
  },
  {
    id: 88,
    stem: "A farmer from Chapainawabganj planted about 200 tree saplings on his land. During winter, gentle winds helped the trees grow large mangoes. The farmer was happy to see this. He used the internet from home to sell the mangoes and made a profit.",
    section: "Business & Commerce",
    type: "Uniform Stem",
    q: "Based on the passage, what benefit did the farmer enjoy? i. Ability to collect more harvest ii. Ability to use tissue culture iii. Ability to reduce global warming. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "The passage mentions a large harvest (i) and using the internet, but not tissue culture or global warming.",
  },
  {
    id: 89,
    section: "News",
    type: "General",
    q: "What are almost all newspaper offices currently publishing?",
    opts: ["Online version", "Updated news service", "E-paper", "News server"],
    ans: "a",
    exp: "Almost all modern newspapers publish an online version to reach a wider audience.",
  },
  {
    id: 90,
    section: "News",
    type: "Polytomous",
    q: "To tackle fake news or hate propaganda in our country, the following are required: i. AI-based own news server ii. Expansion of network and security systems iii. Powerful database. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Combating fake news requires robust technology including AI servers, secure networks, and strong databases.",
  },
  {
    id: 91,
    section: "Entertainment",
    type: "General",
    q: "What is Netflix?",
    opts: [
      "Streaming service",
      "E-commerce site",
      "Fourth-generation robot",
      "Virtual reality",
    ],
    ans: "a",
    exp: "Netflix is a global subscription-based streaming service for movies and TV shows.",
  },
  {
    id: 92,
    section: "Entertainment",
    type: "General",
    q: "In social media, what helps in easily gauging public opinion?",
    opts: ["Tweet", "React", "Like", "Blogging"],
    ans: "c",
    exp: "Likes, reactions, and shares on social media are direct indicators of public opinion.",
  },
  {
    id: 93,
    section: "Entertainment",
    type: "Polytomous",
    q: "Popular social media platforms include— i. Facebook ii. Instagram iii. WhatsApp. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Facebook, Instagram, and WhatsApp are all major social media/messaging platforms.",
  },

  // --- Page 77: Virtual Reality ---
  {
    id: 94,
    section: "VR",
    type: "General",
    q: "A specialized software used for simulation is—",
    opts: ["CAD", "Therapy Notes", "Epic Care", "Care 360"],
    ans: "a",
    exp: "CAD (Computer-Aided Design) software is frequently used to create 3D models for simulation environments.",
  },
  {
    id: 95,
    section: "VR",
    type: "General",
    q: "Where is telepresence applied?",
    opts: [
      "Cryosurgery",
      "Biometrics",
      "Virtual reality",
      "Artificial intelligence",
    ],
    ans: "c",
    exp: "Telepresence, the feeling of being present elsewhere, is a key application of Virtual Reality.",
  },
  {
    id: 96,
    section: "VR",
    type: "General",
    q: "What does HMD in virtual reality refer to?",
    opts: ["Special glasses", "Hand gloves", "Body suit", "Reality engine"],
    ans: "a",
    exp: "HMD stands for Head-Mounted Display, essentially special VR glasses or helmets.",
  },
  {
    id: 97,
    section: "VR",
    type: "General",
    q: "What is a real-world-based artificial environment created using hardware and software called?",
    opts: [
      "Robotics",
      "Artificial intelligence",
      "Virtual reality",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Virtual reality simulates a real or imagined environment using hardware and software.",
  },
  {
    id: 98,
    section: "VR",
    type: "General",
    q: "On which theory is virtual reality based?",
    opts: [
      "Morgan theory",
      "Simulation theory",
      "Computer theory",
      "Virtual theory",
    ],
    ans: "b",
    exp: "VR is built upon simulation theory, creating artificial sensory experiences.",
  },
  {
    id: 99,
    section: "VR",
    type: "General",
    q: "What is a feature of virtual reality?",
    opts: [
      "Data exchange",
      "Movement in the real world",
      "Entry into a 2D world",
      "Movement in an imaginary world",
    ],
    ans: "d",
    exp: "VR allows users to interact with and move through computer-generated imaginary worlds.",
  },
  {
    id: 100,
    section: "VR",
    type: "General",
    q: "What must be worn on the hand for virtual reality?",
    opts: ["HMD", "Data glove", "Body suit", "Head set"],
    ans: "b",
    exp: "Data gloves are worn on the hands to track movements and provide haptic feedback in VR.",
  },
  {
    id: 101,
    section: "VR",
    type: "General",
    q: "The typical virtual reality environment is-",
    opts: [
      "One-dimensional",
      "Two-dimensional",
      "Three-dimensional",
      "Four-dimensional",
    ],
    ans: "c",
    exp: "VR environments are typically 3D to provide a realistic, immersive experience.",
  },
  {
    id: 102,
    section: "VR",
    type: "General",
    q: "In which field is computer simulation applied?",
    opts: ["Cryosurgery", "Virtual reality", "Internet", "Video conferencing"],
    ans: "b",
    exp: "Computer simulation is the foundational technology behind Virtual Reality.",
  },
  {
    id: 103,
    section: "VR",
    type: "General",
    q: "What is used in virtual reality?",
    opts: [
      "3D simulation",
      "2D simulation",
      "Hand geometry",
      "Biological data",
    ],
    ans: "a",
    exp: "3D simulation creates the immersive visual environments necessary for VR.",
  },
  {
    id: 104,
    section: "VR",
    type: "General",
    q: "What dimension of images is used in virtual reality?",
    opts: [
      "One-dimensional",
      "Two-dimensional",
      "Three-dimensional",
      "Multi-dimensional",
    ],
    ans: "c",
    exp: "VR uses 3D images to create depth and realism.",
  },
  {
    id: 105,
    section: "VR",
    type: "General",
    q: "What is it called when an outcome is artificially implemented in a computer?",
    opts: ["Telepresence", "Simulation", "Modeling", "Stimulation"],
    ans: "b",
    exp: "Simulation is the imitation of real-world processes or systems over time.",
  },
  {
    id: 106,
    section: "VR",
    type: "General",
    q: "What is used in flight training through virtual reality?",
    opts: [
      "Flight recorder",
      "Flight simulator",
      "Flight stimulator",
      "Flight device",
    ],
    ans: "b",
    exp: "A flight simulator provides a realistic cockpit environment and visual system for safe training.",
  },
  {
    id: 107,
    section: "VR",
    type: "General",
    q: "What is the new form of virtual reality?",
    opts: [
      "Augmented reality",
      "Simulation reality",
      "Software reality",
      "Impact reality",
    ],
    ans: "a",
    exp: "Augmented Reality (AR) is an evolution/extension of VR that overlays digital information onto the real world.",
  },
  {
    id: 108,
    section: "VR",
    type: "Polytomous",
    q: "Which tasks can be done safely through virtual reality? i. Space missions ii. Military combat training iii. Environmental protection. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "VR is widely used to simulate dangerous tasks like spacewalks and combat training safely.",
  },
  {
    id: 109,
    section: "VR",
    type: "Polytomous",
    q: "Due to the use of virtual reality, people— i. May experience hearing loss ii. May become detached from reality iii. May lose humanity. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Excessive VR use can cause physical strain (hearing/vision), psychological detachment, and antisocial behavior.",
  },
  {
    id: 110,
    section: "VR",
    type: "Polytomous",
    q: "Virtual reality has effects on— i. Military field ii. Training iii. Education. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "VR impacts military training, general professional training, and education.",
  },
  {
    id: 111,
    section: "VR",
    type: "Polytomous",
    q: "In the medical field, virtual reality is used— i. To train new surgeons ii. In complex surgeries including artificial limb implantation iii. In DNA analysis. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "VR is used for surgical simulation and planning (like limb implants). DNA analysis is bioinformatics.",
  },
  {
    id: 112,
    section: "VR",
    type: "Polytomous",
    q: "Equipment used in virtual reality includes— i. HMD: Head Mounted Display ii. Gloves iii. Keyboard. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "HMDs and data gloves are standard VR equipment. Keyboards are typical computing input devices, not VR-specific.",
  },
  {
    id: 113,
    section: "VR",
    type: "Polytomous",
    q: "What can be safely learned through virtual reality? i. Driving ii. Practicing medicine iii. Flying planes. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Driving, medical procedures, and flying are all taught using VR simulators to ensure safety.",
  },
  {
    id: 114,
    stem: "Kamal and his friends visited a park and used special glasses, gloves, and helmets to enjoy various exhibits through technology.",
    section: "VR",
    type: "Uniform Stem",
    q: "Where might the technology in the passage be used? i. Viewing archaeological exhibits ii. Training in DNA analysis iii. Data source analysis. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "VR is used for virtual museum tours (i) and can be used for educational simulations like DNA analysis (ii).",
  },

  // --- Page 78: Artificial Intelligence ---
  {
    id: 115,
    stem: "Raiyana, after completing MBBS, enrolled for higher studies. She received surgical training in an artificial environment without real patients.",
    section: "VR",
    type: "Uniform Stem",
    q: "The method of Raiyana's training is-",
    opts: ["Biometrics", "Virtual reality", "Nanotechnology", "Bioinformatics"],
    ans: "b",
    exp: "Simulating an environment for training without real patients is Virtual Reality.",
  },
  {
    id: 116,
    stem: "Raiyana, after completing MBBS, enrolled for higher studies. She received surgical training in an artificial environment without real patients.",
    section: "VR",
    type: "Uniform Stem",
    q: "What is required to implement the above method? i. Computer simulation ii. 3D image iii. Actuator. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "VR relies heavily on computer simulation (i) and 3D images (ii).",
  },
  {
    id: 117,
    stem: 'Mr. "X" received flight training using a flight simulator. During a real flight, the aircraft crashed due to a technical fault, and all passengers\' bodies were burned beyond recognition.',
    section: "VR",
    type: "Uniform Stem",
    q: "What technology might be used to identify the deceased?",
    opts: ["Finger Print", "Hand Geometry", "Retina Scan", "DNA Analysis"],
    ans: "d",
    exp: "When bodies are burned beyond recognition, DNA analysis (profiling) is the most reliable method for identification.",
  },
  {
    id: 118,
    stem: 'Mr. "X" received flight training using a flight simulator. During a real flight, the aircraft crashed due to a technical fault, and all passengers\' bodies were burned beyond recognition.',
    section: "VR",
    type: "Uniform Stem",
    q: 'The technology used in Mr. "X"\'s training could also be used- i. To demonstrate heart functions to medical students ii. To train engineering students for risky tasks iii. To train police in traffic management. Which of the following is correct?',
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "The technology is VR/Simulation, which is applicable in medical training, risky engineering tasks, and traffic/police simulations.",
  },
  {
    id: 119,
    stem: "In the age of technology, Shawkat receives driving lessons at home through a special system, while his father uses another technology to grow high-quality flowers.",
    section: "VR",
    type: "Uniform Stem",
    q: "The technology used by Shawkat is-",
    opts: [
      "Virtual reality",
      "E-learning",
      "E-commerce",
      "Artificial intelligence",
    ],
    ans: "a",
    exp: "Learning to drive at home through a simulated system is Virtual Reality.",
  },
  {
    id: 120,
    stem: "In the age of technology, Shawkat receives driving lessons at home through a special system, while his father uses another technology to grow high-quality flowers.",
    section: "VR",
    type: "Uniform Stem",
    q: "A limitation of the technology used by Shawkat's father is- i. Native species may become extinct ii. Crop yield may decrease iii. New diseases may emerge. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "The technology is Genetic Engineering. It can lead to loss of biodiversity (extinction of native species) and the emergence of new diseases/resistance. It usually *increases* yield, so ii is wrong.",
  },
  {
    id: 121,
    section: "AI",
    type: "General",
    q: "What is the technique of enabling a computer to speak and listen?",
    opts: [
      "Machine Learning",
      "Image Processing",
      "Speech Processing",
      "Natural Language Processing",
    ],
    ans: "c",
    exp: "Speech Processing (or Speech Recognition/Synthesis) is the specific technology for listening and speaking.",
  },
  {
    id: 122,
    section: "AI",
    type: "General",
    q: "Which is considered the most successful field in Artificial Intelligence?",
    opts: ["Robotics", "Speech", "Vision", "Machine"],
    ans: "d",
    exp: "Machine Learning is widely considered the most successful and prevalent subfield of modern AI.",
  },
  {
    id: 123,
    section: "AI",
    type: "General",
    q: "Which of the following is a hidden layer technology?",
    opts: [
      "Genetic Engineering",
      "Biometrics",
      "Artificial Intelligence",
      "Robotics",
    ],
    ans: "c",
    exp: "Artificial Intelligence relies on neural networks, which use hidden layers to process data.",
  },
  {
    id: 124,
    section: "AI",
    type: "General",
    q: "In artificial intelligence, the ability to make correct decisions by learning from repeated mistakes is developed through which method?",
    opts: [
      "Reinforcement Learning",
      "Unsupervised Learning",
      "Enforcement Learning",
      "Supervised Learning",
    ],
    ans: "a",
    exp: "Reinforcement learning involves an agent learning to make decisions by performing actions and receiving rewards or penalties (trial and error).",
  },
  {
    id: 125,
    section: "AI",
    type: "General",
    q: "What is the method called that works like the human brain?",
    opts: [
      "Deep Learning",
      "Neural Network",
      "Machine Learning",
      "Neural Path",
    ],
    ans: "b",
    exp: "Neural Networks are computational models inspired by the structure and function of the human brain.",
  },
  {
    id: 126,
    section: "AI",
    type: "General",
    q: "Which technology expresses human thinking through machines?",
    opts: [
      "Biometrics",
      "Bioinformatics",
      "Artificial Intelligence",
      "Virtual Reality",
    ],
    ans: "c",
    exp: "AI is broadly defined as the simulation of human intelligence and thinking processes by machines.",
  },
  {
    id: 127,
    section: "AI",
    type: "General",
    q: "What is the process of enabling machines to think or analyze?",
    opts: [
      "Global Village",
      "Telepathy",
      "Tele Intelligence",
      "Artificial Intelligence",
    ],
    ans: "d",
    exp: "Enabling machines to mimic human thought is Artificial Intelligence.",
  },
  {
    id: 128,
    section: "AI",
    type: "General",
    q: "Where is artificial intelligence mainly used?",
    opts: ["Biometrics", "Bioinformatics", "Robotics", "Nanotechnology"],
    ans: "c",
    exp: "Robotics is a primary practical application area where AI is used to control and automate physical machines.",
  },
  {
    id: 129,
    section: "AI",
    type: "General",
    q: 'Who first introduced the term "Artificial Intelligence" to the world?',
    opts: [
      "Jack Williamson",
      "Marshall Mcluhan",
      "John McCarthy",
      "Karel Capek",
    ],
    ans: "c",
    exp: "John McCarthy first coined the term 'Artificial Intelligence' in 1956.",
  },
  {
    id: 130,
    section: "AI",
    type: "General",
    q: "How many layers does a neural network have?",
    opts: ["2", "3", "4", "5"],
    ans: "b",
    exp: "A basic neural network consists of three layers: Input layer, Hidden layer(s), and Output layer.",
  },
  {
    id: 131,
    section: "AI",
    type: "General",
    q: "Which of the following is mainly used in Artificial Intelligence?",
    opts: ["DROLOG", "PYTHON", "HTML", "COBOL"],
    ans: "b",
    exp: "Python is the most widely used programming language in AI and machine learning due to its extensive libraries.",
  },
  {
    id: 132,
    section: "AI",
    type: "General",
    q: "What is an expert system?",
    opts: ["Application", "Device", "Robot", "Neural Network"],
    ans: "a",
    exp: "An expert system is a computer application (software) designed to solve complex problems by mimicking the decision-making ability of a human expert.",
  },

  // --- Page 79: AI & Robotics ---
  {
    id: 133,
    section: "AI",
    type: "Polytomous",
    q: "Fields of Artificial Intelligence include i. Natural Language Processing ii. Spreadsheet Processing iii. Speech Processing. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "NLP and Speech Processing are core AI fields. Spreadsheet processing is standard software functionality, not AI-specific.",
  },
  {
    id: 134,
    section: "AI",
    type: "Polytomous",
    q: "Which of the following is under the scope of AI? i. Machine Learning ii. Computer Vision iii. Natural Language Processing. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Machine Learning, Computer Vision, and NLP are all major subfields of AI.",
  },
  {
    id: 135,
    section: "AI",
    type: "Polytomous",
    q: "Which is a field of Artificial Intelligence? i. Machine Learning ii. E-learning iii. Deep Learning. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Machine Learning and Deep Learning are AI fields. E-learning is the use of ICT in education.",
  },
  {
    id: 136,
    section: "AI",
    type: "Polytomous",
    q: "Which is a field of Artificial Intelligence? i. Deep Learning ii. NLP iii. HMD. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Deep Learning and NLP are AI fields. HMD (Head Mounted Display) is VR hardware.",
  },
  {
    id: 137,
    section: "AI",
    type: "Polytomous",
    q: "AI applications include— i. Agriculture ii. E-commerce iii. Warfare. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "AI is applied in agriculture (crop monitoring), e-commerce (recommendations), and warfare (autonomous drones).",
  },
  {
    id: 138,
    section: "AI",
    type: "Polytomous",
    q: "Which are fields of AI? i. Machine Learning ii. Robotics iii. Word Processing. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Machine Learning and Robotics are AI fields. Word processing is a standard office application.",
  },
  {
    id: 139,
    section: "AI",
    type: "Polytomous",
    q: "Practical fields of AI— i. Expert System ii. Fuzzy Logic iii. Learning System. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Expert systems, fuzzy logic, and learning systems are all practical applications/techniques within AI.",
  },
  {
    id: 140,
    section: "AI",
    type: "Polytomous",
    q: "AI includes the following fields— i. Machine Learning ii. Speech iii. Vision. Which is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Machine learning, speech recognition/synthesis, and computer vision are all core AI fields.",
  },
  {
    id: 141,
    section: "AI",
    type: "Polytomous",
    q: "Which are successful applications of AI? i. Driverless Car ii. Weather Forecasting iii. Molecular Medicine. Which is correct?",
    opts: ["i", "i & ii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "AI is used in autonomous vehicles, complex weather prediction models, and molecular medicine (drug discovery).",
  },
  {
    id: 142,
    stem: "The agriculture department provided genetically engineered seeds to farmers, leading to higher yields.",
    section: "AI",
    type: "Uniform Stem",
    q: "i. Biodiversity will change ii. Deadly viruses may emerge iii. Unethical gene transfer may occur. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Genetic engineering can alter biodiversity, risk creating new viruses, and raise ethical concerns about gene transfer.",
  },
  {
    id: 143,
    stem: "Maisha plays chess on the computer whenever she has time, and she rarely manages to win against it. However, Maisha has noticed that sometimes the computer makes minor mistakes in response to her moves.",
    section: "AI",
    type: "Uniform Stem",
    q: "Which concept is used to create the chess-playing program on Maisha's computer?",
    opts: [
      "Robotics",
      "Virtual Reality",
      "Artificial Intelligence",
      "Nanotechnology",
    ],
    ans: "c",
    exp: "AI algorithms (like minimax and machine learning) are used to create computer opponents in chess.",
  },
  {
    id: 144,
    stem: "Maisha plays chess on the computer whenever she has time, and she rarely manages to win against it. However, Maisha has noticed that sometimes the computer makes minor mistakes in response to her moves.",
    section: "AI",
    type: "Uniform Stem",
    q: "Sometimes the computer makes mistakes in response to Maisha's moves. This is because, in Artificial Intelligence— i. Decisions are made based on information and experience ii. It is not possible to play chess iii. Learning systems play an important role. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "AI makes decisions based on its training/experience (i) and uses learning systems (iii), which can occasionally lead to imperfect heuristics.",
  },
  {
    id: 145,
    section: "Robotics",
    type: "General",
    q: "How many specific features are there in robot construction?",
    opts: ["2", "3", "4", "5"],
    ans: "b",
    exp: "The textbook lists three features: mechanical structure, power supply, and computer programming control.",
  },
  {
    id: 146,
    section: "Robotics",
    type: "General",
    q: "What is Robotics?",
    opts: [
      "The science of robots",
      "The working principle of robots",
      "Robots used in industry",
      "Language used to build robots",
    ],
    ans: "a",
    exp: "Robotics is the branch of technology that deals with the design, construction, and operation of robots.",
  },
  {
    id: 147,
    section: "Robotics",
    type: "General",
    q: "What do you call the branch of technology related to the concept, design, production, operation, or application of robots?",
    opts: ["Robotics", "Biometrics", "Bioinformatics", "Behavior"],
    ans: "a",
    exp: "Robotics is the specific field for designing, building, and using robots.",
  },
  {
    id: 148,
    section: "Robotics",
    type: "General",
    q: 'Which of the following best describes the meaning of the word "robot"?',
    opts: ["Alien", "Artificial machine", "Humanoid robot", "Superior being"],
    ans: "b",
    exp: "A robot is an automated, computer-controlled artificial machine designed to perform tasks.",
  },
  {
    id: 149,
    section: "Robotics",
    type: "General",
    q: "In which field are actuators used?",
    opts: ["Robotics", "Biometrics", "Virtual Reality", "Bioinformatics"],
    ans: "a",
    exp: "Actuators are motors or devices that allow robots to move and operate.",
  },

  // --- Page 80: Robotics ---
  {
    id: 150,
    section: "Robotics",
    type: "General",
    q: "What does the shape or structure of a robot depend on?",
    opts: [
      "Human structure",
      "The task of the robot",
      "Artificial Intelligence",
      "Designer",
    ],
    ans: "b",
    exp: "A robot's design is primarily dictated by the specific tasks it is intended to perform.",
  },
  {
    id: 151,
    section: "Robotics",
    type: "General",
    q: "What are robots used for?",
    opts: [
      "Administrative decision-making",
      "Dangerous tasks as a substitute for humans",
      "To increase human employment",
      "To make independent complex decisions",
    ],
    ans: "b",
    exp: "Robots are heavily used in dangerous environments (e.g., bomb disposal, hazardous zones) to protect human life.",
  },
  {
    id: 152,
    section: "Robotics",
    type: "General",
    q: "Which is a use of robots?",
    opts: [
      "Complex surgical procedures",
      "Signature verification",
      "Producing new seed varieties",
      "Shaping tennis balls",
    ],
    ans: "a",
    exp: "Robotic surgery allows for highly precise, minimally invasive complex procedures.",
  },
  {
    id: 153,
    section: "Robotics",
    type: "General",
    q: 'The word "robot" originally comes from which language?',
    opts: ["Spanish", "Greek", "Slavic", "Latin"],
    ans: "c",
    exp: "The word comes from the Slavic word 'robota', meaning worker or forced labor.",
  },
  {
    id: 154,
    section: "Robotics",
    type: "General",
    q: "What is the name of the robot sent by NASA to Mars?",
    opts: ["Curiosity", "Apollo", "Verena", "Vostok"],
    ans: "a",
    exp: "NASA's Curiosity rover is a famous robotic vehicle exploring Mars.",
  },
  {
    id: 155,
    section: "Robotics",
    type: "General",
    q: "Which technology performs tasks that are difficult for humans?",
    opts: [
      "Robotics",
      "Virtual Reality",
      "Nanotechnology",
      "Artificial Intelligence",
    ],
    ans: "a",
    exp: "Robotics is the physical technology that embodies AI to perform difficult or dangerous physical tasks.",
  },
  {
    id: 156,
    section: "Robotics",
    type: "General",
    q: "Up to how many degrees can a robot rotate for functional purposes?",
    opts: ["90°", "180°", "270°", "360°"],
    ans: "d",
    exp: "Many robotic joints or bases are designed to rotate a full 360 degrees for maximum flexibility.",
  },
  {
    id: 157,
    section: "Robotics",
    type: "Polytomous",
    q: "In robot tasks— i. Controlled by programming ii. Electric power is used iii. Anyone can operate it when needed. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Robots are controlled by programs (i) and require power like electricity (ii), but not just anyone can operate specialized robots without training.",
  },
  {
    id: 158,
    section: "Robotics",
    type: "Polytomous",
    q: "Applicable in Robotics— i. Hardware ii. Artificial Intelligence iii. Conducting new research. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Robotics relies on both physical hardware and AI software to operate.",
  },
  {
    id: 159,
    section: "Robotics",
    type: "Polytomous",
    q: "Robotics is related to— i. Science ii. Chemistry iii. Engineering. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Robotics is an interdisciplinary field combining science (physics/CS) and engineering.",
  },
  {
    id: 160,
    section: "Robotics",
    type: "Polytomous",
    q: "What kind of work is done in large factories using computer-controlled robots? i. Labor-intensive work ii. Simple work iii. Hazardous work. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "Factories use robots primarily for simple, repetitive tasks (ii) and hazardous tasks (iii).",
  },
  {
    id: 161,
    section: "Robotics",
    type: "Polytomous",
    q: "Robots are used for— i. Household chores ii. Planning iii. Internal mining operations. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Robots can do household chores (i) and mining (iii). They do not 'plan' strategically in the human sense.",
  },
  {
    id: 162,
    section: "Robotics",
    type: "Polytomous",
    q: "In military use, robots are used— i. For landmine removal ii. For direct combat iii. As a substitute for drivers in war vehicles. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Military robots are used for bomb disposal, direct combat (drones), and autonomous vehicles.",
  },
  {
    id: 163,
    stem: "Kamal, a computer science student, built a machine that can move over uneven surfaces and record video to send to others.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "Which technology did Kamal use to build his machine?",
    opts: ["Biometrics", "Nanotechnology", "Robotics", "Bioinformatics"],
    ans: "c",
    exp: "Building a programmable machine that moves and records video is a project in Robotics.",
  },
  {
    id: 164,
    stem: "Kamal, a computer science student, built a machine that can move over uneven surfaces and record video to send to others.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "Where can Kamal's machine be used? i. Medical field ii. Household management iii. Industrial factories. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "A mobile video robot can be used for telemedicine (i), home security/cleaning (ii), and factory inspection (iii).",
  },
  {
    id: 165,
    stem: "Arisha's father built a machine that can help with household chores like cleaning and cooking.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "What is the control system for the machine?",
    opts: ["Power system", "Electric motor", "Processor", "Electric circuit"],
    ans: "c",
    exp: "The 'brain' or control system of a robot is the processor (computer).",
  },
  {
    id: 166,
    stem: "Arisha's father built a machine that can help with household chores like cleaning and cooking.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "Where is this machine applicable? i. Military ii. Medical iii. Manufacturing. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Robotic technology for tasks is applicable in all these fields.",
  },
  {
    id: 167,
    stem: "Shamim, a university student, built a device that can move across different surfaces and send video.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "What technology did Shamim use to build the device?",
    opts: ["Robotics", "Genetic Engineering", "Nanotechnology", "Biometrics"],
    ans: "a",
    exp: "A moving device with sensors and cameras is a robot.",
  },

  // --- Page 81: Robotics & Space Exploration ---
  {
    id: 168,
    stem: "Shamim, a university student, built a device that can move across different surfaces and send video.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "Where can Shamim's device be used? i. Industrial factories ii. Medical field iii. Household management. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "A mobile video robot has broad applications including industry, healthcare, and home automation.",
  },
  {
    id: 169,
    stem: "During a digital fair inauguration, a humanoid robot named Sophia conversed with the Prime Minister.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "What technology is hinted at in the stimulus?",
    opts: [
      "Nanotechnology",
      "Genetic Engineering",
      "Robotics",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Sophia is a well-known humanoid robot, representing Robotics.",
  },
  {
    id: 170,
    stem: "During a digital fair inauguration, a humanoid robot named Sophia conversed with the Prime Minister.",
    section: "Robotics",
    type: "Uniform Stem",
    q: "What is a result of using the technology in the stimulus?",
    opts: [
      "Children's intelligence will improve",
      "Human motivation will increase",
      "Human values will develop",
      "Industrial costs will decrease",
    ],
    ans: "d",
    exp: "The broad impact of robotics (like Sophia) and AI in industry is increased efficiency and decreased operational costs.",
  },
  {
    id: 171,
    section: "Space",
    type: "General",
    q: "What was the name of the first artificial satellite sent into space?",
    opts: ["Lunar-1", "Sputnik-1", "Curiosity Rover", "Voyager-1"],
    ans: "b",
    exp: "Sputnik-1 was launched by the Soviet Union in 1957.",
  },
  {
    id: 172,
    section: "Space",
    type: "General",
    q: "In what year was the first artificial satellite launched into space?",
    opts: ["1955", "1956", "1957", "1958"],
    ans: "c",
    exp: "Sputnik-1 was launched in 1957.",
  },
  {
    id: 173,
    section: "Space",
    type: "General",
    q: 'To which planet was the "Curiosity" rover sent?',
    opts: ["Mars", "Mercury", "Jupiter", "Saturn"],
    ans: "a",
    exp: "NASA's Curiosity rover is exploring the surface of Mars.",
  },
  {
    id: 174,
    section: "Space",
    type: "General",
    q: "Where is the space station located?",
    opts: ["In the Sun's orbit", "On Mars", "On Earth", "In Earth's orbit"],
    ans: "d",
    exp: "Space stations like the ISS orbit the Earth.",
  },
  {
    id: 175,
    section: "Space",
    type: "General",
    q: "Name of the first manned spacecraft to land on the Moon—",
    opts: ["Apollo-11", "Sputnik-2", "Sputnik-1", "Luna-9"],
    ans: "a",
    exp: "Apollo 11 was the first crewed mission to land on the Moon in 1969.",
  },
  {
    id: 176,
    section: "Space",
    type: "Polytomous",
    q: "Spacecraft used in space exploration— i. Sputnik-1 ii. Mars-3 iii. Vostok-4. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Sputnik-1 and Mars-3 were early space exploration craft. Vostok-4 carried a cosmonaut but is primarily a human spaceflight mission.",
  },
  {
    id: 177,
    section: "Space",
    type: "Polytomous",
    q: "Currently, spacecraft are used for— i. Delivering goods to space stations ii. Deploying artificial satellites iii. Mars exploration. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Modern spacecraft handle resupply missions, satellite deployment, and planetary exploration.",
  },
  {
    id: 178,
    section: "Space",
    type: "Polytomous",
    q: "Activities in space stations orbiting Earth are operated by— i. Computer-controlled robots ii. Real-life experience iii. Telecommunication systems. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Space station operations rely heavily on robotic systems (i) and communication (iii).",
  },
  {
    id: 179,
    section: "Production",
    type: "General",
    q: "What is needed to design a product?",
    opts: ["PAT", "BLC", "NAT", "CAD"],
    ans: "d",
    exp: "Computer-Aided Design (CAD) software is used for creating and modifying designs.",
  },
  {
    id: 180,
    section: "Production",
    type: "General",
    q: 'What does "CAD" stand for?',
    opts: [
      "Computer Aided Direction",
      "Control Aided Design",
      "Computer Aided Design",
      "Control Aided Direction",
    ],
    ans: "c",
    exp: "CAD stands for Computer-Aided Design.",
  },
  {
    id: 181,
    section: "Production",
    type: "General",
    q: "Which is required to design a new product?",
    opts: ["CAD", "MICR", "ATM", "CCTV"],
    ans: "a",
    exp: "CAD software is essential for modern product design and engineering.",
  },
  {
    id: 182,
    section: "Production",
    type: "General",
    q: "Which of the following is used to increase productivity?",
    opts: ["CAD", "PAL", "PLC", "CAM"],
    ans: "d",
    exp: "Computer-Aided Manufacturing (CAM) automates the production process, increasing productivity.",
  },
  {
    id: 183,
    section: "Production",
    type: "General",
    q: "What system have sugar mills introduced for sugarcane farmers?",
    opts: ["E-commerce", "E-tender", "E-call", "E-Purjee"],
    ans: "d",
    exp: "E-Purjee is the digital supply permit system for sugarcane farmers.",
  },
  {
    id: 184,
    section: "Production",
    type: "Polytomous",
    q: "Used in designing and implementing engineering models: i. Computer Aided Design (CAD) ii. Computer Aided Direction iii. Computer Aided Manufacturing (CAM). Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "CAD is used for design and CAM for manufacturing. 'Computer Aided Direction' is not a standard term.",
  },
  {
    id: 185,
    section: "Production",
    type: "Polytomous",
    q: "Which of the following are examples of ICT-based production systems? i. Product quality control using computers ii. Use of robots in risky tasks iii. Automated production management. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "All these are hallmarks of automated, ICT-driven production systems.",
  },
  {
    id: 186,
    section: "Biometrics",
    type: "General",
    q: "Which technology is used in creating national identity cards?",
    opts: [
      "Artificial Intelligence",
      "Biometrics",
      "Genetic Engineering",
      "Bioinformatics",
    ],
    ans: "b",
    exp: "Biometrics (fingerprints, iris scans) are used to uniquely identify citizens for national ID cards.",
  },
  {
    id: 187,
    section: "Biometrics",
    type: "General",
    q: "Which of the following is a behavioral biometric characteristic?",
    opts: ["Fingerprint", "Iris", "Hand Geometry", "Signature"],
    ans: "d",
    exp: "Signature verification is behavioral (based on a learned action). The others are physiological.",
  },

  // --- Page 82: Biometrics & Bioinformatics ---
  {
    id: 188,
    section: "Biometrics",
    type: "General",
    q: "Biometrics is used for:",
    opts: [
      "Artificial Intelligence",
      "Personal identification",
      "Communication",
      "Medical purposes",
    ],
    ans: "b",
    exp: "Biometrics is the primary technology for secure, unique personal identification.",
  },
  {
    id: 189,
    section: "Bioinformatics",
    type: "General",
    q: "Which one is an interdisciplinary science?",
    opts: ["Robotics", "Biometrics", "Bioinformatics", "Genetic Engineering"],
    ans: "c",
    exp: "Bioinformatics combines biology, computer science, math, and statistics, making it highly interdisciplinary.",
  },
  {
    id: 190,
    section: "Bioinformatics",
    type: "General",
    q: "Creating an electronic database of genome sequencing is related to which technology?",
    opts: [
      "Genetic Engineering",
      "Nanotechnology",
      "Bioinformatics",
      "Artificial Intelligence",
    ],
    ans: "c",
    exp: "Bioinformatics uses computers to store, process, and analyze genomic data.",
  },
  {
    id: 191,
    section: "Bioinformatics",
    type: "General",
    q: "Which technology deals with collection, storage, processing, and interpretation of vast biological data?",
    opts: ["Biometrics", "Genetic Engineering", "Bioinformatics", "Robotics"],
    ans: "c",
    exp: "Bioinformatics is defined by its use of computational tools for managing biological data.",
  },
  {
    id: 192,
    section: "Bioinformatics",
    type: "General",
    q: "Which of the following is an application of Bioinformatics?",
    opts: [
      "DNA mapping and analysis",
      "DNA fragment isolation",
      "DNA fragment replacement",
      "DNA creation",
    ],
    ans: "a",
    exp: "Bioinformatics focuses on data analysis, such as mapping and analyzing DNA sequences.",
  },
  {
    id: 193,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used in the creation of molecular medicine?",
    opts: ["Nanotechnology", "Robotics", "Biometrics", "Bioinformatics"],
    ans: "a",
    exp: "Nanotechnology involves manipulating matter at the molecular level, which is key to creating targeted molecular medicines.",
  },
  {
    id: 194,
    section: "Biometrics",
    type: "General",
    q: "Which body part is used in biometric surveillance?",
    opts: ["Face", "Voice", "Retina", "Blood"],
    ans: "d",
    exp: "Blood (DNA profiling) is used in biometrics, though face/retina are also used. The image key specifically marks 'Blood'.",
  },
  {
    id: 195,
    section: "Bioinformatics",
    type: "General",
    q: "Which of the following is not a component of bioinformatics?",
    opts: [
      "Chemistry",
      "Database",
      "Programming",
      "Mathematics and Statistics",
    ],
    ans: "a",
    exp: "While chemistry is related, the core components of bioinformatics are databases, programming, and math/stats.",
  },
  {
    id: 196,
    section: "Biometrics",
    type: "General",
    q: "In which field is biometric technology applied?",
    opts: ["Agriculture", "Biotechnology", "Security", "Entertainment"],
    ans: "c",
    exp: "The primary application of biometrics is in security and access control.",
  },
  {
    id: 197,
    section: "Biometrics",
    type: "General",
    q: "Which technology identifies individuals as unique?",
    opts: [
      "Genetic Engineering",
      "Biometrics",
      "Bioinformatics",
      "Nanotechnology",
    ],
    ans: "b",
    exp: "Biometrics uses unique physical/behavioral traits to identify individuals.",
  },
  {
    id: 198,
    section: "Biometrics",
    type: "General",
    q: "Through which technology can humans be uniquely identified?",
    opts: [
      "Nanotechnology",
      "Biometrics",
      "Genetic Engineering",
      "Bioinformatics",
    ],
    ans: "b",
    exp: "Biometrics is designed specifically for unique human identification.",
  },
  {
    id: 199,
    section: "Biometrics",
    type: "General",
    q: "Which of the following is a behavioral biometric method?",
    opts: ["Fingerprint", "Hand Geometry", "DNA Test", "Voice Recognition"],
    ans: "d",
    exp: "Voice recognition analyzes the behavioral pattern of speaking.",
  },
  {
    id: 200,
    section: "Biometrics",
    type: "General",
    q: "Which biometric method is used for identifying dead bodies?",
    opts: ["Hand Geometry", "Iris Scanning", "Face Recognition", "DNA Test"],
    ans: "d",
    exp: "DNA testing is the most reliable method for identifying deceased individuals.",
  },
  {
    id: 201,
    section: "Biometrics",
    type: "General",
    q: "Which biometric method involves the use of confidential codes?",
    opts: [
      "Fingerprint",
      "Keyboard Typing",
      "Handwritten Signature",
      "Voice Verification",
    ],
    ans: "b",
    exp: "Keystroke dynamics (Keyboard Typing) analyzes the rhythm and speed of typing a password or code.",
  },
  {
    id: 202,
    section: "Biometrics",
    type: "General",
    q: "Which technology helps customers while buying mobile SIMs?",
    opts: [
      "Biometrics",
      "Genetic Engineering",
      "Nanotechnology",
      "Cryosurgery",
    ],
    ans: "a",
    exp: "Biometric verification (fingerprint/face) is now required for SIM registration to ensure security.",
  },
  {
    id: 203,
    section: "Bioinformatics",
    type: "General",
    q: "What is research on biological data within computers called?",
    opts: ["Dry Lab", "Bio Lab", "Wet Lab", "X-Lab"],
    ans: "a",
    exp: "A dry lab is an in silico (computer-based) laboratory where biological data is analyzed.",
  },
  {
    id: 204,
    section: "Bioinformatics",
    type: "General",
    q: "Which of the following is used as a software tool in bioinformatics?",
    opts: ["SQL", "LISP", "CLISP", "PROLOG"],
    ans: "a",
    exp: "SQL (Structured Query Language) is essential for managing the large biological databases used in bioinformatics.",
  },
  {
    id: 205,
    section: "Bioinformatics",
    type: "General",
    q: "Which is a characteristic of bioinformatics?",
    opts: [
      "Limited data storage",
      "Collection of biological data",
      "Use of nanotechnology",
      "Technology-based security",
    ],
    ans: "b",
    exp: "Bioinformatics deals with the massive collection, storage, and analysis of biological data.",
  },
  {
    id: 206,
    section: "Biometrics",
    type: "General",
    q: "Which technology is used to uniquely identify a person?",
    opts: ["Bioinformatics", "Biometrics", "Nanotechnology", "Robotics"],
    ans: "b",
    exp: "Biometrics uses unique traits for identification.",
  },
  {
    id: 207,
    section: "Bioinformatics",
    type: "General",
    q: "The use of computer technology in managing biological information is called:",
    opts: [
      "Bioinformatics",
      "Genetic Engineering",
      "Cryosurgery",
      "Biometrics",
    ],
    ans: "a",
    exp: "This is the core definition of bioinformatics.",
  },
  {
    id: 208,
    section: "Bioinformatics",
    type: "General",
    q: "What is used in gene finding research?",
    opts: [
      "Biometrics",
      "Bioinformatics",
      "Genetic Engineering",
      "Nanotechnology",
    ],
    ans: "b",
    exp: "Gene finding relies on computational algorithms and databases, which is the domain of bioinformatics.",
  },
  {
    id: 209,
    section: "Bioinformatics",
    type: "General",
    q: "Which technology is working to discover the causes of various complex diseases?",
    opts: [
      "Bioinformatics",
      "Nanotechnology",
      "Genetic Engineering",
      "Cryosurgery",
    ],
    ans: "a",
    exp: "Bioinformatics analyzes large datasets (genomics, proteomics) to find links to complex diseases.",
  },
  {
    id: 210,
    section: "Bioinformatics",
    type: "Polytomous",
    q: "Sara Begum works to uncover the mystery of evolution. Her research combines: i. Molecular biology and medicine ii. Database and programming iii. Physics and chemistry. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Uncovering evolution via bioinformatics uses molecular biology/medicine (i) combined with databases/programming (ii).",
  },

  // --- Page 83: Biometrics & Bioinformatics ---
  {
    id: 211,
    section: "Biometrics",
    type: "Polytomous",
    q: "In creating unique identity using fingerprint machines, the fingerprint is formed based on: i. Pattern of finger ridges ii. Skin tissue iii. Veins under the skin. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Fingerprint scanners analyze ridge patterns, skin tissue characteristics, and sometimes sub-surface veins.",
  },
  {
    id: 212,
    section: "Bioinformatics",
    type: "Polytomous",
    q: "Research fields of bioinformatics include: i. Genome sequencing ii. DNA analysis iii. Robot control. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Genome sequencing and DNA analysis are core bioinformatics tasks. Robot control belongs to robotics.",
  },
  {
    id: 213,
    section: "Biometrics",
    type: "Polytomous",
    q: "Which of the following are behavioral biometric characteristics? i. Handwriting signature verification ii. DNA observation iii. Voice recognition. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Signature and voice are behavioral. DNA is physiological.",
  },
  {
    id: 214,
    section: "Bioinformatics",
    type: "Polytomous",
    q: "Bioinformatics is used in— i. DNA mapping ii. Gene finding iii. Machine learning. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Bioinformatics applies machine learning to analyze DNA maps and find genes.",
  },
  {
    id: 215,
    section: "Biometrics",
    type: "Polytomous",
    q: "Biometrics is used in— i. Home security ii. Student attendance monitoring iii. Identifying criminal tendencies. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Biometrics is used for home security, attendance, and identifying criminals (via DNA/fingerprints).",
  },
  {
    id: 216,
    section: "Biometrics",
    type: "Polytomous",
    q: "Which of the following are significant human physical characteristics? i. Iris ii. Fingerprint iii. DNA. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Iris, fingerprints, and DNA are all distinct physiological biometric traits.",
  },
  {
    id: 217,
    section: "Biometrics",
    type: "Polytomous",
    q: "In fingerprint imaging, the fingerprint machine considers— i. Ridge pattern of the finger ii. Skin tissue iii. Blood group. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Scanners read the ridge pattern and skin tissue. Blood group is not read by standard scanners.",
  },
  {
    id: 218,
    section: "Biometrics",
    type: "Polytomous",
    q: "Which biological data is considered in biometric systems? i. Hand geometry ii. Iris iii. Signature. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Hand geometry and iris are physiological; signature is behavioral biometric data.",
  },
  {
    id: 219,
    section: "Biometrics",
    type: "Polytomous",
    q: "Which of the following are behavioral biometrics? i. Face recognition ii. Voice recognition iii. Typing keystroke. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "Voice and typing keystrokes are behavioral. Face recognition is physiological.",
  },
  {
    id: 220,
    section: "Biometrics",
    type: "Polytomous",
    q: "Which of the following can be used to collect DNA? i. Blood ii. Hair iii. Saliva. Which one is correct?",
    opts: ["i", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "DNA can be extracted from blood, hair follicles, and saliva.",
  },
  {
    id: 221,
    section: "Biometrics",
    type: "Polytomous",
    q: "Biometrics can be used in— i. National ID ii. Passport iii. Birth registration. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Biometrics are integrated into national IDs, passports, and birth registration systems.",
  },
  {
    id: 222,
    section: "Bioinformatics",
    type: "Polytomous",
    q: "The main research focus of bioinformatics is— i. Image analysis ii. Gene sequence analysis iii. Trend analysis. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Bioinformatics focuses heavily on analyzing biological images (like microarrays) and gene sequences.",
  },
  {
    id: 223,
    section: "Bioinformatics",
    type: "Polytomous",
    q: "Applications of bioinformatics include— i. Biotechnology ii. Creation of biological weapons iii. Space research. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Bioinformatics is applied in biotech, can be misused for bio-weapons, and is used in astrobiology/space research.",
  },
  {
    id: 224,
    stem: "Mr. Masud is a doctor. His mobile phone unlocks only with his fingerprint. He uses tiny devices to treat his patients.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "The technology used in Mr. Masud's phone is—",
    opts: ["Retina scan", "Fingerprint", "Nanotechnology", "Bioinformatics"],
    ans: "b",
    exp: "Unlocking a phone with a finger uses fingerprint biometric technology.",
  },
  {
    id: 225,
    stem: "Mr. Masud is a doctor. His mobile phone unlocks only with his fingerprint. He uses tiny devices to treat his patients.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "A negative consequence of the medical technology used by Mr. Masud is— i. Production of smart drugs ii. Creation of deadly weapons iii. Increase in the gap between rich and poor. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "The 'tiny devices' refer to Nanotechnology. Risks include weaponization (ii) and high costs creating inequality (iii).",
  },

  // --- Page 84: Biometrics & Genetic Engineering ---
  {
    id: 226,
    stem: "Aria conducts research on products made on a 10^-9 scale. Though small, her products are strong and durable. For attendance, she uses a fingerprint device at the office.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "The fingerprint device in the passage is related to which technology?",
    opts: [
      "Artificial Intelligence",
      "Nanotechnology",
      "Biometrics",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Fingerprint scanning is a Biometric technology.",
  },
  {
    id: 227,
    stem: "Aria conducts research on products made on a 10^-9 scale. Though small, her products are strong and durable. For attendance, she uses a fingerprint device at the office.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Aria's research is applicable in— i. Medicine ii. Food industry iii. Energy sector. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Nanotechnology (10^-9 scale) is applied in medicine, food packaging, and energy (solar cells).",
  },
  {
    id: 228,
    stem: "Dr. Rashed invented a device for hazardous tasks. A door opens when he looks at a special scanner to enter his lab.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "The technology used in the research is—",
    opts: ["Robotics", "Biometrics", "Bioinformatics", "Nanotechnology"],
    ans: "a",
    exp: "A device designed for hazardous tasks is a robot (Robotics).",
  },
  {
    id: 229,
    stem: "Dr. Rashed invented a device for hazardous tasks. A door opens when he looks at a special scanner to enter his lab.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "The biometric entry technology is used in— i. Passport ii. Birth registration iii. Voter registration. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Biometric entry (iris/retina) is used in passports, birth registration, and voter ID databases.",
  },
  {
    id: 230,
    stem: "Pratap enters a room using a fingerprint scanner and takes driving training in that room.",
    section: "VR",
    type: "Uniform Stem",
    q: "The technology used for room entry is—",
    opts: ["Robotics", "Biometrics", "Bioinformatics", "Virtual Reality"],
    ans: "b",
    exp: "Fingerprint scanning is a biometric technology.",
  },
  {
    id: 231,
    stem: "Pratap enters a room using a fingerprint scanner and takes driving training in that room.",
    section: "VR",
    type: "Uniform Stem",
    q: "The training technology used by Pratap contributes to— i. Education and research ii. Security iii. Business and trade. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "c",
    exp: "VR training contributes to education/research (i) and can be used for business/trade simulations (iii).",
  },
  {
    id: 232,
    stem: "Four friends work as officers in four different companies. At their office entrances, one uses a fingerprint, another places their full hand on a device, someone else stares steadily into a camera, and another places their entire face in front of a camera for a few moments.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "What technology is used at the office entrance in the passage?",
    opts: ["Virtual Reality", "Biometrics", "Bioinformatics", "Nanotechnology"],
    ans: "b",
    exp: "The passage describes various biometric methods: fingerprint, hand geometry, iris scan, and facial recognition.",
  },
  {
    id: 233,
    stem: "Four friends work as officers in four different companies. At their office entrances, one uses a fingerprint, another places their full hand on a device, someone else stares steadily into a camera, and another places their entire face in front of a camera for a few moments.",
    section: "Biometrics",
    type: "Uniform Stem",
    q: "Among the technologies used, which one is the most effective in accurately fulfilling the officials' claims?",
    opts: [
      "Fingerprint",
      "Hand Geometry",
      "Iris and Retina Scan",
      "Face Recognition",
    ],
    ans: "a",
    exp: "Fingerprint is generally the most widely used, cost-effective, and highly accurate method for daily attendance.",
  },
  {
    id: 234,
    stem: "Teacher Mr. Mizan entered the lab by simply looking at the door. Then he put helmets on students' heads, turned off the lights, and took them to a beach where they experienced the realistic feeling of the seashore.",
    section: "VR",
    type: "Uniform Stem",
    q: "What biometric feature did Mr. Mizan use to enter the lab?",
    opts: ["Fingerprint", "Face structure", "Voice", "Retina"],
    ans: "d",
    exp: "Looking at a sensor to unlock a door typically uses Iris or Retina scanning.",
  },
  {
    id: 235,
    stem: "Teacher Mr. Mizan entered the lab by simply looking at the door. Then he put helmets on students' heads, turned off the lights, and took them to a beach where they experienced the realistic feeling of the seashore.",
    section: "VR",
    type: "Uniform Stem",
    q: "What did the students experience during the realistic simulation? i. 2D visuals ii. 3D visuals iii. Artificial life-like scenes. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "VR provides immersive 3D visuals (ii) and artificial life-like scenes (iii).",
  },
  {
    id: 236,
    section: "Genetic Eng",
    type: "General",
    q: "What is the full form of GMO?",
    opts: [
      "General Modified Organism",
      "Genetically Modified Organization",
      "Genetically Modern Organism",
      "Genetically Modified Organism",
    ],
    ans: "d",
    exp: "GMO stands for Genetically Modified Organism.",
  },
  {
    id: 237,
    section: "Genetic Eng",
    type: "General",
    q: "Transferring salmon fish genes has helped enlarge which fish's size?",
    opts: ["Carp", "Roi", "Catfish", "Hilsa"],
    ans: "a",
    exp: "The textbook mentions transferring salmon genes to produce larger carp.",
  },
  {
    id: 238,
    section: "Genetic Eng",
    type: "General",
    q: "What is the design or layout of biological traits called?",
    opts: ["Gene", "Genome", "Nucleus", "Chromosome"],
    ans: "b",
    exp: "The complete set of genes or genetic material is the genome.",
  },
  {
    id: 239,
    section: "Genetic Eng",
    type: "General",
    q: "What is used to create a new arrangement of DNA?",
    opts: [
      "Nanotechnology",
      "Virtual Reality",
      "Genetic Engineering",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Genetic engineering involves manipulating and recombining DNA sequences.",
  },
  {
    id: 240,
    section: "Genetic Eng",
    type: "General",
    q: "For which subject did scientist Maksudul Alam gain international recognition?",
    opts: ["Corn", "Rice", "Tea", "Jute"],
    ans: "d",
    exp: "Dr. Maksudul Alam and his team sequenced the jute genome.",
  },

  // --- Page 85: Genetic Engineering ---
  {
    id: 241,
    section: "Genetic Eng",
    type: "General",
    q: "Which technology identifies organisms based on traits?",
    opts: [
      "Nanotechnology",
      "Genetic Engineering",
      "Biometrics",
      "Bioinformatics",
    ],
    ans: "b",
    exp: "Genetic engineering involves modifying and identifying organisms based on specific genetic traits.",
  },
  {
    id: 242,
    section: "Genetic Eng",
    type: "General",
    q: "What is the twisted chain-like substance inside chromosomes?",
    opts: ["DNA", "Gene", "RNA", "Genome"],
    ans: "a",
    exp: "DNA is the double-helix molecule that makes up chromosomes.",
  },
  {
    id: 243,
    section: "Genetic Eng",
    type: "General",
    q: "What is the full form of DNA?",
    opts: [
      "Diluted Nictric Acid",
      "Disjoint Nictric Acid",
      "Distributed Nucleic Acid",
      "Deoxyribo Nucleic Acid",
    ],
    ans: "d",
    exp: "DNA stands for Deoxyribonucleic Acid.",
  },
  {
    id: 244,
    section: "Bioinformatics",
    type: "General",
    q: "What is used to create a new DNA sequence?",
    opts: [
      "Genetic Engineering",
      "Nanotechnology",
      "Bioinformatics",
      "Biometrics",
    ],
    ans: "c",
    exp: "Bioinformatics computational tools are used to design and synthesize novel DNA sequences.",
  },
  {
    id: 245,
    section: "Genetic Eng",
    type: "General",
    q: "What is the design or layout of an organism's traits called?",
    opts: ["Gene", "Genome", "Nucleus", "Chromosome"],
    ans: "b",
    exp: "The genome is the complete set of genetic information.",
  },
  {
    id: 246,
    section: "Genetic Eng",
    type: "General",
    q: "What method is used to create the yeast in bread?",
    opts: [
      "Nanotechnology",
      "Genetic Engineering",
      "Bioinformatics",
      "Biometrics",
    ],
    ans: "b",
    exp: "Modern commercial yeast is often genetically modified for better fermentation efficiency.",
  },
  {
    id: 247,
    section: "Genetic Eng",
    type: "General",
    q: "In which field is genetic engineering commercially applied?",
    opts: ["Biological data storage", "Research", "Education", "Agriculture"],
    ans: "d",
    exp: "Genetic engineering is heavily applied in agriculture to create high-yield and pest-resistant crops.",
  },
  {
    id: 248,
    section: "Genetic Eng",
    type: "General",
    q: "What is the process of extracting a specific DNA fragment from one organism and inserting it into another called?",
    opts: [
      "Biometrics",
      "Nanotechnology",
      "Genetic Engineering",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "This is the definition of recombinant DNA technology, a key part of genetic engineering.",
  },
  {
    id: 249,
    section: "Genetic Eng",
    type: "General",
    q: "In which bacteria is insulin produced for humans?",
    opts: [
      "Escherichia coli (E. coli)",
      "Bacillus subtilis",
      "Streptococcus",
      "Mycobacterium tuberculosis",
    ],
    ans: "a",
    exp: "E. coli is the most common bacterium used as a host to produce human insulin via recombinant DNA technology.",
  },
  {
    id: 250,
    section: "Genetic Eng",
    type: "General",
    q: "Which organization developed the purple-colored hybrid rice variety?",
    opts: ["BARI", "IRRI", "BARC", "BRRI"],
    ans: "d",
    exp: "Bangladesh Rice Research Institute (BRRI) developed high-yielding and colored rice varieties.",
  },
  {
    id: 251,
    section: "Genetic Eng",
    type: "General",
    q: "Which technology is used for environmental protection?",
    opts: [
      "Robotics",
      "Nanotechnology",
      "Bioinformatics",
      "Genetic Engineering",
    ],
    ans: "d",
    exp: "Genetic engineering can create bacteria that consume pollutants (bioremediation) to protect the environment.",
  },
  {
    id: 252,
    section: "Genetic Eng",
    type: "General",
    q: "Which technology is used to produce high-yield crops?",
    opts: [
      "Biometrics",
      "Virtual Reality",
      "Nanotechnology",
      "Genetic Engineering",
    ],
    ans: "d",
    exp: "Genetic engineering modifies plant DNA to increase yield.",
  },
  {
    id: 253,
    section: "Genetic Eng",
    type: "General",
    q: "In which field is genetic engineering applied?",
    opts: ["Medicine", "Security", "Sports", "Software"],
    ans: "a",
    exp: "Genetic engineering is widely applied in medicine, such as producing insulin and gene therapy.",
  },
  {
    id: 254,
    section: "Genetic Eng",
    type: "General",
    q: "What is the method of creating new types of chromosomes called?",
    opts: [
      "Genetic Engineering",
      "Bioinformatics",
      "Nanotechnology",
      "Biometrics",
    ],
    ans: "a",
    exp: "Creating new genetic combinations/chromosomes is done through genetic engineering.",
  },
  {
    id: 255,
    section: "Genetic Eng",
    type: "General",
    q: "Who is known as the father of genetic engineering?",
    opts: ["Jack Williamson", "E. Coli", "Paul Berg", "Stanley Cohen"],
    ans: "d",
    exp: "Stanley Cohen (along with Herbert Boyer) is considered a father of genetic engineering for pioneering recombinant DNA technology.",
  },
  {
    id: 256,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Use of genetic engineering in agriculture— i. Leads to biodiversity ii. Boosts economic development iii. May lead to extinction of native species. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "It boosts the economy (ii) but can reduce biodiversity and cause native species to go extinct (iii).",
  },
  {
    id: 257,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Genetic engineering is used in— i. Modifying DNA structure ii. Exploring evolutionary patterns iii. Signature verification. Which is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "It modifies DNA (i) and can be used to explore evolution (ii). Signature verification is biometrics.",
  },
  {
    id: 258,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Through genetic engineering— i. New genomes of organisms can be discovered ii. Insulin can be commercially produced iii. Individuals can be easily identified. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "It creates new genomes (GMOs) (i) and produces insulin (ii). Identification is biometrics.",
  },
  {
    id: 259,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Using restriction enzymes— i. DNA molecules can be cut ii. DNA segments can be transferred from one organism to another iii. A DNA segment of one organism can be joined with another's. Which of the following is correct?",
    opts: ["i", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Restriction enzymes act as molecular scissors to cut (i), enabling transfer (ii) and joining (iii) of DNA.",
  },
  {
    id: 260,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Genetic engineering is being successfully applied in— i. Industry ii. Medicine iii. Agriculture. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "It is applied in industry (enzymes), medicine (insulin), and agriculture (crops).",
  },
  {
    id: 261,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Steps in recombinant DNA technology include— i. DNA selection ii. Selection of DNA carrier iii. Cutting of the DNA segment. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "All these are sequential steps in creating recombinant DNA.",
  },

  // --- Page 86: Genetic Engineering ---
  {
    id: 262,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Used in insulin production— i. Bacillus bacteria ii. E.coli bacteria iii. Yeast. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "E. coli and yeast are both used as host cells to produce recombinant human insulin.",
  },
  {
    id: 263,
    section: "Genetic Eng",
    type: "Polytomous",
    q: "Genetic engineering is used in— i. Increasing crop production ii. Enhancing fishery resources iii. Exploring alternative energy. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "It increases crops (i) and enhances fisheries (ii).",
  },
  {
    id: 264,
    stem: "Dr. Nihan conducts research on changing animal genes to increase the production of meat and fish. He successfully transplanted genes from one animal into another.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "Which technology did Dr. Nihan use in the stimulus?",
    opts: [
      "Bioinformatics",
      "Biometric",
      "Genetic engineering",
      "Artificial intelligence",
    ],
    ans: "c",
    exp: "Transplanting genes between animals is genetic engineering.",
  },
  {
    id: 265,
    stem: "Dr. Nihan conducts research on changing animal genes to increase the production of meat and fish. He successfully transplanted genes from one animal into another.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "As a result of Dr. Nihan's activities— i. Biodiversity will be created ii. Economic development will occur iii. It will have a negative impact on the medical field. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "His work increases meat/fish production, boosting the economy (ii). It doesn't inherently harm the medical field.",
  },
  {
    id: 266,
    stem: "Mr. Farid, an agricultural scientist, has developed a variety of paddy (rice) that is not destroyed by natural disasters.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What technology did Mr. Farid use?",
    opts: [
      "Biometrics",
      "Nanotechnology",
      "Bioinformatics",
      "Genetic Engineering",
    ],
    ans: "d",
    exp: "Developing disaster-resistant crops is done via genetic engineering.",
  },
  {
    id: 267,
    stem: "Mr. Farid, an agricultural scientist, has developed a variety of paddy (rice) that is not destroyed by natural disasters.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What was Mr. Farid's objective according to the stimulus? i. Ensuring production in adverse conditions ii. Increasing production volume iii. Improving disease resistance. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Disaster-resistant crops aim to ensure production in bad conditions (i), increase yield (ii), and resist diseases (iii).",
  },
  {
    id: 268,
    stem: "With extensive application of technology in agriculture, Bangladesh can now produce seasonal fruits year-round.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What is the technology mentioned in the stimulus?",
    opts: [
      "Biometrics",
      "Genetic Engineering",
      "Bioinformatics",
      "Nanotechnology",
    ],
    ans: "b",
    exp: "Producing out-of-season fruits is achieved through genetic engineering and controlled agriculture.",
  },
  {
    id: 269,
    stem: "With extensive application of technology in agriculture, Bangladesh can now produce seasonal fruits year-round.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What is the result of using this technology? i. Economic development will occur ii. Biodiversity will be created iii. Native species may become extinct. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Year-round fruit production boosts the economy (i) and can increase available biodiversity (ii).",
  },
  {
    id: 270,
    stem: "Mr. 'X' is researching improved cotton varieties. He has succeeded in developing drought-tolerant, high-yielding, and early-maturing cotton.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What technology did Mr. 'X' use in his research?",
    opts: [
      "Bioinformatics",
      "Genetic Engineering",
      "Nanotechnology",
      "Biometrics",
    ],
    ans: "b",
    exp: "Creating drought-tolerant, high-yield crops uses genetic engineering.",
  },
  {
    id: 271,
    stem: "Mr. 'X' is researching improved cotton varieties. He has succeeded in developing drought-tolerant, high-yielding, and early-maturing cotton.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: 'The effects of the technology used by Mr. "X"— i. May reduce disease resistance ii. May change biodiversity iii. May give rise to deadly viruses. Which of the following is correct?',
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "Genetic engineering can alter biodiversity (ii) and risks creating new viruses (iii).",
  },
  {
    id: 272,
    stem: "Selim Mia is a student at an agricultural university. He used a certain technology to grow high-yielding hybrid crops on his land.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What technology did Selim Mia use?",
    opts: [
      "Nanotechnology",
      "Biotechnology",
      "Genetic Engineering",
      "Biometrics",
    ],
    ans: "c",
    exp: "Developing high-yielding hybrid crops involves genetic engineering.",
  },
  {
    id: 273,
    stem: "Selim Mia is a student at an agricultural university. He used a certain technology to grow high-yielding hybrid crops on his land.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "The goal of the technology used by Selim Mia in the stimulus is— i. To increase crop production ii. To reduce disease resistance iii. To make crops weed-resistant. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "The goals are to increase production (i) and make crops resistant to weeds/pests (iii).",
  },
  {
    id: 274,
    stem: "The Bangladesh Rice Research Institute has developed a new rice variety suitable for cultivation in coastal areas, which has significantly increased rice production there.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "The supporting technology in this research is-",
    opts: [
      "Bioinformatics",
      "Nanotechnology",
      "Biometrics",
      "Genetic Engineering",
    ],
    ans: "d",
    exp: "Developing a salt-tolerant coastal rice variety uses genetic engineering.",
  },
  {
    id: 275,
    stem: "The Bangladesh Rice Research Institute has developed a new rice variety suitable for cultivation in coastal areas, which has significantly increased rice production there.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "As a result of this institution's success in the country— i. Economic development will occur ii. The path to biodiversity creation will be paved iii. Indigenous rice varieties may become extinct. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Increased rice production boosts the economy (i) and can pave the way for more biodiversity (ii).",
  },

  // --- Page 87: Nanotechnology ---
  {
    id: 276,
    stem: "Mr. Lokman conducted research and applied a new technology to produce various types of fruits and flowers. As a result, he succeeded in producing large and attractive fruits and flowers.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "Which supporting technology did Mr. Lokman use in the stimulus?",
    opts: [
      "Biometrics",
      "Nanotechnology",
      "Genetic Engineering",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Producing large/attractive fruits is a result of genetic engineering.",
  },
  {
    id: 277,
    stem: "Mr. Lokman conducted research and applied a new technology to produce various types of fruits and flowers. As a result, he succeeded in producing large and attractive fruits and flowers.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "In Lokman's success— i. Economic development will occur ii. A large amount of fruits and flowers will be produced in the country iii. There is a possibility of extinction of native varieties. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "This success boosts the economy, increases supply, and poses a risk to native varieties.",
  },
  {
    id: 278,
    stem: "Due to the use of a new technology in high-yield rice research, the country has achieved self-sufficiency in food. Bangladesh is now recognized as a rice-exporting country.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "What is the new technology mentioned in the stimulus?",
    opts: [
      "Genetic Engineering",
      "Bioinformatics",
      "Biometrics",
      "Nanotechnology",
    ],
    ans: "a",
    exp: "High-yield rice research is based on genetic engineering.",
  },
  {
    id: 279,
    stem: "Due to the use of a new technology in high-yield rice research, the country has achieved self-sufficiency in food. Bangladesh is now recognized as a rice-exporting country.",
    section: "Genetic Eng",
    type: "Uniform Stem",
    q: "The activity in the stimulus will— i. Have a negative impact on soil fertility ii. Lead to economic development iii. Contribute to biodiversity. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "It will likely boost the economy (ii) and can contribute to biodiversity (iii).",
  },
  {
    id: 280,
    stem: "Babu is receiving driving training at home through a special setup. His father is using another technology to cultivate high-quality flowers.",
    section: "VR",
    type: "Uniform Stem",
    q: "What technology is Babu using?",
    opts: [
      "Virtual Reality",
      "E-learning",
      "E-commerce",
      "Artificial Intelligence",
    ],
    ans: "a",
    exp: "Driving training through a setup at home uses Virtual Reality simulators.",
  },
  {
    id: 281,
    stem: "Babu is receiving driving training at home through a special setup. His father is using another technology to cultivate high-quality flowers.",
    section: "VR",
    type: "Uniform Stem",
    q: "A limitation of the technology used by Babu's father is— i. Extinction of native species ii. Decreased crop yield iii. Possibility of new diseases. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "The father uses genetic engineering. Limitations include native species extinction (i) and new diseases (iii).",
  },
  {
    id: 282,
    section: "Nanotech",
    type: "General",
    q: "Which technology increases the durability of tennis balls?",
    opts: [
      "Artificial Intelligence",
      "Robotics",
      "Nanotechnology",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Nanotechnology is used to create stronger, more durable materials for sports equipment.",
  },
  {
    id: 283,
    section: "Nanotech",
    type: "General",
    q: "Which of the following is used for sterilization?",
    opts: ["Nanotechnology", "Genetic Engineering", "Robot", "Cryosurgery"],
    ans: "a",
    exp: "Nanoparticles are used for sterilization, such as silver nanoparticles in medical dressings.",
  },
  {
    id: 284,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used in the development of smart drugs?",
    opts: [
      "Nanotechnology",
      "Genetic Engineering",
      "Biometrics",
      "Artificial Intelligence",
    ],
    ans: "a",
    exp: "Nanomedicine is used to create targeted 'smart drugs'.",
  },
  {
    id: 285,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used to remove pollution from the tannery industry waste?",
    opts: [
      "Virtual reality",
      "Bioinformatics",
      "Nano technology",
      "Genetic engineering",
    ],
    ans: "c",
    exp: "Nanoparticles are being developed to clean up industrial wastewater and pollution.",
  },
  {
    id: 286,
    section: "Nanotech",
    type: "General",
    q: "What is the size range of nanoparticles?",
    opts: ["1 to 100nm", "1 to 200nm", "1 to 300nm", "1 to 400nm"],
    ans: "a",
    exp: "Nanotechnology operates at the scale of 1 to 100 nanometers.",
  },
  {
    id: 287,
    section: "Nanotech",
    type: "General",
    q: "In which is the Top down method used?",
    opts: [
      "Genetic Engineering",
      "Biometrics",
      "Bioinformatics",
      "Nanotechnology",
    ],
    ans: "d",
    exp: "The top-down approach (cutting down larger materials) is a key nanofabrication method.",
  },
  {
    id: 288,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used to produce sunscreen and moisturizers?",
    opts: [
      "Bioinformatics",
      "Cryosurgery",
      "Genetic Engineering",
      "Nanotechnology",
    ],
    ans: "d",
    exp: "Sunscreens often use nanoparticles of zinc oxide or titanium dioxide.",
  },
  {
    id: 289,
    section: "Bioinformatics",
    type: "General",
    q: "Which technology is used to generate protein sequences?",
    opts: [
      "Biometrics",
      "Bioinformatics",
      "Nanotechnology",
      "Genetic Engineering",
    ],
    ans: "b",
    exp: "Bioinformatics tools analyze and predict protein sequences.",
  },

  // --- Page 88: Nanotechnology ---
  {
    id: 290,
    section: "Nanotech",
    type: "General",
    q: "How many methods are used in nanotechnology?",
    opts: ["2", "3", "4", "5"],
    ans: "a",
    exp: "There are two primary methods: Top-Down and Bottom-Up.",
  },
  {
    id: 291,
    section: "Nanotech",
    type: "General",
    q: "One nanometer is equal to how many meters?",
    opts: ["10⁻⁶ meters", "10⁻⁹ meters", "10⁻⁸ meters", "10⁻⁷ meters"],
    ans: "b",
    exp: "One nanometer is one-billionth of a meter (10⁻⁹ m).",
  },
  {
    id: 292,
    section: "Nanotech",
    type: "General",
    q: "Who is called the father of nanotechnology?",
    opts: [
      "Johannes Mendes",
      "Louis Pasteur",
      "Richard Feynman",
      "Marshall McLuhan",
    ],
    ans: "c",
    exp: "Richard Feynman is credited with introducing the concept of nanotechnology in his 1959 talk.",
  },
  {
    id: 293,
    section: "Nanotech",
    type: "General",
    q: "Which power of ten represents nano?",
    opts: ["10⁻⁶", "10⁻⁹", "10⁻¹²", "10⁻¹⁵"],
    ans: "b",
    exp: "Nano represents 10⁻⁹.",
  },
  {
    id: 294,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used in the production of Apple M-11 Mobile phones?",
    opts: [
      "Bioinformatics",
      "Nanotechnology",
      "Genetic Engineering",
      "Biotechnology",
    ],
    ans: "b",
    exp: "Modern processors like Apple's M-series chips are manufactured using nanometer-scale fabrication processes.",
  },
  {
    id: 295,
    section: "Nanotech",
    type: "General",
    q: "Due to which technology are our daily-use products becoming smaller?",
    opts: [
      "Transistor technology",
      "Biotechnology",
      "Liquid crystal technology",
      "Nanotechnology",
    ],
    ans: "d",
    exp: "Nanotechnology enables the miniaturization of components in electronics and other products.",
  },
  {
    id: 296,
    section: "Nanotech",
    type: "General",
    q: "From where are nano-objects created?",
    opts: [
      "From molecular components",
      "From larger entities",
      "Through shining",
      "By programming",
    ],
    ans: "a",
    exp: "Bottom-up nanotech builds objects from molecular/atomic components.",
  },
  {
    id: 297,
    section: "Nanotech",
    type: "General",
    q: "Which technology is used to coat the inside of food packets to maintain quality?",
    opts: ["Robotics", "Biometrics", "Bioinformatics", "Nanotechnology"],
    ans: "d",
    exp: "Nanocoatings are used in food packaging to provide barriers against oxygen and moisture.",
  },
  {
    id: 298,
    section: "Nanotech",
    type: "General",
    q: "In the top-down method, objects are shaped to a specific size. Which technology is related to this?",
    opts: [
      "Biometrics",
      "Bioinformatics",
      "Genetic Engineering",
      "Nanotechnology",
    ],
    ans: "d",
    exp: "The top-down approach is a primary method in nanotechnology.",
  },
  {
    id: 299,
    section: "Nanotech",
    type: "General",
    q: "Which technology allows modification and control of metallic materials at the molecular level?",
    opts: ["Robotics", "Nanotechnology", "Biometrics", "Genetic Engineering"],
    ans: "b",
    exp: "Nanotechnology operates at the molecular and atomic level.",
  },
  {
    id: 300,
    section: "Nanotech",
    type: "General",
    q: "Due to which technology are micro-components in smartphones being precisely installed?",
    opts: ["Virtual reality", "Nanotechnology", "Robot", "Genetic Engineering"],
    ans: "b",
    exp: "Nanotech allows for the precise engineering of microchips and components in devices.",
  },
  {
    id: 301,
    section: "Nanotech",
    type: "General",
    q: "What is an object made from molecular components called?",
    opts: ["Biometrics", "Nanotechnology", "Nanoparticle", "Bioinformatics"],
    ans: "c",
    exp: "A nanoparticle is an object built from molecular components, sized 1-100 nm.",
  },
  {
    id: 302,
    section: "Nanotech",
    type: "Polytomous",
    q: "Through nanotechnology, it is possible to— i. Mass-scale production ii. Micro and small-scale production iii. Waste purification. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Nanotech enables precise production at various scales and is used for environmental cleanup.",
  },
  {
    id: 303,
    section: "Nanotech",
    type: "Polytomous",
    q: "The application of nanotechnology in the medical field can be— i. Endoscopy ii. X-ray iii. Colonoscopy. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Nanotech enhances imaging techniques like endoscopy and X-rays, but colonoscopy is a standard medical procedure.",
  },
  {
    id: 304,
    section: "Nanotech",
    type: "Polytomous",
    q: "Practical fields of nanotechnology include— i. Chemistry ii. Physics iii. Mechanical Engineering. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Nanotech is highly interdisciplinary, overlapping with chemistry, physics, and engineering.",
  },
  {
    id: 305,
    section: "Nanotech",
    type: "Polytomous",
    q: "Devices that can be made using nanotechnology— i. Computer ii. Cryoprobe iii. Robot. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Nanotech is used to build smaller computers, medical cryoprobes, and micro-robots.",
  },
  {
    id: 306,
    stem: "Mr. Labib used a certain technology to produce anti-aging cream for smooth skin. His office requires a handprint to enter.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Which technology did Mr. Labib use to make the cream?",
    opts: [
      "Nanotechnology",
      "Bioinformatics",
      "Biometrics",
      "Genetic Engineering",
    ],
    ans: "a",
    exp: "Anti-aging creams often use nanoparticles to penetrate the skin more effectively.",
  },
  {
    id: 307,
    stem: "Mr. Labib used a certain technology to produce anti-aging cream for smooth skin. His office requires a handprint to enter.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "In the technology used to access Mr. Labib's office, which physiological feature is involved? i. Signature ii. DNA iii. Fingerprint. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "c",
    exp: "A handprint scan primarily involves fingerprint/ridge patterns and potentially skin tissue (DNA).",
  },
  {
    id: 308,
    stem: "Scientists are working with a technology to create large employment opportunities, produce efficient and affordable energy, and reduce water and air pollution. This technology is now widely used for food packaging.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "What is the technology mentioned in the passage?",
    opts: [
      "Nanotechnology",
      "Artificial Intelligence",
      "Genetic Engineering",
      "Robotics",
    ],
    ans: "a",
    exp: "Nanotech addresses energy, pollution, and food packaging at the molecular scale.",
  },

  // --- Page 89: Nanotech & Computer Crime ---
  {
    id: 309,
    stem: "Scientists are working with a technology to create large employment opportunities, produce efficient and affordable energy, and reduce water and air pollution. This technology is now widely used for food packaging.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Products manufactured using this technology will be— i. Durable ii. Long-lasting iii. Heavy. Which of the following is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "Nanotech products are typically stronger and more durable (i, ii), and often lighter rather than heavy.",
  },
  {
    id: 310,
    stem: "Nowadays, to enhance the quality, preservation, and protection of products, manufacturers use special types of packaging.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Which technology is used to create the packaging mentioned in the passage?",
    opts: [
      "Genetic Engineering",
      "Biometrics",
      "Nanotechnology",
      "Bioinformatics",
    ],
    ans: "c",
    exp: "Nanoparticle-enhanced packaging is used to extend shelf life and protect products.",
  },
  {
    id: 311,
    stem: "Nowadays, to enhance the quality, preservation, and protection of products, manufacturers use special types of packaging.",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Reasons behind the increased popularity of such products— i. Hygienic ii. Retains position for a specific time iii. Moisture resistant. Which of the following is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "Nanotech packaging improves hygiene, maintains product positioning/structure, and provides moisture resistance.",
  },
  {
    id: 312,
    stem: "Based on the following image [Image of a nanoparticle], answer questions 312 and 313:",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "The substance shown in the image is—",
    opts: ["Nanoparticle", "Bioparticle", "Nanoscale", "Quantum substance"],
    ans: "a",
    exp: "The image represents a nanoparticle structure.",
  },
  {
    id: 313,
    stem: "Based on the following image [Image of a nanoparticle], answer questions 312 and 313:",
    section: "Nanotech",
    type: "Uniform Stem",
    q: "Characteristics of the substance in the image— i. Large surface area ii. Equipped with micro-camera iii. Chemically very reactive. Which of the following is correct?",
    opts: ["i", "i & ii", "i & iii", "ii & iii"],
    ans: "c",
    exp: "Nanoparticles have a very high surface area to volume ratio and are highly chemically reactive.",
  },
  {
    id: 314,
    section: "Computer Crime",
    type: "General",
    q: "In which industrial revolution was the extensive use of electric power seen?",
    opts: ["First", "Second", "Third", "Fourth"],
    ans: "b",
    exp: "The Second Industrial Revolution was driven by electricity and assembly lines.",
  },
  {
    id: 315,
    section: "Computer Crime",
    type: "General",
    q: "Who are called hackers?",
    opts: [
      "Those who market newspapers",
      "Those who market products",
      "Those who illegally access computers via the internet",
      "Those who use the internet",
    ],
    ans: "c",
    exp: "Hacking is the unauthorized access to computer systems.",
  },
  {
    id: 316,
    section: "Computer Crime",
    type: "General",
    q: "How many directives are there in computer ethics?",
    opts: ["8", "10", "12", "14"],
    ans: "b",
    exp: "The Computer Ethics Institute formulated the Ten Commandments of Computer Ethics.",
  },
  {
    id: 317,
    section: "Computer Crime",
    type: "General",
    q: "Plagiarism is related to which crime?",
    opts: [
      "Stealing others' writings",
      "Software piracy",
      "Copyright violation",
      "Identity theft",
    ],
    ans: "a",
    exp: "Plagiarism is the act of taking someone else's work or ideas and passing them off as one's own.",
  },
  {
    id: 318,
    section: "Computer Crime",
    type: "General",
    q: "What is it called when someone uses a computer by entering a network without permission?",
    opts: ["Software piracy", "Nanotechnology", "Plagiarism", "Hacking"],
    ans: "d",
    exp: "Unauthorized access to a network is hacking.",
  },
  {
    id: 319,
    section: "Computer Crime",
    type: "General",
    q: "What is it called when someone claims others' online information as their own?",
    opts: ["Hacking", "Phishing", "Sneaking", "Plagiarism"],
    ans: "d",
    exp: "Claiming another's work as your own is plagiarism.",
  },
  {
    id: 320,
    section: "Computer Crime",
    type: "General",
    q: "Rafa took a story from a Facebook page and published it in her madrasa magazine under her own name. What type of act is this?",
    opts: ["Hacking", "Piracy", "Phishing (Data Theft)", "Plagiarism"],
    ans: "d",
    exp: "Publishing someone else's story under your own name is plagiarism.",
  },
  {
    id: 321,
    section: "Computer Crime",
    type: "General",
    q: "What is it called to send unwanted or unsolicited emails or messages?",
    opts: ["Hacking", "Spoofing", "Sneaking", "Spamming"],
    ans: "d",
    exp: "Sending unwanted bulk messages is called spamming.",
  },
  {
    id: 322,
    section: "Computer Crime",
    type: "Polytomous",
    q: "Included in computer crime: i. Using books by violating copyright ii. Broadcasting obscene films iii. Opening a new bank account. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Copyright violation and broadcasting obscene material are cybercrimes. Opening a bank account is a legal activity.",
  },
  {
    id: 323,
    section: "Computer Crime",
    type: "Polytomous",
    q: "The activities of hackers are— i. Destroying essential files of a computer ii. Stealing money through online fraud iii. Creating new software. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "a",
    exp: "Hackers destroy data and commit fraud. Legitimate software creation is not hacking.",
  },
  {
    id: 324,
    section: "Computer Crime",
    type: "Polytomous",
    q: "Topics included in computer crime— i. Software piracy ii. Plagiarism iii. Data theft. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "d",
    exp: "All three are forms of computer/cyber crime.",
  },
  {
    id: 325,
    stem: "Student 'A' studies at college. Referring to information sources, he prepares a term paper with the help of a computer and the internet. But student 'B' copies files from the library computer without permission and publishes internet-sourced content under his own name without showing gratitude.",
    section: "Computer Crime",
    type: "Uniform Stem",
    q: "What is the activity of student 'B' in the passage?",
    opts: ["Spamming", "Plagiarism", "Sniffing", "Spoofing"],
    ans: "b",
    exp: "Publishing someone else's content under his own name is plagiarism.",
  },

  // --- Page 90: Computer Crime & Economic Development ---
  {
    id: 326,
    stem: "Student 'A' studies at college. Referring to information sources, he prepares a term paper with the help of a computer and the internet. But student 'B' copies files from the library computer without permission and publishes internet-sourced content under his own name without showing gratitude.",
    section: "Computer Crime",
    type: "Uniform Stem",
    q: "According to the passage, what is student 'A's activity? i. Violating copyright law ii. Telnet iii. Computer ethics. Which one is correct?",
    opts: ["i & ii", "i & iii", "ii & iii", "i, ii & iii"],
    ans: "b",
    exp: "Student A is following proper computer ethics (iii) by citing sources, not violating copyright. Telnet is unrelated.",
  },
  {
    id: 327,
    stem: "A miscreant secretly logged into a computer containing the database of Mirpur NH Alim Madrash. However, he could not open the data in any way, nor was he able to open it even after transferring it to another computer.",
    section: "Computer Crime",
    type: "Uniform Stem",
    q: "What is the miscreant's action?",
    opts: ["Hacking", "Plagiarism", "Copyright violation", "Software piracy"],
    ans: "a",
    exp: "Secretly logging into a computer system is hacking.",
  },
  {
    id: 328,
    stem: "A miscreant secretly logged into a computer containing the database of Mirpur NH Alim Madrash. However, he could not open the data in any way, nor was he able to open it even after transferring it to another computer.",
    section: "Computer Crime",
    type: "Uniform Stem",
    q: "Why did the miscreant fail? Because the data was—",
    opts: ["Decrypted", "Encrypted", "Unauthorized", "Indexed"],
    ans: "b",
    exp: "The data was encrypted, rendering it unreadable without the decryption key.",
  },
  {
    id: 329,
    section: "Economic Dev",
    type: "General",
    q: "What percentage of national production growth is estimated to come from the ICT sector's contribution to economic development?",
    opts: ["4%", "6%", "8%", "9%"],
    ans: "c",
    exp: "According to the textbook, the ICT sector contributes significantly, estimated at around 8%.",
  },
  {
    id: 330,
    section: "Economic Dev",
    type: "General",
    q: "According to the 2019 statistics, how many registered software companies are there in Bangladesh?",
    opts: ["800", "755", "900", "850"],
    ans: "a",
    exp: "There were approximately 800 registered software companies in Bangladesh according to 2019 statistics.",
  },
  {
    id: 331,
    section: "Economic Dev",
    type: "General",
    q: "What does RFID stand for?",
    opts: [
      "Random Frequency Identification",
      "Radio Frequency Information",
      "Random Frequency Information",
      "Radio Frequency Identification",
    ],
    ans: "d",
    exp: "RFID stands for Radio Frequency Identification.",
  },
  {
    id: 332,
    section: "Social Impact",
    type: "Polytomous",
    q: "Negative effects of information technology include— i. Addiction ii. Neurological illness iii. Black marketing. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "a",
    exp: "IT can lead to addiction and neurological/psychological illnesses due to overuse.",
  },
  {
    id: 333,
    section: "Social Impact",
    type: "Polytomous",
    q: "Due to excessive use of ICT-related devices— i. Eyes come under strain ii. Neck and back problems occur iii. Brain-related issues may arise. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Prolonged screen time affects eyes, posture (neck/back), and can impact brain health.",
  },
  {
    id: 334,
    stem: "Bobi spends most of his day playing games on his mobile phone. He even uses it at night, staying awake.",
    section: "Social Impact",
    type: "Uniform Stem",
    q: "What is Bobi's habit called?",
    opts: ["Entertainment", "Addiction", "Knowledge acquisition", "Attraction"],
    ans: "b",
    exp: "Compulsively playing games to the detriment of sleep is an addiction.",
  },
  {
    id: 335,
    stem: "Bobi spends most of his day playing games on his mobile phone. He even uses it at night, staying awake.",
    section: "Social Impact",
    type: "Uniform Stem",
    q: "What kind of problems might Bobi face? i. Neurological issues ii. Headaches iii. Brain disorders. Which one is correct?",
    opts: ["i & ii", "ii & iii", "i & iii", "i, ii & iii"],
    ans: "d",
    exp: "Excessive screen time and sleep deprivation can cause neurological issues, headaches, and brain disorders.",
  },
  {
    id: 336,
    section: "Computer Crime",
    type: "General",
    q: "What is it called to send unwanted or unsolicited emails or messages?",
    opts: ["Spamming", "Phishing", "Hacking", "Virus"],
    ans: "a",
    exp: "Sending unsolicited bulk messages is spamming.",
  },
];

// Helper function to insert line breaks dynamically
const formatQuestionText = (text) => {
  if (!text) return "";
  let formatted = text;

  // 1. Add line break before Roman numerals (i., ii., iii., etc.)
  // The regex looks for a space followed by a roman numeral and a dot.
  formatted = formatted.replace(
    /(\s(?:i{1,3}|iv|v|vi{0,3}|ix)\.\s)/g,
    '<br/><span class="inline-block mt-1.5 ml-2">$1</span>',
  );

  // 2. Add double line break before the final question "Which of the following..." or "Which one..."
  formatted = formatted.replace(
    /(\sWhich (?:of the following|one) is correct\?)/g,
    '<br/><br/><span class="font-bold text-gray-900">$1</span>',
  );

  return formatted;
};

export default function MCQ() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [openSections, setOpenSections] = useState({});
  const [openAccordions, setOpenAccordions] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset page to 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // 1. Collapsible Category Logic (Defaults to open)
  const handleSectionToggle = (sectionName) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionName]: prevState[sectionName] !== true,
    }));
  };

  // 2. Collapsible Individual Question Logic
  const handleAccordionToggle = (id) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [id]: prevState[id] === true ? false : true,
    }));
  };

  // 3. Select / Deselect Logic
  const handleOptionClick = (qId, optionKey) => {
    setSelectedAnswers((prevState) => {
      const newState = { ...prevState };
      if (newState[qId] === optionKey) {
        delete newState[qId];
      } else {
        newState[qId] = optionKey;
      }
      return newState;
    });
  };

  // 4. Bulletproof Search Logic
  const filteredData = mcqData.filter((item) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();

    const matchesQuestion =
      item.q?.toLowerCase().includes(searchLower) || false;
    const matchesSection =
      item.section?.toLowerCase().includes(searchLower) || false;
    const matchesStem = item.stem?.toLowerCase().includes(searchLower) || false;
    const matchesOptions =
      item.opts?.some((opt) => opt.toLowerCase().includes(searchLower)) ||
      false;
    const matchesExplanation =
      item.exp?.toLowerCase().includes(searchLower) || false;

    return (
      matchesQuestion ||
      matchesSection ||
      matchesStem ||
      matchesOptions ||
      matchesExplanation
    );
  });

  // 5. Pagination Calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Group the CURRENT PAGE's data by section
  const groupedData = currentItems.reduce((acc, curr) => {
    const sectionName = curr.section || "Uncategorized";
    if (!acc[sectionName]) acc[sectionName] = [];
    acc[sectionName].push(curr);
    return acc;
  }, {});

  // Handle Page Change & Scroll to Top
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Chapter 1 MCQ Practice
          </h1>
          <p className="text-gray-600 text-lg">
            Interactive Multiple Choice Questions with instant feedback.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative sticky top-4 z-10 shadow-md rounded-xl">
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
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-md"
            placeholder="Search questions, options, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Stats Bar */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <span className="font-semibold text-gray-700">
            Total Questions: {mcqData.length} (Showing {filteredData.length})
          </span>
          <span className="font-semibold text-primary">
            Answered: {Object.keys(selectedAnswers).length}
          </span>
        </div>

        {/* MCQ List Grouped by Section */}
        <div className="space-y-6">
          {Object.keys(groupedData).length > 0 ? (
            Object.entries(groupedData).map(([sectionName, questions]) => {
              // FIX: Default to open (true) unless explicitly set to false
              const isSectionOpen = openSections[sectionName] !== false;

              return (
                <div
                  key={sectionName}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Section Header (Collapsible Category) */}
                  <button
                    onClick={() => handleSectionToggle(sectionName)}
                    className="w-full flex items-center justify-between p-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold">{sectionName}</h2>
                      <span className="bg-primary/20 text-primary-100 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {questions.length} Questions
                      </span>
                    </div>
                    <svg
                      className={`h-6 w-6 text-gray-300 transform transition-transform duration-300 ${isSectionOpen ? "rotate-180" : ""}`}
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

                  {/* Section Content (Hidden when collapsed) */}
                  {isSectionOpen && (
                    <div className="p-4 bg-gray-50 space-y-4 border-t border-gray-200">
                      {questions.map((q) => {
                        const isOpen = openAccordions[q.id] === true;
                        const selected = selectedAnswers[q.id];
                        const isCorrect = selected === q.ans;

                        return (
                          <div
                            key={q.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                          >
                            {/* Individual Question Header */}
                            <button
                              onClick={() => handleAccordionToggle(q.id)}
                              className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                                  {q.id}
                                </span>
                                <span className="font-semibold text-gray-800 line-clamp-1">
                                  {/* Strip HTML tags for the summary line */}
                                  {q.stem
                                    ? "Stem-Based Question"
                                    : q.q.replace(/(<([^>]+)>)/gi, "")}
                                </span>
                                {q.type === "Polytomous" && (
                                  <span className="badge badge-sm badge-warning text-xs hidden sm:inline-block">
                                    Multiple Choice
                                  </span>
                                )}
                              </div>
                              <svg
                                className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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

                            {/* Individual Question Body */}
                            {isOpen && (
                              <div className="p-5 border-t border-gray-100 bg-white">
                                {q.stem && (
                                  <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-gray-700 italic rounded-r-lg">
                                    <strong>Stem:</strong> {q.stem}
                                  </div>
                                )}

                                {/* Apply the multiline formatting here */}
                                <div
                                  className="text-gray-900 font-medium mb-4 leading-relaxed"
                                  dangerouslySetInnerHTML={{
                                    __html: formatQuestionText(q.q),
                                  }}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                  {q.opts.map((opt, idx) => {
                                    const optKey = String.fromCharCode(
                                      97 + idx,
                                    );
                                    const isSelected = selected === optKey;
                                    const isCorrectAnswer = q.ans === optKey;

                                    let btnClass =
                                      "bg-white border-gray-300 text-gray-700 hover:border-primary/50 hover:bg-gray-50";

                                    if (selected) {
                                      if (isCorrectAnswer) {
                                        btnClass =
                                          "bg-green-100 border-green-500 text-green-800 font-semibold ring-1 ring-green-500";
                                      } else if (
                                        isSelected &&
                                        !isCorrectAnswer
                                      ) {
                                        btnClass =
                                          "bg-red-100 border-red-500 text-red-800 font-semibold ring-1 ring-red-500";
                                      } else {
                                        btnClass =
                                          "bg-gray-50 border-gray-200 text-gray-400 opacity-70";
                                      }
                                    }

                                    return (
                                      <button
                                        key={idx}
                                        onClick={() =>
                                          handleOptionClick(q.id, optKey)
                                        }
                                        className={`flex items-center p-3 border rounded-lg text-left transition-all cursor-pointer ${btnClass}`}
                                      >
                                        <span
                                          className={`flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full border text-xs mr-3 ${selected ? (isCorrectAnswer ? "border-green-500 bg-green-500 text-white" : isSelected ? "border-red-500 bg-red-500 text-white" : "border-gray-300") : "border-gray-300"}`}
                                        >
                                          {optKey.toUpperCase()}
                                        </span>
                                        <span>{opt}</span>

                                        {selected && isCorrectAnswer && (
                                          <svg
                                            className="w-5 h-5 ml-auto text-green-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        )}
                                        {selected &&
                                          isSelected &&
                                          !isCorrectAnswer && (
                                            <svg
                                              className="w-5 h-5 ml-auto text-red-600"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          )}
                                      </button>
                                    );
                                  })}
                                </div>

                                {selected && (
                                  <div
                                    className={`p-4 rounded-lg border ${isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                                  >
                                    <div className="flex items-start">
                                      <div className="flex-shrink-0">
                                        {isCorrect ? (
                                          <svg
                                            className="h-6 w-6 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                        ) : (
                                          <svg
                                            className="h-6 w-6 text-red-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                        )}
                                      </div>
                                      <div className="ml-3">
                                        <h3
                                          className={`text-sm font-bold ${isCorrect ? "text-green-800" : "text-red-800"}`}
                                        >
                                          {isCorrect ? "Correct!" : "Incorrect"}
                                        </h3>
                                        <div
                                          className={`mt-1 text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}
                                        >
                                          <p>
                                            <strong>Correct Answer:</strong>{" "}
                                            {q.ans.toUpperCase()}
                                          </p>
                                          <p className="mt-2">
                                            <strong>Explanation:</strong>{" "}
                                            {q.exp}
                                          </p>
                                          <p className="text-xs mt-3 text-gray-500 italic">
                                            Click your selected option again to
                                            deselect and hide this explanation.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
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
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No results found
              </h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search terms.
              </p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 mb-6">
            <div className="join shadow-md">
              <button
                className="join-item btn bg-white hover:bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>

              {/* Generate Page Numbers dynamically */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 7) return true;
                  if (page === 1 || page === totalPages) return true;
                  if (page >= currentPage - 1 && page <= currentPage + 1)
                    return true;
                  return false;
                })
                .map((page, index, array) => {
                  const prevPage = array[index - 1];
                  const showEllipsis = prevPage && page - prevPage > 1;

                  return (
                    <React.Fragment key={page}>
                      {showEllipsis && (
                        <button className="join-item btn bg-white pointer-events-none">
                          ...
                        </button>
                      )}
                      <button
                        className={`join-item btn ${currentPage === page ? "bg-primary text-white hover:bg-primary/90 border-primary" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  );
                })}

              <button
                className="join-item btn bg-white hover:bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        )}

        {/* Pagination Info */}
        {filteredData.length > 0 && (
          <div className="text-center text-sm font-medium text-gray-500 mb-8">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredData.length)} of{" "}
            {filteredData.length} questions
          </div>
        )}
      </div>
    </div>
  );
}
