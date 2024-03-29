const edit = {}

// pages.base_url = "http://localhost//Google_Classroom_Clone/back-end/";

edit.print_message = (message) =>{
    console.log(message);
}

edit.postAPI = async (api_url, api_data) => {
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
        edit.print_message("Error from Linking (POST) " + error)
    }
}

edit.submit = ()=>{
    const profile_details = document.getElementById("profile_edit")
    const user_id=window.localStorage.getItem("uid")
    console.log(user_id)

    profile_details.addEventListener('submit', async event=>{
        event.preventDefault()
        console.log(profile_details)
        const user_id=window.localStorage.getItem("uid");
        const form_data = new FormData(profile_details);
        form_data.append("user_id",user_id);
        const data = Object.fromEntries(form_data)
        
        // const first_name = document.getElementById("first_name")
        // const last_name = document.getElementById("last_name")
        // const new_pass = document.getElementById("new_pass")
        // const conf_pass = document.getElementById("conf_pass")
        
        if(new_pass.value===conf_pass.value){
            // form_data.append(user_id,last_name,first_name,new_pass);
            // const form_data_object = {};
            // form_data.forEach((value, key)=>{
            // form_data_object[key] = value;
            // });
            
            const change_pass_url="http://localhost/Google_Classroom_Clone/back-end/edit-profile.php"
            const response = await edit.postAPI(change_pass_url,data)
        }
    })
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