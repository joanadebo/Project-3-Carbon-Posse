// console.log('Hi')


// 4 Facts on C02 Emissions Animation
$(document).ready(function(){
   
   
   var infoBlock = false;
    $(".flitskaart").click(function(){
       if (!infoBlock) {
        var div = $(".flitskaart");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext").text("Global sea levels are rising faster today than ever before...average sea level has risen 8 to 9 inches since 1880.");
          
          
        
          infoBlock = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-flag"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-question"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-life-buoy"></i>');
         
        infoBlock3 = false;
      }
      else {
         var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
        //  add photo 


         $(".ptext").prepend('<i class="  fa fa-4x fa-globe"></i>');
         
        infoBlock = false;     
      }
       
    });
       
       var infoBlock1 = false;
    $(".flitskaart1").click(function(){
       if (!infoBlock1) {
        var div = $(".flitskaart1");
        div.animate({height: '400px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext1").text("The main sources of CO2 emissions in the United States are transportation, agriculture, electricity, and industry. Which uses the combustion of fossil fuels such as gasoline and diesel to foster our everyday needs.");
        
          infoBlock1 = true;
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-question"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-life-buoy"></i>');
         
        infoBlock3 = false;
          
         var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-globe"></i>');
         
        infoBlock = false;  
      }
      else {
         var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-flag"></i>');
         
        infoBlock1 = false;     
      }
    
    });
   var infoBlock2 = false;
    $(".flitskaart2").click(function(){
       if (!infoBlock2) {
        var div = $(".flitskaart2");
        div.animate({height: '400px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext2").text("Chronic disease does not mean the end of the world, it just means that you are playing life on hard mode. We can give you some expert exercises to get you ready for the challenge.");
        
          infoBlock2 = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-flag"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-life-buoy"></i>');
         
        infoBlock3 = false;
          
          var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-globe"></i>');
         
        infoBlock = false; 
      }
      else {
         var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-question"></i>');
         
        infoBlock2 = false;     
      }
    
    });
   
   var infoBlock3 = false;
    $(".flitskaart3").click(function(){
       if (!infoBlock3) {
        var div = $(".flitskaart3");
        div.animate({height: '400px', opacity: '0.4'}, "slow");
        div.animate({width: '180px', opacity: '0.8'}, "slow");
          $(".ptext3").text("We have studied the posture, body compositions and running styles of the top athletes in South Africa. We use this information to analyse our client and provide useful advice and expert exercises.");
        
          infoBlock3 = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-flag"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-question"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-globe"></i>');
         
        infoBlock = false; 
      }
      else {
         var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-life-buoy"></i>');
         
        infoBlock3 = false;     
      }
    
    });
});


// Javascript Coding for our Main Chart
// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
    year_1750: new L.LayerGroup(),
    year_1800: new L.LayerGroup(),
    year_1850: new L.LayerGroup(),
    year_1900: new L.LayerGroup(),
    year_1950: new L.LayerGroup(),
    year_2000: new L.LayerGroup(),
    year_2020: new L.LayerGroup()
};
// Create the map with our layers.
var map = L.map("map-id", {
    center: [13.2763311,-4.683209],
    zoom: 2,
    layers: [
      layers.year_1750,
      layers.year_1800,
      layers.year_1850,
      layers.year_1900,
      layers.year_1950,
      layers.year_2000,
      layers.year_2020,
    ]
});
// Add our "streetmap" tile layer to the map.
streetmap.addTo(map);

// Create an overlays object to add to the layer control.

var overlays = {
    "1750": layers.year_1750,
    "1800": layers.year_1800,
    "1850": layers.year_1850,
    "1900": layers.year_1900,
    "1950": layers.year_1950,
    "2000": layers.year_2000,
    "2020": layers.year_2020
  };

// Create a control for our layers, and add our overlays to it.
// L.control.layers(null, baselayer).addTo(map);
L.control.layers(overlays, null).addTo(map);

function chooseColor(type) {
    if (type == "Feature") return "green";
    else return "black";
}
const geojson_url = "/api/v1.0/geoJSON";
//     // Fetch the JSON data and console log it
    d3.json(geojson_url).then(function(geo_data) {
        const API_BASE_URL = "/api/v1.0/";
        d3.json(API_BASE_URL + "1750").then(emissions_data =>  {
            // console.log(emissions_data)
            // Creating a GeoJSON layer with the retrieved data
            L.geoJson(geo_data, {
                // Styling each feature (in this case, a neighborhood)
                style: function (feature){
                    return {
                        color: chooseColor(feature.type),
                        // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                        fillColor: "green",
                        fillOpacity: 0.5,
                        weight: 1.5
                    };
                },
                // This is called on each feature.
                onEachFeature: function(feature, layer) {
                    let country = feature.properties.name;
                    // Set the mouse events to change the map styling.
                    layer.on({
                    // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                        mouseover: function(event) {
                            layer = event.target;
                            layer.setStyle({
                            fillOpacity: 0.9
                            });
                        },
                    // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                        mouseout: function(event) {
                            layer = event.target;
                            layer.setStyle({
                            fillOpacity: 0.5
                            });
                        },
                    // When a feature (country) is clicked, it enlarges to fit the screen.
                        click: function(event) {
                            map.fitBounds(event.target.getBounds());
                        }
                    });
                    // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
                    let emissions_rows = emissions_data.filter(row => row.country == country);
                    if (emissions_rows.length > 0){
                        var emissions = emissions_rows[0]['co2_emission_in_tons'];     
                    } else {
                        var emissions = "N/A";
                    }
                    console.log(emissions);
                    console.log(country);
                    layer.addTo(layers.year_1750);
                    layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
                }
    });
 })  //  closes d3.emissions api call 
 d3.json(API_BASE_URL + "1800").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_1800);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})  
d3.json(API_BASE_URL + "1850").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_1850);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})  
d3.json(API_BASE_URL + "1900").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_1900);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})
d3.json(API_BASE_URL + "1950").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_1950);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})  
d3.json(API_BASE_URL + "2000").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_2000);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})  
d3.json(API_BASE_URL + "2020").then(emissions_data =>  {
    // console.log(emissions_data)
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(geo_data, {
        // Styling each feature (in this case, a neighborhood)
        style: function (feature){
            return {
                color: chooseColor(feature.type),
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        // This is called on each feature.
        onEachFeature: function(feature, layer) {
            let country = feature.properties.name;
            // Set the mouse events to change the map styling.
            layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.9
                    });
                },
            // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
            // When a feature (country) is clicked, it enlarges to fit the screen.
                click: function(event) {
                    map.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            let emissions_rows = emissions_data.filter(row => row.country == country);
            if (emissions_rows.length > 0){
                var emissions = emissions_rows[0]['co2_emission_in_tons'];     
            } else {
                var emissions = "N/A";
            }
            console.log(emissions);
            console.log(country);
            layer.addTo(layers.year_2020);
            layer.bindPopup("<h1>" + country + "</h2>" + 'C02 Emissions (in tons):' + '<br>' + emissions);
        }
});
})  
}).addTo(map); //closes d3 geojson call 





