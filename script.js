'use strict';

var selector = 1;
function mobileButtonClick(thisElement){
    if (selector == 0){
        // Will close the menu
        document.getElementById("mobileMenu").style.right = "100%";
        document.getElementById("nav").style.boxShadow = null;
        document.getElementById("mobileMenu").style.boxShadow = null;
        outEx();
        selector++;
    } else if (selector == 1) {
        // will open the menu
        document.getElementById("mobileMenu").style.right = "30%";
        document.getElementById("mobileMenu").style.boxShadow = "1px 10px 8px -3px";
        document.getElementById("nav").style.boxShadow = "none";
        document.getElementById("nav").style.height = "50px";
        intoEx();
        selector--;
    }
}

function intoEx(){
    var bar = document.getElementsByClassName("bar");
    var i = 0;
    while (i < 3){
        bar[i].style.margin = "-4px";
        bar[i].style.color = "white";
        i++
    }
    bar[0].style.transform = "rotate(50deg)";
    bar[2].style.transform = "rotate(130deg)";
    bar[1].style.display = "none";
}

function outEx(){
    var bar = document.getElementsByClassName("bar");
    var i = 0;
    while (i < 3){
        bar[i].style.margin = null;
        bar[i].style.color = null;
        i++
    }
    bar[0].style.transform = "rotate(0deg)";
    bar[2].style.transform = "rotate(0deg)";
    bar[1].style.display = null;
}

window.addEventListener('load', (event) => {

  });