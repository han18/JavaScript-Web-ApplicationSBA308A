// alert("this is an alert");

// const button = document.querySelector("button");

// calling the function from the fetch.js file

// import { fetchData } from './fetch.js'; // importing the function from fetch.js

// // calling the fetchData 
// fetchData();
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

    // seleting a random country from the api
    const randomIndex = Math.floor(Math.random() * countries.length);
    // variable to hold all the data of the countries country hold all the data
    const country = countries[randomIndex];

    // getting the languages since the value for each country changes
    const languages = Object.values(country.languages).join(", ");

// Get all currencies in a readable format
    const currencies = Object.values(country.currencies)
      .map(currency => `${currency.name} (${currency.symbol})`)
      .join(", ");

    // displaying country details in the main div container
    let textSpace = " ";
    mainDiv.innerHTML = `
            <h1>${country.name.common}</h1>
         <img src="${country.flags.png}">

            <div id="first-div">
            <p class="testing" ><strong>Capital:</strong> ${textSpace} ${country.capital[0]} </p>
            <p class="testing"><strong>Language:</strong> ${textSpace}  ${languages}</p>
            </div>


             <div id="first-div"> 
             <p class="testing"><strong>Continent:</strong> ${textSpace} ${country.continents}</p>
            <p class="testing" ><strong>Region:</strong> ${textSpace} ${country.subregion} </p>
            </div>
            
             <div id="first-div">
            <p class="testing" ><strong>Currency:</strong> ${textSpace} ${currencies} </p>
            <p class="testing"><strong>Population:</strong> ${textSpace}  ${country.population.toLocaleString()}</p>
            </div>

           
             <div id="first-div">
               <h2> Coat of Arms <h2>
          <p class="testing" ><strong></strong>  <img src="${country.coatOfArms.png}"/></p>
            </div>
          `;
  } catch (error) {
    console.error("Error fetching country data:", error);
    mainDiv.innerHTML = "<p>Failed to fetch country data.</p>";
  }
}

/// calling the function loades the api without clicking to search
// getRandomCountry();