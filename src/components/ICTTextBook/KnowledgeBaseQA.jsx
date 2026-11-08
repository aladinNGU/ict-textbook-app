import { useState, useEffect, useRef } from "react";

export const qaData = [
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
    id: 24,
    q: "What is Online Banking?",
    a: "A method of performing banking activities through the Internet, including money transfers and bill payments.",
  },
  {
    id: 25,
    q: "What is Netflix?",
    a: "A subscription-based streaming service where users can watch TV shows and movies online without ads.",
  },
  {
    id: 26,
    q: "What is Social Media?",
    a: "An online platform where people communicate, share photos or messages, and build social relationships.",
  },
  {
    id: 27,
    q: "What is Facebook?",
    a: "The most popular social media platform launched in 2004, where users share photos, messages, and videos.",
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
  {
    id: 77,
    q: "What is Information?",
    a: "Information is organized and meaningful data used to know or understand something.",
  },
  {
    id: 78,
    q: "What is Data?",
    a: "Data is the raw material of information. It can be random letters, numbers, symbols, or images that, on their own, do not convey any specific meaning.",
  },
  {
    id: 79,
    q: "What is the etymology of the word 'Technology'?",
    a: "The word 'Technology' comes from two Greek words: 'Techne' (meaning art, craft, or skill of the hand) and 'Logos' (meaning study or science).",
  },
  {
    id: 80,
    q: "What is Information Technology (IT)?",
    a: "Information Technology (IT) is a technology through which information can be collected, stored, processed, and exchanged.",
  },
  {
    id: 81,
    q: "Who is known as the Father of Information Technology?",
    a: "Claude Elwood Shannon is known as the Father of Information Technology. He published 'A Mathematical Theory of Communication' in 1948.",
  },
  {
    id: 82,
    q: "When and why was the Right to Information Act enacted in Bangladesh?",
    a: "It was enacted in 2009 to help people access information easily, recognizing the legal free flow of information to build a scientific and information-based modern society.",
  },
  {
    id: 83,
    q: "Who is Martin Cooper?",
    a: "Martin Cooper is an American citizen known as the Father of the Mobile Phone. He invented the first handheld mobile phone in 1970.",
  },
  {
    id: 84,
    q: "What is ISDN?",
    a: "ISDN (Integrated Services Digital Network) is a notable example of a digital telephone network that allows both voice calls and data to be transmitted over the same line.",
  },
  {
    id: 85,
    q: "What is a Satellite?",
    a: "A satellite is an artificial object launched into space by humans. It orbits the Earth typically at a distance of about 35,786 km, completing one orbit every 24 hours.",
  },
  {
    id: 86,
    q: "What is ARPANET?",
    a: "ARPANET (Advanced Research Projects Agency Network) was created in 1969 by the U.S. Department of Defense for internal communication. It is the precursor to the modern internet.",
  },
  {
    id: 87,
    q: "What is TCP/IP?",
    a: "TCP/IP (Transmission Control Protocol/Internet Protocol) is a protocol invented in 1982 that made it possible to connect different computers to a common network, establishing the foundation of the modern internet.",
  },
  {
    id: 88,
    q: "Who is known as the Father of Email?",
    a: "Raymond Samuel Tomlinson is known as the Father of Email. He was the first to use an email program to send a message from one host computer to another.",
  },
  {
    id: 89,
    q: "Who invented the teleconferencing system?",
    a: "The teleconferencing method was invented by Murray Turoff in 1975.",
  },
  {
    id: 90,
    q: "Who is the Father of E-book?",
    a: "Michael S. Hart, founder of the Gutenberg Project, is known as the father of the e-book.",
  },
  {
    id: 91,
    q: "What is WebEx?",
    a: "WebEx is a popular online meeting tool that offers video conferencing, screen sharing, and various other features, supporting thousands of users joining simultaneously.",
  },
  {
    id: 92,
    q: "What is a Webinar?",
    a: "A Webinar is a web-based seminar where presentations, lectures, or workshops are conducted online.",
  },
  {
    id: 93,
    q: "What is Google Classroom?",
    a: "Google Classroom is a free web service developed by Google that facilitates easy creation, distribution, and assessment of online educational materials between teachers and students.",
  },
  {
    id: 94,
    q: "What is Distance Learning?",
    a: "A method of learning from home without attending the classroom physically, using the internet, email, video conferencing, etc. It was first conceptualized in 1840.",
  },
  {
    id: 95,
    q: "What is Blended Learning?",
    a: "Blended Learning is a combination of face-to-face and online learning, mixing traditional and digital education methods to make teaching more effective.",
  },
  {
    id: 96,
    q: "What is a Patent?",
    a: "A patent is an exclusive right granted by governments for inventions, usually valid for 20 years.",
  },
  {
    id: 97,
    q: "What is an E-Journal?",
    a: "E-Journal refers to research papers published online that can be accessed anytime.",
  },
  {
    id: 98,
    q: "What is Google Drive?",
    a: "Google Drive is a free cloud storage service by Google where users can store documents, images, and videos online. Each Google account gets 15 GB of free space.",
  },
  {
    id: 99,
    q: "What is Dropbox?",
    a: "Dropbox is a cloud-based file hosting service allowing users to store files in specific folders accessible from anywhere.",
  },
  {
    id: 100,
    q: "What is Office 365?",
    a: "Office 365 is Microsoft's cloud-based office suite available by subscription or free plan, installable on multiple devices, with offline work support.",
  },
  {
    id: 101,
    q: "What is Google Docs?",
    a: "Google Docs is Google's free web-based word processor, part of Google Drive, which also includes Google Sheets and Slides.",
  },
  {
    id: 102,
    q: "What are 'Netizens'?",
    a: "Netizens refer to internet-based residents. In the modern era, people can communicate, work, and sometimes live virtually from another country, making us all netizens.",
  },
  {
    id: 103,
    q: "What is a Motion Sensor?",
    a: "A motion sensor is a device in a smart home security system that detects any movement within a specified range, triggering an alarm and notifying the police if an unauthorized person enters.",
  },
  {
    id: 104,
    q: "What is M2M communication?",
    a: "M2M (Machine to Machine) communication is the forerunner of IoT, where one machine automatically controls another machine through wired or wireless means without human involvement.",
  },
  {
    id: 105,
    q: "What is E-Purjee?",
    a: "E-Purjee is the digital version of the traditional supply permit issued by sugar mills for sugarcane delivery, allowing farmers to access supply information quickly via mobile phones.",
  },
  {
    id: 106,
    q: "What is a Barcode?",
    a: "A barcode is the black-and-white stripes on a product that can be scanned to show the product's name and price on a computer.",
  },
  {
    id: 107,
    q: "What is a QR Code?",
    a: "A QR Code is a type of scannable image or code that contains hidden information (such as links or numbers) and can be read by a phone camera.",
  },
  {
    id: 108,
    q: "What is an MICR Check?",
    a: "Magnetic Ink Character Recognition (MICR) Check is a special secure check printed with magnetic ink, which computers can easily read and verify.",
  },
  {
    id: 109,
    q: "What is Digital Currency?",
    a: "Digital Currency is online or virtual currency, such as Bitcoin. It is not paper money and is used only on the internet. It is not yet approved in Bangladesh.",
  },
  {
    id: 110,
    q: "What is Mass Media?",
    a: "Mass media is a medium that delivers information simultaneously to many people. It includes television, radio, internet, mobile phones, and websites.",
  },
  {
    id: 111,
    q: "What is an Online News Portal?",
    a: "An online news portal is a website that publishes news online, either as an online version of a newspaper or created solely for online news.",
  },
  {
    id: 112,
    q: "What is IPTV?",
    a: "IPTV (Internet Protocol Television) allows broadcasting TV without a satellite using an internet connection.",
  },
  {
    id: 113,
    q: "What is Cultural Exchange?",
    a: "Cultural exchange is the process where people of one country learn about the culture of another country (songs, movies, literature, food, etc.) through ICT, forming cultural relationships.",
  },
  {
    id: 114,
    q: "What is HMD in Virtual Reality?",
    a: "HMD stands for Head Mounted Display. It is a special interface device (like a helmet) that connects the user to the virtual environment.",
  },
  {
    id: 115,
    q: "What is a Data Glove?",
    a: "A data glove is a component of Virtual Reality worn on the hand to track movements and provide haptic feedback (sensation of touch).",
  },
  {
    id: 116,
    q: "What is an Effector in VR?",
    a: "An effector is a special interface device used in virtual reality that connects the user to the virtual environment. Examples include HMDs, data gloves, and full-body suits.",
  },
  {
    id: 117,
    q: "What is a Reality Simulator?",
    a: "A Reality Simulator is hardware that provides sensitive information to the effector, such as sensors, transducers, high-quality audio/video systems, and reality engines.",
  },
  {
    id: 118,
    q: "What is Haptic Feedback?",
    a: "Haptic feedback is the sensation of touch created in Virtual Reality using special gloves, shoes, or suits, allowing users to feel as if they are really touching or walking on something.",
  },
  {
    id: 119,
    q: "What is the Metaverse?",
    a: "The Metaverse is a digital world created by combining virtual reality, augmented reality, and other technologies, where users can fully 'live' in a virtual environment to explore, shop, work, or meet friends.",
  },
  {
    id: 120,
    q: "What is Deep Learning?",
    a: "Deep Learning is a method of Artificial Intelligence (AI) inspired by the human brain that uses multiple hidden layers in a neural network to process data, learn, and make intelligent decisions.",
  },
  {
    id: 121,
    q: "What is Natural Language Processing (NLP)?",
    a: "NLP is an important field of AI through which computer systems can understand human language (such as English, Bengali, etc.) and translate and coordinate human language and information.",
  },
  {
    id: 122,
    q: "What is Speech Recognition?",
    a: "Speech recognition is a technology that enables a machine to understand spoken language and translate it into machine-readable format. Its subfields are Text to Speech and Speech to Text.",
  },
  {
    id: 123,
    q: "What is Computer Vision?",
    a: "Computer Vision is an AI field divided into Machine Vision (identifying objects) and Image Processing (performing mathematical operations on digital images to extract characteristics).",
  },
  {
    id: 124,
    q: "What is an AI Model?",
    a: "An AI Model is a computer program trained with a huge amount of data to understand, analyze, answer questions, identify subjects, and make decisions like a human.",
  },
  {
    id: 125,
    q: "What is Gemini?",
    a: "Gemini is an advanced AI Model developed by Google that can understand and analyze text, images, audio, video, and programming code.",
  },
  {
    id: 126,
    q: "What is GPT?",
    a: "GPT (Generative Pre-trained Transformer) is an AI Model developed by OpenAI used for natural conversation, text generation, mathematics, logic, and programming tasks.",
  },
  {
    id: 127,
    q: "What is Claude?",
    a: "Claude is an AI Model developed by Anthropic used for analyzing large documents, summarizing information, answering questions, and writing tasks.",
  },
  {
    id: 128,
    q: "What is Llama?",
    a: "Llama is an AI Model developed by Meta that developers can use to create various types of applications and services.",
  },
  {
    id: 129,
    q: "What is DeepSeek?",
    a: "DeepSeek is a powerful AI Model used in various tasks like mathematics, logic, and programming. It is also used in research and building AI apps.",
  },
  {
    id: 130,
    q: "What is Grok?",
    a: "Grok is an AI Model developed by xAI used for conversation, data analysis, and answering various types of questions.",
  },
  {
    id: 131,
    q: "What are the 5Vs of Big Data?",
    a: "The main characteristics of Big Data are generally known as the 5Vs (Volume, Velocity, Variety, Veracity, and Value).",
  },
  {
    id: 132,
    q: "What is Software Engineering?",
    a: "Software Engineering is the process of developing, testing, deploying, maintaining, and improving software in a planned and systematic manner.",
  },
  {
    id: 133,
    q: "What is SDLC?",
    a: "SDLC stands for Software Development Life Cycle. It is the sequential steps followed from the beginning to the end of creating software.",
  },
  {
    id: 134,
    q: "Who introduced the word 'Robot' in a play published in 1920?",
    a: "Czech writer and playwright Karel Capek introduced the word 'robot' in a play published in 1920.",
  },
  {
    id: 135,
    q: "What is a UAV?",
    a: "UAV stands for Unmanned Aerial Vehicle, commonly known as a drone. It is an unmanned aircraft operated remotely or autonomously, primarily used in the military.",
  },
  {
    id: 136,
    q: "What is a Biometric Birth Certificate?",
    a: "It is a birth certificate where the baby's DNA, fingerprints, hair samples, and blood are stored in a memory chip embedded in the certificate to prevent swapping or theft.",
  },
  {
    id: 137,
    q: "What is Iris Recognition?",
    a: "Iris Recognition is a highly accurate biometric method where the colored ring surrounding the pupil of the eye is analyzed. The system detects about 240 unique points in the iris.",
  },
  {
    id: 138,
    q: "What is Voice Verification?",
    a: "Voice Verification is a behavioral biometric method where a user's voice is converted into data, stored in a database, and later compared with a new voice input to verify identity.",
  },
  {
    id: 139,
    q: "What is Signature Verification?",
    a: "Signature Verification is a behavioral biometric method that analyzes the shape of a handwritten signature, writing speed, timing, and pen pressure using a special pen and pad.",
  },
  {
    id: 140,
    q: "What is Keystroke Dynamics?",
    a: "Keystroke Dynamics is a behavioral biometric method that analyzes typing speed and rhythm on keyboards to verify an individual.",
  },
  {
    id: 141,
    q: "What are the four fields that make up Bioinformatics?",
    a: "Bioinformatics operates through the combination of Molecular Biology, Databases, Programming, and Mathematics/Statistics.",
  },
  {
    id: 142,
    q: "What is a Plasmid?",
    a: "A plasmid is a small, extra self-controlled circular DNA found in bacteria (like E. coli) used as a carrier to add with selected DNA during genetic engineering.",
  },
  {
    id: 143,
    q: "Who first used the term 'Genetic Engineering' in a science fiction novel?",
    a: "American science fiction writer Jack Williamson first used the term genetic engineering in his novel 'Dragon's Island'.",
  },
  {
    id: 144,
    q: "What is the Top-Down approach in Nanotechnology?",
    a: "In the Top-Down approach, larger materials are cut or reduced to a smaller size (nanoscale) and given a specific shape, generally associated with lithography.",
  },
  {
    id: 145,
    q: "What is the Bottom-Up approach in Nanotechnology?",
    a: "In the Bottom-Up approach, small components (atoms and molecules) are used to build larger structures by assembling them at the nanometer scale.",
  },
  {
    id: 146,
    q: "Who introduced the concept of Nanotechnology?",
    a: "American physicist Richard Feynman first introduced the concept of nanotechnology in a lecture titled 'There's Plenty of Room at the Bottom' on December 29, 1959.",
  },
  {
    id: 147,
    q: "What is STM?",
    a: "STM stands for Scanning Tunneling Microscope. Invented in 1980, it allowed scientists to observe atoms directly, making nanotechnology a reality.",
  },
  {
    id: 148,
    q: "Who introduced the field of Computer Ethics?",
    a: "The field of Computer Ethics was first introduced by Dr. Walter Maner.",
  },
  {
    id: 149,
    q: "Who presented the 'Ten Commandments of Computer Ethics'?",
    a: "Ramon C. Barquin presented the Ten Commandments of Computer Ethics in his paper 'In Pursuit of a Ten Commandments' for Computer Ethics' in 1992.",
  },
  {
    id: 150,
    q: "What is a White Hat Hacker?",
    a: "A White Hat Hacker is an ethical hacker who works to identify security issues for protection, not harm.",
  },
  {
    id: 151,
    q: "What is a Black Hat Hacker?",
    a: "A Black Hat Hacker illegally breaks into systems to steal data, money, or cause damage.",
  },
  {
    id: 152,
    q: "What is a Grey Hat Hacker?",
    a: "A Grey Hat Hacker finds vulnerabilities in systems, informs the authorities, and often seeks payment in return.",
  },
  {
    id: 153,
    q: "What is Phreaking?",
    a: "Phreaking is the act of hacking telephone or telecommunication systems. Those who perform such actions are called phrackers.",
  },
  {
    id: 154,
    q: "What is Spoofing?",
    a: "Spoofing is a deceptive technique where a fake website is created to mimic a legitimate one, tricking users into providing personal or financial information.",
  },
  {
    id: 155,
    q: "What is Sniffing?",
    a: "Sniffing is the act of secretly intercepting data as it is being transmitted over a network. Data encryption is commonly used to prevent it.",
  },
  {
    id: 156,
    q: "What is a Trojan Horse?",
    a: "A Trojan Horse is a type of malicious software (malware) that causes hidden damage to a computer system.",
  },
  {
    id: 157,
    q: "What is Spyware?",
    a: "Spyware is a type of malicious software that secretly collects user data without their knowledge.",
  },
  {
    id: 158,
    q: "What is the punishment under Section 57(1) of the ICT Act 2006 in Bangladesh?",
    a: "Publishing or broadcasting false, obscene content online that harms someone's reputation can lead to up to 10 years of imprisonment and a fine up to 1 crore BDT.",
  },
  {
    id: 159,
    q: "What does the Pornography Control Act 2012 state?",
    a: "Distributing pornography via internet, website, mobile phone, or other digital means can lead to up to 5 years of rigorous imprisonment and a fine up to 200,000 BDT.",
  },
  {
    id: 160,
    q: "What are Antitrust Laws?",
    a: "Antitrust laws are rules that monitor the distribution of economic power in business to ensure equal opportunities for competition and promote economic prosperity.",
  },
  {
    id: 161,
    q: "What is the Digital Divide?",
    a: "The digital divide is the gap between people who have access to modern ICT tools and those who do not, often seen between developed and developing countries.",
  },
  {
    id: 162,
    q: "What is a Startup?",
    a: "A startup is a business initiated to solve a major problem. Examples include LinkedIn, Facebook, Uber, and bKash.",
  },
  {
    id: 163,
    q: "What is the a2i project?",
    a: "a2i stands for Aspire to Innovate. It is a government project working towards building a Smart Bangladesh by establishing communication and access to government service information in the remotest areas.",
  },
  {
    id: 164,
    q: "Where is the National Data Center located?",
    a: "The four-tier National Data Center is located in Kaliakair, Gazipur. It is considered the brain of Digital Bangladesh.",
  },
  {
    id: 165,
    q: "What is 'Saj'?",
    a: "'Saj' is a QR-code based universal fast payment system launched by Bangladesh Bank to build a cashless economy.",
  },
  {
    id: 166,
    q: "What is Telecommunication?",
    a: "Telecommunication is the process of communication between people over long distances using devices or machines, completely overcoming geographical barriers.",
  },
  {
    id: 167,
    q: "What is Information-based Communication?",
    a: "Information-based communication involves exchanging information instantly using phones, the internet, email, SMS, video calls, and social media apps like WhatsApp and Zoom.",
  },
  {
    id: 168,
    q: "What is Transportation-based Communication?",
    a: "Transportation-based communication involves people communicating by traveling from one place to another, using technologies like Wi-Fi, Bluetooth, GPS, and in-vehicle internet (Car Wi-Fi).",
  },
  {
    id: 169,
    q: "What is a Virtual Office?",
    a: "A virtual office is an office that operates online, where employees can work from home using the internet, cloud services, and office automation systems.",
  },
  {
    id: 170,
    q: "What is CNC?",
    a: "CNC stands for Computer Numerical Control. It is a machine that automates production, saving time and materials, and is one of the most important tools in modern manufacturing.",
  },
  {
    id: 171,
    q: "What is E-Agriculture?",
    a: "E-Agriculture is the use of ICT in agricultural development, allowing farmers to obtain expert advice online regarding weather, crop cultivation, fertilizers, and pest control.",
  },
  {
    id: 172,
    q: "What is Krishak TV?",
    a: "Krishak TV is an online agricultural programming platform in Bangladesh.",
  },
  {
    id: 173,
    q: "What is the AICC center?",
    a: "AICC (Agriculture Information and Communication Center) centers offer training and ICT services to rural farmers in Bangladesh.",
  },
  {
    id: 174,
    q: "What is the agricultural call center number in Bangladesh?",
    a: "Farmers can call 09633123123 for instant agricultural support.",
  },
  {
    id: 175,
    q: "What is IP Radio?",
    a: "IP Radio allows broadcasting radio without a satellite using an internet connection.",
  },
  {
    id: 176,
    q: "What is an Online Job Portal?",
    a: "An online job portal is a website where job advertisements and applications are possible, such as www.bdjobs.com and www.prothomalojobs.com.",
  },
];

export default function KnowledgeBaseQA() {
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
  const filteredData = qaData.filter((item) => {
    const searchLower = searchTerm.toLowerCase().trim();

    // If search is empty, show all
    if (searchLower === "") return true;

    // Check if the search term is purely a number (e.g., "9", "15")
    const isStrictNumber = /^\d+$/.test(searchLower);

    if (isStrictNumber) {
      // If it's a pure number, strictly match ONLY the exact ID.
      // This prevents typing "9" from showing ID 89 or 99.
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
      <div className="space-y-3 flex-grow max-w-4xl mx-auto w-full">
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
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                >
                  <div className="flex items-start">
                    <span
                      className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full font-bold text-xs mr-4 mt-0.5 transition-colors ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`font-semibold text-md sm:text-lg pr-4 ${
                        isOpen ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>
                  <span className="ml-auto flex-shrink-0">
                    <svg
                      className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${
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
                    <p className="mt-4 text-base sm:text-md">{item.a}</p>
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
