import React, { useState } from "react";
import KnowledgeBaseQA, { qaData } from "./KnowledgeBaseQA";
import ComprehensionQuestions, {
  comprehensionData,
} from "./ComprehensionQuestions";
import CreativeQuestions, { creativeQuestionsData } from "./CreativeQuestions";
import MCQ, { mcqData } from "./mcq";

// ----------------------------------------------------------------------
// EXTRACTED Q&A DATA (Moved outside to be accessible by Sidebar)
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// KNOWLEDGE BASE Q&A COMPONENT
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// MAIN DASHBOARD COMPONENT
// ----------------------------------------------------------------------
const courseData = [
  {
    id: "ch1",
    title: "Chapter 1",
    fullTitle:
      "Information and Communication Technology: World and Bangladesh Perspective",
    sections: [
      {
        id: "intro",
        title: "Introduction & Learning Outcomes",
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              The present age is the age of information and communication
              technology, which is regarded as a new kind of industrial
              revolution, similar to that of the past. Due to the remarkable
              advancement in information and communication technology, people
              around the world can now live as a single society, connected by
              cooperation and empathy. This era is known as the Fourth
              Industrial Revolution, during which many new technologies have
              emerged. In this chapter, students will become familiar with these
              specialized technologies.
            </p>
            <div className="bg-base-200 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-primary">
                Learning Outcomes
              </h4>
              <p className="font-semibold mb-2">Will be able to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>explain the concept of a global village.</li>
                <li>
                  describe the key components related to the concept of a global
                  village.
                </li>
                <li>
                  evaluate the contribution of information and communication
                  technology (ICT) in establishing a global village.
                </li>
                <li>analyze the concept of virtual reality.</li>
                <li>evaluate the impact of virtual reality in daily life.</li>
                <li>
                  analyze the recent trends in information and communication
                  technology.
                </li>
                <li>
                  explain the importance of maintaining ethics in using ICT.
                </li>
                <li>evaluate the impact of ICT in social life.</li>
                <li>analyze the role of ICT in economic development.</li>
                <li>use ICT while upholding moral and ethical values.</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
              Basic Concepts
            </h3>
            <h4 className="font-bold text-lg mt-4 text-primary">
              What is Information?
            </h4>
            <p className="text-gray-700">
              Information is organized and meaningful data used to know or
              understand something.
            </p>

            <h4 className="font-bold text-lg mt-4 text-primary">
              What is Data?
            </h4>
            <p className="text-gray-700">
              Data is the raw material of information. It can be random letters,
              numbers, symbols, or images that, on their own, do not convey any
              specific meaning.
            </p>

            <h4 className="font-bold text-lg mt-4 text-primary">
              Difference Between Data and Information
            </h4>
            <div className="overflow-x-auto rounded-box border border-base-300 mt-2">
              <table className="table w-full text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th className="w-1/2 border-r border-base-300">Data</th>
                    <th className="w-1/2">Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-base-300">
                      1. Data is raw material used for processing.
                    </td>
                    <td>1. Information is processed and meaningful data.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      2. It is used as input.
                    </td>
                    <td>2. It is obtained as output.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      3. All information is data.
                    </td>
                    <td>3. Not all data is information.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      4. Data does not give a complete idea.
                    </td>
                    <td>4. Information gives a clear understanding.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      5. Data does not depend on information.
                    </td>
                    <td>5. Information depends on data.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      6. A student's subject-wise marks are data.
                    </td>
                    <td>
                      6. The student's name, roll number, all subject marks, and
                      total marks = information.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-lg mt-4 text-primary">
              What is Technology?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Technology is the knowledge of using techniques, methods, or tools
              to do something easily and efficiently. It can involve machines,
              computers, or any kind of devices. The word "technology" comes
              from the combination of two Greek words: "Techne" (meaning art,
              craft, or skill of the hand) and "Logos" (meaning study or
              science). Together, they form the word "Technology," which
              literally means the study or application of skills or tools.
            </p>

            <h4 className="font-bold text-lg mt-4 text-primary">
              What is Information Technology (IT)?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Information Technology (IT) is a technology through which
              information can be collected, stored, processed, and exchanged.
              This technology includes a combination of computers, the internet,
              telecommunications, audio-visual tools, and other related
              technologies. Nowadays, it is commonly referred to as Information
              and Communication Technology (ICT), because communication plays a
              major role in managing information.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-4 my-4">
              <p className="italic text-gray-800">
                <strong>According to Bangladesh's ICT Policy:</strong>{" "}
                "Information and Communication Technology refers to the
                technologies used for producing, storing, processing, and
                distributing information."
              </p>
            </div>

            <h4 className="font-bold text-lg mt-4 text-primary">
              What is Communication Technology?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Communication Technology refers to a type of technology that
              allows the <strong>exchange of information</strong> using{" "}
              <strong>computers or electronic devices</strong>. Examples:
              Telephone, mobile phone, internet, etc.
            </p>

            <div className="bg-base-200 p-6 rounded-lg mt-6 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Claude Elwood Shannon
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  This American mathematician, born on April 30, 1916, is known
                  as the Father of Information Technology. In 1937, while he was
                  a student at MIT, at just 27 years old, he discovered the
                  Digital Circuit Design Theory. Later, in 1948, he published a
                  paper titled "A Mathematical Theory of Communication," which
                  became the foundation of modern information theory. Because of
                  this groundbreaking work, he is honored as the Father of
                  Information Technology.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "1.1",
        title: "1.1 Concept of Global Village",
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              A village is a small group or a cluster of houses. In a village,
              people usually know one another and help each other in their daily
              lives. News spreads quickly from one person to another. "Global"
              means the world, so "Global Village" means a world village—a
              technology-driven world where people around the globe can
              communicate with each other easily, just like villagers.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Due to today's advanced technology, the world feels much smaller.
              With the help of the internet, telephone, computer, and
              television, people can now communicate instantly from one end of
              the world to the other. A Canadian author named Herbert Marshall
              McLuhan first used the term "Global Village" in the 1960s. He
              showed how communication technology was turning the world into a
              village.
            </p>

            <h4 className="font-bold text-lg mt-6 text-primary">
              Definition of Global Village
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>According to yourdictionary.com</strong> – "The
                definition of a global village is the idea that people are
                connected by easy travel, mass media and electronic
                communications, and have become a single community."
              </li>
              <li>
                <strong>According to MacMillan dictionary</strong> - Global
                village is – "The modern world which all countries depend on
                each other and seem to be closer together because of modern
                communications and transport system."
              </li>
              <li>
                <strong>According to the Oxford American Dictionary</strong>,
                "Global Village is a world that appears as a small village due
                to rapid information and communication exchange."
              </li>
            </ul>

            <h4 className="font-bold text-lg mt-6 text-primary">
              Elements of Establishing a Global Village
            </h4>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li>
                <strong>Hardware:</strong> To ensure information and
                communication in the global village, devices are the first
                requirement. Examples: Computers, mobile phones, audio-video
                recorders, satellites, radios, televisions, etc.
              </li>
              <li>
                <strong>Software:</strong> Software is needed to run hardware.
                Examples: Operating systems (like Windows, Android), browsers
                (like Chrome), communication apps (like WhatsApp, Messenger),
                programming languages (like Python, Java), etc.
              </li>
              <li>
                <strong>Internet Connectivity:</strong> The biggest strength of
                the global village is the internet. Through it, information can
                be exchanged safely. This connection is made through
                telecommunications, broadcasting, and internet services.
              </li>
              <li>
                <strong>Data:</strong> Data refers to raw information. Computers
                process data to provide us with useful information. This
                information can be shared freely or commercially, but it must be
                reliable.
              </li>
              <li>
                <strong>Human Knowledge or Skills:</strong> To use information
                technology properly, human awareness and knowledge are
                essential. No matter how advanced the technology is, its
                benefits depend on how well people understand and use it.
              </li>
            </ol>

            <h4 className="font-bold text-lg mt-6 text-primary">
              Advantages and disadvantages of Global Village
            </h4>
            <div className="overflow-x-auto rounded-box border border-base-300 mt-2">
              <table className="table table-zebra w-full text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th className="w-1/2 border-r border-base-300 text-success">
                      Advantages
                    </th>
                    <th className="w-1/2 text-error">Disadvantages</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-base-300">
                      1. People can communicate quickly and securely with anyone
                      globally.
                    </td>
                    <td>
                      1. Hackers can steal information, and confidential data
                      may be leaked.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      2. The feeling of distance decreases; everyone seems
                      closer.
                    </td>
                    <td>
                      2. False or misleading information can spread, causing
                      chaos.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      3. Management costs are reduced.
                    </td>
                    <td>
                      3. People tend to believe wrong information without
                      verification.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      4. Access to top educational lessons and materials from
                      home.
                    </td>
                    <td>
                      4. Virtual friendships increase, while real friendships
                      decrease.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      5. Information about other countries and cultures is
                      easily accessible.
                    </td>
                    <td>
                      5. Influence from foreign cultures may lead to loss of
                      native culture.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      6. Online business and shopping from home are possible.
                    </td>
                    <td>6. Bank data can be stolen; card fraud may occur.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      7. Remote medical treatment is available through
                      telemedicine.
                    </td>
                    <td>7. Pornography may cause social degradation.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      8. Entertainment is available via internet TV and radio at
                      home.
                    </td>
                    <td>8. Cyber attacks can occur.</td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      9. Online earning opportunities increase, boosting the
                      economy.
                    </td>
                    <td>
                      9. Overuse of technology may cause physical or eye
                      problems.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300">
                      10. Sources of information have increased significantly.
                    </td>
                    <td>
                      10. Some people may lose their jobs or become unemployed.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300"></td>
                    <td>
                      11. Big tech companies may control global information and
                      disrupt balance.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-base-300"></td>
                    <td>
                      12. Personal privacy may be violated; unequal access to
                      technology may lead to digital divide.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
        subsections: [
          {
            id: "1.1.1",
            title: "1.1.1 Communication",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Communication</strong> means the exchange of
                  information between one person or place and another. In the
                  concept of the Global Village, communication is one of the
                  most important components. Communication systems can be
                  divided into two types: Information-based Communication and
                  Transportation-based Communication.
                </p>

                <h4 className="font-bold mt-4 text-gray-800">
                  1. Information-based Communication
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Nowadays, communication can be done instantly using phones,
                  the internet, and various apps. Some of the major
                  communication tools include: Phone and mobile phones, e-mail,
                  SMS, MMS, video calls and conferencing (such as Zoom, Google
                  Meet, Microsoft Teams, etc.), and social media apps like
                  WhatsApp, Facebook Messenger, Imo, Telegram, Discord, etc.
                </p>

                <h4 className="font-bold mt-4 text-gray-800">
                  2. Transportation-based Communication
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Not just through conversation, people also communicate by
                  traveling from one place to another. For example, in traffic
                  control, technologies like Wi-Fi, Bluetooth, GPS, and GPRS are
                  being used. In transportation, the use of in-vehicle internet
                  (Car Wi-Fi) and GPS navigation systems is increasing day by
                  day.
                </p>

                <h4 className="font-bold mt-4 text-gray-800">
                  A. Telecommunication System
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Telecommunication is generally the process of communication
                  between people over long distances using devices or machines.
                  In the beginning, this communication relied mainly on the
                  telegraph and telephone, but now, with the invention of
                  various technologies related to the concept of the modern
                  global village, telecommunication systems have become powerful
                  enough to completely overcome geographical barriers.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Digital Telephone Network:</strong> A digital
                    telephone is a modern type of telephone that is built and
                    operated using advanced technology. ISDN (Integrated
                    Services Digital Network) is a notable example.
                  </li>
                  <li>
                    <strong>Mobile Communication:</strong> A technology through
                    which people from any part of the world can stay connected
                    with each other at all times. Martin Cooper is known as the
                    father of the mobile phone.
                  </li>
                  <li>
                    <strong>Satellite:</strong> An artificial object launched
                    into space by humans. These satellites orbit the Earth in
                    specific paths, typically at a distance of about 35,786 km,
                    completing one orbit every 24 hours.
                  </li>
                </ul>

                <h4 className="font-bold mt-4 text-gray-800">
                  B. Information Communication System
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The most vital component in turning the world into a Global
                  Village is the exchange of information and communication
                  systems. Key tools include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Internet:</strong> A vast network of computers
                    connected globally, allowing us to exchange information. In
                    1969, ARPANET was created by the U.S. Department of Defense.
                  </li>
                  <li>
                    <strong>Email (Electronic Mail):</strong> Sending mail or
                    letters electronically. Raymond Samuel Tomlinson is known as
                    the Father of Email.
                  </li>
                  <li>
                    <strong>Teleconferencing:</strong> Holding meetings remotely
                    using phones or computers. Invented by Murray Turoff in
                    1975.
                  </li>
                  <li>
                    <strong>Video Conferencing:</strong> The process of speaking
                    and seeing each other in real-time from a distance using
                    video and audio via the internet. Popular apps include Zoom,
                    Google Meet, Skype, etc.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            id: "1.1.2",
            title: "1.1.2 Employment",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Due to the widespread expansion of Information and
                  Communication Technology (ICT), new horizons of employment
                  have opened up. Through computers and the internet, searching
                  for jobs, finding work opportunities, and earning income from
                  home has become much easier and more cost-effective. Because
                  of the availability of both full-time and part-time work
                  online, freelancing and outsourcing have emerged as large
                  industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Outsourcing</strong> refers to performing tasks for
                  foreign companies through the internet and earning foreign
                  currency. This includes fields such as web development,
                  graphic design, content writing, digital marketing, etc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Freelancing</strong> means working independently
                  without being under a specific organization, where one works
                  based on their own skills.
                </p>
                <h4 className="font-bold mt-4">
                  Popular Freelancing Marketplaces:
                </h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Upwork.com</strong> – Work is obtained through
                    bidding.
                  </li>
                  <li>
                    <strong>Freelancer.com</strong> – Good opportunities for
                    both bidding and hourly-based work.
                  </li>
                  <li>
                    <strong>Belancer.com</strong> – A Bangladeshi bid-based
                    platform.
                  </li>
                  <li>
                    <strong>Fiverr.com</strong> – Opportunities to create and
                    sell gigs.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Other online earning methods include Affiliate Marketing,
                  Google AdSense, Uber, and Pathao. Job advertisements are also
                  possible through online portals like www.bdjobs.com,
                  www.prothomalojobs.com, and www.jobsal.com.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.3",
            title: "1.1.3 Education",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Alongside books, the internet is now a major source of
                  knowledge. With online classes, exams, and educational
                  websites, it is now possible to receive education from home.{" "}
                  <strong>Example:</strong> www.khanacademy.org, founded by
                  Salman Khan, has over 10 million students.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Online Education During COVID:</strong> In 2020,
                  during the COVID-19 pandemic, online education opened up a new
                  horizon. Teachers conducted classes from home using platforms
                  like Zoom, Google Meet, Microsoft Teams, Facebook Live, etc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>E-Learning:</strong> E-learning means receiving
                  education through electronic means. Tools include computer,
                  mobile, email, video conference, messaging, digital
                  whiteboards, multimedia projectors, e-books, etc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>E-book:</strong> A digital version of a book that is
                  easily downloadable and portable. The father of the e-book is
                  Michael S. Hart, founder of the Gutenberg Project.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Blended Learning:</strong> A combination of
                  face-to-face and online learning. It mixes traditional and
                  digital education methods, making teaching more effective and
                  popular.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>
                    Google Classroom, Distance Learning, Webex, and Webinar
                  </strong>{" "}
                  are also modern educational tools.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.4",
            title: "1.1.4 Healthcare (Medical Services)",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  With the advancement of ICT, it is now possible to receive
                  medical services from home. Patient information, reports, and
                  doctors' advice are stored online, allowing quick access to
                  healthcare. Through video conferencing, a doctor can even
                  treat a patient in another country. In our country, mobile
                  operators have introduced telemedicine, bringing healthcare
                  services to remote areas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Telemedicine</strong> is a healthcare method where
                  doctors and patients communicate remotely through video
                  conferencing, email, or other digital media. Doctors evaluate
                  the patient's condition, reports, and test results to provide
                  necessary advice.
                </p>
                <h4 className="font-bold mt-4">
                  Uses and Benefits of Telemedicine:
                </h4>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Access to specialist doctors at home:</strong> Easy
                    consultation with specialists in cities or abroad.
                  </li>
                  <li>
                    <strong>Fast and low-cost treatment:</strong> Patients can
                    consult doctors through video calls without visiting
                    hospitals.
                  </li>
                  <li>
                    <strong>Disease analysis and data storage:</strong> Patient
                    data and treatment history are stored in special software
                    (EHR).
                  </li>
                  <li>
                    <strong>Collaboration among doctors:</strong> Doctors can
                    seek advice from specialists to assist in diagnosis.
                  </li>
                  <li>
                    <strong>Major opportunity for remote populations:</strong>{" "}
                    People in villages or remote areas benefit greatly.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "1.1.5",
            title: "1.1.5 Research",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Research is the process of generating new knowledge or
                  improving existing knowledge. ICT has revolutionized research.
                  Researchers now use computers for data collection, analysis,
                  simulation, and machine control, simplifying complex tasks.
                  The internet provides easy access to research papers, patents,
                  and e-journals, which were previously hard to obtain.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>E-Journal:</strong> Research papers published online
                    that can be accessed anytime.
                  </li>
                  <li>
                    <strong>Patent:</strong> Exclusive rights granted by
                    governments for inventions, usually valid for 20 years.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Thus, ICT facilitates global knowledge dissemination and
                  cooperation in research.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.6",
            title: "1.1.6 Office",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  An office is a place where professionals work. Modern offices
                  extensively use ICT. Many offices operate online, known as
                  virtual offices. Employees can work from home using the
                  internet, called home office. Digital offices are paperless
                  and use cloud services like Google Drive, Dropbox, Office 365,
                  Google Docs for storing, sharing, and protecting data.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Office automation systems enable computer and software-based
                  easy management of tasks like documentation, communication,
                  and data processing.
                </p>
                <h4 className="font-bold mt-4">Home Office:</h4>
                <p className="text-gray-700 leading-relaxed">
                  During COVID-19, working from home became popular. It allows
                  work from any location and secure data storage. However, it
                  comes with security risks and reduced social interaction.
                </p>
                <h4 className="font-bold mt-4">Popular Cloud Services:</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>
                    Google Drive, Dropbox, Office 365, and Google Docs
                  </strong>{" "}
                  are essential modern tools.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.7",
            title: "1.1.7 Housing (Accommodation)",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Housing generally refers to the place where people live.
                  However, in the modern era, the concept of housing has changed
                  significantly due to the internet. Nowadays, smart homes or
                  technology-dependent houses are being developed. A smart home
                  is a residence where heating, cooling, lighting, security
                  control systems, and other functions can be controlled
                  remotely or through programmed devices.
                </p>
                <h4 className="font-bold mt-4">Internet of Things (IoT)</h4>
                <p className="text-gray-700 leading-relaxed">
                  Internet of Things or IoT is a technology through which
                  different everyday objects (like TV, fridge, car, watch, door
                  lock, fan, etc.) can be connected to the Internet and
                  controlled from a distance through smart devices or other
                  controllers. Main components include Sensors, Network, Data
                  Processor/Controller, Actuator, and User Interface.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.8",
            title: "1.1.8 Business and Commerce",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Currently, the scope of business and commerce has expanded
                  worldwide. Due to information and communication technology,
                  doing business with other countries is no longer as
                  complicated as before. Through e-commerce, it is possible to
                  order products globally and pay by credit card from home. Much
                  of the commercial activity is now conducted online, creating a
                  global marketplace or "global village."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>E-commerce (Electronic Commerce):</strong> Refers to
                  the buying, selling, supply, and business transactions of
                  products or services electronically through the internet.
                  Popular e-commerce sites include Amazon, Flipkart, Daraz, and
                  eBay.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>M-Commerce:</strong> Mobile Commerce means the
                  convenience of shopping or conducting financial transactions
                  from anywhere using a mobile phone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Online Banking:</strong> Banking activities (such as
                  sending money, checking balance) done through the internet are
                  called online banking. It allows conducting banking without
                  going to the bank, from home or anywhere.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.9",
            title: "1.1.9 News",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Various events happen worldwide every day, which can now be
                  known very quickly through television, the internet, and
                  online news portals. This technology has brought the global
                  community closer. International channels like BBC, CNN, and
                  Al-Jazeera provide news instantly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Mass Media:</strong> Mass media is a medium that
                  delivers information simultaneously to many people. It
                  includes television, radio, internet, mobile phones, websites,
                  etc. The internet has now become the most powerful mass media
                  platform, hosting blogging, email, online TV, websites, and
                  more.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Online News Portal:</strong> An online news portal is
                  a website that publishes news online. Recently, online news
                  portals have become quite popular in Bangladesh. Notable among
                  them are bdnews24.com, prothomalo.com, etc.
                </p>
              </div>
            ),
          },
          {
            id: "1.1.10",
            title: "1.1.10 Entertainment and Social Communication",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In today's modern era, people can enjoy various types of
                  entertainment at home. Online games, streaming videos, TV, or
                  radio are now accessible via the internet. IPTV and IP radio
                  allow broadcasting TV without satellite using an internet
                  connection. Netflix is a popular streaming service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Furthermore, social communication through the internet has
                  become very easy. Facebook, Twitter, YouTube, Instagram,
                  WhatsApp, Messenger, Skype, etc., have reduced distances among
                  people. By sharing photos, videos, and opinions, everyone can
                  stay connected. As a result, the world has become a kind of
                  "Global Village."
                </p>
              </div>
            ),
          },
          {
            id: "1.1.11",
            title: "1.1.11 Cultural Exchange",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Human culture is always changing. Through information and
                  communication technology, now people of one country can easily
                  learn about the culture of another country. Songs, movies,
                  literature, clothing, food, language, festivals, and various
                  cultural aspects are spreading worldwide through TV, radio,
                  and the internet. In this way, cultural relationships are
                  formed between countries, which is known as cultural exchange.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, there are some disadvantages or challenges as well,
                  such as the risk of losing local traditions and languages, and
                  the blind following of Western culture which harms indigenous
                  customs.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        id: "1.2",
        title: "1.2 Virtual Reality",
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Mohammad Ullah, a geography teacher at Nankara School, was
              teaching 4th-grade students about the Cox's Bazar sea beach. He
              tried to explain beautifully with a lecture, but he couldn't
              attract the students' attention. After ten minutes, Mohammad Ullah
              sir took the students to the computer lab. The lab assistant put
              special helmets on their heads, special gloves on their hands, and
              special instrument-equipped shoes on their feet. Every student saw
              that they had arrived at the Cox's Bazar sea beach. Ahead was the
              vast sea. Huge waves crashing on the shore, the roaring sound of
              the sea, the whooshing wind, and bird sounds behind them...
              Suddenly everything went dark. The computer lab assistant took off
              all their helmets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is called Virtual Reality. The literal meaning of the term
              Virtual Reality is artificial reality. In the true sense, it is
              not real, but a science-based imagination that stimulates the
              awareness of reality is called Virtual Reality or artificial
              reality or simulated reality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Virtual Reality is primarily based on computer technology and
              simulation theory. Some notable software used in it includes
              Unity, Virtual Reality Toolkit, 3D Modeling Software, Blender,
              Vizard, VRToolKit, 3ds Studio Max, Maya etc. In virtual reality,
              it is possible to perform even the most impossible tasks through
              the creation of three-dimensional images.
            </p>
            <div className="bg-base-200 p-4 rounded-lg mt-4">
              <h4 className="font-bold mb-2">Components of Virtual Reality</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Head Mounted Display-HMD</li>
                <li>Data Glove</li>
                <li>A complete Body Suit</li>
                <li>High-quality Audio System</li>
                <li>Reality engine</li>
                <li>Various types of sensors</li>
                <li>
                  Various simulation, modeling, and graphics software, etc.
                </li>
              </ul>
            </div>
          </div>
        ),
        subsections: [
          {
            id: "1.2.1",
            title: "1.2.1 Impact of Virtual Reality in Daily Life",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Virtual Reality (VR) is a technology that artificially creates
                  an environment in front of the user, which looks and feels
                  exactly like reality. Because of this unique feature, VR has
                  brought significant changes to many aspects of our daily
                  lives.
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                  <li>
                    <strong>Education and Research:</strong> VR has added a new
                    dimension to education. Difficult topics like space, atomic
                    structure, the complex organs of the human body,
                    earthquakes, or natural disasters are hard to see or
                    understand in reality, but they can be easily taught through
                    VR.
                  </li>
                  <li>
                    <strong>Medical and Doctor Training:</strong> VR plays an
                    important role in healthcare. New surgeons can practice
                    operations on virtual patients before actual surgery. This
                    eliminates risk to real patients while allowing practical
                    experience.
                  </li>
                  <li>
                    <strong>Vehicle and Aircraft Training:</strong> Learning to
                    drive a car or fly an aircraft in real life carries the risk
                    of accidents. However, through virtual reality, trainees can
                    learn to control vehicles or planes in an environment that
                    closely mimics reality.
                  </li>
                  <li>
                    <strong>Military or Combat Training:</strong> VR offers a
                    safe and cost-effective way to train soldiers for warfare or
                    dangerous missions.
                  </li>
                  <li>
                    <strong>Business and Marketing:</strong> Before launching a
                    product in the market, its design, structure, or
                    functionality can be previewed through VR.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "1.2.2",
            title: "1.2.2 Negative Effects of Virtual Reality",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Alongside its positive impacts, virtual reality also has some
                  negative effects:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                  <li>
                    <strong>High Cost and Complexity:</strong> The price of
                    virtual reality equipment is very high, which limits its
                    accessibility among the general public.
                  </li>
                  <li>
                    <strong>Harmful to Health:</strong> Various studies have
                    shown that using virtual reality can be harmful to humans.
                    It can damage eyesight and hearing.
                  </li>
                  <li>
                    <strong>Escaping into the World of Imagination:</strong>{" "}
                    Spending too much time in this imaginary realm can gradually
                    distance a person from reality, potentially leading to
                    disastrous consequences in the real world.
                  </li>
                  <li>
                    <strong>Loss of Humanity:</strong> With the widespread use
                    of VR, interpersonal interactions may decline, increasing
                    dehumanization.
                  </li>
                </ul>
                <h4 className="font-bold mt-6 text-primary">
                  Augmented Reality (AR)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Augmented Reality is a technology that enhances the real world
                  by adding virtual information or objects to our surroundings,
                  making it more realistic and useful. Using cameras, sensors,
                  and computers, additional data, images, animations, sounds, or
                  other virtual elements are overlaid on the real environment to
                  improve the user's experience. It does not erase the real
                  world but adds new elements to it.
                </p>
                <h4 className="font-bold mt-4 text-primary">Metaverse</h4>
                <p className="text-gray-700 leading-relaxed">
                  The Metaverse is a digital world created by combining virtual
                  reality, augmented reality, and other technologies, where
                  users can fully "live" in a virtual environment. Just like
                  real life, people can explore, shop, work, or meet friends
                  there.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        id: "1.3",
        title: "1.3 Recent Trends in ICT",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The first industrial revolution started when steam- and
              water-powered machines began to replace manual labor. After that,
              the use of railways, telegraph, and electricity brought the second
              industrial revolution. The third industrial revolution came
              through computers and electronics. Currently, we are in the era of
              the fourth industrial revolution (Industry 4.0). In this phase,
              using smart technology and information and communication
              technology, production processes are becoming automated.
            </p>
          </div>
        ),
        subsections: [
          {
            id: "1.3.1",
            title: "1.3.1 Artificial Intelligence (AI)",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Artificial intelligence is the means artificially embedding
                  human thinking into computers or computer-based devices.
                  Because of AI, a robot can understand human instructions and
                  can perform even very complex tasks. In 1956, in the United
                  States, John McCarthy first mentioned the term artificial
                  intelligence.
                </p>
                <h4 className="font-bold mt-4">
                  How Artificial Intelligence Works
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The core concept of artificial intelligence is data science.
                  Artificial intelligence uses a method to process data that
                  attempts to mimic the way the human brain works. Generally,
                  this is called a neural network or neural net. Deep learning
                  is a method of artificial intelligence (AI) that reaches
                  closest to true artificial intelligence in a way inspired by
                  the human brain.
                </p>
                <h4 className="font-bold mt-4">
                  Various Fields of Artificial Intelligence
                </h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>Machine Learning</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>Speech Recognition</li>
                  <li>Robotics</li>
                  <li>Vision</li>
                  <li>Expert System</li>
                </ul>
                <div className="bg-base-200 p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">AI Model Examples</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>
                      <strong>Gemini (Google):</strong> An advanced AI Model
                      developed by Google.
                    </li>
                    <li>
                      <strong>GPT (OpenAI):</strong> Used for natural
                      conversation with humans.
                    </li>
                    <li>
                      <strong>Claude (Anthropic):</strong> Used for analyzing
                      large documents and summarizing.
                    </li>
                  </ul>
                </div>
                <h4 className="font-bold mt-4">Disadvantages of AI</h4>
                <p className="text-gray-700 leading-relaxed">
                  Risk of people losing jobs, security risks if AI makes wrong
                  decisions or gets hacked, privacy violations, decreased human
                  interaction, and potential misuse in weapons.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.2",
            title: "1.3.2 Robotics",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The branch of technology where the design, structure,
                  operational process, functions, and applications of robots are
                  discussed is called Robotics. A robot is a computer-controlled
                  electromechanical system that can perform tasks similar to
                  humans automatically.
                </p>
                <h4 className="font-bold mt-4">Components of a Robot:</h4>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Movable body:</strong> To move, a robot may include
                    wheels, mechanically linked legs, or other movement-enabling
                    mechanisms.
                  </li>
                  <li>
                    <strong>Actuator:</strong> A type of motor that can be
                    rotated or controlled mechanically. It enables the robot to
                    perform actions in different directions.
                  </li>
                  <li>
                    <strong>Electric power source:</strong> The robot requires
                    electric power to operate actuators, usually provided by
                    lead-acid batteries.
                  </li>
                  <li>
                    <strong>Programmed brain or computer:</strong> Controls
                    everything in the robot.
                  </li>
                  <li>
                    <strong>Sensing:</strong> A special feature of robots. Just
                    as humans respond to stimuli, robots can be equipped with
                    sensors to respond to various stimuli.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Uses:</strong> Used in production, dangerous tasks,
                  heavy work, precise testing, mail delivery, hazardous areas,
                  security, police work, military, household tasks, healthcare,
                  and space research.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.3",
            title: "1.3.3 Space Exploration",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Space exploration refers to sending humans or robots into
                  outer space for research purposes. Today's space
                  achievements—such as moon landings, space stations, and Mars
                  missions—would not have been possible without ICT. Researchers
                  stationed at space stations in Earth's orbit study distant
                  stars and planets using modern technology.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Famous Space Missions:</strong> 1942: German rocket
                  V-2 launched; 1957: Soviet Union's Sputnik-1; 1961: Yuri
                  Gagarin became the first human in space; 1969: Apollo-11
                  mission—Neil Armstrong and Edwin Aldrin landed on the moon.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Satellites:</strong> A satellite is an artificial
                  device sent into space, equipped with high-powered cameras,
                  radar, sensors, and solar panels. It orbits a planet (like
                  Earth), collecting and transmitting various data. Used for
                  weather forecasting, communication, geographic observation,
                  security, and disaster management.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>NASA:</strong> The U.S. national space agency,
                  established in 1958. Key missions include Apollo and the
                  Curiosity Rover on Mars. <strong>GPS</strong> is a
                  satellite-based one-way communication system, and{" "}
                  <strong>GIS</strong> is a computer-based system to analyze
                  geographic data.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.4",
            title: "1.3.4 ICT-Based Production Systems",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  In today's world, nearly the entire industrial production
                  process depends on Information and Communication Technology
                  (ICT). From the initial design stage, raw material collection,
                  processing, product manufacturing, marketing — ICT is
                  integrated at every level of production.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Role of ICT in Industrial Production:</strong>{" "}
                  Telecommunication services help coordinate communication.
                  Internet use synchronizes multiple plants. CAD/CAM
                  technologies allow high-quality design and production without
                  manual drafts. CNC (Computer Numerical Control) machines
                  automate production, saving time and materials.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>ICT in Agriculture (e-Agriculture):</strong> ICT-based
                  farming involves seasonal planning, knowledge of seeds,
                  fertilizers, diseases, and market prices. Genetic technology
                  uses ICT for developing environment-friendly crops in
                  laboratories. <strong>RFID</strong> is used for animal
                  tracking and access control.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.5",
            title: "1.3.5 Defense",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Advances in ICT have modernized the defense industry,
                  improving weaponry and military strategies to be faster and
                  more effective.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Impact & Benefits of ICT:</strong> Modern ICT
                  advancements enable the creation of new types of weapons and
                  defense technologies. Many modern weapons are now
                  computer-controlled, making them highly accurate and fast.
                  Precision strikes can now target specific threats without
                  damaging surrounding areas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>ICT Usage on the Battlefield:</strong> Enables remote
                  target identification and tracking. Enhances control of
                  armies, missiles, firearms, tanks, fighter planes, and
                  warships. Maintains seamless communication among ground,
                  naval, and air forces. <strong>UAVs (Drones)</strong> are
                  unmanned aircraft operated remotely for military purposes.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.6",
            title: "1.3.6 Biometrics",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The term biometrics comes from the Greek words bios (life) and
                  metron (measure). Biometrics refers to the science and
                  technology of measuring and analyzing biological data to
                  uniquely identify individuals. In information technology,
                  biometrics involves using features of the human body—such as
                  DNA, fingerprints, retina and iris scans, voice patterns,
                  facial features, and hand geometry—for authentication.
                </p>
                <h4 className="font-bold mt-4">How Biometrics Works:</h4>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Capture:</strong> Collecting a sample of a unique
                    physiological or behavioral characteristic.
                  </li>
                  <li>
                    <strong>Extraction:</strong> Analyzing the sample and
                    creating a template stored in the database.
                  </li>
                  <li>
                    <strong>Comparison:</strong> Comparing the new sample's
                    template with the stored templates.
                  </li>
                  <li>
                    <strong>Matching:</strong> Verifying whether the new data
                    matches existing records.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Types of Biometrics:</strong> Physiological
                  (Fingerprint, Hand Geometry, Iris, Facial, DNA) and Behavioral
                  (Voice, Signature, Keystroke Dynamics).
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Applications:</strong> Used in judicial, government,
                  education, offices, and commercial sectors. Common methods
                  include Fingerprint Recognition, Hand Geometry Recognition,
                  Iris Recognition, Facial Recognition, DNA Profiling, and Voice
                  Verification.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.7",
            title: "1.3.7 Bioinformatics",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Bioinformatics is an interdisciplinary subject formed through
                  the integration of biology, computer science, information
                  engineering, mathematics, and statistics. Essentially, this
                  field emerged to collect, store, and process the vast amounts
                  of data in biology and interpret them accurately.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The methods used for computation include pattern recognition,
                  data mining, machine learning, etc. Bioinformatics methods
                  operate through the combination of elements and techniques
                  from four distinct fields: Molecular Biology, Databases,
                  Programming, and Mathematics and Statistics.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Uses:</strong> Used in Molecular Medicine, Microbial
                  Genome Applications, Biotechnology, Evolutionary Studies, and
                  Veterinary Science.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.8",
            title: "1.3.8 Genetic Engineering",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  An interdisciplinary science is a branch where multiple
                  scientific fields (such as biology, mathematics, computer
                  science, and physics) are combined to create new knowledge or
                  applications. The technique of altering the DNA or genes of an
                  organism is called genetic engineering.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When the DNA used in genetic engineering is composed of
                  segments from different sources, it is called recombinant DNA.
                  Through this technology, a gene from one organism can be
                  transferred into the cells of bacteria, plants, or animals.
                  This gene fusion creates new organisms with unique traits,
                  known as GMOs (Genetically Modified Organisms).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Applications:</strong> Insulin production,
                  high-quality crop production, disease treatment through gene
                  therapy, and pharmaceutical products.{" "}
                  <strong>Perspective of Bangladesh:</strong> Bangladesh has
                  achieved wide ranges of success in genetic engineering,
                  notably with high-quality seeds and the invention of the jute
                  genome sequence by Dr. Maksudul Alam.
                </p>
              </div>
            ),
          },
          {
            id: "1.3.9",
            title: "1.3.9 Nanotechnology",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The word nano originates from the Greek word nanos, which
                  literally means "dwarf". However, it is now used as a unit of
                  measurement. One nanometer is one-billionth of a meter (1
                  nanometer = 10⁻⁹ meter). The technologies associated with this
                  nanometer scale are called nanotechnology.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nanotechnology is a branch of science, engineering, and
                  technology that operates at the nanoscale, which ranges from 1
                  to 100 nanometers. It involves making materials extremely
                  small, and doing so can completely change the structure and
                  properties of the material.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Applications:</strong> Used in industry, healthcare
                  (nanorobots for surgeries), electronics, energy, food
                  packaging, medicine, cancer treatment, and environmental
                  pollution control.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        id: "1.4",
        title: "1.4 Ethics in the use of ICT",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Moral values refer to internal principles formed through cultural
              influence. In the age of ICT, computer ethics has become
              increasingly important. A new branch known as Computer Ethics
              guides IT professionals in making ethical decisions. This field
              was first introduced by Dr. Walter Maner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Under computer ethics, several moral questions arise, such as
              hacking, protection of personal data, copyright infringement,
              internet-based violence, and child pornography.
            </p>
            <h4 className="font-bold mt-4">
              The Ten Commandments of Computer Ethics (1992):
            </h4>
            <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700 text-sm">
              <li>Do not use a computer to harm other people.</li>
              <li>Do not interfere with other people's computer work.</li>
              <li>Do not snoop around in other people's computer files.</li>
              <li>Do not use a computer to steal.</li>
              <li>Do not use a computer to bear false witness.</li>
              <li>
                Do not copy or use proprietary software for which you have not
                paid.
              </li>
              <li>
                Do not use other people's computer resources without
                authorization.
              </li>
              <li>Do not appropriate other people's intellectual output.</li>
              <li>
                Think about the social consequences of the program you write.
              </li>
              <li>
                Always use a computer in ways that ensure consideration and
                respect for your fellow humans.
              </li>
            </ol>
            <h4 className="font-bold mt-6">Plagiarism and Computer Crime</h4>
            <p className="text-gray-700 leading-relaxed">
              <strong>Plagiarism</strong> is copying someone else's literary
              work, research, or editorial content either exactly or with
              partial modifications and publishing it under one's own name.
              Types include Clone, Remix, Hybrid, Recycle, 404 Error,
              Aggregator, and Retweet Plagiarism. It can lead to academic
              penalties, professional consequences, and personal impact. Tools
              to detect plagiarism include Turnitin, Grammarly, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Other computer crimes include <strong>Hacking</strong> (White,
              Black, and Grey Hat),{" "}
              <strong>
                Phreaking, Spoofing, Sniffing, Spamming, Cyber Attacks, Cyber
                Theft, Malware, Software Piracy, and Phishing
              </strong>
              . In Bangladesh, the ICT Act 2006, Pornography Control Act 2012,
              and Digital Security Act 2018 are in place to combat these crimes.
            </p>
          </div>
        ),
      },
      {
        id: "1.5",
        title: "1.5 The Impact of ICT in Social Life",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The modern world has transformed into an information and
              communication technology (ICT) dependent society. Communication
              tools, computers, telecommunications, audio-video systems, and the
              internet have become integral parts of daily life. Technologies
              like telephones, fax, email, and satellite now transmit
              information to any corner of the world instantly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Overall, information and communication technology has made society
              more dynamic, interconnected, and enriched in terms of thought and
              understanding.
            </p>
          </div>
        ),
        subsections: [
          {
            id: "1.5.1",
            title: "1.5.1 Positive Impacts of IT",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Information technology has brought several benefits to human
                  social life:
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Reduction of Waste:</strong> Reduces both cost and
                    time wastage; services like bill payments can be done via
                    mobile devices.
                  </li>
                  <li>
                    <strong>Time Saving:</strong> Any task can be completed
                    quickly and efficiently.
                  </li>
                  <li>
                    <strong>Increased Efficiency:</strong> Enhances efficiency
                    in management and decision-making.
                  </li>
                  <li>
                    <strong>Easy Access to Information:</strong> Information
                    from around the world is available at one's fingertips via
                    the internet.
                  </li>
                  <li>
                    <strong>Instant Communication:</strong> Immediate
                    communication is possible through phone calls, emails, and
                    SMS.
                  </li>
                  <li>
                    <strong>Video Conferencing:</strong> Meetings and
                    discussions can be held remotely with ease.
                  </li>
                  <li>
                    <strong>E-Commerce:</strong> Buying, selling, and making
                    payments can be done from home.
                  </li>
                  <li>
                    <strong>Labor Savings:</strong> Labor-intensive tasks can be
                    handled easily using robots.
                  </li>
                  <li>
                    <strong>Advancement in Education:</strong> Online classes,
                    exams, and learning opportunities have increased.
                  </li>
                  <li>
                    <strong>E-Governance:</strong> Ensures transparency,
                    accountability, and a corruption-free environment in
                    government operations.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "1.5.2",
            title: "1.5.2 Negative Impacts of IT",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  While information technology has brought many benefits, it has
                  also introduced several negative consequences:
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Increase in Criminal Behavior:</strong> Access to
                    violent content and cyber crimes like credit card fraud.
                  </li>
                  <li>
                    <strong>Obscenity:</strong> Pornographic websites can cause
                    moral degradation.
                  </li>
                  <li>
                    <strong>Breach of Privacy:</strong> Personal data can be
                    stolen through hacker attacks.
                  </li>
                  <li>
                    <strong>Rise in Unemployment:</strong> Automation leads to
                    layoffs and reduced workforce.
                  </li>
                  <li>
                    <strong>Physical Health Problems:</strong> Prolonged screen
                    time leads to eye strain, headaches, and neck/back problems.
                  </li>
                  <li>
                    <strong>Decline in Intelligence and Creativity:</strong>{" "}
                    Heavy reliance on IT discourages deep thinking and
                    innovation.
                  </li>
                  <li>
                    <strong>Spread of Misinformation:</strong> False propaganda
                    easily spreads through social media, leading to social
                    unrest.
                  </li>
                  <li>
                    <strong>Digital Divide:</strong> The gap between those with
                    access to modern ICT and those without.
                  </li>
                  <li>
                    <strong>Addiction:</strong> Uncontrolled use of social media
                    and online games leads to loss of productive hours and
                    antisocial behavior.
                  </li>
                </ol>
              </div>
            ),
          },
        ],
      },
      {
        id: "1.6",
        title: "1.6 ICT and Economic Development",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With the advancement of information and communication technology,
              the entire world has become increasingly dependent on it. In the
              realm of economic development, new opportunities and possibilities
              have emerged.
            </p>
          </div>
        ),
        subsections: [
          {
            id: "1.6.1",
            title: "1.6.1 Role of ICT in Economic Development",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Today, ICT is used in government, social, economic, and
                  various other activities. Because of its speed, reliability,
                  data storage capabilities, and trustworthiness, the
                  application of ICT continues to expand.
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Investment:</strong> ICT has made economic
                    transactions faster and easier.
                  </li>
                  <li>
                    <strong>Employment:</strong> Created new types of jobs and
                    opportunities, such as freelancing and outsourcing. Startup
                    culture (e.g., bKash) is booming.
                  </li>
                  <li>
                    <strong>Industry and Production:</strong> More work can be
                    done with fewer human resources, increasing productivity.
                  </li>
                  <li>
                    <strong>Improvement of Communication Systems:</strong>{" "}
                    Reduced the gap between rural and urban areas, bringing
                    momentum to economic activities.
                  </li>
                  <li>
                    <strong>Environmental Conservation:</strong> ICT contributes
                    by enabling the development of eco-friendly technologies.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "1.6.2",
            title: "1.6.2 E-Services in Economic Development",
            content: (
              <div className="space-y-4">
                <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                  <li>
                    <strong>E-Governance:</strong> Ensures good governance and
                    reduces bureaucratic inefficiencies.
                  </li>
                  <li>
                    <strong>E-Commerce:</strong> Electronic buying and selling
                    of goods and conducting financial transactions.
                  </li>
                  <li>
                    <strong>E-Agriculture:</strong> Disseminating agricultural
                    information and expert advice online.
                  </li>
                  <li>
                    <strong>E-Banking:</strong> Technology-driven financial
                    management and transactions.
                  </li>
                  <li>
                    <strong>E-Purjee:</strong> Digital supply permit for
                    sugarcane farmers to eliminate hassle.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "1.6.3",
            title: "1.6.3 ICT in Bangladesh's Development: Digital Bangladesh",
            content: (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Digital Bangladesh means ensuring appropriate use of
                  technology in every sector of the country. Information and
                  Communication Technology (ICT) plays the central role in this.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Key initiatives include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Made in Bangladesh:</strong> Computer manufacturing
                    factory in Gazipur.
                  </li>
                  <li>
                    <strong>a2i (Aspire to Innovate):</strong> Establishing
                    communication in the remotest areas.
                  </li>
                  <li>
                    <strong>National Data Center:</strong> Located in Gazipur,
                    certified for cloud computing.
                  </li>
                  <li>
                    <strong>IT Parks:</strong> Developed across the country to
                    attract investment.
                  </li>
                  <li>
                    <strong>Cashless Bangladesh:</strong> Launch of the QR-code
                    based 'Saj' payment system.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: "1.7",
        title: "1.7 Noted ICT Related Topics",
        content: (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-box border border-base-300">
              <table className="table table-zebra w-full text-xs sm:text-sm">
                <thead className="bg-base-200 text-gray-800">
                  <tr>
                    <th className="p-2 border-r border-base-300">Topic</th>
                    <th className="p-2 border-r border-base-300">Inventor</th>
                    <th className="p-2 border-r border-base-300">Country</th>
                    <th className="p-2 border-r border-base-300">Year</th>
                    <th className="p-2 border-r border-base-300">Benefits</th>
                    <th className="p-2">Drawbacks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Global Village
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Herbert Marshall McLuhan
                    </td>
                    <td className="p-2 border-r border-base-300">Canada</td>
                    <td className="p-2 border-r border-base-300">1962, 1964</td>
                    <td className="p-2 border-r border-base-300">
                      1. Fast global communication
                      <br />
                      2. Better education
                    </td>
                    <td className="p-2">
                      1. Data theft
                      <br />
                      2. Cyberattacks
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Virtual Reality
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Jaron Lanier
                    </td>
                    <td className="p-2 border-r border-base-300">USA</td>
                    <td className="p-2 border-r border-base-300">1994</td>
                    <td className="p-2 border-r border-base-300">
                      1. Trains skilled doctors
                      <br />
                      2. Driver training
                    </td>
                    <td className="p-2">
                      1. Expensive equipment
                      <br />
                      2. Limited use
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Artificial Intelligence
                    </td>
                    <td className="p-2 border-r border-base-300">
                      John McCarthy
                    </td>
                    <td className="p-2 border-r border-base-300">USA</td>
                    <td className="p-2 border-r border-base-300">1956</td>
                    <td className="p-2 border-r border-base-300">
                      1. Job opportunities
                      <br />
                      2. Reduced risk
                    </td>
                    <td className="p-2">
                      1. Expensive equipment
                      <br />
                      2. Risk of misuse
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Robotics
                    </td>
                    <td className="p-2 border-r border-base-300">
                      George Charles Devol
                    </td>
                    <td className="p-2 border-r border-base-300">USA</td>
                    <td className="p-2 border-r border-base-300">1954</td>
                    <td className="p-2 border-r border-base-300">
                      1. No need for rest
                      <br />
                      2. Accurate results
                    </td>
                    <td className="p-2">
                      1. Increases machine dependency
                      <br />
                      2. Reduces humanity
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Biometrics
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Isaac Asimov
                    </td>
                    <td className="p-2 border-r border-base-300">USA</td>
                    <td className="p-2 border-r border-base-300">1942</td>
                    <td className="p-2 border-r border-base-300">
                      1. High reliability
                      <br />
                      2. High acceptability
                    </td>
                    <td className="p-2">
                      1. Limited usage
                      <br />
                      2. Expensive devices
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Bioinformatics
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Pauline Hogeweg, Ben Hesper
                    </td>
                    <td className="p-2 border-r border-base-300">Dutch</td>
                    <td className="p-2 border-r border-base-300">1970</td>
                    <td className="p-2 border-r border-base-300">
                      1. Convenient testing
                      <br />
                      2. Accurate analysis
                    </td>
                    <td className="p-2">
                      1. High risk of damage
                      <br />
                      2. High research costs
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Genetic Engineering
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Herbert Boyer, Stanley Cohen
                    </td>
                    <td className="p-2 border-r border-base-300">
                      USA, South Africa
                    </td>
                    <td className="p-2 border-r border-base-300">1973</td>
                    <td className="p-2 border-r border-base-300">
                      1. Improved crops
                      <br />
                      2. Economic development
                    </td>
                    <td className="p-2">
                      1. High risk of misuse
                      <br />
                      2. Ethical concerns
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border-r border-base-300">
                      Nanotechnology
                    </td>
                    <td className="p-2 border-r border-base-300">
                      Richard Feynman
                    </td>
                    <td className="p-2 border-r border-base-300">USA</td>
                    <td className="p-2 border-r border-base-300">1959</td>
                    <td className="p-2 border-r border-base-300">
                      1. Early disease detection
                      <br />
                      2. Tech advancement
                    </td>
                    <td className="p-2">
                      1. More research needed
                      <br />
                      2. Costly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: "kbqa",
        title: `Knowledge-Based Q&A (${qaData.length})`,
        content: <KnowledgeBaseQA />,
      },
      {
        id: "comprehensiveqa",
        title: `Comprehensive Q&A (${comprehensionData.length})`,
        content: <ComprehensionQuestions />,
      },
      {
        id: "creativeqa",
        title: `Creative Q&A (${creativeQuestionsData.length})`,
        content: <CreativeQuestions />,
      },
      {
        id: "mcq",
        title: `Multiple Choice Q&A (${mcqData.length})`,
        content: <MCQ />,
      },
    ],
  },
  {
    id: "ch2",
    title: "Chapter 2",
    fullTitle: "Data Communication and Computer Networks",
    sections: [],
  },
  {
    id: "ch3-1",
    title: "Chapter 3 (1st Part)",
    fullTitle: "Numbering Systems",
    sections: [],
  },
  {
    id: "ch3-2",
    title: "Chapter 3 (2nd Part)",
    fullTitle: "Digital Devices",
    sections: [],
  },
  {
    id: "ch4",
    title: "Chapter 4",
    fullTitle: "Introduction to Web Design and HTML",
    sections: [],
  },
  {
    id: "ch5",
    title: "Chapter 5",
    fullTitle: "Programming Language",
    sections: [],
  },
  {
    id: "ch6",
    title: "Chapter 6",
    fullTitle: "Database Management System",
    sections: [],
  },
];

export default function ICTDashboard() {
  const [activeChapter, setActiveChapter] = useState(courseData[0]);
  const [activeTopic, setActiveTopic] = useState(courseData[0].sections[0]);
  const [openSections, setOpenSections] = useState({ 1.1: true }); // Default open 1.1

  const handleChapterClick = (chapter) => {
    setActiveChapter(chapter);
    if (chapter.sections.length > 0) {
      setActiveTopic(chapter.sections[0]);
    } else {
      setActiveTopic(null);
    }
    setOpenSections({}); // Reset expanded sections on chapter change
  };

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Information and Communication Technology for Classes 11 and 12
          </h1>
        </div>
      </header>

      {/* MENU BAR */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-1 overflow-x-auto py-2">
            {courseData.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => handleChapterClick(chapter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeChapter.id === chapter.id
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {chapter.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MAIN LAYOUT */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* SIDEBAR */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
              <h2 className="font-bold text-gray-800 text-lg">
                Table of Contents
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {activeChapter.fullTitle}
              </p>
            </div>

            <ul className="p-2 space-y-1">
              {activeChapter.sections.map((section) => (
                <li key={section.id}>
                  {section.subsections ? (
                    /* Collapsible Section */
                    <div>
                      <button
                        onClick={() => toggleSection(section.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                          openSections[section.id]
                            ? "bg-base-200 text-primary"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{section.title}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${openSections[section.id] ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Indented Subsections */}
                      {openSections[section.id] && (
                        <ul className="mt-1 ml-4 border-l-2 border-gray-200 pl-2 space-y-1">
                          {section.subsections.map((sub) => (
                            <li key={sub.id}>
                              <button
                                onClick={() => setActiveTopic(sub)}
                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                                  activeTopic?.id === sub.id
                                    ? "bg-primary text-white font-medium shadow-sm"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                              >
                                {sub.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    /* Standard Section */
                    <button
                      onClick={() => setActiveTopic(section)}
                      className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        activeTopic?.id === section.id
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-10 min-h-[60vh]">
          {activeTopic ? (
            <article className="prose max-w-none text-gray-800">
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-extrabold text-primary m-0">
                  {activeTopic.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {activeChapter.fullTitle}
                </p>
              </div>

              <div className="leading-relaxed space-y-4">
                {activeTopic.content}
              </div>
            </article>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a topic from the sidebar to view its content.
            </div>
          )}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Information and Communication
            Technology. All rights reserved.
          </p>
          <p className="mt-1 text-gray-500">Designed for Classes 11 and 12</p>
        </div>
      </footer>
    </div>
  );
}
