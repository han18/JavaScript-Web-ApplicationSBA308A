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

    