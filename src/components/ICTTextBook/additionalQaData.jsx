import { useState } from "react";

export const additionalQaData = [
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
