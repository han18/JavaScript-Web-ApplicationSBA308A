// alert("this is an alert");

const mainDiv = document.getElementById("main-container");

// in this example I used fetch
async function fetchData() {
    const url = ' https://restcountries.com/v3.1/all';
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
