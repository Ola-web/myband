// Automatic Slideshow - change image every 4 seconds 
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "container") {
        x.className += " responsive";
    } else {
        x.className = "container";
    }
}

function myFunct(){
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("ola-show") == -1) {
        x.className += "ola-show";
    } else{
        x.className = x.className.replace(" ola-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it 
var modal = document.getElementById('ticketmodal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}