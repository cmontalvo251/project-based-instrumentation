#!/bin/bash
#I have created a simple bash script called texit which will compile the 
#ptx files into a pdf and then copy the pdf to the root directory so it's easy to find
pretext build print
cp output/print/main.pdf main.pdf

#It will also evince the document so you can view it immediately. 
evince main.pdf &

#It will also compile the ptx files for the web and then view it in the browser.
pretext build web
google-chrome output/web/index.html &

#It will not deploy the book as that is cloud based and I feel it is similar to git 
#and should be something done by the user rather than an automated process.
#pretext deploy <- remember this is that command if you're looking for it.