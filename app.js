const navMenu= document.querySelector("nav.mobile");
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon")

openNav.addEventListener("click", ()=>{
    openNav.classList.add("hide");
    openNav.classList.remove("show")
    closeNav.classList.toggle("show", "hide")
    closeNav.classList.remove("hide")
    closeNav.style.transform="translateX(-1em)"
    navMenu.style.display="block";
    

}
)

closeNav.addEventListener("click", ()=>{

    closeNav.classList.remove("show")
    closeNav.classList.add("hide");
    openNav.classList.toggle("show", "hide");
    navMenu.style.display="none";
    

}
)