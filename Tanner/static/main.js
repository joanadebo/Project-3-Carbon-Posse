console.log("Hello World")

const api_url = "/api/v1.0/countries";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url).then(data =>  {
console.log(data);
// var div = d3.select("#my_div");
// div.append("h1").text(data);
});


const api_url_1750 = "/api/v1.0/1750";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_1750).then(data_1 =>  {
console.log(data_1);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_1800 = "/api/v1.0/1800";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_1800).then(data_2 =>  {
console.log(data_2);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_1850 = "/api/v1.0/1850";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_1850).then(data_3 =>  {
console.log(data_3);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_1900 = "/api/v1.0/1900";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_1900).then(data_4 =>  {
console.log(data_4);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_1950 = "/api/v1.0/1950";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_1950).then(data_5 =>  {
console.log(data_5);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_2000 = "/api/v1.0/2000";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_2000).then(data_6 =>  {
console.log(data_6);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

const api_url_2020 = "/api/v1.0/2020";

// function update_my_div(){
    // Fetch the JSON data and console log it
d3.json(api_url_2020).then(data_7 =>  {
console.log(data_7);
// // var div = d3.select("#my_div");
// // div.append("h1").text(data);
});

//  Event listeners
// d3.select("#my_button").on("click", update_my_div);
// const api_url = "http://127.0.0.1:5500/api/v1.0/countries";

// // Fetch the JSON data and console log it
// d3.json(api_url).then(function(data) {
//     console.log(data);
//   });
// Initialize and add the map
// $(document).ready(function() {
//     var city, map;
//     map = $('.ct-map');
//     city = map.find('.ct-city');
//     city.each(function() {
//       var button, that;
//       that = $(this);
//       button = that.find('.ct-city__button');
//       return button.on('click', function() {
//         city.not(that).removeClass('active');
//         if (that.hasClass('active')) {
//           that.removeClass('active');
//           return map.removeClass('popup-open');
//         } else {
//           that.addClass('active');
//           return map.addClass('popup-open');
//         }
//       });
//     });
// });
