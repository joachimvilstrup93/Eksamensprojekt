document.querySelector(".burger-menu").addEventListener("click", () => {
    document.querySelector(".burger-menu").style.display = "none";
    document.querySelector(".burger-menu-close").style.display = "block";
    
    document.querySelector(".nav-list-menu").style.display = "flex";
})

document.querySelector(".burger-menu-close").addEventListener("click", () => {
    document.querySelector(".burger-menu").style.display = "block";
    document.querySelector(".burger-menu-close").style.display = "none";

    document.querySelector(".nav-list-menu").style.display = "none";
})