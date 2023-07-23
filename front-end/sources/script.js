
const sidebar = document.getElementById('side-menu');

const menu = document.getElementById("menu")
menu.addEventListener("click",toggleSidebar)

document.addEventListener('click', closeSidebar);

function toggleSidebar() {
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex'; 
    }
}

function closeSidebar(event) {
    if (!sidebar.contains(event.target) && !menu.contains(event.target)) {
        sidebar.style.display = 'none';
    }
}

const pic_btn=document.getElementById("change_btn")

const pic_modal=document.getElementById("change-pic-modal")

const pic_menu=document.getElementById("modal_content")

const close_btn=document.getElementById("close_btn")

pic_btn.addEventListener("click",bringPicMenu)

function bringPicMenu() {
    pic_modal.style.display='flex';
}

close_btn.addEventListener("click",closePicMenu1)

function closePicMenu1() {
    pic_modal.style.display = 'none';
}

document.addEventListener('click', closePicMenu2);
function closePicMenu2(event) {
    if (!pic_menu.contains(event.target) && !pic_btn.contains(event.target)) {
        pic_modal.style.display = 'none';
    }
}