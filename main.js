// alert("this is an alert");

// const button = document.querySelector("button");

// calling the function from the fetch.js file

// import { fetchData } from './fetch.js'; // Adjust path if in a different directory

// // calling and testing fetch function from `fetch.js`
// fetchData()
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
    const randomSearch = Math.floor(Math.random() * countries.length);
    // variable to hold all the data of the countries country hold all the data
    const country = countries[randomSearch];

    // getting the languages since the value for each country changes
    const languages = Object.values(country.languages).join(", ");

// getting all the currencies in and mapping through the property since the property hold other property
    const currencies = Object.values(country.currencies)
      .map(currency => `${currency.name} (${currency.symbol})`)
      .join(", ");

    // displaying country details in the main div container
    let textSpace = " ";
    mainDiv.innerHTML = `
            <h1>${country.name.common}</h1>
         <img src="${country.flags.png}">

            <div id="first-div">
            <p class="testing" ><span>Capital:</span> ${textSpace} ${country.capital[0]} </p>
            <p class="testing"><span>Language:</span> ${textSpace}  ${languages}</p>
            </div>


             <div id="first-div"> 
             <p class="testing"><span>Continent:</span> ${textSpace} ${country.continents}</p>
            <p class="testing" ><span>Region:</span> ${textSpace} ${country.subregion} </p>
            </div>
            
             <div id="first-div">
            <p class="testing" ><span>Currency:</span> ${textSpace} ${currencies} </p>
            <p class="testing"><span>Population:</span> ${textSpace}  ${country.population.toLocaleString()}</p>
            </div>

           
             <div id="first-div">
               <h2> Coat of Arms <h2>
          <p class="testing" ><span></span>  <img src="${country.coatOfArms.png}"/></p>
            </div>
          `;
  } catch (error) {
    console.error("Error fetching country data:", error);
    mainDiv.innerHTML = "<p>Failed to fetch country data. Try again!.</p>";
  }
}

/// calling the function will load the api without clicking the search button
// getRandomCountry();

