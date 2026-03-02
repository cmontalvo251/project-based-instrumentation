# Instrumentation Textbook in PreTeXt

This repo contains my project based instrumentation textbook that I use at the undergraduate level. Multiple authors have contributed to this textbook and they have been placed on the cover page. Note that some authors did not push directly to github but are still shown in the title page.

The Archive LaTeX version of this textbook is in the Archive_LaTeX/ folder with a separate readme that you can use to compile that version of the textbook. I don't recommend using that version but it is here for thoroughness as it was used to convert to the current version of PreTeXt shown here. All LaTeX directions are in that readme and left of of this readme for brevity. It is assumed that you have all latex compilers on your computer and are well versed in LaTeX before continuing on with this readme.

Using PreTeXt on Ubuntu 24.03

# First install pretext

pip3 install pretext

If this gives you an error about breaking system packages go ahead and do that

pip3 install pretext --break-system-packages

<!-- Then open ~/.bashrc and add the following line of code -->

PATH+='~/.local/bin'

this way your terminal can find pretext

<!--Oscar Levin has created a 'pretext-tools' in vs code so grab that from the exta tab -->

<!--This is how you make a comment in PreTeXt -->

<!-- It's a much better idea to run 'pretext new' to create a new project. -->

You can try 'pretext init' to update an existing project but better to just start from scratch.

Running 'pretext new' defaults to 'pretext new book' and creates a new project

This creates all the req*.txt and project.ptx files as well as a bunch of stuff in source

Note that this also creates its own .git folder so if you're already in an existing repo make sure you delete that folder to preserve the old git url.

<!-- Running 'pretext build pdf' will compile your project into a pdf.   -->

You can also run 'pretext build print' and it will do the same thing

<!-- Running 'pretext build html' will build your project into an html file. -->

you can also run pretext build web and it will do the same thing

but you need npm first so run 'sudo apt install npm'

You may need to run 'sudo apt update' and 'sudo apt upgrade' first of course

'pretext view html' will open your newly created html or 'pretext view web'

Alternatively you can open the index.html file in the 

'output/web' folder and it will open in your default web browser

I personally just like to run google-chrome index.html from the command line.

Much of this has been automated in the textit.sh script

<!--In order to deploy you need to have your project.ptx file in the root dir -->

This means you need to edit the project.ptx file and then move it to the root dir
You'll see that there are a number of directions in the project.ptx file so it's pretty
straightforward. Note however that Dr. Levin suggests that each book have its own
repo. 

The command itself it 'pretext deploy'

<!-- In order to speed things up a bit and help with the flow -->

I have created a simple bash script called texit.sh which will compile the 
ptx files into a pdf and then copy the pdf to the root directory so it's easy to find
It will also evince the document so you can view it immediately. 
It will also compile the ptx files for the web and then view it in the browser.
It will not deploy the book as that is cloud based and I feel it is similar to git 
and should be something done by the user rather than an automated process.
