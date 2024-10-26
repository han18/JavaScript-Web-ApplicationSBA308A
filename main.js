// alert("this is an alert");

// const mainDiv = document.getElementById("main-container");
// const button = document.querySelector("button");

// // this fetch is to check out other apis

async function fetchData() {
  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(url);

    //checking if there is no response
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // converting the data into a json formate
    const data = await response.json();
    console.log(data);
    // cheking if there r errors while fetching
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();



const mainDiv = document.getElementById("main-container");

// storing the url in a variable
const BASE_URL = "https://restcountries.com/v3.1/all";
async function getRandomCountry() {
        try {
          const response = await axios.get(BASE_URL);
          const countries = response.data;
    
          // Select a random country from the list
          const randomIndex = Math.floor(Math.random() * countries.length);
          const country = countries[randomIndex];
    
          // Display country details
          mainDiv.innerHTML = `
            <h2>${country.name.common}</h2>
            <p><strong>Capital:</strong> ${country.capital[0]}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="200" />
          `;
        } catch (error) {
          console.error("Error fetching country data:", error);
          mainDiv.innerHTML = "<p>Failed to fetch country data.</p>";
        }
      }
    
