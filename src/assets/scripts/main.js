/**
 * Created by jason on 10/27/16.
 */

function start() {
////// NAVBAR JAVASCRIPT (Store name in localStorage) //////
    var form = document.getElementById('greetingForm'), // get greeting form
        firstNameInput = document.getElementById('firstNameInput'), // get first name input (within greeting form)
        firstNameSpan = document.getElementById('firstName'), // get span of where the name will be displayed once submitted
        resetName = document.getElementById('resetName'); // get button that will reset the saved name and allow the user to enter another one
    var firstName = localStorage.getItem('firstName'); // the first name from local storage (null if not yet set)
    resetName.addEventListener('click', function () {
        localStorage.removeItem('firstName');
        firstNameSpan.textContent = '';
        form.classList.remove('hide');
    }, false);
    console.log(firstName);
    if (firstName != null) {
        firstNameSpan.textContent = firstName;
        form.classList.add('hide');
    }
    form.addEventListener('submit', function () {
        firstName = firstNameInput.value;
        if (firstName !== '') {
            localStorage.setItem('firstName', firstName);
            firstNameSpan.textContent = firstName;
            form.classList.add('hide');
        } else {
            alert('Please enter a name first');
        }
    }, false);
////// END NAVBAR //////
}

window.addEventListener('load', start, false);
