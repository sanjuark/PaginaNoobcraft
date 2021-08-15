// Menu desplegable

let closeBtn = document.querySelector('.fa-times');
let openBtn = document.querySelector('.fa-bars');
let sideBarMenu = document.querySelector('#sideBarNav')

openBtn.addEventListener('click', () => {
    sideBarMenu.style.width = "250px";
})

closeBtn.addEventListener('click', () => {
    sideBarMenu.style.width = "0";
})