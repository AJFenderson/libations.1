var autoKey = "2526bdb078c64052edacba2a56ac385d";
var queryURLBase =
  "https://sandbox-api.brewerydb.com/v2/locations/?key=" + autoKey;
console.log(queryURLBase);

var mapKey = "AIzaSyAn329Spd1q1DQlk4-nhlHx2q_dEr7jids";
var queryURLBaseTwo =
  "https://maps.googleapis.com/maps/api/js?key=" + mapKey + "&callback=initMap";
console.log(queryURLBaseTwo);

//global variables
//create search button with user input
function cityName() {
  var userCityInput = document.getElementById("userCity").value;
  alert("Value inside text box is: " + userCityInput);
  console.log(userCityInput);
}
//take input and stringify
//create section to write information pulled from keys

//functions