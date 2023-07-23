
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



