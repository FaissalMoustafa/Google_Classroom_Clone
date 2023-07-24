
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

const pic_menu=document.getElementById("pic_modal_content")

const close_btn1=document.getElementById("close_btn1")

pic_btn.addEventListener("click",bringPicMenu)

function bringPicMenu() {
    pic_modal.style.display='flex';
}

close_btn1.addEventListener("click",closePicMenu1)

function closePicMenu1() {
    pic_modal.style.display = 'none';
}

document.addEventListener('click', closePicMenu2);
function closePicMenu2(event) {
    if (!pic_menu.contains(event.target) && !pic_btn.contains(event.target)) {
        pic_modal.style.display = 'none';
    }
}

const manage_btn=document.getElementById("manage_btn")
const edit_modal=document.getElementById("edit-info-modal")
const edit_menu=document.getElementById("info_modal_content")
const close_btn2=document.getElementById("close_btn2")

manage_btn.addEventListener("click",bringInfoMenu)

function bringInfoMenu() {
    edit_modal.style.display='flex';
}

close_btn2.addEventListener("click",closeInfoMenu1)

function closeInfoMenu1() {
    edit_modal.style.display = 'none';
}

document.addEventListener('click', closePicMenu2);
function closePicMenu2(event2) {
    if (!edit_menu.contains(event2.target) && edit_modal.contains(event2.target)) {
        edit_modal.style.display = 'none';
    }
}