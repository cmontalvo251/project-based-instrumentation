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
  "id": "led-buttons-2",
  "level": "1",
  "url": "led-buttons-2.html",
  "type": "Section",
  "number": "7.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  CPX + USB Cable  2 Alligator clips  Push Button  Breadboard  LED (Light Emitting Diode) (x3 in case you fry some)  Resistor (300 to 1000 Ohms)   "
},
{
  "id": "led-buttons-3",
  "level": "1",
  "url": "led-buttons-3.html",
  "type": "Section",
  "number": "7.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   The VOUT and 3.3V pins are always \"ON\" even when code is not running on the CPX. So long as your CPX is plugged in via USB or a Lipo Battery  LEDs are Light Emitting Diodes which means current only flows in one direction  LEDs need resistors in series otherwise they will get too hot and burn up  Breadboard pinout diagrams  Analog pins can be controlled by simply using the digitalio module  LEDs can be hooked up to analog pins and set to blink by changing the board pin   In this project we're going to use the same blink code as before but modify it to blink an external LED. The purpose of this lab is to familiarize yourself with the pins on the CPX and create a simple circuit using the 5V (VOUT) pin on the CPX and one of the Analog pins. Your laptop has a battery with something between 10 to 20V. There are DC to DC converters in your laptop that provide 5V to your USB ports. These USB ports can be used to power your CPX as you have done in the past few labs.  If you purchased the optional battery pack you can also power the CPX using 3 AA batteries. These batteries nominally have 1.5 V but fully charged it's actually something like 1.8 V. So 1.8 times 3 is 5.4V which is enough to power the CPX. If you have the battery pack and some AA batteries, give it a try. If you still have the blink code from the last project on board you'll see the D13 LED blink as before. You won't be able to see the serial print() output as before but that code will be running which is why D13 is blinking. I have noticed that some of the battery packs have power and ground wires swapped. If the battery pack doesn't work it may be because those two wires are backwards.   The CPX itself uses 3.3V logic which means when it converts numbers to binary a 0 (False) represents 0 volts and a 1 (True) represents 3.3V. The CPX has ports that are labeled various things. GND stands for ground and you need to hook the negative end of your circuit to this and it also has VOUT which supplies 5V to any circuit you build. Hook the positive end of your circuit to the VOUT pin. There is also a port labeled 3.3V and obviously that outputs 3.3V. The Figure below shows an Arduino Metro hooked up to an LED on a breadboard (Courtesy of Tony Dicola ).    Fritzing diagram of an Arduino Metro hooked up to an LED   If you're not familiar with how breadboards work I would recommend watching this video on how breadboards work . Your lab today specifically involves an external LED as shown above. You can read about LEDs more online if you wish. Remember that the long leg of the LED is the positive end and the short leg is the negative end. The task today is to wire an LED up to the CPX in multiple ways. The figure above shows the LED connected to the A1 pin but we will be wiring up the LED to multiple pins on the CPX\/CPB to gain understanding in how the circuit works. Note, whenever you modify a circuit on the breadboard, always be sure to remove power from the CPX. You can damage multiple components if you're not careful.   "
},
{
  "id": "led-buttons-3-6",
  "level": "2",
  "url": "led-buttons-3.html#led-buttons-3-6",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": "  Fritzing diagram of an Arduino Metro hooked up to an LED  "
},
{
  "id": "led-buttons-4",
  "level": "1",
  "url": "led-buttons-4.html",
  "type": "Section",
  "number": "7.3",
  "title": "LED with no Code",
  "body": " LED with no Code  For this part we are going to light up the LED without the use of any code on the CPX. First, wire up the circuit with the positive end connected to 5V. This is how my circuit looks. Make sure to use a resistor between 300 and 1000 Ohms. An LED does not have that much internal resistance so you need a resistor in series with an LED to reduce the amount of current flowing through the LED or the entire LED will fry. If you use a resistor that has too much impedance the LED just won't turn on because the voltage\/current through the LED will be below the activation voltage of the circuit.    CircuitPlayground Express connected to an LED on a breadboard   Once you have that circuit working, wire up the circuit again with the 3.3V output. Do you notice anything different when you hook up the circuit with different pins? Here's my circuit. Do you notice something different about the intensity of the LED? Why is it different?    CircuitPlayground Express connected to an LED using 3.3V   "
},
{
  "id": "led-buttons-4-3",
  "level": "2",
  "url": "led-buttons-4.html#led-buttons-4-3",
  "type": "Figure",
  "number": "7.3.1",
  "title": "",
  "body": "  CircuitPlayground Express connected to an LED on a breadboard  "
},
{
  "id": "led-buttons-4-5",
  "level": "2",
  "url": "led-buttons-4.html#led-buttons-4-5",
  "type": "Figure",
  "number": "7.3.2",
  "title": "",
  "body": "  CircuitPlayground Express connected to an LED using 3.3V  "
},
{
  "id": "led-buttons-5",
  "level": "1",
  "url": "led-buttons-5.html",
  "type": "Section",
  "number": "7.4",
  "title": "LED with a push button",
  "body": " LED with a push button  Now that we understand breadboards a bit, we're now going to manually blink the LED using a push button placed onto the breadboard and have it act like a switch. Therefore, when the button is pressed, the LED will turn on and when the button is released the LED will turn off. The button just acts like a wire so you can plug in the button anywhere in the circuit.    CircuitPlayground Express turning on an LED with an external push button   "
},
{
  "id": "led-buttons-5-3",
  "level": "2",
  "url": "led-buttons-5.html#led-buttons-5-3",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": "  CircuitPlayground Express turning on an LED with an external push button  "
},
{
  "id": "led-buttons-6",
  "level": "1",
  "url": "led-buttons-6.html",
  "type": "Section",
  "number": "7.5",
  "title": "LED with code",
  "body": " LED with code  Next I want you to remove the button from the circuit and wire up the LED like you had it when the positive end was connected to VOUT or 3.3V. Except this time I want you to hook the positive end of the circuit to pin A2. Then edit your blink code to blink pin A2. Take a look at the blink code. Right now the code is blinking pin D13. How do you think you need to change the code to blink pin A2? Here's what my circuit looks like for this one. I won't include code for this one since you just need to change one line of code.    CircuitPlayground Express connected to an LED with an analog pin   "
},
{
  "id": "led-buttons-6-3",
  "level": "2",
  "url": "led-buttons-6.html#led-buttons-6-3",
  "type": "Figure",
  "number": "7.5.1",
  "title": "",
  "body": "  CircuitPlayground Express connected to an LED with an analog pin  "
},
{
  "id": "led-buttons-7",
  "level": "1",
  "url": "led-buttons-7.html",
  "type": "Section",
  "number": "7.6",
  "title": "LED with CPX button",
  "body": " LED with CPX button  Finally, I want to use one of the buttons on the CPX to blink the LED hooked up to pin A2. For this code to work you first need to detect a button press and then tell the program to change the light from True to False depending on what it's current status is. This one is a bit more difficult so I'll include the code here and discuss the code itself. Here is my circuit (identical) to the previous one with Button A on the CPX pressed down.    CircuitPlayground Express powering an LED with an on-board button   Alright so how do we detect a button press? Well the documentation on this is not so straight forward. What we want to do is detect the INPUT of a digital signal and then do something if we detect that signal. Here's the code I created to get it to work.    Circuitpython code to power an LED with an on-board button   The code above is an image. You could type exactly what you see and hope you don't type any errors (which is highly unlikely) or you could look for my code on my Github . Have you bookmarked this link yet? I recommend you do so!!! So you're making a code about Buttons....hmmm. Click that Github link. Where do you think the code about Buttons is located? Anywho, let's talk about the code.  The first 3 lines are exactly the same as before. Line 5 through 7 are similar to creating the led variable except we're using BUTTON_A as the board value and setting the direction to INPUT . Finally we're setting the pull direction to DOWN . This means the button acts like a pull down resistor and when it's pressed the value of the button goes HIGH .  Lines 9-11 are the same as before. We create an led variable and tell the CPX that the led is hooked up to pin A2. We then start the while loop on line 13. First if you click the Serial button you'll see the text ‘Button value is False'. It's False because buttonA.value is not being pressed. On line 15 the led is set to False (turned off). On line 16 the button value is checked using an if statement as to whether or not the button is pressed (True). If the button is pressed, the user will be notified that the button is pressed on line 17 and the led will be set to True (on) in line 18. Lines 19-22 are while loop that will notify the Serial monitor that you must let go of the button before the code can continue to the main while loop. The time.sleep functions are there to make sure a human can operate the button without code running faster than a human can press a button. When I press the button down here is the output I get from the Serial monitor.    Circuitpython code to power an LED with an on-board button in Mu   Here you'll see 4 lines that say Button value is False and then two lines that say Button value is True followed by 5 lines that say Waiting for you to let go... . See if you can get this code to work and play with it and modify it as you see fit. By the way, the LED connected to pin D13 has this exact same circuitry, an LED a resistor, it's all just soldered to the PCB so you don't have to build it using a breadboard. Hopefully now you have some appreciation for buttons and LEDs!!  "
},
{
  "id": "led-buttons-7-3",
  "level": "2",
  "url": "led-buttons-7.html#led-buttons-7-3",
  "type": "Figure",
  "number": "7.6.1",
  "title": "",
  "body": "  CircuitPlayground Express powering an LED with an on-board button  "
},
{
  "id": "led-buttons-7-5",
  "level": "2",
  "url": "led-buttons-7.html#led-buttons-7-5",
  "type": "Figure",
  "number": "7.6.2",
  "title": "",
  "body": "  Circuitpython code to power an LED with an on-board button  "
},
{
  "id": "led-buttons-7-9",
  "level": "2",
  "url": "led-buttons-7.html#led-buttons-7-9",
  "type": "Figure",
  "number": "7.6.3",
  "title": "",
  "body": "  Circuitpython code to power an LED with an on-board button in Mu  "
},
{
  "id": "led-buttons-8",
  "level": "1",
  "url": "led-buttons-8.html",
  "type": "Section",
  "number": "7.7",
  "title": "Assignment",
  "body": " Assignment  For this specific project you must get your LED to turn on and off using buttons as well as software. The different scenarios are shown below and the grading rubric is presented after this list.  Get your LED to turn on with the VOUT pin.  Get your LED to turn on with the 3.3V pin.  Get your LED to blink automatically using an analog pin on the CPX\/CPB.  Get your LED to turn on using a button on the breadboard.  Get your LED to blink automatically by pressing a button on the CPX\/CPB.     Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a photo of your circuit with your LED turned on using VOUT. Based on the forward voltage in your LED and the resistance in your circuit, what is the voltage drop across the resistor and current through the LED? Assuming your LED acted like a resistor, what would the resistance of your LED be? - 10%  Include a photo of your circuit with your LED turned on using 3.3V. Based on the forward voltage in your LED and the resistance in your circuit, what is the voltage drop across the resistor and current through the LED? Assuming your LED acted like a resistor, what would the resistance of your LED be? - 10%  The USB port from your computer is 5V. The DC to DC converter on the CPX\/CPB converts that 5V to 3.3V. Compute the Gain ( ) for this converter both in magnitude and in . - 10%  Include a photo of your circuit with your LED turned on using a button on your breadboard - 10  Include a photo of your circuit with your LED turned on using an analog pin and then also include a screenshot of your Mu code showing the same analog pin used to blink your LED - 20%  Include a photo of your circuit with your LED turned on by pressing a button on the CPX\/CPB and then also include a screenshot of your Mu code showing the line of code used to read the button press and blink the LED. - 20%    "
},
{
  "id": "daq-2",
  "level": "1",
  "url": "daq-2.html",
  "type": "Section",
  "number": "8.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  CPX\/CPB  USB Cable   "
},
{
  "id": "daq-3",
  "level": "1",
  "url": "daq-3.html",
  "type": "Section",
  "number": "8.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Record real time measurements from the CircuitPlayground using the Serial monitor  Learn how to use the typing module to type data directly into a spreadsheet or text file  Learn how to log data on the on board memory of the CircuitPlayground   "
},
{
  "id": "daq-4",
  "level": "1",
  "url": "daq-4.html",
  "type": "Section",
  "number": "8.3",
  "title": "Extra Help",
  "body": " Extra Help  This is a pretty hard project to do with multiple different methods. After you've read through this document I suggest you watch a youtube I created on Logging Data with the Circuit Playground Express . I have also made video where I log temperature and accelerometer data using on board memory with the CircuitPlayground Bluefruit.   "
},
{
  "id": "daq-5",
  "level": "1",
  "url": "daq-5.html",
  "type": "Section",
  "number": "8.4",
  "title": "Getting Started",
  "body": " Getting Started  Taking data is the core of any instrumentation project. Data Acquisition Systems or DAQ for short come in all shapes and sizes. Believe it or not the CPX can be used as a crude and cheap DAQ. The CPX can easily take temperature data and monitor the temperature in a greenhouse or take humidity readings of a plant to monitor soil content. Before we learn about the different sensors on board the CPX, we want to make sure we can store that data later rather than just having it spit data out via the serial monitor. For starters though let's get the CPX to print out something simple like button presses since we've touched on that already. The code I'm using is shown below and can also be found on Github .    CircuitPython code that prints button presses   The code is pretty similar to what I had in the past. I import board, digitalio, and time. I create a buttonA object using the digitalio library to record button presses. I then enter into a while loop print the buttonA.value. The difference here is that I use the int() function to convert the buttonA.value to an integer. The reason why I do this is because buttonA.value is a boolean. It is either True or False. An integer though is a number and thus a value of False is 0 and True is 1. If you open the serial monitor and push the A button down a few times you'll see some zeros and 1's.    Serial monitor showing button presses in Mu   Mu also has a really neat builtin plotter. You'll see next to the Serial button there is a button called Plotter. If you click that button now nothing will pop up on the screen. Unfortunately in order to plot using the Plotter you need to modify the print() statement to this:  print((int(buttonA.value),))  Notice the extra parentheses and the comma. Now if you click Plotter you'll see something like this. You'll notice that the print statement now has commas in it and the Plotter is recording button presses.    Plotter open showing button presses in Mu   The problem with this is we still can't save the recorded data anywhere. Before we get into saving data let's first edit the print statement again to get rid of the Plotter by removing the extra parentheses and add time.monotonic() that way we can keep track of when a button was pressed. My print statement looks like this now:  print(time.monotonic(),int(buttonA.value))  Looking at the serial monitor now you'll see that time is being printed alongside the button presses.    Serial monitor showing button presses and time in Mu   Now we are in a position where we can record some data and save it to our computer. There are 4 ways to record data. I call the first, Method1 and you basically just copy and paste from the serial monitor, Method2 where you have the CPX\/CPB type data into a spreadsheet and Method3 where you log data internally onto the CPX\/CPB itself. The 4th method called Method4 utilizes the Bluetooth Module. Since that has it's own issues there is a completely separate section on how to explain Bluetooth (See ). Note you can only do Bluetooth if you have the Circuit Playground Bluefruit (CPB).  "
},
{
  "id": "daq-5-3",
  "level": "2",
  "url": "daq-5.html#daq-5-3",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": "  CircuitPython code that prints button presses  "
},
{
  "id": "daq-5-5",
  "level": "2",
  "url": "daq-5.html#daq-5-5",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": "  Serial monitor showing button presses in Mu  "
},
{
  "id": "daq-5-9",
  "level": "2",
  "url": "daq-5.html#daq-5-9",
  "type": "Figure",
  "number": "8.4.3",
  "title": "",
  "body": "  Plotter open showing button presses in Mu  "
},
{
  "id": "daq-5-13",
  "level": "2",
  "url": "daq-5.html#daq-5-13",
  "type": "Figure",
  "number": "8.4.4",
  "title": "",
  "body": "  Serial monitor showing button presses and time in Mu  "
},
{
  "id": "daq-6",
  "level": "1",
  "url": "daq-6.html",
  "type": "Section",
  "number": "8.5",
  "title": "Method 1 - Copying Serial Monitor Data",
  "body": " Method 1 - Copying Serial Monitor Data  If you open up the serial monitor you can see the data output. If you unplug the CPX while it's taking data the code will stop. Note: In newer versions, unplugging your CPX will result in a loss of data. If this happens try pressing CTRL+C after you click the REPL window. With the code stopped you can select all the data in the Serial monitor and then copy and paste the data into a text file on your computer. You can actually copy this into a new file on Thonny and just save it as a *.txt file. Once you have the data in a text file you can proceed to plotting in Python on your desktop which I discuss in the last section.Here's some example data in Gedit which is a simple text editing program.    Example button data in a text editor   "
},
{
  "id": "daq-6-3",
  "level": "2",
  "url": "daq-6.html#daq-6-3",
  "type": "Figure",
  "number": "8.5.1",
  "title": "",
  "body": "  Example button data in a text editor  "
},
{
  "id": "daq-7",
  "level": "1",
  "url": "daq-7.html",
  "type": "Section",
  "number": "8.6",
  "title": "Method 2 - Automatically Populate a Spreadsheet",
  "body": " Method 2 - Automatically Populate a Spreadsheet  The downside with the above method of course is if you have a ton of data to record you could lose the data or run into a massive copy and paste issue. The second option is to use this module called keyboard which takes control of your keyboard on your desktop computer and actively types your data into a spreadsheet. The code is very extensive but I'll include the simple one here so we can discuss it. Below are the first 30 lines of code. The first 6 lines of code are just comments since I heavily adopted this code from the Adafruit Learn System . My version of this code can be found on my Github. Lines 8 - 14 are import commands as we've seen previously. The regular import modules board, time and digitalio are imported but we are also importing the Keyboard module so that the CPX can takeover our keyboard. Lines 16-22 create two buttons. First we create buttonA attached to pin D4 and then a switch attached to pin D7. If you look on the CPX there is a switch labeled D7. Before you copy this code onto the CPX make sure you move the switch towards the ear looking symbol. Lines 26-28 created the keyboard object. We are going to call it layout for this example code.    Snippet of Typing code in CircuitPython   The next 30 lines are shown below. Lines 32-35 define a function. Functions in Python have a pretty standard structure. The keyword def is used to denote that the next line is a definition for a function. The name of the function is slow_write() . The input to the function is string which ironically enough is a string object. Line 33-35 define what the function does. Line 33 sets up a for loop where the code loops through each character in the string. Everytime it gets to a new character it will use your keyboard to type that character using the layout.write(c) command. The time.sleep(0.02) is just to slow down the keyboard so your computer can keep up. That function is defined above the standard while True: statement on line 37 but is called on line 42. You'll see there is a slow_write(output) on line 42. In this case output is a string and it's sent to the function slow_write() . So in this case we have a function that can write a string so we just need to take data and then write it using our keyboard. Line 38 is an if statement that will only be true if the switch on pin D7 is pushed towards the music note on the CPX. If the switch is not thrown the code will move to the else statement on line 52 and tell the user that you need to flip the switch. If the switch is thrown line 40 will take data for us. First it will record the time.monotonic() and store it as a floating point number using the %0.1f designation which means that it will store 1 decimal as a %floating point number for f.    Remainder of Typing code in CircuitPython   The second number in the string is an integer or a base 10 (decimal) integer designated by the %d part of the format. The integer is int(buttonA.value). You'll see a \\t in between the formatted numbers which is a tab. The tab is there to tab between cells in a spreadsheet. Line 41 will print the output string to the Serial monitor and it will also type the contents of the string. Very important here. When you flip the switch on the CPX your keyboard will start typing in whatever active window is selected. If you don't have a spreadsheet opened and active (selected), the keyboard will just begin typing in whatever window is open. Make sure you have a spreadsheet program open and ready to go. Lines 44-51 tell the keyboard to hit the DOWN_ARROW on your keyboard to move to the next row and the LEFT_ARROW twice to move back to the first column. Line 55 is a sleep to only log data once a second. I ran this code for a bit and had it type into LibreOffice Calc which is a free spreadsheet program. Google Sheets or Microsoft Excel will also work just fine.    Example data in a spreadsheet from Typing code   You'll see that the first column is time with 1 decimal point and the second column is the button press values. At this point you must click Save As... and save the document as a CSV which stands for Comma Separated Value. Once you have the file saved you can proceed to plotting in Python on your Desktop.  "
},
{
  "id": "daq-7-3",
  "level": "2",
  "url": "daq-7.html#daq-7-3",
  "type": "Figure",
  "number": "8.6.1",
  "title": "",
  "body": "  Snippet of Typing code in CircuitPython  "
},
{
  "id": "daq-7-5",
  "level": "2",
  "url": "daq-7.html#daq-7-5",
  "type": "Figure",
  "number": "8.6.2",
  "title": "",
  "body": "  Remainder of Typing code in CircuitPython  "
},
{
  "id": "daq-7-7",
  "level": "2",
  "url": "daq-7.html#daq-7-7",
  "type": "Figure",
  "number": "8.6.3",
  "title": "",
  "body": "  Example data in a spreadsheet from Typing code  "
},
{
  "id": "daq-8",
  "level": "1",
  "url": "daq-8.html",
  "type": "Section",
  "number": "8.7",
  "title": "Installing Modules",
  "body": " Installing Modules   One issue you're going to run into when you run the codes below is that you won't have some of the modules on your CPB\/CPX. To fix this you need to download the CircuitPython Libraries . You need to download the appropriate version: 6.x, 7.x or 8.x. How do you know what version of CircuitPython you have? Well head over to your CIRCUITPY drive and open the boot_out.txt file and it will tell you the version. Note that this is the same version as the .UF2 file installed back in the Getting Started labs (See Chapter ). When you download the modules it will download a .zip file. Extract the .zip file on your desktop computer and then open the lib folder on your desktop and your CIRCUITPY. You then need to transfer the modules (ONLY THE ONES YOU NEED) from your desktop to your CPX\/CPB lib folder. The reason why you can't copy the entire folder is because the CPB\/CPX only has 2MB of flash and the CircuitPython download is 4.1 MB at the time of this writing.  "
},
{
  "id": "daq-9",
  "level": "1",
  "url": "daq-9.html",
  "type": "Section",
  "number": "8.8",
  "title": "Method 3 - Logging Data Directly to on board memory",
  "body": " Method 3 - Logging Data Directly to on board memory  The problem with the above 2 methods is that you need a laptop to log data in the field. It would be nice if you could use the optional battery pack and just have the CPX log data on the CPX itself. This is the most complex way but in my opinion the best way. In order to get this to work you need to allow the drive on the CPX to have read\/write permissions. This requires you to load a piece of software called boot.py and put it on the CPX. I have this software on my Github . The software is shown below. The first 10 lines are probably very familiar. Import some modules and then create a switch object. Line 13 is where all of the storage permissions are changed. If the flip is switched towards the A button, the storage module is used to allow you to write to the CPX. The problem here is that if you do this, you won't be able to edit code. I'll explain the procedure here in a minute. As always, the relevant Adafruit tutorial is on the Adafruit Learn System if you want to read more about it. Again make sure you store this file onto the CIRCUITPY drive and save it as boot.py    boot.py script in CircuitPython   In addition to storing the file boot.py you'll need to edit your main.py script to only log data when the switch is moved towards the B button. The software to record button presses on disk is shown below and as always on my Github . In this software we again see the standard commands. Lines 1-3 import all the modules we need and then 5-15 create a switch, a button and an LED. In this case we're using the LED soldered to the board. Line 17-20 check to see if the user has flipped the switch. If the switch is False the storage module on boot.py will allow the drive to act like a data logger and it will open a file called Test_Data.txt for writing (‘w'). If the switch is True then the user will be notified that the file has not been opened for writing. Lines 22 through 33 include the infinite while loop. Line 23 turns the LED on and line 24 prints out the current time and the button value in integer form. If the switch value is False the program will create an output string by converting all numbers to strings using the str function. Notice that there is a str( \\textbackslash n ) at the end of the output variable which tells the computer to write a new line of data to the file. Lines 28 and 29 write the output to the file from line 18 and then flush the output which means the CPX waits for the data to be fully written before moving on. It also turns the LED off so we know the CPX took data even when we aren't looking at the Serial monitor. If the switch value is true it means that the we never opened the data file and thus we tell the user we aren't logging data and it's time to flip the switch and hit reset. NOTE: The figure below is from an old version of the code. The newest version produces the same outcome. The only difference is that the D13 LED blinks when the code is running and the first neopixel toggles 3 different colors when the system is logging data. This allows for extra user information when operating Method 3 without a computer and the serial monitor. Note that these additions require the use of neopixel.mpy module.     Snippet of writing data to a text file in CircuitPython   So here is the flow of what you want to do for method 3.   Unplug the CPX  Flip the switch towards the A button.  Plug in the CPX and save the boot.py and main.py files. Remember you can only save Python scripts when the switch is flipped towards the A button.  When you are ready to start recording data, flip the switch towards the B button. If you're looking at the Serial monitor, the software will throw an error. Just ignore it and hit the reset button. When your computer recognizes the CPX you can turn the Serial monitor on and off.  When you are done taking data simply slide the switch over towards the A button and hit reset again. This is what my Serial monitor looks like when I do this. You'll see that I was writing to disk for like 25 seconds and then I flipped the switch back towards the A button.     Serial monitor open in Mu showing Method 3 for data logging   With the switch flipped and data taken, open your folder manager and take a look at the CIRCUITPY drive. This is what mine looks like. You'll see I have two Python files and a file Test_Data.txt with all my data in it.    Text file shown in file manager on computer   If you open the Test_Data.txt file you will hopefully see data in it.    Example text file from Method 3   At this point you can copy this text file over to your desktop computer and proceed to the Python plotting portion. Ok so let's recap method 3 one more time.  Unplug CPX (or remove power)  Slide switch to A  Plug in CPX (or provide battery power) and wait for system to fully boot up  Slide switch to B  Hit Reset and wait for system to fully boot up  Take data for however long you want  Slide switch to A when you're ready to stop taking data  Hit Reset and wait for system to fully boot up  Remove power if you're on battery power  Plug CPX into computer if not already connected  Transfer data file to computer    "
},
{
  "id": "daq-9-3",
  "level": "2",
  "url": "daq-9.html#daq-9-3",
  "type": "Figure",
  "number": "8.8.1",
  "title": "",
  "body": "  boot.py script in CircuitPython  "
},
{
  "id": "daq-9-5",
  "level": "2",
  "url": "daq-9.html#daq-9-5",
  "type": "Figure",
  "number": "8.8.2",
  "title": "",
  "body": "  Snippet of writing data to a text file in CircuitPython  "
},
{
  "id": "daq-9-8",
  "level": "2",
  "url": "daq-9.html#daq-9-8",
  "type": "Figure",
  "number": "8.8.3",
  "title": "",
  "body": "  Serial monitor open in Mu showing Method 3 for data logging  "
},
{
  "id": "daq-9-10",
  "level": "2",
  "url": "daq-9.html#daq-9-10",
  "type": "Figure",
  "number": "8.8.4",
  "title": "",
  "body": "  Text file shown in file manager on computer  "
},
{
  "id": "daq-9-12",
  "level": "2",
  "url": "daq-9.html#daq-9-12",
  "type": "Figure",
  "number": "8.8.5",
  "title": "",
  "body": "  Example text file from Method 3  "
},
{
  "id": "daq-10",
  "level": "1",
  "url": "daq-10.html",
  "type": "Section",
  "number": "8.9",
  "title": "Method 4 - Logging Data on a Cell Phone using Bluetooth (CPB Only)",
  "body": " Method 4 - Logging Data on a Cell Phone using Bluetooth (CPB Only)  As mentioned in the introduction it's possible to have the Circuit Playground send data wirelessly to a cell phone using Bluetooth provided you have Bluetooth setup and a smart phone with the Adafruit Connect App. Bluetooth is explained in detail in its own chapter (See ). Method 4 is a valid form of logging data it just requires a cell phone to be powered the entire time and it must be within 30 feet of the Circuit Playground at all times. This also only works on the CPB since the CPX does not have a Bluetooth transmitter.  "
},
{
  "id": "daq-11",
  "level": "1",
  "url": "daq-11.html",
  "type": "Section",
  "number": "8.10",
  "title": "Plotting Logged Data",
  "body": " Plotting Logged Data  Alright so there you have it. I have explained 4 methods to datalogging. Here are the methods again in summary.  Print data to Serial and copy and paste  Use the Keyboard module to save data to a spreadsheet  Access the storage of your CPX and write data to a text file on the CPX  Send data wirelessly to a Cell Phone using Bluetooth - CPB Only (See )    All methods will work but some will obviously have their pros and cons. I suggest you get comfortable with 1 method and use that for the remainder of the semester. Whatever option you choose though will provide you with a data file that you can read in Python on your desktop computer to plot. The simplest way to import data is by using the loadtxt function from the module numpy. Here is some very simple code to plot data from a text file. I also have a Youtube video explaining how to plot a text file if you'd rather watch something.  When you plot make sure your Test_Data.txt file is in the same folder as your plotting script in Thonny or Spyder. Here's my example code (this code is not on Github but you only need 3 or 4 lines of code to plot).    Plotted data shown in Thonny   In this example lines 1 and 2 import numpy and matplotlib. Line 4 imports data from the Test_Data.txt file and then 6 and 7 save the first and second columns into time and button. The remaining lines plot the data and create x and y labels as well as a grid. Hopefully now you are well versed in taking data and plotting in Python.  "
},
{
  "id": "daq-11-5",
  "level": "2",
  "url": "daq-11.html#daq-11-5",
  "type": "Figure",
  "number": "8.10.1",
  "title": "",
  "body": "  Plotted data shown in Thonny  "
},
{
  "id": "daq-12",
  "level": "1",
  "url": "daq-12.html",
  "type": "Section",
  "number": "8.11",
  "title": "Assignment",
  "body": " Assignment  For this project you must use method 1, 2, 3 or 4 to save time and button presses to a text file. You must then plot the button presses as a function of time. Remember to add x and y labels to all figures.   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a snippet (5 lines) of your data file - 40%  Include a plot of your button presses with time on the x-axis and button presses on the y-axis (no screenshots) - 40%    "
},
{
  "id": "bluetooth-2",
  "level": "1",
  "url": "bluetooth-2.html",
  "type": "Section",
  "number": "9.1",
  "title": "Parts List",
  "body": " Parts List   Smart Phone  Adafruit BLE Connect App ( Play Store \/ App Store )  CircuitPlayground Bluefruit  USB Cable  Laptop   "
},
{
  "id": "bluetooth-3",
  "level": "1",
  "url": "bluetooth-3.html",
  "type": "Section",
  "number": "9.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Understand the bluetooth module on the CircuitPlayground Bluefruit  Learn how to send data via the Bluefruit to your smart phone  Understand how to plot data sent via UART   "
},
{
  "id": "bluetooth-4",
  "level": "1",
  "url": "bluetooth-4.html",
  "type": "Section",
  "number": "9.3",
  "title": "Extra Help",
  "body": " Extra Help  You might find plotting data via bluetooth to be rather difficult and it was pretty difficult for me until I learned that you can export data as a txt file rather than a csv file. Before I learned how to do that I put together a 4 part series describing everything in this module. Worst case you can just watch the third video in the series . The video is 30 minutes but the first 8 minutes goes through setting up the bluetooth module and the rest of the video is just on plotting the exported csv data which took me some time. Note that exporting data as a txt file is the preferred method as parsing the file is way easier.  "
},
{
  "id": "bluetooth-5",
  "level": "1",
  "url": "bluetooth-5.html",
  "type": "Section",
  "number": "9.4",
  "title": "Getting Started",
  "body": " Getting Started  I mentioned in the DAQ project that there is technically a Method4. This is because with bluetooth you can send data from your phone to your Circuitplayground Bluefruit (CPB) and you can also send data to your smart phone. Once the data is on your phone you can export the data to a text file. That basically means you can use the bluetooth module as another method to save data from the CPB. There is a lot you can do with bluetooth but the bottom line is that All code required for this module is on my Github . First we're going to run the bluetooth_uart_button.py script which sends button data to your smart phone via something called UART which is a type of serial communication. It's beyond the scope of this lesson but serial is digital as opposed to analog which is done using the AnalogIn functions (See )    Example Bluetooth code in CircuitPython   Lines 3-11 import a ton of modules. You'll recognize many of them like analogio, and time but the new ones are the ones that say ble. These are the bluetooth modules required for the CPB. Lines 21-24 setup the button so we can log the button via bluetooth and Lines 14-17 kick of the BLERadio object and the UARTService() to send data. Line 25 also grabs the current time before the infinite while loop that way the timer starts closer to zero.    Remainder of Bluetooth code in CircuitPython   The code above is the infinite while loop which actually contains 2 while loops. Lines 28-33 prints the name of your bluetooth sensor and then starts advertising bluetooth to whoever is listening. It will then enter a while loop from 32-33 until bluetooth is connected. Once bluetooth is connected it will enter into the second while loop from line 39-52. In those lines 40-46 is responsible for taking all the necessary measurements and printing them to the serial monitor in Mu. In this case it's only printing the current time and the value of the button as an integer. buttonA.value is either True or False and the int function converts that to a 0 or a 1. Line 49 then sends the data over bluetooth using the UART server. You'll notice in this case the code is sending t,b by using the format variable and the 2 empty brackets. If you want to send more data you need to add more empty brackets and more variables to the format function. When you first save this script your CPB will not be connected and enter into an infinite while loop where it waits for your smart phone to connect. If you open your smart phone and open the Bluefruit Connect App the following screen will pop up.    Screenshot of Bluetooth devices on a smart phone   In this case there are numerous different bluetooth modules can be seen but the one you need to click is the one that says CIRCUITPYf8e8. You will have a different code after CIRCUITPY and you can figure out what your 4 digit code is by making sure you have the print('Look for',ble.name) in your code. Once you do that the CPB will begin sending time and the button press to your smart phone.    Interfaces in Bluetooth App on smart phone   There are numerous items you can click. The Controller is very fun for creating a remote control robot but we're only going to go over the UART and Plotter tabs. If you click the plotter tab you will be greeted with a live screen of the data being sent.    Example plotter in Bluetooth App on smart phone   In the photo above you can see three data streams that is coming directly from the CPB. The red line is time and the blue line is the button value. Notice the blue line goes from 0 to 1 which means I pressed the button a few times. The red line is always increasing which kind of messes up the plotter so you can always go back to your code in Mu and just send your data. This is great for live demonstrations and for debugging if you need to see data from an experiment and you don't have access to a laptop with Mu. If you hit the back arrow and then click UART you will see the raw data come in as text.    Example UART data in Bluetooth App on smart phone   Again here you can see the 3 data streams separated by commas. The very neat thing with the UART tab is that you can click the three vertical dots in the upper right hand corner and click export to TXT. The easiest thing for me was to export the data to google drive and then download the data to my computer. Once I downloaded the TXT file to my computer and opened it the data file looked like this.    Example data exported to CSV file   If you export the file as a CSV the data file will look completely different and it's much more complicated to plot. If you export the data as a TXT file you just need to use the np.loadtxt command to read in the data. Note you might have commas in your data file. If there are commas just use the CTRL+H command and replace all commas with spaces or use the np.loadtxt('buttonble.txt',delimiter=',') command. Plotting your button presses should be as simple as the previous lab thus plotting the button is left as an exercise to the reader.  "
},
{
  "id": "bluetooth-5-3",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-3",
  "type": "Figure",
  "number": "9.4.1",
  "title": "",
  "body": "  Example Bluetooth code in CircuitPython  "
},
{
  "id": "bluetooth-5-5",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-5",
  "type": "Figure",
  "number": "9.4.2",
  "title": "",
  "body": "  Remainder of Bluetooth code in CircuitPython  "
},
{
  "id": "bluetooth-5-7",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-7",
  "type": "Figure",
  "number": "9.4.3",
  "title": "",
  "body": "  Screenshot of Bluetooth devices on a smart phone  "
},
{
  "id": "bluetooth-5-9",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-9",
  "type": "Figure",
  "number": "9.4.4",
  "title": "",
  "body": "  Interfaces in Bluetooth App on smart phone  "
},
{
  "id": "bluetooth-5-11",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-11",
  "type": "Figure",
  "number": "9.4.5",
  "title": "",
  "body": "  Example plotter in Bluetooth App on smart phone  "
},
{
  "id": "bluetooth-5-13",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-13",
  "type": "Figure",
  "number": "9.4.6",
  "title": "",
  "body": "  Example UART data in Bluetooth App on smart phone  "
},
{
  "id": "bluetooth-5-15",
  "level": "2",
  "url": "bluetooth-5.html#bluetooth-5-15",
  "type": "Figure",
  "number": "9.4.7",
  "title": "",
  "body": "  Example data exported to CSV file  "
},
{
  "id": "bluetooth-6",
  "level": "1",
  "url": "bluetooth-6.html",
  "type": "Section",
  "number": "9.5",
  "title": "Assignment",
  "body": " Assignment  This project is similar to the Data Acquisition project only you must use method 4 to save time and button presses to a text file. You must then plot the button presses as a function of time. Remember to add x and y labels to all figures.   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a screenshot from your phone showing the raw UART output - 20%  Include a snippet (5 lines) of your data file - 20%  Include a plot of your button presses with time on the x-axis and button presses on the y-axis (no screenshots) - 40%    "
},
{
  "id": "voltage-2",
  "level": "1",
  "url": "voltage-2.html",
  "type": "Section",
  "number": "10.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  CPX\/CPB  USB Cable  Potentiometer  Resistor (the Ohms depends on how large your potentiometer is)  Breadboard   "
},
{
  "id": "voltage-3",
  "level": "1",
  "url": "voltage-3.html",
  "type": "Section",
  "number": "10.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Understand voltage division of resistors in series  Measure an analog signal on the CircuitPlayground  Understand the binary measurement done by the analog to digital conversion (ADC)   "
},
{
  "id": "voltage-4",
  "level": "1",
  "url": "voltage-4.html",
  "type": "Section",
  "number": "10.3",
  "title": "Getting Started",
  "body": " Getting Started  At this point you've learned about analog to digital converters (ADC). It turns out that the CPX has 8 analog ports hooked up to a 3.3V logic 16 bit ADC. The input range on the ADC is 0 to 3.3V and the output range is 0 to 65536 which is hence 16 bits. In order to get accustomed to the ADC on the CPX, we're going to do a simple example where we measure the voltage drop across a potentiometer. You can read about potentiometers online if you wish . Basically though, a potentiometer is a variable resistance resistor that changes resistance by turning a knob. The knob changes the connection point of a wire and thus the length of the wire. This in turn changes the resistance. Potentiometers come in all shapes and sizes. Here are some potentiometer examples . I've done this lab with a few potentiometer. Ideally you'd like to have the potentiometer hooked up in series with another resistor so that you end up building a voltage divider but it' possible you can do it without it as shown in the figure below (Courtesy of Kattni Rembor ).    Wiring Diagram of a Circuit Playground Express hooked up to a Potentiometer   Here's my circuit all hooked up without a resistor in series. Two legs are connected to 3.3V and GND while the middle leg of the potentiometer is connected to pin A2.    Circuit Playground Express hooked up to a Potentiometer    As I said before, some potentiometers do not have enough resistance when turned all the way down. I suggest that you put a resistor in between the third leg and ground. Some experimenters have melted plastic or gotten really hot. One student even blew up a potentiometer. Here is my circuit with a resistor in series.    Potentiometer with a blue resistor in series   There is a relevant Adafruit Learn Tutorial to help with the analogio module but I'll explain the minimum required here to get some analog values plotted in Plotter and Python on your computer. First let's take a look at some simple example code to read an analog signal and plot it using the Plotter .    Code to read analog signal in CircuitPython   In the example code above, lines 1-3 again import the necessary modules with analogio being the new module here. Line 5 creates the analog object by attaching pin A2 to the analog function. Lines 7-9 then simple read the analog value and print it to Serial and the Plotter . Running this code on my laptop and turning the knob on the potentiometer produces this output. My potentiometer has a very large knob on the front and is easy to turn. Some potentiometers have a small screw on top that you need to turn with a screwdriver. Turning the screw or the knob results in chaning the resistance and therefore changing the voltage read by the CPX.    Reading an analog signal in Mu with Serial monitor and Plotter open   For this lab I want you to spin the potentiometer all the way to one side and then the other while recording time and the analog value. I then want you to plot the data with time on the x-axis and voltage on the y-axis. Remember to convert a digital output to voltage you just need to use the equation below where D is the raw value from the analog port. 3.3V is the range of the ADC and is the maximum value the ADC can represent.   After doing this experiment myself, this is the plot I obtain. The code is not provided as reading data and plotting has been discussed in a previous lab (See ). From the screenshot though you can see how I convert the digital output to an analog signal.   NOTE THAT ON LINE 6 IT READS   time -= time[0]   Notice the minus sign in front of the equal sign. That effects a lot.     Plotting analog signal in volts in Thonny   "
},
{
  "id": "voltage-4-3",
  "level": "2",
  "url": "voltage-4.html#voltage-4-3",
  "type": "Figure",
  "number": "10.3.1",
  "title": "",
  "body": "  Wiring Diagram of a Circuit Playground Express hooked up to a Potentiometer  "
},
{
  "id": "voltage-4-5",
  "level": "2",
  "url": "voltage-4.html#voltage-4-5",
  "type": "Figure",
  "number": "10.3.2",
  "title": "",
  "body": "  Circuit Playground Express hooked up to a Potentiometer  "
},
{
  "id": "voltage-4-7",
  "level": "2",
  "url": "voltage-4.html#voltage-4-7",
  "type": "Figure",
  "number": "10.3.3",
  "title": "",
  "body": "  Potentiometer with a blue resistor in series  "
},
{
  "id": "voltage-4-9",
  "level": "2",
  "url": "voltage-4.html#voltage-4-9",
  "type": "Figure",
  "number": "10.3.4",
  "title": "",
  "body": "  Code to read analog signal in CircuitPython  "
},
{
  "id": "voltage-4-11",
  "level": "2",
  "url": "voltage-4.html#voltage-4-11",
  "type": "Figure",
  "number": "10.3.5",
  "title": "",
  "body": "  Reading an analog signal in Mu with Serial monitor and Plotter open  "
},
{
  "id": "voltage-4-17",
  "level": "2",
  "url": "voltage-4.html#voltage-4-17",
  "type": "Figure",
  "number": "10.3.6",
  "title": "",
  "body": "  Plotting analog signal in volts in Thonny  "
},
{
  "id": "voltage-5",
  "level": "1",
  "url": "voltage-5.html",
  "type": "Section",
  "number": "10.4",
  "title": "Assignment",
  "body": " Assignment  Your assignment for this lab is to do the same as I've done above. Wire up the potentiometer, read the analog signal using the analog to digital converter on the CPX and plot it in Python on your desktop computer. I've made some youtube videos on first just creating the circuit and plotting the data and then another video where I write data to the CPX using method 3 . Remember to record both time and digital output as you rotate the potentiometer and then plot that as a function of time. Specific requirements are shown below.   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include a photo of your circuit showing the potentiometer wired up to an analog pin on your CPX\/CPB - 10%  Include a screenshot of Mu with the Plotter open showing the digital output of the potentiometer. The code in Mu also needs to also show the same analog pin as your potentiometer. - 10%  Based on the digital output from the potentiometer, compute the minimum and maximum voltage across the potentiometer. - 10%  Relate the voltage across your potentiometer to angle of the potentiometer in degrees and plot degrees on the x-axis and voltage across the potentiometer on the y-axis - 10%  Plot your digital output (raw potentiometer analog value) vs time - 10%  Then convert your digital output (Do) to voltage and plot that vs time - 10%  Finally convert your voltage to angle in degrees and plot that vs time - 20%    "
},
{
  "id": "pitot-2",
  "level": "1",
  "url": "pitot-2.html",
  "type": "Section",
  "number": "11.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  CPX\/CPB  USB Cable  Alligator Clips (x3)  Pitot Probe (Not included in kit at the moment so will need to buy this separately or borrow one)  Breadboard   "
},
{
  "id": "pitot-3",
  "level": "1",
  "url": "pitot-3.html",
  "type": "Section",
  "number": "11.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Understand how pitot probes works  Understand the relationship between a voltage signal from a pitot probe to a pressure value  Understand the relationship between pressure and windspeed   "
},
{
  "id": "pitot-4",
  "level": "1",
  "url": "pitot-4.html",
  "type": "Section",
  "number": "11.3",
  "title": "Getting Started",
  "body": " Getting Started  Although a CPX has numerous sensors built in, you can easily augment the capabilities of the CPX using either I2C or just the ADC on board the CPX. In this lab, if you purchased a pitot probe you will be able to do this assignment. Since you don't need the pitot probe for very long you can always borrow one from some other team. Let's talk about the hardware and the wiring to get this to work. First, pitot probes work by mechanically changing the dynamic pressure of the incoming airflow as shown in the figure below (Courtesy of Joshua Hrisko ).    Schematic of Pitot probe showing static and dynamic pressures   The pitot probe has two pressure taps that measure static (ambient) pressure and dynamic (stagnation) pressure. These taps move through two silicon tubes to a pressure transducer that has a strain gauge that separates both pressures. When the pressure on one side of the transducer is larger than the other, it will flex the membrane and create strain. This strain runs through a wheatstone bridge with a voltage offset to the pin labeled analog. The analog signal from the analog pin will be denoted as . The pressure transducer used in this lab is the MPXV7002 which is a differential pressure sensor. The datasheet indicates that the voltage offset of the pitot probe is 2.5V and the change in voltage is proportional to the change in pressure in units of kPa. This means that is given by the equation below. remembering that . Also note that 2.5V is the nominal voltage even though your sensor might have something slightly different like 2.4V or 2.6V. I explain the process of substracting off bias in this accelerometer video . To measure wind speed you can use a variation of Bernoulli's principle. Remember to convert the pressure from kilopascals (kPa) to Pascals (Pa) by multiplying by before using it in this formula. where is the wind speed in , is the differential pressure (in Pascals), and is the density of air. I've done this pitot project before and have posted a video on Youtube about Converting Pitot Probe Data to Windspeed . There is a typo in the video. V1 is supposed to have a sqrt()) . As for wiring up the circuit itself, the transducer has 3 pins, +5V, GND and Analog. The figure below shows the transducer connected to an Arduino (Courtesy of Joshua Hrisko ).    Arduino connected to a pressure transducer   It is pretty straightforward how to wire this up to a CPX\/CPB but remember that +5V needs to go to VOUT, GND to GND and Analog to any analog pin. I chose pin A2 as shown in the Figure below.    CircuitPlayground Express connected to Pitot Probe and Transducer   At that point it's very simple to just print the analog signal in bits to Serial. I've done this below. The code is the same analog code that we've used in the past.    Analogio code in CircuitPython   The goal of the experiment is to take pitot probe data for 15 seconds with no wind, then 15 seconds of data with a fan on and then 15 seconds of no wind data. You'll need to use one of the datalogging methods (See ) to log both time and pitot probe analog value. Once you have that data, import the data into Python on your desktop computer and convert the signal to windspeed as explained above. Using your data, create a plot of windspeed with time on the x-axis and windspeed on the y-axis. Some steps that might help you as you complete this project. First, have Mu plot the voltage coming from the pitot probe. If you've done everything right it will not be zero. The data sheet says there's an offset voltage of 2.5V so you will hopefully get something around 50,000 when you don't blow into the pitot probe. 50,000 multiplied by 3.3\/ is around 2.5V. Make a note of that average value you get so you can subtract it off later. Once you've verified you're reading the pitot probe correctly, blow into the pitot probe and using the Plotter or Serial, verify that the analog signal increases. If the signal decreases, it means the pressure taps on the pressure transducer are backwards and you need to flip them. Either that or just flip the sign in your plotting routine on your computer but flipping the tubes might be easier for you. Hopefully when you do this lab you will get some data that looks like this. In this Figure you'll see that when the fan wasn't running the signal was something around 49,800 which is fine. It means your bias is around 2.5 volts. Every pitot probe and circuit will be different. You can then convert this signal to voltage then and then pressure and then finally wind speed.    Example pitot probe data showing fan off\/on\/off scenario   The code to accomplish this is relatively simple and a portion of the code is shown below. You'll see that when I subtracted the bias from the voltage I also zeroed out any negative values. That is, any delta voltage less than zero was set to zero. A couple of things about this chart. The data from the pitot probe is super noisy which means attaching a complementary filter is probably a good idea provided you don't over filter the signal and run into aliasing issues . You can see that I implemented an offline complementary filter and plotted it in the orange line which helps the noise issue quite a bit. You'll also notice that the noise is about 2 m\/s. It turns out that pitot probes are actually not very accurate lower than about 2 m\/s. They would be great for an airplane or you driving down the highway but they wouldn't be very good to take wind data outside on a calm day.    Example windspeed data showing complementary filter in Thonny   "
},
{
  "id": "pitot-4-3",
  "level": "2",
  "url": "pitot-4.html#pitot-4-3",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": "  Schematic of Pitot probe showing static and dynamic pressures  "
},
{
  "id": "pitot-4-5",
  "level": "2",
  "url": "pitot-4.html#pitot-4-5",
  "type": "Figure",
  "number": "11.3.2",
  "title": "",
  "body": "  Arduino connected to a pressure transducer  "
},
{
  "id": "pitot-4-7",
  "level": "2",
  "url": "pitot-4.html#pitot-4-7",
  "type": "Figure",
  "number": "11.3.3",
  "title": "",
  "body": "  CircuitPlayground Express connected to Pitot Probe and Transducer  "
},
{
  "id": "pitot-4-9",
  "level": "2",
  "url": "pitot-4.html#pitot-4-9",
  "type": "Figure",
  "number": "11.3.4",
  "title": "",
  "body": "  Analogio code in CircuitPython  "
},
{
  "id": "pitot-4-11",
  "level": "2",
  "url": "pitot-4.html#pitot-4-11",
  "type": "Figure",
  "number": "11.3.5",
  "title": "",
  "body": "  Example pitot probe data showing fan off\/on\/off scenario  "
},
{
  "id": "pitot-4-13",
  "level": "2",
  "url": "pitot-4.html#pitot-4-13",
  "type": "Figure",
  "number": "11.3.6",
  "title": "",
  "body": "  Example windspeed data showing complementary filter in Thonny  "
},
{
  "id": "pitot-5",
  "level": "1",
  "url": "pitot-5.html",
  "type": "Section",
  "number": "11.4",
  "title": "Assignment",
  "body": " Assignment  For this assignment you are to wire up a pitot probe and record time and raw analog signal from the pitot probe as you turn a fan on and off. My suggestion is you record at least 30 seconds of data with the fan off and then 30 seconds with the fan on and then again 30 seconds with the fan off. Specific requirements are shown below.   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   In addition to the standard format above, you must also return the pitot probe you borrowed in class - Pass\/Fail  Include a photo of your circuit with your pitot probe wired up to an analog pin - 10%  Include a screenshot of Mu with the Plotter open showing the raw analog signal. The Mu code also needs to show the same analog pin as the circuit above - 10%  Include a plot of the raw analog signal vs time that clearly shows when the fan is on and off - 20%  Convert your raw signal to windspeed and filter your signal using an offline complementary filter. Plot both unfiltered and filtered windspeed on the same plot and include a legend. Make sure you add the saturation filter to prevent a negative in the square root - 20%  What is the maximum windspeed that the CPX\/CPB can read? - 10%  The data sheet also suggests that you use a capacitor to filter the output. Select two resistors for a low pass filter such that the DC Gain would be equal to 1. Assume the total impedance of both resistors is . Also compute the cutoff frequency. - 10%    "
},
{
  "id": "modules-2",
  "level": "1",
  "url": "modules-2.html",
  "type": "Section",
  "number": "12.1",
  "title": "Parts List",
  "body": " Parts List   Laptop  CPX\/CPB  USB Cable   "
},
{
  "id": "modules-3",
  "level": "1",
  "url": "modules-3.html",
  "type": "Section",
  "number": "12.2",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Understand the different sensors on the Circuitplayground  Learn the difference between high level and low level control  Get more practice plotting data from onboard sensors   "
},
{
  "id": "modules-4",
  "level": "1",
  "url": "modules-4.html",
  "type": "Section",
  "number": "12.3",
  "title": "Extra Help",
  "body": " Extra Help  If you need extra help on this assignment I have uploaded a youtube video where I read the temperature and accelerometer from the CircuitPlayground Bluefruit   "
},
{
  "id": "modules-5",
  "level": "1",
  "url": "modules-5.html",
  "type": "Section",
  "number": "12.4",
  "title": "Getting Started",
  "body": " Getting Started  The CPX has numerous built-in sensors. These include a light sensor, an IR sensor, an accelerometer, a microphone, a speaker, some neopixels, a temperature sensor and 8 analog inputs with ADCs and even I2C (pronounced I squared C - it's a kind of serial communication) that you can use to easily hook up more sensors to it. We're not going to utilize all of these sensors since that would be a rather large project. Instead we're going to learn how to use the temperature, light and sound sensors as well as the accelerometer. For each of these examples there is a relatively easy way to access the sensors using a built-in module called adafruit_circuitplayground.express if you are using the CPX. If you are using the CPB you need to type adafruit_circuitplayground.bluefruit . It's a very nice module because it imports everything on the board. The problem is you can run into module conflicts. This happens when two different modules try to access the same pins on the CP. Sometimes if you import adafruit_circuitplayground you won't be able to import some other modules. Note you might need to add the adafruit_circuitplayground library to your lib\/ folder on your CIRCUITPY drive . Due to this module conflict issue, there are some low level control commands you can use to access each of the sensors on board. We're obviously going to learn the low level control method first and then I'll show you how to access the sensors using the adafruit_circuitplayground module. If you get a currently in use error it means you have a module conflict. Hence why I'm showing you the low level control method .  "
},
{
  "id": "modules-6",
  "level": "1",
  "url": "modules-6.html",
  "type": "Section",
  "number": "12.5",
  "title": "Installing Modules",
  "body": " Installing Modules   One issue you're going to run into when you run the codes below is that you won't have some of the modules on your CPB\/CPX. To fix this you need to download the CircuitPython Libraries . You need to download the appropriate version: 6.x, 7.x or 8.x. How do you know what version of CircuitPython you have? Well head over to your CIRCUITPY drive and open the boot_out.txt file and it will tell you the version. Note that this is the same version as the .UF2 file installed back in the Getting Started labs (See Chapter ). When you download the modules it will download a .zip file. Extract the .zip file on your desktop computer and then open the lib folder on your desktop and your CIRCUITPY. You then need to transfer the modules (ONLY THE ONES YOU NEED) from your desktop to your CPX\/CPB lib folder. The reason why you can't copy the entire folder is because the CPB\/CPX only has 2MB of flash and the CircuitPython download is 4.1 MB at the time of this writing.  "
},
{
  "id": "modules-7",
  "level": "1",
  "url": "modules-7.html",
  "type": "Section",
  "number": "12.6",
  "title": "Low Level Control",
  "body": " Low Level Control   Light  The light sensor on the CPX is just a simple photocell wired in series with a resistor. There is a lab on photocells (See if you'd like to do that lab first to learn more about photocells. This lab is designed to simply teach you about the onboard sensors rather than how they work. The GND leg of the photocell is connected to pin A8. You can check the pin by looking at the graphic of an eye on the CPX and taking a look at the digital pin next to it. We've already learned how to {access analog pins (See ) in a previous lab so just use the code from that lab and change the pin to A8. Here's what my code looks like when I change the pin to A8. I also brought the Plotter up and moved my finger in front of the light to make sure the light was working. Verify that your CPX responds the same way before moving on.    Serial monitor and Plotter open in Mu showing digital output of pin A8 (light sensor)     Sound  The sound sensor uses the audiobusio library and creates a mic object using the (Pulse Density Modulation) PDM library. You have to set the sample rate and the number of bits to use to capture the data. We're going to set the bits to 16 to utilize the whole spectrum and then set the sample rate to 16 kHz. It's not quite 44.1 kHz like most modern microphones but it will do. After creating the mic object we have to compute some root mean squared values and thus two functions are defined before the while true loop in the code. The code itself is shown below. The code starts on line 22 because the first 22 lines are copyright from Dan Halbert, Kattni Rembor, and Tony DiCola from Adafruit Industries . I have edited the code a bit to fit my needs and uploaded my version to Github . In the code line 23-27 import standard modules as well as some new ones. The array module is used to create array like matrices. The math module is used to compute functions like cos, sin, and sqrt. Then of course the audiobusio module is used to create the mic object on line 42. Notice the two functions defined on 33 and 39 which create a function for computing the mean and for computing the normalized root mean square value of the data stream. Basically what's going to happen is we're going to record 160 samples as defined on line 160. So on line 43 we create a hexadecimal array (hexademical: base 16 hence the num_bits set to 16 on line 31) with 160 zeros. In the while true loop we're going to sleep for 0.01 seconds and then record some samples. Since we're sampling at 16 kHz the time it takes to record 160 samples is 160\/16000 = 16\/1600 = 1\/100 = 0.01 seconds. Since we're taking 160 samples we need to compute some sort of average which is why the normalized root mean square value is computed on line 48.    Reading sound code in CircuitPython   When I run this code and talk normally into the microphone, I get this output in the Plotter. You'll notice that the data is pretty noisy in the beginning but then there are noticeable humps in the data. This is me saying something random into the microphone at normal volume. It's possible we could increase the number of samples we take each loop by editing line 30 but that would slow down our code. So there's a tradeoff between filtering here and speed. That's something will investigate in some later labs.    Serial monitor and Plotter open in Mu showing digital output sound sensor     Temperature  The temperature sensor is actually a thermistor . A thermistor is basically a thermometer resistor which means the resistance depends on temperature. Since this thermistor on the CPX\/CPB is connected to an analog pin, you can read the analog signal coming from the thermistor just by reading the analog signal from pin A9. If you look for the thermometer symbol on the CPX you'll see pin A9. Therefore, it is possible to just use the analogio library and just read in the analog voltage but in order to convert to celsius and then fahrenheit you need to use some heat transfer equations to convert the analog signal to celsius.  In this case, the thermistor is wired in a voltage divider circuit in series with a resistor. This means that the voltage across the thermistor can be converted to its resistance using the voltage divider equation below similar to the equation used for the photocell.   Where and . The equation above can be inverted to obtain the resistance in the thermistor which can then be converted to Kelvin. This means that the digital output from the analog to digital converter can be converted to voltage and then to resistance as has been done for various ADC labs in this textbook. Remember that where is the digital output from the ADC. Once you have the resistance from the thermistor, you can use a modified version of the Stein-Hart    where is a heat transfer coefficient specific to the bulk semiconductor material over a given temperature range of interest and is the nominal temperature of the semiconductor in Kelvin. Note that in the equation above, the output is in Kelvin.  Thankfully, the folks at Adafruit have done it again with an adafruit_thermistor module. If you head over to their github on this module you'll see the relevant conversion under the definition temperature which at the time of this writing is on line 86. The Adafruit Learn system also does a bit of work to explain the conversion from voltage to temperature but I have also summarized it above and in . For now though we will just appreciate the simplicity of the code below which is also on my Github .    CircuitPython code to read the onboard thermistor   As always lines 1-3 import the relevant modules and then line 8 create the thermistor object. You'll notice the input arguments are the pin which is A9 as well as the resistor values which are in series with the thermistor. These resistors are soldered to the PCB so they are fixed at 10 kOhms. The 25 is for the nominal resistance temperature in celsius of the thermistor and 3950 is the b coefficient which is a heat transfer property. Running this code and then placing my finger on the A9 symbol causes the temperature to rise just a bit. You'll notice the temperature rise quite quickly when I place my finger on the sensor but when I remove the sensor it takes some time before the sensor cools off. This has to do with the dynamic response of the sensor. We'll discuss this in some future labs on dynamic measurements. For now you can move on to the accelerometer.    Serial monitor and Plotter open in Mu showing temperature in Celsius     Accelerometer  The accelerometer is a 3-axis sensor. As such it is going to spit out not just 1 value but 3 values. Accelerations in x,y and z or North, East, Down or Forward, Side to Side, Up and Down. Since it's reading 3 values we can't just read 3 analog signals (we can but the accelerometer chip design didn't want to do that) so instead we're going to use the I2C (I like \"Indigo\" and 2C like \"Squared C\". So \"I Squared C\". Not \"12C\" or \"one two C\". It's \"I squared C\") functionality. I2C is a type of serial communication that allows computers to send strings rather than numbers. It's a much more complex form of communication but since it's standard we can just use the busio module which contains the I2C protocol.    CircuitPython code to read the onboard accelerometer   In this code we see alot more imports than normal. In addition to the standard time, board and digitalio modules we need the busio module and the adafruit_lis3dh . You might think that LIS3DH is a very weird name for an accelerometer but it's actually the name of the chip on your CPX. The chip itself is very standard and is well documented on multiple websites. Here's one from ST . You can also buy the chip on a breakout board from Adafruit and then of course the Adafruit Learn site has plenty of tutorials on reading Accelerometer data in CircuitPython . As always I've learned what I can from the relevant tutorials and created my own simple version to read the accelerometer data and posted it to Github . I digress, lines 8-11 of the code do alot. It first uses the SCL and SDA pins to set up an I2C object which establishes serial communication to the accelerometer. Line 9 creates an interrupt which is beyond the scope of this course. Finally, line 10 creates the actual accelerometer object by sending it the I2C pins, the hexadecimal address in the I2C protocol and finally the interrupt pin. Line 11 then sets the range. Line 14 in the while loop is where the x,y and z values of the accelerometer are read and then promptly printed to Serial on line 15. If I run this code and shake the sensor a bit I can get all the values to vary. If you put the CPX on a flat surface, the Z axis will measure something close to 9.81. The units of the accelerometer are clearly in .    Serial monitor and Plotter open in Mu showing accelerometer output in    "
},
{
  "id": "modules-7-2-3",
  "level": "2",
  "url": "modules-7.html#modules-7-2-3",
  "type": "Figure",
  "number": "12.6.1",
  "title": "",
  "body": "  Serial monitor and Plotter open in Mu showing digital output of pin A8 (light sensor)  "
},
{
  "id": "modules-7-3-3",
  "level": "2",
  "url": "modules-7.html#modules-7-3-3",
  "type": "Figure",
  "number": "12.6.2",
  "title": "",
  "body": "  Reading sound code in CircuitPython  "
},
{
  "id": "modules-7-3-5",
  "level": "2",
  "url": "modules-7.html#modules-7-3-5",
  "type": "Figure",
  "number": "12.6.3",
  "title": "",
  "body": "  Serial monitor and Plotter open in Mu showing digital output sound sensor  "
},
{
  "id": "modules-7-4-8",
  "level": "2",
  "url": "modules-7.html#modules-7-4-8",
  "type": "Figure",
  "number": "12.6.4",
  "title": "",
  "body": "  CircuitPython code to read the onboard thermistor  "
},
{
  "id": "modules-7-4-10",
  "level": "2",
  "url": "modules-7.html#modules-7-4-10",
  "type": "Figure",
  "number": "12.6.5",
  "title": "",
  "body": "  Serial monitor and Plotter open in Mu showing temperature in Celsius  "
},
{
  "id": "modules-7-5-3",
  "level": "2",
  "url": "modules-7.html#modules-7-5-3",
  "type": "Figure",
  "number": "12.6.6",
  "title": "",
  "body": "  CircuitPython code to read the onboard accelerometer  "
},
{
  "id": "modules-7-5-5",
  "level": "2",
  "url": "modules-7.html#modules-7-5-5",
  "type": "Figure",
  "number": "12.6.7",
  "title": "",
  "body": "  Serial monitor and Plotter open in Mu showing accelerometer output in  "
},
{
  "id": "modules-8",
  "level": "1",
  "url": "modules-8.html",
  "type": "Section",
  "number": "12.7",
  "title": "High Level Control",
  "body": " High Level Control  Alright so we've learned the hard way for all the sensors using low level control of the various sensors. Let's now import the simple adafruit_circuitplayground.express module. The Adafruit Learn site offers pretty much every example code snippet you'd ever need for all the different push buttons and sensors on the CPX . Head over there if you ever need something outside of the scope of this text. As I said before, the main module you need to import is done by adding the following to the top of your code  from adafruit_circuitplayground.express import cpx   Note that you need to change that line to adafruit_circuitplayground.bluefruit import cpb. Then everywhere you see cpx you replace with cpb. This will import the cpx module into your working code. From here the commands to read different things are relatively simple. Here are the commands for all the various sensors  light = cpx.light x,y,z = cpx.acceleration temperature = cpx.temperature  There unfortunately is no simple module for the sound sensor. You'll still need to use the low level control no matter what. According to Adafruit though, if you get the Circuit Playground Bluefruit there is a simple way to read the sound level . Implementing the various sensors into a while loop on my CPX looks like this.    Serial monitor and Plotter open in Mu showing light, temperature and acceleration with high level contorl   I left out the sound sensor stuff just because it kind of messes with the simplicity of the code above. The adafruit_circuitplayground.express module outputs just as before except for the light sensor. In the low level control we simply computed the voltage across the photocell but the adafruit_circuitplayground.express module outputs data in Lux .  "
},
{
  "id": "modules-8-7",
  "level": "2",
  "url": "modules-8.html#modules-8-7",
  "type": "Figure",
  "number": "12.7.1",
  "title": "",
  "body": "  Serial monitor and Plotter open in Mu showing light, temperature and acceleration with high level contorl  "
},
{
  "id": "modules-9",
  "level": "1",
  "url": "modules-9.html",
  "type": "Section",
  "number": "12.8",
  "title": "Assignment",
  "body": " Assignment  Using either low or high level control , take at least 60 seconds of data using the microphone, photocell, accelerometer and thermistor on your CPX\/CPB. Make sure to log time and the raw sensor value at 1Hz or faster. To make the project more challenging, try and log all sensor data all at once (although this isn't a strict requirement).   Grading Rubric  For every project you must turn in a properly formatted engineering report submitted as a PDF. The grading rubric is shown below.  The first page will be a title page with your name, title of the project and date - [Rubric: This is Pass\/Fail]  The second page will contain an introduction which explains the project itself, learning objectives and expected outcomes - [Rubric: Worth 10% of your grade]  After the introduction you then include the project specific requirements (see below) - [Rubric: The contents below add up to 80% of your grade]  All figures must have appropriate figure captions, axis labels and a paragraph explaining the figure - [Rubric: Worth 10% of your grade]  The last few pages will be appendices which are pass\/fail. Failure to include both Appendix \"A\" and \"B\" will result in a zero in the assignment. Appendix \"A\" will be a link (Youtube or Google Drive) to a professional video recording of you and your screen explaining the project and showing any of the systems operate as asked. This includes any portion of the experiment such as heating up your thermistor or rotating a potentiometer and showing the response in the Serial monitor . Appendix \"B\" will be any and all code used in the project - Failure to provide code or an adequate video results in a failure of the assignment. - [Rubric: This is Pass\/Fail]      Specific Directions   Include 4 photos of Mu with the plotter open showing example data from each sensor. - 10% per photo  Include 4 plots with time on the x-axis and sensor data on the y-axis (No screenshots) - 10% per plot    "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Chapter",
  "number": "13",
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
  "body": " References  Howard gardner’s theory of multiple intelligences. in instructional guide for university faculty and teaching assistants. https:\/\/www.niu.edu\/citl\/resources\/guides\/instructional-guide, 2020. Northern Illinois University Center for Innovative Teaching and Learning.  R.A. Ralph. Post secondary project-based learning in science, technology, engineering and mathematics. Journal of Technology and Science Education (JOTSE), 6(1):26–35., 2015.  Linda K. Silverman Richard M. Felder. Learning and teaching styles in engineering education. Engineering Education, 78(7):674–681, 1988.  Tang Yong. The mode of theoretical knowledge and practical knowledge combination: The significance of internship. World Journal of Education, 2(4):55–63., 2012.  J. C. Perrenet, P. A. J. Bouhuijs, and J. G. M. M. Smits. The suitability of problem-based learning for engineering education: Theory and practice. Teaching in Higher Education, 5(3):345–358, 2000.  Krajcik Joseph S. and Phyllis C. Blumenfeld. Project-based learning. Academia, 2006.  Paul Marshall. Do tangible interfaces enhance learning? In Proceedings of the 1st International Conference on Tangible and Embedded Interaction, TEI ’07, page 163–170, New York, NY, USA, 2007. Association for Computing Machinery.  BARBARA M. OLDS and RONALD L. MILLER. The effect of a first-year integrated engineering curriculum on graduation rates and student satisfaction: A longitudinal study. Journal of Engineering Education, 93(1):23–35, 2004.  P. Armstrong. Bloom’s taxonomy. Accessed 2\/2\/22 https:\/\/cft.vanderbilt.edu\/guides-sub-pages\/blooms-taxonomy\/, 2010. Vanderbilt University Center for Teaching.  Lyle D. Feisel and Albert J. Rosa. The role of the laboratory in undergraduate engineering education. Journal of Engineering Education, 94(1):121–130, 2005.  Juan P. Oliver and Fiorella Haim. Lab at home: Hardware kits for a digital design lab. IEEE Transactions on Education, 52(1):46–51, 2009.  F. G. Martin. Integrating hardware experiences into a computer architecture core course. Journal of Computer Science College, 21:39–52, 6 2006.  N. Manjikian and S. Simmons. Evolution and enhancements of a microprocessor systems course. IEEE Transactions Education, 42(4):360, 11 1999.  P. Li W. Durfee and D. Waletzko. Take-home lab kits for system dynamics and controls courses. Proceedings of the American Control Conference, pages 1319–1322, 2004.  D. Nicoletti D. Cyganski and J. A. Orr. A new introductory electrical engineering curriculum for the first-year student. IEEE Transactions on Education, 37(2):171–177, 5 1994.  Sebastian Nanz and Carlo A. Furia. A comparative study of programming languages in rosetta code. In 2015 IEEE\/ACM 37th IEEE International Conference on Software Engineering, volume 1, pages 778–788, 2015.  Integrated development environments. IntegratedDevelopmentEnvironments, 2021. Accessed: 2021-12-09. https:\/\/wiki.python.org\/moin\/  Tiobe index. https:\/\/www.tiobe.com\/tiobe-index\/, 2022. Accessed: 2021-3-25.  Hans Fangohr. A comparison of c, matlab, and python as teaching languages in engineering. In Marian Bubak, Geert Dick van Albada, Peter M. A. Sloot, and Jack Dongarra, editors, Computational Science - ICCS 2004, pages 1210–1217, Berlin, Heidelberg, 2004. Springer Berlin Heidelberg.  Circuitpython. https:\/\/circuitpython.org\/, 2021. Accessed: 12-09-2021.  Carlos Montalvo, Lisa Schibelius, and Marine Leabeater. Project Based Engineering Instrumentation with CircuitPython. Github, 2023. https:\/\/github.com\/cmontalvo251\/LaTeX\/blob\/master\/PBL_CircuitPython_Instrumentation\/main.pdf.  Adafruit. Adafruit learn, 2021. Adafruit https:\/\/learn.adafruit.com\/.  Carlos Montalvo. Facility for aerial systems and technology github repository. cmontalvo251, 2022. https:\/\/github.com\/cmontalvo251  Adafruit. Adafruit, 2023. Adafruit https:\/\/adafruit.com\/.  Arduino. Arduino, 2023. https:\/\/www.arduino.cc\/.  Adafruit. Adafruit ble connect, 2023. https:\/\/learn.adafruit.com\/bluefruit-le-connect?gclid=CjwKCAiA3KefBhByEiwAi2LDHOVV9IbeAFTEsKBx285M-B7o3VSCeW7uoU0gbDqJ3D0KDX_xnKD-uxoCrrAQAvD_BwE.  DiCola, Tony. \"Digital Outputs.\" CircuitPython Basics: Digital Inputs and Outputs, Adafruit Learning System, 28 Aug. 2017, learn.adafruit.com\/circuitpython-digital-inputs-and-outputs\/digital-outputs. Accessed 16 Mar. 2026.  Ada (Fried), Lady (Limor), and Kattni Rembor. \"CircuitPython Analog In.\" Adafruit Circuit Playground Express, Adafruit Learning System, 12 Oct. 2017, learn.adafruit.com\/adafruit-circuit-playground-express\/circuitpython-analog-in. Accessed 18 Mar. 2026.  Hrisko, Joshua. \"Arduino Pitot Tube Wind Speed and Airspeed Indicator - Theory and Experiments.\" Maker Portal, 8 Feb. 2019, makersportal.com\/blog\/2019\/02\/06\/arduino-pitot-tube-wind-speed-theory-and-experiment. Accessed 18 Mar. 2026.   "
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
