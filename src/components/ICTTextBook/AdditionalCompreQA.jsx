import React, { useState } from "react";

export const additionalComprehensionData = [
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
