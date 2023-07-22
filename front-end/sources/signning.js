const pages = {}

pages.base_url = ;

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
    const form = document.getElementById("form")
    form.addEventListener('submit', event => {
        console.log("i am in submit")
        event.preventDefault()
        const form_data = new FormData(form)
        const data = Object.fromEntries(form_data)
        pages.loadFor(page,data)
    })
}