const appKey = "25e989bd41e3e24ce13173d8126e0fd6";

//referencing html elements to use in javascript
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let descript = document.getElementById("descript");



// added event listeners to seach and on an "enter" click
searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);
gifButton.addEventListener("click", enterPressed);
//funciton that loads the info once the search is entered
function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}


function findWeatherDetails() {
    if (searchInput.value === "") {
        alert("Cannot read invisible writing");
    }

    else {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + appKey;
        httpRequestAsync(searchLink, theResponse);
    }
}

//sets the info from the api call to the info searched
function theResponse(response) {

    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    humidity.innerHTML = jsonObject.main.humidity + "%";
    descript.innerHTML = jsonObject.weather[0].description;

}

function httpRequestAsync(url, callback) {
    console.log("hello");
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
        } else if (httpRequest.status == 404) { alert("NOT A REAL PLACE"); }
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();

};
//API call
// http://api.openweathermap.org/data/2.5/weather?APPID=25e989bd41e3e24ce13173d8126e0fd6&q=chicago