// Get the modal
var modal = document.getElementById("myModal");


function showOption(n) {

    if (n == 1) {
        var img = document.getElementById("cobra");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

    }



}

function currentOptionl(n) {
    showOption(n);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}