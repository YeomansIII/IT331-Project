# IT331 Project
by Jason Yeomans  
Section 002  
Professor Diana Wang

### Project 1
This website can be viewed on the public internet at the following URL:
[http://mason.gmu.edu/~jyeoman2/it331/project](http://mason.gmu.edu/~jyeoman2/it331/project)

#### Website Pages
* index.html
  * This is the homepage. This page includes an introduction to the application and the website.
  The page also includes a GIF image (created by me), as well as a feature table.
* jukebox.html
  * This page outlines the details and progress of the Jukebox mode feature of Echelon.
  This page also contains a GIF image (created by me).
* dj.html
  * This page outlines the details and progress of the DJ mode feature of Echelon.
  This page also contains a PNG wireframe (created by me) of how I plan on making the DJ mode look.
* allcast.html
  * This page outlines the details and progress of the AllCast mode feature of Echelon.
  This page also contains a PNG image (created by me).
* invite.html
  * This page contains a form allowing the user to sign up for the Echelon closed Alpha.
  Since this form does not currently function outside of the UI, I have linked the user to my real closed Alpha sign up form.

#### Project Requirements
1. 4 Minimum Pages  
This project contains a total of five pages.
The pages include the homepage, three different pages describing each of the major features of the app, and an invitation request form.
There is a simple and clear navigation bar on top of every page that links to each other page.
12. HTML Validation  
All HTML pages have passed the [Nu HTML5 validator](https://html5.validator.nu).

#### Special Features
While creating this website I used the [Grunt task runner](http://gruntjs.com/) to perform a few simple things.
The main reason I used this was to have the ability to "include" other HTML documents in my pages.
For my use, this was the navigation bar and the footer.
It works by taking an HTML file (these are located in the `src/includes/` folder) and inserting it into the location where I requested it.
For example, I simply have the text `include "includes/navbar.html"` on each of my pages where I want the navbar to be located.
The `grunt-includes` package then inserts the navbar.html file that I wrote onto each of my pages.
This simplifies the process of having to copy changes to each individual page every time I made a change to my navbar or footer.

Since I was already using Grunt for this task, I added the Grunt imagemin task as well, which simply minifies the image files so they are optimized for the web.

The output html and image files are placed into the `dist/` folder which I upload to the Mason cluster server.

You can view the source code for this website on [it's Github page](https://github.com/YeomansIII/IT331-Project).