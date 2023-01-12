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
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map, come back to finish this time permitting
var info = L.control({
    position: "bottomright"
    
  });

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
  };

// Add the info legend to the map.
info.addTo(map);

// Use this link to get the GeoJSON data.
var link = "resources/countries.geo.json";

// Getting our GeoJSON data
d3.json(link).then(function(data) {

    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        // Styling each feature (in this case, a neighborhood)
        style: function(feature) {
            return {
                color: "green",
                // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
                fillColor: "green",
                fillOpacity: 0.5,
                weight: 1.5
            };
        },

        // This is called on each feature.
        onEachFeature: function(feature, layer) {
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
                    myMap.fitBounds(event.target.getBounds());
                }
            });

            // Giving each feature a popup with information that's relevant to it, link to other d3.jsons at a later time
            layer.bindPopup("<h1>" + feature.properties.name + "</h2>");

        }

    }).addTo(map);

    // Loop through the countries 
    var countries = features.geometry.coordinates
    for (var i = 0; i < countries.length; i++) {

        // Create a new marker with the appropriate icon and coordinates.
        var newMarker = L.marker(countries, {
        });
    }



    const api_url = "/api/v1.0/countries";
    // Fetch the JSON data and console log it
    d3.json(api_url).then(data =>  {
        console.log(data);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_1750 = "/api/v1.0/1750";
    // Fetch the JSON data and console log it
    d3.json(api_url_1750).then(data_1 =>  {
        console.log(data_1);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_1800 = "/api/v1.0/1800";
    // Fetch the JSON data and console log it
    d3.json(api_url_1800).then(data_2 =>  {
        console.log(data_2);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_1850 = "/api/v1.0/1850";
    // Fetch the JSON data and console log it
    d3.json(api_url_1850).then(data_3 =>  {
        console.log(data_3);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_1900 = "/api/v1.0/1900";
    // Fetch the JSON data and console log it
    d3.json(api_url_1900).then(data_4 =>  {
        console.log(data_4);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_1950 = "/api/v1.0/1950";
    // Fetch the JSON data and console log it
    d3.json(api_url_1950).then(data_5 =>  {
        console.log(data_5);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_2000 = "/api/v1.0/2000";
    // Fetch the JSON data and console log it
    d3.json(api_url_2000).then(data_6 =>  {
        console.log(data_6);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });

    const api_url_2020 = "/api/v1.0/2020";
    // Fetch the JSON data and console log it
    d3.json(api_url_2020).then(data_7 =>  {
        console.log(data_7);
        newMarker.bindPopup("Country: " + country + "<br> C02 Emissions (in tons)" + co2_emission_in_tons);
    });
});