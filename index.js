const burger = document.querySelector(".burger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))
