//global variables & API keys
var autoKey = "b1b92e789ec6ed213bedfaec1a833a6c";
var queryURL =
  `https://beermapping.com/webservice/loccity/`;

var city = $('#input');
var weatherKey = "3fef80c9e928a329e2b89a8041b3fe71";
var weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?";
  var weatherIconBase = `http://openweathermap.org/img/wn/`;

function getSearch(e){
  e.preventDefault();

  // $.ajax({
  //   url: `${weatherURL}q=${city.val()}&appid=${weatherKey}`,
  //   method: "GET"
  //   }).then(function (response){
  //   console.log(response);
  //   $('#weather-display').empty()
  //   var tempF= (response.main.temp - 273.15) * 1.8 + 32;
  //   var feelsTemp= (response.main.feels_like - 273.15) * 1.8 + 32;
  //   var infoBlock = `
  //     <span><h3>${response.name}</h3></span>
  //     <img src="${weatherIconBase}${response.weather[0].icon}@2x.png"
  //   </div>
  //   <div id='display-details'><h4>
  //   Temperature: ${tempF.toFixed(2)}<br>
  //   Feels like: ${feelsTemp.toFixed(2)}<br>
  //   Humidity: ${response.main.humidity}%<br>
  //   Wind Speed: ${response.wind.speed}mph <br></h4></div>
  //   
  // `
  // //puts the weather block on the page
  // $('#weather-display').prepend(infoBlock)

// })
$.ajax({
  url: `${queryURL}${autoKey}/${city.val()}&s=json`,
  method: 'GET'
}).then(function (response){
console.log(response);
})
  }
$('#form').submit(getSearch);
    

//create search button with user input
// $("#searchBtn").on("click", function(e) {
  
 

//   console.log("you click me");
// });

// $("#clearAll").on("click", function(e) {
//   e.preventDefault();

//   console.log("you click me");
// });
//take input and stringify

//create section to write information pulled from keys

//functions


