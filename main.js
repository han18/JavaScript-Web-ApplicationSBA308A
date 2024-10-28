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

   