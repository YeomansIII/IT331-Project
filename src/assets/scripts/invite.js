function randomImage() {
    var image = document.getElementById('page-image'),
        images = ['dj-mockup.png', 'echelon-add-song.gif', 'echelon-browse.png', 'echelon-create-group.gif', 'echelongroup.png'],
        captions = ['Mockup of the DJ mode', 'How to add a song to a queue', 'Browsing for a track', 'Creating a group', 'An Echelon group queue'],
        ranNum = Math.round(Math.random() * 4);
    console.log(ranNum);
    image.setAttribute('src', 'assets/images/' + images[ranNum]);
}
window.addEventListener('load', randomImage, false);