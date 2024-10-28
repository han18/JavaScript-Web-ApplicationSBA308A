// // this fetch is to check out other apis 



export async function fetchData() {
    const url = "https://catfact.ninja/fact";
  
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


// this code did not work
// export function peopleName() {
//     return "This is the fetch file";
    
// }


// console.log(peopleName());