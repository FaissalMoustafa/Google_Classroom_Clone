
console.log("hi i'm in the class")

// retrieving user data from the local storage
const user_data = localStorage.getItem("myData");

if (user_data !== null) {
    const parsedData = JSON.parse(user_data);
    console.log(parsedData); 

} else {
    console.log('Data not found in local storage.');
}

const displayClass = function (a, b) {
  return a * b;
};
