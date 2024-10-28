// import { fetchData } from './fetch.js'; // Adjust path if necessary

// const button = document.querySelector("button");

// calling the function from the fetch.js file
// import { fetchData } from './fetch.js'; 

// // calling and testing fetch function from fetch.js
// fetchData()
//=====================================================================



const mainDiv = document.getElementById("main-container");
const BASE_URL = "https://restcountries.com/v3.1/all";

async function getRandomCountry() {
  try {
    const response = await axios.get(BASE_URL); // used axios to fetch data for better response 
    const countries = response.data;
    console.log(countries);

      // setting the random country
    const randomIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomIndex];

     // getting the languages since the value for each country changes
    const languages = Object.values(country.languages).join(", ");
    const currencies = Object.values(country.currencies)
      .map(currency => `${currency.name} (${currency.symbol})`)
      .join(", ");
      
    // clearing the content to keep selecting countries
    mainDiv.innerHTML = "";

    // to create and append text to the div
    function createTextElement(tag, textContent, className) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      element.textContent = textContent;
      return element;
    }

    // the country names
    const nameHeading = createTextElement("h1", country.name.common);
    mainDiv.appendChild(nameHeading);

    // the country flags
    const flagImg = document.createElement("img");
    flagImg.src = country.flags.png;
    flagImg.alt = `${country.name.common} Flag`;
    mainDiv.appendChild(flagImg);

    // the capital and language div
    const firstDiv = document.createElement("div");
    firstDiv.id = "first-div";
    const capital = createTextElement("p", `Capital: ${country.capital[0]}`, "testing");
    const language = createTextElement("p", `Language: ${languages}`, "testing");
    firstDiv.style.color = "blue";
    firstDiv.appendChild(capital);
    firstDiv.appendChild(language);
    mainDiv.appendChild(firstDiv);

    // the continent and region div
    const secondDiv = document.createElement("div");
    secondDiv.id = "first-div";
    // using testing class
    const continent = createTextElement("p", `Continent: ${country.continents}`, "testing");
    const region = createTextElement("p", `Region: ${country.subregion}`, "testing");
    secondDiv.appendChild(continent);
    secondDiv.appendChild(region);
    mainDiv.appendChild(secondDiv);

    // currency and population 
    const thirdDiv = document.createElement("div");
    thirdDiv.id = "first-div";
    const currency = createTextElement("p", `Currency: ${currencies}`, "testing");
    const population = createTextElement("p", `Population: ${country.population.toLocaleString()}`, "testing");
    thirdDiv.appendChild(currency);
    thirdDiv.appendChild(population);
    mainDiv.appendChild(thirdDiv);

    // the is the coat of arms section
    const coatOfArmsDiv = document.createElement("div");
    coatOfArmsDiv.id = "first-div";
    const coatOfArmsHeading = createTextElement("h2", "Coat of Arms");
    const coatOfArmsImg = document.createElement("img");
    coatOfArmsImg.src = country.coatOfArms.png;
    coatOfArmsImg.alt = `${country.name.common} Coat of Arms`;
    coatOfArmsDiv.appendChild(coatOfArmsHeading);
    coatOfArmsDiv.appendChild(coatOfArmsImg);
    mainDiv.appendChild(coatOfArmsDiv);
  } catch (error) {
    console.error("Error fetching country data:", error);
    mainDiv.innerHTML = "<p>Failed to fetch country data. Try again!</p>";
  }
}

/// calling the function will load the api without clicking the search button
// getRandomCountry();
