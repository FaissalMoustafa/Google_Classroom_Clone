const create_class_modal=document.getElementById("create_class_modal")
const create_class_content=document.getElementById("create_class_content")
const plus_click=document.getElementById("plus")

plus_click.addEventListener("click",bringCreateClass)

function bringCreateClass(){
    create_class_modal.style.display = 'flex';
}


const cancel_btn=document.getElementById("cancel_btn")

cancel_btn.addEventListener("click",closeAddMenu1)

function closeAddMenu1() {
    create_class_modal.style.display = 'none';
}

document.addEventListener('click', closeAddMenu2);
function closeAddMenu2(event) {
    if (!create_class_content.contains(event.target) && create_class_modal.contains(event.target)) {
        create_class_modal.style.display = 'none';
    }
}
