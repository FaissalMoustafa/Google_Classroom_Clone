const pages = {}

pages.base_url = "http://localhost//Full-Stack-Mini-Project-Backend/";

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
            return api_data
        })
    
    }catch(error){
        pages.print_message("Error from Linking (POST) " + error)
    }
}

pages.submit = (page) => {
    console.log("submit")
    const form = document.getElementById("form")

    form.addEventListener('submit', event => {

        console.log("i am in submit")
        event.preventDefault()

        const password = document.getElementById("password")
        const check_password = document.getElementById("check-password")

        // Remove any existing error message
        const existingError = document.getElementById("error-message");
        if (existingError) {
            form.removeChild(existingError);
        }

        //validating the password
        if(page=="login" || password.value === check_password.value){
            const form_data = new FormData(form)
            const data = Object.fromEntries(form_data)
            console.log(data)
            // pages.loadFor(page,data)
        }else {
            
            // Append the new error message to the form
            const errorDiv = document.createElement("div");
            errorDiv.innerText = "Passwords do not match. Try again.";
            errorDiv.id = "error-message";
            form.appendChild(errorDiv);
        }
    })
}