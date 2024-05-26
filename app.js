const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();//all these 3 lines are essentials as well as the last 3 lines of our code
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// app.post("/", function (req, res) {

//     const query = req.body.cityName;
//     const apiKey = "60f341fad0e8b27c81bbd3d2bf68915a";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
//     https.get(url, function (response) {
//         console.log(response.statusCode);

//         response.on("data", function (data) {//what our cmd shows
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const weatherIcon = weatherData.weather[0].icon;
//             const iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
//             res.write("<h1>Todays Weather in " + query +" is " + temp + " Degree Celsius with " + weatherDescription + "</h1>");
//             res.write("<img src=" + iconURL + ">");
//             res.send();//IMPORTANT: We can only have ONE'res.send' here but if want to display something we can use multiple 'res.write()' as well BUT we still will need to call one 'res.send()'[leave it empty & have all data to display inside res.write()] method after all those 'res.write'
//         });
//     });
// })





app.listen(3000, function () {//essential for server
    console.log("Server is running on port 3000");
});