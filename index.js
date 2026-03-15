//Js for theme change..
let theme = document.querySelector("#theme");
let Nav = document.querySelector(".container_nav");
let Hero_text = document.querySelector(".hero .text h1");  
let color_mode = "light";
let Body = document.querySelector("body");

theme.addEventListener("click", ()=>{
    if(color_mode==="light"){
        Body.classList.remove("Light");
        Body.classList.add("Dark");
        Nav.classList.add("nav_dark");
        Nav.classList.remove("nav_light");
        Hero_text.classList.add("hero_text_dark");
        Hero_text.classList.remove("hero_text_light");
        color_mode = "dark";
    }
    else{
        Body.classList.remove("Dark");
        Body.classList.add("Light");
        Nav.classList.add("nav_light");
        Nav.classList.remove("nav_dark");
        Hero_text.classList.add("hero_text_light"); 
        Hero_text.classList.remove("hero_text_dark");
        color_mode = "light";
    }
});