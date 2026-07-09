// Navbar background change on scroll

window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#0b1220";

    }else{

        navbar.style.background = "#131b2d";

    }

});


// Mobile menu close after clicking link

let navLinks = document.querySelectorAll(".nav-link");

let menu = document.querySelector(".navbar-collapse");

navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        if(menu.classList.contains("show")){

            document.querySelector(".navbar-toggler").click();

        }

    });

});


// Download CV Button

let cvButton = document.querySelector(".btn-success");

cvButton.addEventListener("click",function(e){

    e.preventDefault();

    alert("CV Download Started!");

});


// Watch Video Button

let videoButton = document.querySelector(".play-btn");

videoButton.addEventListener("click",function(e){

    e.preventDefault();

    alert("Video will open soon!");

});


// Image hover effect

let profileImage = document.querySelector(".image-box");

profileImage.addEventListener("mouseenter",function(){

    profileImage.style.transform="scale(1.05)";
    profileImage.style.transition="0.4s";

});


profileImage.addEventListener("mouseleave",function(){

    profileImage.style.transform="scale(1)";

});


// Typing animation

let text = "DESIGNER";

let index = 0;

let typing = document.querySelector(".hero-text h1 span");


function typeEffect(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,200);

    }

}


typing.innerHTML="";

typeEffect();