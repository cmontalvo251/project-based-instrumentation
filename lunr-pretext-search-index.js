var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "current-edition",
  "level": "1",
  "url": "current-edition.html",
  "type": "Section",
  "number": "1",
  "title": "Current Edition",
  "body": " Current Edition  This textbook was last updated on . The latest pdf can be found on Github while the most up to date web based version is on Github Pages  "
},
{
  "id": "manuscript-changes",
  "level": "1",
  "url": "manuscript-changes.html",
  "type": "Section",
  "number": "2",
  "title": "Manuscript Changes",
  "body": " Manuscript Changes    July 1st, 2020 - Original tutorials in Google Docs created  July 15th, 2020 - Tutorials purchased by Tangibles that Teach  December 21st, 2021 - Updated links for manuscript and hardware  May 30th, 2022 - Tangibles that teach went out of business and chapter began the move to Github  June 28th, 2022 - Work began on a Chromebook. Unfortunately the Figures folder is not back up on Git. As such a main_latest.pdf has been created that's the latest full version. The main.pdf is the version created by the Chromebook so it has new chapters but none of the older chapters. Figure files are now backup on Git but only figures from the 'Voltage Potentiometer' are currently there.  July 2nd, 2022 - All figures backed up and latest manuscript completed  October 18th, 2022 - A pedometer lab has been added.  November 8th, 2022 - Edited the Servo and feedback control servo lab to be one big lab with 3 parts  January 8th, 2023 - Removed all mentions of Tangibles that Teach in the main body of the text.  February 6th, 2023 - Changed an assignment description for LEDs and push buttons  February 22nd, 2023 - Moved the Bluetooth module to be before the modules lab so this will end up being a few updates to make those projects more uniform. I also created a backup called Bluetooth original in case you wanted to go back to the other version.  June 16th, 2023 - Cleaned up the ``changes needed\" list and updated Method 3 with some new software updates.  August 9th, 2023 - Edited the preamble for assignments and made a note in the servo lab  September 5th, 2023 - Updated hyperlinks to show up on Microsoft Edge using underlines and different color text.  September 7th, 2023 - Fixed the TL;DR section  September 15th, 2023 - Updated a link in the DAQ lab  September 20th, 2023 - Made the modules installation section a standalone tex file  October 4th, 2023 - Added a new potentiometer photo  November 16th, 2023 - Edited the lists of parts  November 22nd, 2023 - Edited acceleration lab  December 5th, 2023 - Edited the troubleshooting section  January 12th, 2024 - Edited chapters 1 and 2  January 22nd, 2024 - Edited the bootloader update notes in the troubleshooting chatper  January 25th, 2024 - More edits to the bootloader notes  March 20th, 2024 - Added a preamble about where this textbook is located  April 27th, 2024 - Previously edited servo lab and pendulum lab just the assignment portion and then added this change log to the manuscript  May 7th, 2024 - Title page changed and many sections moved around. Added a new results and discussion section following data analysis from course surveys of this course.  August 12th, 2024 - Added a new requirement for the servo lab  September 12th, 2024 - A few edits to assignment descriptions  October 25th, 2024 - Updated the photocell lab to include the number of data points for the histogram  November 11th, 2024 - Updated Method 3 quick list  March 26th, 2025 - Updated servo, pitot probe and photocell assignments  May 24th, 2025 - Made a few changes to chapters 2 and 19 to transition between the projects and the results and discussion about lab at home frameworks and project based teaching. Also overhauled the feedback control project.  June 16th, 2025 - Updated the assignment directions for all projects.  June 17th, 2025 - Added more theory to the photocell, thermistor and pitot probe assignment  June 20th, 2025 - Added more figures and wiring diagrams to many assignments to help students wire up their circuits.  June 21st, 2025 - Added a few problems from a standard instrumentation textbook. Probably need more statistics questions  July 2nd, 2025 - Moved changes needed to the preamble. Added learning objectives and parts list for a few projects that had them missing.  September 26th, 2025 - Updated the potentiometer assignment to include converting voltage to angle in degrees.  October 1st, 2025 - Updated the thermistor modules assignment with the thermistor equations so it's easy to find in two places.  November 12th, 2025 - Fixed an equation, link and figure in the feedback control assignment  November 14th, 2025 - Fixed a broken link  November 20th, 2025 - Added a GPS requirement to the integrating acceleration lab  December 5th, 2025 - Added the settling time to the list of parameters for the time constant assignment and edited the overall assignment directions to have a better description of the video requirements. Also edited the servo second order systems equation for an aircraft to be stable since the equations were unstable open loop. I also moved the changes needed to Github. I also edited the purchase assignment to have bold text for some important information.  February 2nd, 2026 - Updated the push button and LED assignment to fix a mistake in the voltage source description.  February 5th, 2026 - Added an update from Jan 18th that I forgot to push which highlighted the ``Rubric\" for each assignment. Also added a missing grade to the push button and LED assignment.  February 9th, 2026 - Moved the future project ideas to Github  February 26th, 2026 - Edited the trouble shooting guide for updating the CPB bootloader on Windows    "
},
{
  "id": "future-changes",
  "level": "1",
  "url": "future-changes.html",
  "type": "Section",
  "number": "3",
  "title": "Changes Needed and Future Project Ideas",
  "body": " Changes Needed and Future Project Ideas  Needed changes and Future Project Ideas are now tracked on Github  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "Preface",
  "level": "1",
  "url": "Preface.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction     This textbook describes an instrumentation kit used for an Instrumentation and Experimental Methods course at the undergraduate level. This textbook has been designed with the student and faculty member in mind. The kit contains the CircuitPlayground Express\/Bluefruit running CircuitPython and is used to teach fundamentals of instrumentation and provide a hands-on way of learning. Engineering is usually taught in a traditional lecture format, involving theory in the classroom, homework outside of class, and routine examinations. Progressive forms of learning such as flipped classrooms and project based learning (PBL) have created new and fun ways for professors to interact with students and for students to be more involved in their learning. PBL provides a student-centered method of teaching and learning by posing problems for students to solve with the solution of the project being the primary goal and the theory a secondary goal.  The course begins with simple plotting and moves into data analysis, calibration and more complex instrumentation techniques such as active filtering and aliasing. This course is designed to get students away from their pen and paper and build something that blinks and moves as well as learn to process real data that they themselves acquire. There is no theory in these projects. It is all applied using the project based learning method. Students will be tasked with downloading code, building circuitry, taking data all from the ground up. By the end of this course students will be well versed in the desktop version of Python while also the variant CircuitPython designed specifically for microelectronics from Adafruit. After this course students will be able to understand Instrumentation at the fundamental level as well as generate code that can be used in future projects and research to take and analyze data. Python is such a broad and useful language that it will be very beneficial for any undergraduate student to learn this language. To the professors using this textbook, 1 credit hour labs are often hard to work into a curriculum and live demonstrations in the classroom cost time and money that take away from other faculty duties. I've created this kit and textbook to be completely stand-alone. Students simply need to purchase the required materials and follow along with the lessons. These lessons can be picked apart and taught sequentially or individually on a schedule suited to the learning speed of the course. The authors hope that whomever reads and learns from this textbook will walk away with an excitement to tinker, code and build future projects using microelectronics and programming. The implementation of this kit and overall teaching method has received many positive reviews from students and is reflected in anonymous course evaluations.  Students can learn in many ways with a variety of different modalities . As such, instructors can choose how to present course material and have students develop content-specific skill sets. College students enter the classroom with existing skills in multi-disciplinary learning that is practiced at the secondary school level . College and university professors have the opportunity to use these existing skills as a foundation for their own instructional practices. Traditional lectures provide students with lectures on theory. The instructor then provides examinations to the students based on that theory. Using this format, an instructor can focus on mathematical principles, the so-called building blocks of engineering or provide specific applications to these models . In a traditional lecture format, the instructor presents theory to the students with academic problems rarely encountered in a students future career, building invaluable theoretical knowledge of concepts that appear disconnected from practical knowledge applied in the field . Historically in engineering education, there has been tension between theory and application . Applications include case studies or practical engineering problems that emulate future careers in engineering. This provides students with engineering phenomena that they can see and hear. They can reason through problems intuitively, memorize facts using demos, build mathematical models, or build tangible objects themselves. With these different presentation methods, students are exposed to engineering phenomena in multiple ways rather than just on the whiteboard . Project Based Learning (PBL) provides an alternative for conventional teaching by facilitating problem solving for students in a group setting that requires communication, critical thinking, and creativity. These types of problems have shown that heightened learning can happen when students interact with tangible objects that represent the theory they are presented with in the classroom . Rather than learning an equation for heat transfer along a one-dimensional pipe, the students can create a pipe with thermocouples and plot data from multiple sensors along the pipe. This connection to a tangible object reinforces learning and allows students to form bridges in comprehension between their theoretical knowledge and practical application (practical knowledge) of those theories in the field . Research has shown that a classroom that creates an integrated curriculum increases student satisfaction which immediately correlates to satisfactory student performance and increased graduation rates . This is an example of the benefits of active student engagement versus passive student engagement. While the traditional lecture format is vital to students understandings, it is understood that application of the concepts covered in lecture are required to reach higher levels of learning .  Hands-on projects where students interact with tangible objects is not a new form of teaching. The laboratory environment has been around for decades. However, typically the classroom environment is separate from the laboratory environment. There has been little synergy between the two learning environments. A Mechanical Engineering degree is likely to have around three to four labs in various disciplines. In these courses, students perform an experiment in groups. They take and analyze data as well as create a report documenting their findings. Many of these laboratory experiments of course are choreographed for the student by the instructor. They follow a script and perform the experiment without building anything themselves. The students take no ownership over the experiment and there is no creativity built-in. Over the years, the nature of laboratories has changed including the lack of clear learning objectives . Furthermore, this laboratory environment requires a significant amount of instrumentation and hardware to implement. For example, a shock tube or steam pump can cost tens of thousands of dollars. The maintenance and up-keep alone is not practical for smaller institutions. The teaching investment required to prepare the lab every year and the lab itself (often on the order of three hours) can be a time consuming task for a tenure track faculty member who often has a large research load.  The so-called \"Lab at Home\" hardware kits are becoming more and more common in the classroom to ease the burden on the instructor and institution itself . These kits are small enough to be purchased and shipped to a student for them to perform experiments remotely rather than in the classroom itself . They can also be brought to the classroom to be used as a personal demo aid . In this sense, the take-home lab kit serves as a bridge between theory based lectures and a laboratory setting . This allows both instructors and students to engage with content in a way that promotes enduring understandings and practical application of theoretical knowledge . Since the kits can be used remotely, they can also be used for distance learning courses or other asynchronous activities as well as during the COVID-19 pandemic.  Two home kits in particular are directly related to instrumentation and circuits. Cyganski and Nicoletti for example created a new curriculum for first year electrical engineering students by creating live demonstrations for the students. Manijikian and Simmons however, combined a popular commercial microcomputer board with their own custom-designed interface board in a kit that students retain for the duration of the course for both in-lab and at-home assignments. The take-home kits however were based on the Motorola 68HC11EVB microcomputer which is programmed in assembly language. Assembly language is a rather difficult language to learn at the undergraduate level. Even with such a difficult learning curve, however, student feedback on their approach was positive .  It is clear that using a lab at home kit is useful for the instrumentation classroom, however the programming language to be used is a subject of debate in faculty meetings and computing committees. There are multiple languages in use today of varying complexities and use cases. There are scripting languages like Python, Ruby and MATLAB, object oriented languages like Java and C++ and compilation languages like Fortran and C. Note, this is not an exhaustive list. A recent study showed that scripting languages (Python, Ruby, MATLAB) enable writing more concise code while compilation languages (C, Fortran) create smaller executables . MATLAB is often considered in engineering given its success in industry and its ability to perform numerical simulations and plotting with ease. Python, however, has become more and more popular with numerical toolboxes like numpy and plotting toolboxes like matplotlib that are free and easy to install in integrated development environments like Thonny or Spyder . The Tiobe Index of Programming has the top 3 programming languages listed as Python, C, and Java. MATLAB is #20 on the list. In 2004, Hans Fangohr wrote that MATLAB is much better suited than C for engineering computing but the best choice in terms of clarity and functionality is provided by Python . It seems then that it would be more practical for educators even in engineering to teach the most popular language. This helps with transferability of skills and has future implications for a students' career. The scripting aspect of Python lowers complexity and allows students to learn the language quickly to apply it as a tool rather than getting stuck memorizing syntax and compilation rules. The language also comes at no cost to the students. This is a plus for students already bearing heavy financial burdens to attend a university which includes tuition and institutional fees.  Given the success of other kits in many classes and the popularity of Python, the University of South Alabama (USA) has implemented such a kit for Instrumentation & Experimental Methods (ME 316) using CircuitPython. CircuitPython is a derivative of Python written for embedded systems and designed to simplify experimenting and learning to code . The learning objectives for ME316 include: statistics, dynamic response of measurement systems, operational amplifiers, signal conditioners and fundamentals of microprocessors. This course could be taught with theory as the main focus of the lecture. However, this course includes the use of an instrumentation kit and Project Based Learning methods in addition to theory in the classroom. Each student taking the course purchases the kit and downloads a free accompanying project list . Every Friday, the students complete one of the multiple projects. The following week they submit a report which includes a demo of the working project in the form of photos and videos, any plots generated if they are required to take data, all code used and a small write-up explaining their findings. The sections that follow describe the kit in more detail as well as student evaluations who have taken the course.  Note that, the Adafruit Learn page contains many tutorials on how to operate the CircuitPlayground . However, Adafruit sells much more than just the CPX and thus it is often difficult for anyone to find the correct tutorial needed for the CPX. A simple search on the Adafruit Learn System yields 21 results for \"servo\" just on the first page with over 48 pages of results. The tutorial needed to run a servo with CircuitPython is the 10th result and it's for a different development board. Although the software works with the CPX, it does not explicitly say so. Due to the complexity of some of these systems, documentation was made and freely given to the community . This documentation was custom built using a combination of multiple sources across the internet. All software for the kit is also on Github in a separate repository. Each chapter in the book contains one project for the students to complete on their own. A list of chapters and a brief description of the assignment is shown in the table of contents. Currently there are about 20 projects with multiple subsections for the students to work on during the Funday Friday lab days.   "
},
{
  "id": "course-descripion",
  "level": "1",
  "url": "course-descripion.html",
  "type": "Chapter",
  "number": "2",
  "title": "Course Description",
  "body": " Course Description   The course is designed to coincide with lecture content in a standard engineering instrumentation course. The students are guided through numerous projects. The specific course learning objectives, which include statistics, dynamic responses, operational amplifiers, and electronic circuits both analog and digital are shown below:  Apply statistical concepts of error and uncertainty analysis using normal, t distribution and the distribution  Use propagation of error methods to determine the uncertainty of calculated quantities  Apply the concepts of harmonic response to predict the response of measuring systems to input signals  Apply the fundamentals of operational amplifiers and electronic circuits to design signal conditioning circuits including  Apply microprocessor fundamentals to gain an understanding of digital circuits used for digital to analog and analog to digital conversion    This course is not going to be a traditional lecture format and that hands-on projects will be assigned every Friday using the lab at home kit. The projects every Friday are created to enhance the course learning objectives as dictated above.  The course is taught on a 2+1 style where the course meets three days a week for 50 minutes each on Monday, Wednesday and Friday. On Monday and Wednesday the class is similar to what would typically be found in a standard lecture format. The instructor goes through theory and examples on a white board. On Fridays, the students come to class with their hardware kits and laptops to perform one of 20+ projects defined in the tutorials in this textbook. Fridays are nicknamed \"Funday Fridays\" to differentiate the format of the class and to get students excited about the projects. On Fridays, the instructor can walk around the classroom and assist students on their projects as well as highlight fundamental concepts. This is done by showing them what they learned on a whiteboard with their lab at home kit. During the COVID-19 pandemic when Universities were meeting via Zoom, class time on Friday was used to assist students on their projects while they showed their circuits via webcam in a virtual space. Since all students purchased their own kit, there was no issue with students getting hands-on experience even during COVID-19.  It is important to note here that Project Based Learning (PBL) in this course did not replace existing teaching frameworks; rather, PBL supplemented existing standard teaching measures by allowing students to apply theory to practice. The role of connectivism comes from the online networking tools that were added to the curriculum. The tutorials and assignments as well as example code are all hosted online on Github . The availability of these tutorials and software opens the students to an ecosystem of free and open source software. Furthermore, the Adafruit Learning System is also used occasionally which opens them to an ecosystem of hardware and software tutorials as well as Adafruit IO (an internet of things site) and the Adafruit Forums . The Adafruit Forums allow the students to comment and communicate with other groups outside the university that utilize the same hardware kits. If the instructor cannot find a solution online in a Wiki or Tutorial page, a student or the instructor can post on the forum and wait for a response from the larger Adafruit community.  Students in this course are also required to do a final project where they must create something new by using the microcontroller in the kit plus three other electrical components. One of the three components must be something not originally included in the kit. The students may also work in a group. PBL typically consists of ownership, creativity, collaboration and critical thinking. These four aspects are clearly a big part of this lab at home kit and the final project. They can work in groups: collaboration. They must make something new: creativity. They must build the item themselves: ownership. They must apply fundamental principles of the course: critical thinking. In addition to PBL aspects, the students are exposed to the larger network of learning through Github, the Adafruit Learning system and Forums as well as general Wikis online. This network of learning is seen in the connectivism framework. The chapters that follow detail the weekly projects. The chapters that follow the weekly projects explain results from anonymous course surverys from students taking the class as well as conclusions drawn from the authors and faculty who have taught the course.   "
},
{
  "id": "purchase-equipment-2",
  "level": "1",
  "url": "purchase-equipment-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Parts List",
  "body": " Parts List   Laptop with internet connectivity  Credit\/Debit Card to Purchase items   "
},
{
  "id": "purchase-equipment-3",
  "level": "1",
  "url": "purchase-equipment-3.html",
  "type": "Section",
  "number": "3.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Understand the world of microcontrollers  Learn about the Adafruit eco-system  Learn about the Circuit Playground Express\/Bluefruit   "
},
{
  "id": "purchase-equipment-4",
  "level": "1",
  "url": "purchase-equipment-4.html",
  "type": "Section",
  "number": "3.3",
  "title": "CircuitPython Kit",
  "body": " CircuitPython Kit  In this class you're going to build some circuits that will enhance your learning experience. Rather than just solving problems by hand you're going to take and analyze data. Over the summer of 2020, I began to work with Tangibles that Teach and at the time they bundled all components together. Unfortunately, that company has gone out of business and as such for the time being you must build the kit yourself. Here is a list of all the components in the kit  Circuit Playground Bluefruit or Express + Included USB Cable  Micro Servo  Potentiometer  Photocell  Two Resistors (330 Ohm and 1K Ohm)  Alligator Clips x3  External Battery Pack  AAA Batteries x3  Breadboard  Push Button  LEDs x2  Pitot Probe  LSM6DS33 + LIS3MDL - 9 DoF IMU (Optional)    Below is also a photo of all the components listed above. When you get your kit familiarize yourself with all of the components. I created an unboxing video on Youtube for you to take a look. The hardware kit is a collection of multiple items. At the time of this writing the entire kit cannot be purchased however the CircuitPlayground Express (CPX) can be purchased on Adafruit . A photo of the kit is shown in the figure below. The photo shows the CPX on the left inside it's protective zip lock bag.    Photo of CircuitPython Kit Components   The CPX is a relatively new development board that operates in the same style as Arduino . That is, the student can create a relatively simple script and then flash the software to the CPX via USB. The Arduino operates in the same way. The benefit of the CPX vs the Arduino is that the software is CircuitPython which is indistinguishable from Python. As mentioned earlier, Python is in the top 3 programming languages as stated by the Tiobe Index of Programming . Other benefits include the components built in to the CPX. The CPX itself contains a built in microphone, accelerometer, light sensor, speaker, three push buttons, slide switch and infrared sensor. The CircuitPlayground Express (CPX) also contains 10 smart NeoPixel LEDs and a ring of copper plated pads that can be attached to the included alligator clips and breadboard. Students can also elect to purchase the CircuitPlayground Bluefruit (CPB) which does not have an infrared sensor but does contain bluetooth functionality to send data wirelessly to the Adafruit Connect App which runs on Apple\/Android .  "
},
{
  "id": "purchase-equipment-4-4",
  "level": "2",
  "url": "purchase-equipment-4.html#purchase-equipment-4-4",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "  Photo of CircuitPython Kit Components  "
},
{
  "id": "purchase-equipment-5",
  "level": "1",
  "url": "purchase-equipment-5.html",
  "type": "Section",
  "number": "3.4",
  "title": "Assignment",
  "body": " Assignment  Your assignment for this module is to purchase the required equipment for your class. Note that the specific equipment will be instructor dependent so be sure you discuss with the instructor of your course before buying everything. At a minimum you must purchase a CPX or CPB but the rest of the items in your kit will depend on which modules your instructor wants you to do during the semester. Also, the CPX\/CPB requires a microUSB cable and that cable must have a data line. Many USB cables are just power and ground.    Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   A figure of your receipt of your purchases this semester (If you already own the CPX\/CPB you may just take a photo of you holding the device) - [Rubric: Worth 60% of your grade]  Using the number of students in your class, compute the probability that at least one CPX\/CPB will be shipped DOA (dead on arrival) assuming a failure rate of 1%. - [Rubric: Worth 20% of your grade]    "
},
{
  "id": "download-python-2",
  "level": "1",
  "url": "download-python-2.html",
  "type": "Section",
  "number": "4.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  Python Integrated Development Environment (IDE) ( Thonny or Spyder - Do not use Python IDLE)   "
},
{
  "id": "download-python-3",
  "level": "1",
  "url": "download-python-3.html",
  "type": "Section",
  "number": "4.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   How to download and use a Python IDE (Thonny or Spyder is suggested. Do not use Python IDLE)  Plot a simple function in Python   As you learn Instrumentation throughout the semester, you will be tasked with creating computer programs on the Circuit Playground Express (CPX). The CPX itself has it's own RAM, CPU, HDD and many sensors. Your CPX is kind of like a mini computer! You can plug the CPX into your computer via USB and access the hard drive (HDD) from your own computer. When you program on the CPX you need to write programs on the CPX itself so that the mini computer can run the program you wrote. The CPX knows how to read multiple different languages but in this class we are going to write everything in the Python language which has been ported to the CPX and called CircuitPython . Since we have to write everything in CircuitPython we need to first learn how to program some things in Python. You can easily download Python by itself but it's nice to get what's called an Integrated Development Environment (IDE). This way you can practice writing Python code on your computer while you wait for your purchases to arrive in the mail.  So which IDE can you download and which is recommended? I recommend two IDEs. They are listed below. I recommend getting either one. If you just Google Python download you will find a humongous list of editors (Scratch, Anaconda, Canopy, Eclipse, PyDev, etc). It's easy to get lost when searching for something so broad. You've been warned.  "
},
{
  "id": "download-python-4",
  "level": "1",
  "url": "download-python-4.html",
  "type": "Section",
  "number": "4.3",
  "title": "Thonny",
  "body": " Thonny  Thonny - https:\/\/thonny.org - Youtube video on how to install     Example Sine Graph in Thonny   "
},
{
  "id": "download-python-4-3",
  "level": "2",
  "url": "download-python-4.html#download-python-4-3",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": "  Example Sine Graph in Thonny  "
},
{
  "id": "download-python-5",
  "level": "1",
  "url": "download-python-5.html",
  "type": "Section",
  "number": "4.4",
  "title": "Spyder",
  "body": " Spyder  Spyder - https:\/\/www.spyder-ide.org\/ - Youtube video on how to install     Example Sine Graph in Spyder   "
},
{
  "id": "download-python-5-3",
  "level": "2",
  "url": "download-python-5.html#download-python-5-3",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "  Example Sine Graph in Spyder  "
},
{
  "id": "download-python-6",
  "level": "1",
  "url": "download-python-6.html",
  "type": "Section",
  "number": "4.5",
  "title": "Other Options",
  "body": " Other Options  It is possible to use Google Colab if you want to collaborate on Python projects or even get apps for your phone ( Pydroid or Pythonista depending on Android or iPhone). You'll need to download 32 bit or 64 bit but which one? Well you need to figure out how many bits your computer has. This is a great thing to Google. Type the following: \"do I have a 32 bit or 64 bit computer\" into Google. I'm willing to bet you have a 64 bit computer but you may as well check. We'll learn about the difference between 32 and 64 bit computers when we get to the projects on Binary.  "
},
{
  "id": "download-python-7",
  "level": "1",
  "url": "download-python-7.html",
  "type": "Section",
  "number": "4.6",
  "title": "Setting up your IDE",
  "body": " Setting up your IDE  Once you have Thonny or Spyder installed you need to install numpy and matplotlib which are modules within Python that allow us to do some extra things like numerical computation with Python (numpy) and Matlab style Plotting libraries (matplotlib). I explain how to install modules in my Youtube videos above; however, you need to head over to Tools>Manage Packages in Thonny. You can see in the image below I already have version 3.1.2 but I can upgrade to 3.2.2    Installing Matplotlib in Thonny   If numpy or matplotlib is not already included in Spyder then you need to type the following into the Python Console in the lower right hand corner of Spyder which is called the IPython console.  !pip install matplotlib  If that doesn't work try  !pip3 install matplotlib  You can see in the output example below that I already have matplotlib installed as it says requirement already satisfied . Assuming you have a valid internet connection it will install the necessary module.    Installing Python Modules via Thonny Console   "
},
{
  "id": "download-python-7-3",
  "level": "2",
  "url": "download-python-7.html#download-python-7-3",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": "  Installing Matplotlib in Thonny  "
},
{
  "id": "download-python-7-9",
  "level": "2",
  "url": "download-python-7.html#download-python-7-9",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": "  Installing Python Modules via Thonny Console  "
},
{
  "id": "download-python-8",
  "level": "1",
  "url": "download-python-8.html",
  "type": "Section",
  "number": "4.7",
  "title": "Scripting",
  "body": " Scripting  Once you have numpy and matplotlib it's time to make a plot. I have a pretty comprehensive youtube video on how to plot in matplotlib but if you prefer text I will walk through a simple example.    Close up text of plotting in Python   The code above will plot a sine wave from 0 to 2pi. The two lines at the top are importing the numpy and matplotlib modules you installed earlier. When they are imported we give them shorter names so it's easier to reference them so numpy will now be called np and matplotlib.pyplot will be called plt. The next two lines then create a vector x from 0 to 2pi using 1000 data points. The next line then uses the sine function to create the vector y . Finally x and y are plotted and the figure is instructed to pop up on your screen using the show() function.  "
},
{
  "id": "download-python-8-3",
  "level": "2",
  "url": "download-python-8.html#download-python-8-3",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": "  Close up text of plotting in Python  "
},
{
  "id": "download-python-9",
  "level": "1",
  "url": "download-python-9.html",
  "type": "Section",
  "number": "4.8",
  "title": "Built-In Help Function and dir()",
  "body": " Built-In Help Function and dir()  Running code will always create syntax errors. Typing your syntax error into Google will yield so many results you might get lost. Sometimes it helps to know how to learn things just from your computer. For example, type in the commands below in the IPython console or the Shell.   import numpy as np    dir(np)     Output of dir(numpy)   I included a photo of the output from the dir function. You'll notice there are a ton of functions in numpy. Every function in Python has a  __doc__  function. That's two underscores followed by doc and then another two underscores. If you're ever curious about what a particular function does you can just run the command below again in the IPython console or Shell. In this example I'm looking at what arctan2 does.  print(np.arctan2.__doc__)    Output of print(np.arctan2.__doc__)   You'll see that arctan2 takes 2 input arguments x1 and x2 . I didn't include the entire output but if you continue to scroll through the output it will even include examples on how to use the function.  Another way to learn certain functions is by visiting the appropriate documentation. The Numpy Docs website for example has all the documentation you need for Numpy. Navigating that website you can find the same documentation for arctan2 .  As a last resort you can always Google how to compute the inverse tangent 2 function in Python . Note though that there is so much content out there on Google that you could easily get lost. Still, there's also so much information that the answers are out there for just about anything.  So you have three methods for finding out how to program in python. The dir and __doc__ functions in Python, using the appropriate documentation online and of course Google. I'm lumping Youtube in with Google which is also another way to learn information although when I want to find information quickly I just use the documentation. It's the best in my opinion.  "
},
{
  "id": "download-python-9-5",
  "level": "2",
  "url": "download-python-9.html#download-python-9-5",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": "  Output of dir(numpy)  "
},
{
  "id": "download-python-9-10",
  "level": "2",
  "url": "download-python-9.html#download-python-9-10",
  "type": "Figure",
  "number": "4.8.2",
  "title": "",
  "body": "  Output of print(np.arctan2.__doc__)  "
},
{
  "id": "download-python-10",
  "level": "1",
  "url": "download-python-10.html",
  "type": "Section",
  "number": "4.9",
  "title": "Assignment",
  "body": " Assignment  Your assignment for this project is to plot the equation below from 0 to 10 seconds and include that Figure in your report. You must add a grid and label the x-axis ‘Time (sec)' and the y-axis ‘Temperature (F)'    Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a screenshot of your Python IDE (Thonny or Spyder is suggested. Do no use Python IDLE) with your code pasted into the workspace - 40%  Include the plot of temperature vs time being sure to save the figure so it is in high resolution - 40%    "
},
{
  "id": "getting-started-2",
  "level": "1",
  "url": "getting-started-2.html",
  "type": "Section",
  "number": "5.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  Mu  CPX (or CPB) UF2 File  CPX(or CPB)  USB Cable (with a data line. Not all USB cables have data lines)   "
},
{
  "id": "getting-started-3",
  "level": "1",
  "url": "getting-started-3.html",
  "type": "Section",
  "number": "5.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Learn how to setup your Circuit Playground Express  Learn how to install Mu  Learn how to code with Mu  Learn about hardware and software debugging  Learn the difference between Python and CircuitPython   "
},
{
  "id": "getting-started-4",
  "level": "1",
  "url": "getting-started-4.html",
  "type": "Section",
  "number": "5.3",
  "title": "Setting up your Circuit Playground",
  "body": " Setting up your Circuit Playground  By now you hopefully have your Circuit Playground (CPX) and it's time to get your CPX up and running. A very in depth and detailed tutorial can be found on the Adafruit Learn site. The text below is a summary of what you need to do to get the CPX up and running.  When you get your CPX and plug it into the computer via USB it actually won't run Python just yet. First you need to double click the reset button (the button in the center. It says RESET above the button) and put it into boot mode. All the neopixels (the ring lights on the CPX) will light up green.    The Circuit Playground Express in Boot mode   Something called CPLAYBOOT will pop up on your computer just like a USB stick or external harddrive. A couple files with be in there but it doesn't matter what they say right now.    Contents of the CPLAYBOOT Folder   You then need to download what's called a UF2 file and transfer it onto the CPX. Note if you purchased a kit with the Bluefruit you need to download a different UF2 . Make sure you get the right one. Once the UF2 is downloaded you need to drag the UF2 over to the CPLAYBOOT drive on your computer. After a bit of time a USB drive called CIRCUITPY will pop up as a flash drive on your computer. The CPX is now like a USB stick with 2MB of storage. Note that if you have an old bootloader you must update the bootloader .     Contents of the CIRCUITPY Folder   At this point the CPX is like a mini computer. If you put Python code on the flash drive it will run python code. Since I've done this before, there are a number of files already on my CPX. You may have some or none of these. The boot_out.txt file will tell you the version of CircuitPython you have on the CPX. Mine says this:  Adafruit CircuitPython 5.3.0 on 2020-04-29; Adafruit CircuitPlayground Express with samd21g18  Which means I have CircuitPython version 5.3.0 last updated on April 29th, 2020. The CPX itself is using the ATSAMD21G18 microprocessor. The folder lib is a folder with extra libraries that you may need to install later. The file main.py is the Python file that the CPX is currently running. The CPX can store as many Python files as possible for a 2MB flash drive but it will only run ONE Python script at a time and that file must be named main.py The folder System_Volume_Information is a file management folder that we will never use.  If you want the CPX to run code you simply need to edit the file main.py or if that file does not exist you just need to create it. You could just open Notepad or any other text app (Sublime,TexWrangler, Emacs, Vi, Nano, Gedit, Notepad++, Wordpad, VSCode, etc) but the CPX has alot of debugging options and it is recommended to use a program called Mu . Mus is a good way to write and debug code on the CPX. Note that Mu is only used to program the CPX. If you want to run Python code on your laptop you need to use Thonny or Spyder (or whatever other IDE you downloaded). If you want to run Python code on your CPX you must use Mu. Once you've downloaded and installed Mu and open it up it will look like this (Note it's possible the the software gets updated from the time this book is published. As such be sure to select the Circuitpython Mode for board development).    Opening Screen for Mu   Make sure to select the Adafruit CircuitPython option. If the software has been updated and that option no longer exists, be sure to select the option that says Circuitpython for board development.  Alright, let's start writing code! If you have a file called main.py on your CPX click the Load button and load main.py (make sure to load the main.py that is stored on your CPX and not somewhere else on your computer.) If a file main.py does not exist on your CPX simply click the New button and then Save the file as main.py (again make sure you save it to the CPX and not to your computer)    Opening main.py in Mu   You'll see that I am accessing the CIRCUITPY drive and saving the file as main.py The file itself is empty and just has a comment using the # symbol. At this point since the file is blank the CPX won't do anything.   Now this is really important. Your CPX is a USB stick that can hold as many Python files as 2MB will allow but it can only run or execute one python script at a time. Furthermore it will only run two types of files. It will run code.py if it exists and if it can't find code.py it will run main.py If the CPX can't find main.py or code.y it will just not do anything. If you have two versions of main.py or a combination of main.py or code.py it will run one of them and not the other. Make sure you only have one version of main.py or code.by but not both! Some common things to check if your CPX isn't working.   Make sure you're using Mu in the right Mode  Make sure main.py or code.py is on the CIRCUITPY drive and not somewhere on your computer.  Make sure you are editing the right file in Mu. Do you have two versions of main.py?  Are you editing using Thonny or Spyder?  Are you editing a file on your computer? Make sure you are writing to the CIRCUITPY drive.  Unplug the CPX, close Mu and try again.    So let's get the CPX to do something simple like blink an LED. I have an entire Github devoted to Microelectronics. Specifically I have a folder with all of my Circuit Playground files . The easiest program to run is the blink.py script. I've attached a screenshot of the script below.    CircuitPython Blink Code for the Circuit Playground Express   We will talk about what this code is doing later on. For now copy and paste these 17 or so lines of code and paste them into Mu specifically the main.py script. It will hopefully look like this.    Blink Code inside Mu   Make sure to save. You can click Zoom-In and Zoom-out to zoom in and out to change the font size and see more of the output. If the blink code is working you will see a red led labeled D13 on the CPX blink back and forth. D13 stands for digital pin 13. You'll notice there are analog pins labeled A5 and A6 among other numbers. Let's talk about the code a bit more and explain why it's doing what it's doing. The three lines at the top of the code are import commands to import different modules just like we did for numpy and matplotlib . In this case the modules being imported are board , digitalio and time . The module board is used to import the layout of the CPX so we can access different pins on the CPX. The module digitalio stands for digital input output which means we are inputting and outputting digital signals. Since we can combine this module with the board module we will be able to output digital signals to different pins on the CPX board. Remember that PCB stands for printed circuit board so board implies we are accessing pins on the CPX PCB. Hopefully that makes sense. The final module we are importing is time which acts just like the time module on your desktop computer. It will let us access the CPX's internal clock.  Moving along, lines 7 and 8 create an LED object using the board module and digitalio . It's a long line of code that basically says, create a variable called led that lets us output a digital signal to pin D13. We also set the direction of the LED to output since we only want to write to the LED.  Lines 10 through 19 kick off an infinite loop that never ends. The line that says while True: means loop while True . Well True is always true which means it will loop forever. The colon at the end of the line tells Python that the loop condition statement ends and to begin looping from 11 through 19.  Line 11 specifically says print(time.monotonic()) . First the print() function is used to print things so that you and I can see it. Rather than just seeing a blinking LED we want to see the time printed. The time.monotonic() is using the module time which we imported and using a function from that module called monotonic() which calls the internal clock of the CPX. So how do you see the output from the print statement? Hit the Serial button on Mu and you will hopefully see some output. Here's what it looks like on my machine.    Serial Monitor Open in Mu   In this case you can see the time printed every time it goes through the loop. You may even see an error. This Serial button is great for debugging because it will tell you the error in your code. For example, in the picture below I have an error in my code and the Serial output is letting me know.    Example Error Shown in Serial Monitor   In this case I have an error on line 5. It's saying there is no module named timed . The reason that module doesn't exist is because the module is actually time not timed . You can use the Serial monitor to check on your program and see what errors you may have. Ok so there are two more lines of code to discuss. They are led.value = True and time.sleep(0.5) .  These lines of code are repeated throughout the while loop and do two things. First, the led.value either sets the value of the LED to True which turns the light on or False which turns the light off. The LED is digital which means the signal can either be on or off. There's no in between for digital signals. The time.sleep() function tells the CPX to pause for half a second. You can change the number in the parentheses if you want to change length of time the code pauses. Note that the CPX completely pauses. That is no code runs during a sleep.  If you've gotten the LED to blink you're all set for this lab. However, I'd like to you learn a few more things about documentation. Just like Python on your desktop you can lookup the documentation on the CPX itself. For example, I've added a print statement to print the directory of time.    Showing Directory of the time module in Mu   In this case I've added print(dir(time)) to line 7. The output shows that the time module has 9 functions including monotonic() . Unfortunately CircuitPython does not have __doc__ functions built in which means if you want to learn about a specific function, you need to visit the documentation for CircuitPython . Here's the specific documentation for the  time  module . A lot of example code from the Adafruit Learning System is also on Github.   Finally, in order to keep practicing using Python on your desktop I want you to modify the code above to run on your desktop computer. You're going to have to modify a few things. First, make sure to open Thonny or Spyder depending on which version of Python IDE you downloaded. Then, only import the time module. All the other modules don't exist on your desktop. Also, get rid of all the lines of code that blink the LED. We just want to print time in a while loop. Finally, the time module on your desktop uses a function called time.time() (unless you have Python3 installed) so when you print time make sure to use that module instead. Again visit the documentation for time for Python if you want to learn more . Thonny by default will load Python version 3 but it's possible you may have Python version 2 so make sure you look up the documentation for the appropriate version of Python. After searching through the documentation you can use a function called asctime() on your desktop. This is the output I get in Thonny when I add a sleep of 1 second. The exercise for you is to do something similar.    Output of datetime in Thonny   "
},
{
  "id": "getting-started-4-4",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-4",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": "  The Circuit Playground Express in Boot mode  "
},
{
  "id": "getting-started-4-6",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-6",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": "  Contents of the CPLAYBOOT Folder  "
},
{
  "id": "getting-started-4-8",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-8",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": "  Contents of the CIRCUITPY Folder  "
},
{
  "id": "getting-started-4-13",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-13",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": "  Opening Screen for Mu  "
},
{
  "id": "getting-started-4-16",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-16",
  "type": "Figure",
  "number": "5.3.5",
  "title": "",
  "body": "  Opening main.py in Mu  "
},
{
  "id": "getting-started-4-20",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-20",
  "type": "Figure",
  "number": "5.3.6",
  "title": "",
  "body": "  CircuitPython Blink Code for the Circuit Playground Express  "
},
{
  "id": "getting-started-4-22",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-22",
  "type": "Figure",
  "number": "5.3.7",
  "title": "",
  "body": "  Blink Code inside Mu  "
},
{
  "id": "getting-started-4-27",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-27",
  "type": "Figure",
  "number": "5.3.8",
  "title": "",
  "body": "  Serial Monitor Open in Mu  "
},
{
  "id": "getting-started-4-29",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-29",
  "type": "Figure",
  "number": "5.3.9",
  "title": "",
  "body": "  Example Error Shown in Serial Monitor  "
},
{
  "id": "getting-started-4-33",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-33",
  "type": "Figure",
  "number": "5.3.10",
  "title": "",
  "body": "  Showing Directory of the time module in Mu  "
},
{
  "id": "getting-started-4-36",
  "level": "2",
  "url": "getting-started-4.html#getting-started-4-36",
  "type": "Figure",
  "number": "5.3.11",
  "title": "",
  "body": "  Output of datetime in Thonny  "
},
{
  "id": "getting-started-5",
  "level": "1",
  "url": "getting-started-5.html",
  "type": "Section",
  "number": "5.4",
  "title": "TL;DR",
  "body": " TL;DR   Plug in your CPX and double tap it to go into reset mode. CPLAYBOOT will mount to your computer. (Some CPXes you need to hold the button down instead of double tap).  Download the UF2 file .  Drag the UF2 file to your CPLAYBOOT drive. After a few seconds CIRCUITPY will mount.  You need to then download Mu  Open Mu and make sure to select the mode Adafruit CircuitPython (or just CircuitPython if you have a new version)  Open main.py (or code.py) in Mu from the CIRCUITPY drive in Mu. (It's possible you have code.py on your drive instead of main.py which is fine. Just open one or the other)  Copy the blink.py script into main.py (or code.py)  Once you have the script running, modify the script to run on your Desktop using Spyder or Thonny   There is an accompanying youtube video to help you see me perform the 8 steps above.   "
},
{
  "id": "getting-started-6",
  "level": "1",
  "url": "getting-started-6.html",
  "type": "Section",
  "number": "5.5",
  "title": "Assignment",
  "body": " Assignment  For this assignment you must appropriately set up your CPX\/CPB, get the blink code to run and include some screenshots of relevant steps. Note for the blink code, modify blink pattern to be different from the default on Github . The specific items requested are shown below.   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a screenshot of your computer showing the CPLAYBOOT drive on your computer - 20%  Include a screenshot of your computer showing the CIRCUITPY drive on your computer - 20%  Include a screenshot of Mu with the Serial monitor open showing the output of the blink code. Remember to modify the blink pattern - 20%  Include a photo of your CPX with the red led on - 20%    "
},
{
  "id": "troubleshooting",
  "level": "1",
  "url": "troubleshooting.html",
  "type": "Chapter",
  "number": "6",
  "title": "Troubleshooting Guide",
  "body": " Troubleshooting Guide    Is your CPX\/CPB broken or not running code? Read below.    Your CPX is a USB stick that can hold as many Python files as 2MB will allow but it can only run or execute one python script at a time. It will look for code.py and then main.py and that's it.  Make sure you're using Mu in the right Mode (CircuitPython)  Make sure main.py or code.py is on the CIRCUITPY drive and not somewhere on your computer.  Make sure you are editing the right file in Mu. Do you have two versions of main.py or perhaps main.py and code.py?  Do you have boot.py on there when you don't need it?  Are you editing using Thonny or Spyder? You're supposed to use Mu.  Are you editing a file on your computer? Make sure you are writing to the CIRCUITPY drive.  Do you have the right modules in your lib folder?  Unplug the CPX, close Mu and try again.  First, try and reset the CPX to CPLAYBOOT and reflash the UF2 to see if that fixes it.  If you have a linux computer you can sudo screen \/dev\/ttyACM0 and then run import storage and then storage.erase_filesystem()  If that doesn't work sometimes you just need to completely erase the CIRCUITPY drive so head over to this troubleshooting guide and follow some of the steps they tell you.  As a last resort you can try to download these UF2s and hopefully it will fix all errors and mistakes - CPX , CPB  If you're having an issue with an old bootloader be sure to update the bootloader for the CPB or alternatively the bootloader for the CPX . At the time of this writing here is the command you need to upload the new bootloader the CPB. If you have version 0.4.0 or later you can use the UF2 method . adafruit-nrfutil --verbose dfu serial --package circuitplayground_nrf52840_bootloader-0.8.2_s140_6.1.1.zip -p \/dev\/ttyACM0 -b 115200 --singlebank --touch 1200 For linux users you will need a few things   You need pip3 $ sudo apt install python3-pip  You need adafruit-nrfutil $ pip3 install --user adafruit-nrfutil  adafruit-nrfutil gets installed into \\textasciitilde\/.local\/bin  You need to add your user to dialout $ sudo usermod -a -G your_username  Restart your computer  For the CPX there is a UF2 that you transfer over to the CPLAYBOOT drive. At the time of this writing the version you're looking for is update-bootloader-circuitplay_m0-v3.15.0.uf2 .  Are you running out of memory? To figure out how much RAM you have on your CPX\/CPB you need to import gc then run gc.collect() and then print(gc.mem_free()) . At the time of this writing, the CPX has about 17 KB of RAM and the CPB has around 140 KB of RAM.    "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Chapter",
  "number": "7",
  "title": "Acknowledgements",
  "body": " Acknowledgements   Dr. Carlos Montalvo would like to acknowledge a few key members who made this textbook possible. First and foremost I would like to thank Adafruit for their entire ecosystem of electronics, tutorials, blogs and forums. Much of what I have learned here to teach Instrumentation was from Adafruit and the Adafruit Learn system and specifically people like Lady Ada and John Park who have helped shape CircuitPython and the CircuitPlayground Express to what it is today. I would also like to thank Dr. Saami Yazdani for creating the blueprint for Instrumentation at my university by creating a laboratory environment for an otherwise totally theoretical course. His course was the foundation for this textbook and for that I thank him for showing the way. I’d like to also thank and acknowledge Tangibles that Teach for giving me the opportunity to morph this loose set of projects into a textbook that can be used for multiple universities and classrooms and of course help students learn and acquire knowledge through creating. I'd also like to change Steven Clontz for first showing me PreTeXt and for Oscar Levin and all of his helpful replies via email and Zoom. Finally, I'd like to thank the co-authors Lisa and Marine for helping me add some statistical data to this textbook and being all around great academic colleagues and friends   "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Howard gardner’s theory of multiple intelligences. in instructional guide for university faculty and teaching assistants. https:\/\/www.niu.edu\/citl\/resources\/guides\/instructional-guide, 2020. Northern Illinois University Center for Innovative Teaching and Learning.  R.A. Ralph. Post secondary project-based learning in science, technology, engineering and mathematics. Journal of Technology and Science Education (JOTSE), 6(1):26–35., 2015.  Linda K. Silverman Richard M. Felder. Learning and teaching styles in engineering education. Engineering Education, 78(7):674–681, 1988.  Tang Yong. The mode of theoretical knowledge and practical knowledge combination: The significance of internship. World Journal of Education, 2(4):55–63., 2012.  J. C. Perrenet, P. A. J. Bouhuijs, and J. G. M. M. Smits. The suitability of problem-based learning for engineering education: Theory and practice. Teaching in Higher Education, 5(3):345–358, 2000.  Krajcik Joseph S. and Phyllis C. Blumenfeld. Project-based learning. Academia, 2006.  Paul Marshall. Do tangible interfaces enhance learning? In Proceedings of the 1st International Conference on Tangible and Embedded Interaction, TEI ’07, page 163–170, New York, NY, USA, 2007. Association for Computing Machinery.  BARBARA M. OLDS and RONALD L. MILLER. The effect of a first-year integrated engineering curriculum on graduation rates and student satisfaction: A longitudinal study. Journal of Engineering Education, 93(1):23–35, 2004.  P. Armstrong. Bloom’s taxonomy. Accessed 2\/2\/22 https:\/\/cft.vanderbilt.edu\/guides-sub-pages\/blooms-taxonomy\/, 2010. Vanderbilt University Center for Teaching.  Lyle D. Feisel and Albert J. Rosa. The role of the laboratory in undergraduate engineering education. Journal of Engineering Education, 94(1):121–130, 2005.  Juan P. Oliver and Fiorella Haim. Lab at home: Hardware kits for a digital design lab. IEEE Transactions on Education, 52(1):46–51, 2009.  F. G. Martin. Integrating hardware experiences into a computer architecture core course. Journal of Computer Science College, 21:39–52, 6 2006.  N. Manjikian and S. Simmons. Evolution and enhancements of a microprocessor systems course. IEEE Transactions Education, 42(4):360, 11 1999.  P. Li W. Durfee and D. Waletzko. Take-home lab kits for system dynamics and controls courses. Proceedings of the American Control Conference, pages 1319–1322, 2004.  D. Nicoletti D. Cyganski and J. A. Orr. A new introductory electrical engineering curriculum for the first-year student. IEEE Transactions on Education, 37(2):171–177, 5 1994.  Sebastian Nanz and Carlo A. Furia. A comparative study of programming languages in rosetta code. In 2015 IEEE\/ACM 37th IEEE International Conference on Software Engineering, volume 1, pages 778–788, 2015.  Integrated development environments. IntegratedDevelopmentEnvironments, 2021. Accessed: 2021-12-09. https:\/\/wiki.python.org\/moin\/  Tiobe index. https:\/\/www.tiobe.com\/tiobe-index\/, 2022. Accessed: 2021-3-25.  Hans Fangohr. A comparison of c, matlab, and python as teaching languages in engineering. In Marian Bubak, Geert Dick van Albada, Peter M. A. Sloot, and Jack Dongarra, editors, Computational Science - ICCS 2004, pages 1210–1217, Berlin, Heidelberg, 2004. Springer Berlin Heidelberg.  Circuitpython. https:\/\/circuitpython.org\/, 2021. Accessed: 12-09-2021.  Carlos Montalvo, Lisa Schibelius, and Marine Leabeater. Project Based Engineering Instrumentation with CircuitPython. Github, 2023. https:\/\/github.com\/cmontalvo251\/LaTeX\/blob\/master\/PBL_CircuitPython_Instrumentation\/main.pdf.  Adafruit. Adafruit learn, 2021. Adafruit https:\/\/learn.adafruit.com\/.  Carlos Montalvo. Facility for aerial systems and technology github repository. cmontalvo251, 2022. https:\/\/github.com\/cmontalvo251  Adafruit. Adafruit, 2023. Adafruit https:\/\/adafruit.com\/.  Arduino. Arduino, 2023. https:\/\/www.arduino.cc\/.  Adafruit. Adafruit ble connect, 2023. https:\/\/learn.adafruit.com\/bluefruit-le-connect?gclid=CjwKCAiA3KefBhByEiwAi2LDHOVV9IbeAFTEsKBx285M-B7o3VSCeW7uoU0gbDqJ3D0KDX_xnKD-uxoCrrAQAvD_BwE.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
