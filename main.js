// import { fetchData } from './fetch.js'; // Adjust path if necessary

const mainDiv = document.getElementById("main-container");
const BASE_URL = "https://restcountries.com/v3.1/all";

async function getRandomCountry() {
  try {
    const response = await axios.get(BASE_URL); // Fetch data with Axios
    const countries = response.data;
    console.log(countries);

    const randomIndex = Math.floor(Math.random() * countries.length);
    const country = countries[randomIndex];

    const languages = Object.values(country.languages).join(", ");
    const currencies = Object.values(country.currencies)
      .map(currency => `${currency.name} (${currency.symbol})`)
      .join(", ");
      
    // Clear previous content
    mainDiv.innerHTML = "";

    // Function to create and append text to a div
    function createTextElement(tag, textContent, className) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      element.textContent = textContent;
      return element;
    }

    // Main country name
    const nameHeading = createTextElement("h1", country.name.common);
    mainDiv.appendChild(nameHeading);

    // Country flag
    const flagImg = document.createElement("img");
    flagImg.src = country.flags.png;
    flagImg.alt = `${country.name.common} Flag`;
    mainDiv.appendChild(flagImg);

    // Capital and Language div
    const firstDiv = document.createElement("div");
    firstDiv.id = "first-div";
    const capital = createTextElement("p", `Capital: ${country.capital[0]}`, "testing");
    const language = createTextElement("p", `Language: ${languages}`, "testing");
    firstDiv.appendChild(capital);
    firstDiv.appendChild(language);
    mainDiv.appendChild(firstDiv);

    // Continent and Region div
    const secondDiv = document.createElement("div");
    secondDiv.id = "first-div";
    const continent = createTextElement("p", `Continent: ${country.continents}`, "testing");
    const region = createTextElement("p", `Region: ${country.subregion}`, "testing");
    secondDiv.appendChild(continent);
    secondDiv.appendChild(region);
    mainDiv.appendChild(secondDiv);

    // Currency and Population div
    const thirdDiv = document.createElement("div");
    thirdDiv.id = "first-div";
    const currency = createTextElement("p", `Currency: ${currencies}`, "testing");
    const population = createTextElement("p", `Population: ${country.population.toLocaleString()}`, "testing");
    thirdDiv.appendChild(currency);
    thirdDiv.appendChild(population);
    mainDiv.appendChild(thirdDiv);

    