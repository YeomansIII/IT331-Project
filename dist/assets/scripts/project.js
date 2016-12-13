function getMarkdown() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var converter = new showdown.Converter(),
                text      = this.responseText,
                html      = converter.makeHtml(text);
            $('.markdown-container').html(html);
        } else {
            $('.markdown-container').html("<h2>Error getting content</h2>");
        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/YeomansIII/IT331-Project/master/README.md", true);
    xmlhttp.send();
}

function start() {
    getMarkdown();
}

window.addEventListener('load', start, false);
