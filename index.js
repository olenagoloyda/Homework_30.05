let curenTime = document.querySelector('#curent-time');
let now = new Date;;
let actualCity = 'Lviv';

function curentDay() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[now.getDay()];
}

function curentHour() {
    return now.getHours();
}

function curentMinutes() {
    return now.getMinutes();
}
let time = `${curentDay()} ${curentHour()}:${curentMinutes()}`;
curenTime.innerHTML = time;
let searchForm = document.querySelector('#search-form');


function showTemperature(response) {
    let temp = document.querySelector('#degrees');
    temp.innerHTML = Math.round(response.data.main.temp);
    let city = document.querySelector('#curent-city');
    city.innerHTML = response.data.name;
    let sky = document.querySelector('#sky');
    sky.innerHTML = response.data.weather[0].description;
    let humidity = document.querySelector('.hum');
    humidity.innerHTML = response.data.main.humidity;
    let wind = document.querySelector('.wind');
    wind.innerHTML = response.data.wind.speed;
}

function searchCity(actualCity) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${actualCity}&appid=52548afd3d9067b1c2e40e02f67065f2&units=metric`
    axios.get(apiUrl).then(showTemperature);
}

function enterCity() {
    event.preventDefault();
    let newCity = document.querySelector('#city-search');
    let curentCity = document.querySelector('#curent-city');
    actualCity = newCity.value;
    curentCity.innerHTML = newCity.value;
    searchCity(actualCity)
}

let scanLocation = document.querySelector('.curent-weather');

function getCurrentWeather(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=52548afd3d9067b1c2e40e02f67065f2&units=metric`
    axios.get(apiUrl).then(showTemperature);
}


function scancity() {
    navigator.geolocation.getCurrentPosition(getCurrentWeather)
}



scanLocation.addEventListener('click', scancity);

searchForm.addEventListener('submit', enterCity);

blablabla