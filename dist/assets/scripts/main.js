/**
 * Created by jason on 10/27/16.
 */

var form, welcomeNav, firstNameInput, firstNameSpan, resetName, firstName, todaysDateSpan; // declare vars

function setNameFormSubmit() {
    firstName = firstNameInput.value; // get first name from input
    if (firstName !== '') { // make sure it's not empty
        localStorage.setItem('firstName', firstName); // set firstName in localStorage
        firstNameSpan.textContent = firstName; // set span in navbar with name
        form.classList.add('hide'); // hide the set name form
        welcomeNav.classList.remove('hide'); // unhide name
    } else {
        alert('Please enter a name first');
    }
}

function resetSavedNameClick() {
    localStorage.removeItem('firstName'); // remove firstName from localStorage
    firstNameSpan.textContent = ''; // set span to empty
    form.classList.remove('hide'); // unhide set name form
    welcomeNav.classList.add('hide'); // hide name
}

function setDateSpan() {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var date = new Date();
    var day = date.getDay(),
        month = monthNames[date.getMonth()];
    todaysDateSpan.textContent = month + ' ' + day;
}

function featureBugFormClick() {
    var popupForm = window.open("https://goo.gl/forms/ITBliMvD8EuhtWnO2", "Echelon Feature/Bug Form", "width=450,height=600");
}

function rowMouseOver() {
    this.setAttribute('style', 'background-color:#57387B;color:white;');
}

function rowMouseOut() {
    this.setAttribute('style', '');
}

function start() {
    ////// NAVBAR JAVASCRIPT (Store name in localStorage) //////
    form = document.getElementById('greetingForm'); // get greeting form
    welcomeNav = document.getElementById('welcomeNav'); // get greeting form
    firstNameInput = document.getElementById('firstNameInput'); // get first name input (within greeting form)
    firstNameSpan = document.getElementById('firstName'); // get span of where the name will be displayed once submitted
    resetName = document.getElementById('resetName'); // get button that will reset the saved name and allow the user to enter another one
    todaysDateSpan = document.getElementById('todays-date'); // get button that will reset the saved name and allow the user to enter another one
    setDateSpan();
    firstName = localStorage.getItem('firstName'); // the first name from local storage (null if not yet set)
    resetName.addEventListener('click', resetSavedNameClick, false);
    if (firstName !== null) { // check if name from localStorage is null, if it is not null, then display the name in the navbar
        firstNameSpan.textContent = firstName;
    } else { // if it is null, unhide the mini form for them to set the name
        form.classList.remove('hide');
        welcomeNav.classList.add('hide');
    }
    form.addEventListener('submit', setNameFormSubmit, false);
    ////// END NAVBAR //////

    ////// WINDOW POPUP //////
    var featureBugButton = document.getElementById('feature-bug-button');
    if (featureBugButton !== null) { // make sure var exists (will only exist on index page)
        featureBugButton.addEventListener('click', featureBugFormClick, false);
    }
    ////// END WINDOW POPUP //////

    ////// LAST MODIFIED //////
    var lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;
    ////// END LAST MODIFIED //////

    setTimeout(function () { // use timeout to wait for sprydata to load
        var featureRows = document.querySelectorAll('.featureRow');
        console.log(featureRows);
        for (var i = 0; i < featureRows.length; i++) {
            featureRows[i].addEventListener('mouseover', rowMouseOver, false);
            featureRows[i].addEventListener('mouseout', rowMouseOut, false);
        }
    }, 2000);

    var homepageHeader = document.getElementById('homepageHeader'); // get the homepage header
    var marginLeft = -800; // set initial margin-left
    var animInterval = setInterval(function () { // create interval for the animation
        if (marginLeft === 0) {
            clearInterval(animInterval); // clear interval once we get to 0
        } else {
            homepageHeader.setAttribute('style', 'margin-left:' + marginLeft+'px'); // set the margin left
            marginLeft += 5; // move to the right
        }
    }, 10); // every 10ms
}

window.addEventListener('load', start, false);
