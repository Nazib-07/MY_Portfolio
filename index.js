//Js for theme change..
let theme = document.querySelector("#theme");
let color_mode = "light";
let Body = document.querySelector("body");
theme.addEventListener("click", ()=>{
    if(color_mode==="light"){
        Body.classList.remove("Light");
        Body.classList.add("Dark");
        color_mode = "dark";
    }
    else{
        Body.classList.remove("Dark");
        Body.classList.add("Light"); 
        color_mode = "light";
    }
})