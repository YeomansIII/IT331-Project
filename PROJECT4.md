# IT331 Project
by Jason Yeomans  
Section 002  
Professor Diana Wang

### Project 4
This website can be viewed on the public internet at the following URL:
[http://mason.gmu.edu/~jyeoman2/it331/project](http://mason.gmu.edu/~jyeoman2/it331/project)

#### Website Pages
* index.html
  * This is the homepage. This page includes an introduction to the application and the website.
  The page also includes a GIF image (created by me), as well as a feature table.
  * *Changes Since Project 2:*  The homepage header animation now uses jQuery Animate
  instead of vanilla Javascript.
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
  * *Changes since Project 3:* The invite page now has three validated form fields using
  jQuery Form Validator. The invite form also has a tooltip on the "Echelon Ideas" field.
  This tooltip helps the user understand how to add and remove more idea fields.
* features_data.json
  * This file (or "page") is located in the assets folder. It is a new file that stores the JSON
  data for the Spry Data requirement of this project. This would be my sixth "page" for the project.
* project.html (_**new**_)
  * This page exists to fulfill the 7 page requirement, as well as the basic XMLHttpRequest.
  This page shows the README.md file for this project downloaded from Github and parsed into HTML from Markdown.
  This README.md file contains the project write-ups that have been submitted with each project.

#### Project Requirements
1. 7 Minimum Pages (including json data)
This project contains a total of six pages (+1 json file, 7 total).
The pages include the homepage, three different pages describing each of the major features of the app, and an invitation request form.
There is a simple and clear navigation bar on top of every page that links to each other page.
2. Coding Requirements  
The `main.js` file contains many comments to explain each variable declaration and each major structure.
There are also two other js files `invite.js` and `project.js` that perform page specific functions.
I have written the code with readable variable names and there is ample spacing and easy readability.
3. Raw Ajax  
This requirement is completed on the new `project.html` page. This page shows the README.md file which is
downloaded straight from Github using the XMLHttpRequest object. I am then using a seperate library called
Showdown, which converts the Markdown in the file to HTML which is then displayed on the page.
4. jQuery Feature  
My jQuery feature is implemented on the home page. I have modified the homepage header animation to now use
the jQuery animate feature. Previously, it was using a simple javascript interval. The animation is now more
efficient and looks better.
5. jQuery UI Feature  
The jQuery UI feature is implemented on the `invite.html` page. I have added a jQuery UI tooltop to the Echelon Ideas form field.
This tooltop lets the user know that they can add and remove fields to add more ideas.
6. Form Validation using jQuery Plugin  
For this feature, I am using the jQuery Form Validator plugin. On the `invite.html` page,
I am now validating the name field (which must be 2 or more character), the email field (which must be an email),
and the "How do you want to use Echelon?" text area, which has a max length of 200 characters.
7. HTML Validation  
All HTML pages have passed the [Nu HTML5 validator](https://html5.validator.nu).

This website uses grunt for HTML includes and image minification.

The output html and image files are placed into the `dist/` folder which I upload to the Mason cluster server.

You can view the source code for this website on [it's Github page](https://github.com/YeomansIII/IT331-Project).