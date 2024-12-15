let tabLinks = document.getElementsByClassName("tabLinks");
let tabContents = document.getElementsByClassName("tabsContent");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("activeLink");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("activeTab");
    }
    event.target.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTab");
}


let sideMenu = document.getElementById("sideMenu");

function openNav(){
    sideMenu.style.right = "0";
}
function closeNav(){
    sideMenu.style.right = "-200px";
}           