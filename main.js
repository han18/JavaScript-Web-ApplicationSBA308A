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

//=====================================================================

// retriving the div
const mainDiv = document.getElementById("main-container");

// storing the url in a variable
const BASE_URL = "https://restcountries.com/v3.1/all";
async function getRandomCountry() {
        try {
          const response = await axios.get(BASE_URL); // used axios for better request
          const countries = response.data;
          console.log(countries);
    
          // Select a random country from the list
          const randomIndex = Math.floor(Math.random() * countries.length);
          // country hold all the data
          const country = countries[randomIndex];
    
          // displaying country details in the main div container
          mainDiv.innerHTML = `
            <h1>${country.name.common}</h1>
            <img src="${country.flags.png}"/>
            <div id="first-div">
            <p class="testing"><strong> Capital:</strong> ${ country.capital[0]} </p>
            <p class="testing"><strong>Capital:</strong> ${country.capital[0]} ${country.capital[0]}</p>
            </div>
            <p><strong>Region:</strong>  ${country.continents} <strong>Continent:</strong>  ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          `;
        } catch (error) {
          console.error("Error fetching country data:", error);
          mainDiv.innerHTML = "<p>Failed to fetch country data.</p>";
        }
      }
    
