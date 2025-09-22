// Js source code

const input = document.getElementById('letterInput');
const result = document.getElementById('result');
const cityList = document.getElementById('cityList');
// Encode endpoint URL for proxy
    const endpoint = encodeURIComponent('https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22');
// Try fetching from the endpoint using AllOrigins proxy to bypass CORS
    fetch(`https://api.allorigins.win/get?url=${endpoint}`)
    .then(res => res.json())
    .then(data => {
    const jsonData = JSON.parse(data.contents);
        if (jsonData.list && jsonData.list.length > 0) {
        cities = jsonData.list;
        console.log("Loaded cities from endpoint:", cities.map(c => c.name));
        } 
        else {
        console.log("Endpoint returned empty, check the endpoint data.");
        }
       })
    input.addEventListener('input', () => {
    const letter = input.value.toLowerCase().trim();

       if (letter && !/^[a-zA-Z]$/.test(letter)) {
    alert('Please enter only a letter (a-z OR A-Z)');
  }


let filtered = [];

    if (letter ) {
        filtered = cities.filter(city => city.name.toLowerCase().startsWith(letter));
        }
        result.textContent = letter
            ? `Number of cities starting with "${letter.toUpperCase()}": ${filtered.length}`
            : 'Please enter a letter.';
           });

  
  


