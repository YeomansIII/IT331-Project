# IT331 Project
by Jason Yeomans  
Section 002  
Professor Diana Wang

### Project 2
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

The navigation bar and footer has been changed on each page.  The invite page now has a random image.  A link on the index page has been converted to a button.

#### Project Requirements
1. 5 Minimum Pages  
This project contains a total of five pages.
The pages include the homepage, three different pages describing each of the major features of the app, and an invitation request form.
There is a simple and clear navigation bar on top of every page that links to each other page.
2. Coding Requirements  
The `main.js` file contains many comments to explain each variable declaration and each major structure.
I have written the code with readable variable names and there is ample spacing and easy readability.
3. Functions  
This project contains 6 functions.  five of them can be located in the `assets/scripts/main.js` file and the last one can be located in the `assets/scripts/invite.js` file.
4. Arrays  
I have included two arrays in this project.  One of them is located in the `invite.js` file.
This array includes each of the file names that will be selected from randomly for the random image requirement.
The other array can be located in the `main.js` file.  This array stores the string month names which are used to get the name from the index provided by the Date object.
5. Windows  
I have used the javascript window.open() function to create a popup of the Echelon Feature Request/Bug Submission form.
I thought this was a good idea because it is a simple Google form that fits well in the popup.
This can be accessed by click on the "Feature/Bug submission form" button on the index page.
6. Web Storage  
I have completed this requirement by allowing the user to enter their name into a small form on the navbar.
Once their name is stored, all pages will greet them and provide them with the date.
7. Random Images  
The random images requirement is displayed on the "Get Invite" page.
I put this here because this page does not have a specific image related to it, so any random image of the Echelon App works well.
8. Last Modified  
The page last modified works on all pages.  It is located in the footer of every page.
9. Neat Thing  
For my neat javascript thing, I have added the date to the user greeting located on the top right of the navbar.
I am using the javascript Date object.
12. HTML Validation  
All HTML pages have passed the [Nu HTML5 validator](https://html5.validator.nu).

This website uses grunt for HTML includes and image minification.

The output html and image files are placed into the `dist/` folder which I upload to the Mason cluster server.

You can view the source code for this website on [it's Github page](https://github.com/YeomansIII/IT331-Project).