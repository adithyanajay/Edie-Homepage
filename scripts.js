// code to open navbar in mobile mode when the hamburger menu is clicked
document.getElementById("hamburger").addEventListener("click", openNav)
function openNav() {
   document.getElementById("nav-links").classList.add("active")
   document.getElementById("nav-transparent-div").classList.add("nav-transparent-div-active");
}

// code to close navbar in mobile mode when the close button is clicked
document.getElementById("close").addEventListener("click", closeNav)
function closeNav() {
    document.getElementById("nav-links").classList.remove("active")
    document.getElementById("nav-transparent-div").classList.remove("nav-transparent-div-active");
}

document.onclick = (e)=>{
    if(e.target.id !== "nav-links" && e.target.id !== "hamburger" && e.target.id !== "hamburger-img") {
        closeNav();
    }
}