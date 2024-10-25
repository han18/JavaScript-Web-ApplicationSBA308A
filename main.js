// alert("this is an alert");

const mainDiv = document.getElementById("main-container");

// in this example I used fetch
async function fetchData() {
    const url = ' https://restcountries.com/v3.1/all';
    
    try {
        const response = await fetch(url);
        
        //checking if there is a response 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // converting the data into a json formate
        const data = await response.json();
        console.log(data);
    // cheking if there r errors while fetching 
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
