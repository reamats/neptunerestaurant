/** PRELOAD*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});





let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

/**SLIDDING IMAGES */

var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
    "images/slider4.jpg"

);
var len= images.length;
var i=0;

function slider(){
    if(i>len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}