// // this fetch is to check out other apis 


// exporting the function so that it can be used in other files
export async function fetchData() {
    const url = "https://catfact.ninja/fact";
  
    try {
        const response = await fetch(url);
      
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
      
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Uncomment if needed elsewhere
// export function peopleName() {
//     return "This is the fetch file";
// }


// this code did not work
// export function peopleName() {
//     return "This is the fetch file";
    
// }


// console.log(peopleName());