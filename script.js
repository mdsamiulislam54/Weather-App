let key = '19ac414b2c49de5832bae06bb0e73117';
let link = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';  // Moved 'q=' to the URL

const valueInput = document.querySelector('.weather_input input');
const searchBtn = document.getElementById('searchBtn');

async function checkwether(city) {
    try {
        const respons = await fetch(link + city + `&appid=${key}`);
        const data = await respons.json();
       

        // Check if the city is found (handle the case when the API doesn't return valid data)
        if (data.cod === 200) {
            document.getElementById('tempture').innerText = Math.floor(data.main.temp) + "℃";
            document.getElementById('cityname').innerText = data.name;
            document.getElementById('humidity').innerText = data.main.humidity + "%";
            document.getElementById('wind_speed').innerText = data.wind.speed + "km/h";
        } else {
            alert("City not found. Please check the spelling or try a different city.");
        }
        
       
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// defult check weather city
window.addEventListener('load', () => {
    checkwether('bangladesh');
});

searchBtn.addEventListener("click", () => {
    const city = valueInput.value.trim(); // Trim extra spaces
    if (city) {
        checkwether(city);
        valueInput.value = "";
    } else {
        alert("Please enter a city name.");
    }
   
});








   