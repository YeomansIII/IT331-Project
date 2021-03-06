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
2. Disclaimer  
The disclaimer for my website is location at the bottom of every page within the footer.
Alongside the disclaimer, I also have a copyright notice, link to the pages source code on Github, and a link to the CSS stylesheet.
There is no fair use disclaimer as I have created all images that are present on the site.
3. CSS  
This website contains only one external stylesheet.  All pages are styled using this stylesheet.
This website has a CSS-only layout and the only table is the one which is presenting tabular data on the homepage.
4. Responsive Web Design  
Bootstrap is used efficiently throughout every page of this website.
Bootstrap containers, rows, and columns are used to ensure that the website is responsive and looks good on all size screens.
5. Navigation Bar  
There is a list-based navigation bar on every page of this site.
I used the bootstrap navbar component to ensure that the navigation menu is responsive on all devices.
The navigation bar has been customized to ensure it is unique and fits the design of the overall website.
6. Images  
This website contains a total of five images. There is one on every every page.
All of the images contain a 2em padding, which satisfies the requirement that at least one image needs to be framed.
All of the images contain a caption and alt tag in order for user accessibility.
I have created all of these images myself and therefor there is no fair use disclaimer on the site.
7. External & Internal Links  
There are six external links on this site.
There are four located on the home page in the "Related Echelon Links" section, there is one in the footer linking to the source code of the website, and there is one located on the invite form page linking to the functional invite request form.
The Echelon mode list contains three internal links linking to their respective pages.
I am using css :hover and :visited to style the links.
8. List  
There are two unordered lists located on the homepage of the website.
I have styled the bullets to squares using CSS.
The reason I chose square was because they better fit in with the material design look that I am going for.
9. Table  
The detailed feature progress list is a table on the homepage of the website.
This table is showing tabular data; the feature name, the feature's current progress in percent, and whether or not the feature is 100% complete.
This is a rather complex table containing three columns and numerous rows.
I have used custom alternating row shading to give the table a clean and material look.
10. Form  
The form for this website is located on the invitation page.
I have provided the user with relevant fields that will give me the information I need to create and send them an invitation to join Echelon's closed beta.
I am using five standard HTML form elements and two HTML5 form elements.
The standard elements are the text input, text area, radial buttons, checkbox, and submit button.
The HTML5 elements I have included are the email input and color picker.
11. CSS3  
I have implemented CSS3 box-shadows and transitions to make a cool effect when the user hovers over a button.
This can be tested by mousing over one of the "Request Invite" buttons without clicking on it.
You will be able to see a smooth transition from a faint and small box-shadow to a prominant one.
This makes the button look like it is hovering when the user mouses over.
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


### Project 3
This website can be viewed on the public internet at the following URL:
[http://mason.gmu.edu/~jyeoman2/it331/project](http://mason.gmu.edu/~jyeoman2/it331/project)

#### Website Pages
* index.html
  * This is the homepage. This page includes an introduction to the application and the website.
  The page also includes a GIF image (created by me), as well as a feature table.
  * *Changes Since Project 2:* I have redone the features table to now use a JSON dataset
  and Spry Data, instead of being static data. The feature table now also has mouseover and mouseout hover effects.
  The homepage header now animates and slides into the page from the left on page load.
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
  * *Changes since Project 2:* The invite page now has an Echelon idea field.
  A button can be pressed to add more idea fields to the form.
  This satisfies the Dynamic Content requirement.
* features_data.json
  * This file (or "page") is located in the assets folder. It is a new file that stores the JSON
  data for the Spry Data requirement of this project. This would be my sixth "page" for the project.

#### Project Requirements
1. 6 Minimum Pages (including json data)
This project contains a total of five pages.
The pages include the homepage, three different pages describing each of the major features of the app, and an invitation request form.
There is a simple and clear navigation bar on top of every page that links to each other page.
2. Coding Requirements  
The `main.js` file contains many comments to explain each variable declaration and each major structure.
I have written the code with readable variable names and there is ample spacing and easy readability.
3. Modifying Page Content Dynamically  
This is implemented on the 'Request Invite' page. A user can submit ideas they have for the app.
If the user wants to add more than one idea, they can press the 'Add idea field' button.
When the button is pressed a new text input field and 'remove' button is added.
If they press the remove button, that particular idea field is removed.
4. Modifying Page Styles Dynamically  
This requirement was implemented rather simply. On the 'Request Invite' page a user can select their favorite color.
When they pick a color, it changes the label of the color picker field to that color.
This works every time they pick a new color!
5. Rollover Effect  
This requirement is implemented on the home page.
The feature table now has a hover effect on each row.
When the user hovers a row, the background color changes to a darker color and the text turns white.
When a row is moused out, it returns to normal.
6. Scripted Animation  
I added the scripted animation to the homepage. The homepage header now slides in from the left on page load.
This works by starting off with a css margin-left of -800px. The Javascript interval then adds 5px every 10ms until the margin-left is 0.
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