var ideaFieldNodes = [];
var ideaDiv;
var nextId = 0;
function randomImage() {
    var image = document.getElementById('page-image'),
        images = ['dj-mockup.png', 'echelon-add-song.gif', 'echelon-browse.png', 'echelon-create-group.gif', 'echelongroup.png'],
        ranNum = Math.round(Math.random() * 4);
    console.log(ranNum);
    image.setAttribute('src', 'assets/images/' + images[ranNum]);
}
function removeIdeaField() {
    var ideaFieldDiv = ideaFieldNodes[parseInt(this.id)]; // get the wrapper node for this specific feature input
    ideaDiv.removeChild(ideaFieldDiv); // remove that node from the main feature inputs wrapper
}
function addIdeaField() {
    var tempNode = document.createElement('div'); // create a div node to wrap the new input and remove button
    var tempInput = document.createElement('input'); // create the new input
    tempInput.setAttribute('type', 'text'); // make the input text input
    tempNode.appendChild(tempInput); // add the input to the wrapper div
    var tempButton = document.createElement('button'); // create the remove button
    tempButton.innerHTML = 'X'; // make the button text 'X'
    tempButton.setAttribute('type','button'); // make the button type button so that it doesn't submit the form
    tempButton.id = ''+nextId; //  set the button id to the node's id in the array
    tempButton.addEventListener('click', removeIdeaField, false); // add the removeIdeaField
    tempNode.appendChild(tempButton); // append the button to the wrapper div
    ideaDiv.appendChild(tempNode); // append the wrapper to the wrapper for all the idea inputs
    ideaFieldNodes.push(tempNode); // push the wrapper node to the array of nodes so we can remove it later
    nextId++; // increment the id
}
function colorFieldChanged() {
    document.getElementById('colorLabel').setAttribute('style','color:'+this.value);
    // set the label color when a color from the picker is picked
}
function start() {
    randomImage();
    ideaDiv = document.getElementById('ideaFields');
    document.getElementById('addIdeaField').addEventListener('click', addIdeaField, false);
    document.getElementById('color').addEventListener('input', colorFieldChanged, false);

    $(document).tooltip(); // Tooltip for idea field

    $.validate();
}
window.addEventListener('load', start, false);