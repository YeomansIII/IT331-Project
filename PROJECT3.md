# IT331 Project
by Jason Yeomans  
Section 002  
Professor Diana Wang

### Project 3
This website can be viewed on the public internet at the following URL:
[http://mason.gmu.edu/~jyeoman2/it331/project](http://mason.gmu.edu/~jyeoman2/it331/project)

#### Website Pages
* index.html
  * This is the homepage. This page includes an introduction to the application and the website.
  The page also includes a GIF image (created by me), as well as a feature table.
  * *Changes Since Project 2:* I have redone the features table to now use a JSON dataset
  and Spry Data, instead of being static data.
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
* features_data.json
  * This file (or "page") is located in the assets folder. It is a new file that stores the JSON
  data for the Spry Data requirement of this project. This would be my sixth "page" for the project.

The navigation bar and footer has been changed on each page.  The invite page now has a random image.  A link on the index page has been converted to a button.

#### Project Requirements
1. 6 Minimum Pages (including json data)
This project contains a total of five pages.
The pages include the homepage, three different pages describing each of the major features of the app, and an invitation request form.
There is a simple and clear navigation bar on top of every page that links to each other page.
2. Coding Requirements  
The `main.js` file contains many comments to explain each variable declaration and each major structure.
I have written the code with readable variable names and there is ample spacing and easy readability.
3. Modifying Page Content Dynamically  
I have 
4. Modifying Page Styles Dynamically  
I have
5. Rollover Effect  
I have sdfad
6. Scripted Animation  
This is
7. XML or JSON File & Spry Data  
This requirement is satisfied by the redone features table on the home page.
I have converted the once static data into a JSON data format.
I am referencing this JSON data file and rendering the new table on the page based
on the contents of the JSON data file using Spry Data.
12. HTML Validation  
All HTML pages have passed the [Nu HTML5 validator](https://html5.validator.nu).

This website uses grunt for HTML includes and image minification.

The output html and image files are placed into the `dist/` folder which I upload to the Mason cluster server.

You can view the source code for this website on [it's Github page](https://github.com/YeomansIII/IT331-Project).