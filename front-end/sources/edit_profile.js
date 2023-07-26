const pages = {}

pages.base_url = "http://localhost//Google_Classroom_Clone/back-end/";

pages.print_message = (message) =>{
    console.log(message);
}

pages.postAPI = async (api_url, api_data) => {
    try{
        return await fetch(api_url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(api_data)
        })
        .then(res =>{
            return res.json()
        } )
        .then(api_data => {
            console.log(api_data)
            return api_data
        })
    
    }catch(error){
        pages.print_message("Error from Linking (POST) " + error)
    }
}

// pages.edit_prof = (page) => {
//     console.log("submit")
//     const form = document.getElementById("sub_change")

//     form.addEventListener('submit', event => {

//         console.log("I am in submit")
//         event.preventDefault()
//         const first_name = document.getElementById("first_name")
//         const last_name = document.getElementById("last_name")
//         const new_pass = document.getElementById("new_pass")
//         const conf_pass = document.getElementById("conf_pass")
//         const user_id=window.localStorage.getItem("uid")
        
//         const edit_prof_url = pages.base_url + "edit-profile.php"
//         const response = await pages.postAPI(edit_prof_url,data)
        
//         if (response.status === "success") {
//             console.log(response.message)
//             setTimeout(() => {window.location.href = 'templates/log_in.html';}, 1000)
            
//         }else{
//             console.log(response.message)
//         }
//     }
//     )
// }


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