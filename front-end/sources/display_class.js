
console.log("hi i'm in the class")
const user_data = localStorage.getItem("myData");
console.log(user_data)
if (user_data !== null) {
    const parsedData = JSON.parse(user_data);
    console.log(parsedData); 
} else {
    console.log('Data not found in local storage.');
}
