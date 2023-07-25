
const class_details = document.getElementById('new-class-info-form');
class_details.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form_data = new FormData(class_details);
    const uid = window.localStorage.getItem("uid");
    form_data.append("teacher_id",uid);
    const form_data_object = {};
    form_data.forEach((value, key)=>{
    form_data_object[key] = value;
    });
    const from_data_json = JSON.stringify(form_data_object);

    fetch("http://localhost/Google_Classroom_Clone/back-end/create.php",{
        method: 'POST',
        body: from_data_json
    })
    .then((response)=>{
        return response.json();
    })
    .then((details)=>{
        return details
    })
    .catch((error)=>{console.log(error)});
});