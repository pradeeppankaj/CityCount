//Js source code

const input = document.getElementById('letterInput');
const result = document.getElementById('result');

// Encode the API endpoint so it can safely be passed inside another URL with proper format
    const endpoint = encodeURIComponent('https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22');

// Fetch the API data using AllOrigins proxy (free proxy) (this helps bypass CORS restrictions) on the live website
    fetch(`https://api.allorigins.win/get?url=${endpoint}`)

    .then(res => res.json())
    .then(data => {
// The proxy returns the API response inside "data.contents" as a string so we need to parse it into an object
    const jsonData = JSON.parse(data.contents);

        if (jsonData.list && jsonData.list.length > 0) {
// Save the list of cities, into "cities" array
        cities = jsonData.list;
        console.log("Loaded cities from endpoint:", cities.map(c => c.name));
        } 
        else {
        console.log("Endpoint returned empty, Please check the endpoint data.");
        }
       })
// Added a listner to check if user input any value
    input.addEventListener('input', () => {
// convert the input leter to lowercase and remove spaces
    const letter = input.value.toLowerCase().trim();
// Validation of input value as alphabetic character (a-z or A-Z)
    if (letter && !/^[a-zA-Z]$/.test(letter)) {
    alert('Please enter only a letter (a-z OR A-Z)');
    return;
  }


// Created empty list of filtered city and If a valid letter exists, filter cities by names starting with that letter stored
let filtered = [];

    if (letter ) {
        filtered = cities.filter(city => city.name.toLowerCase().startsWith(letter));
        }
// show the count of matching cities, or ask for a letter on the UI
        result.textContent = letter 
            ? `Number of cities starting with "${letter.toUpperCase()}": ${filtered.length}`
            : 'Please enter a letter.';
           });

  
  


