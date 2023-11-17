const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res) {
    const query = req.body.cityName;
    console.log(query)
    const apiKey = "4e59a93218742fd3cd47387bcc0b0aa4";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=" +apiKey;

    https.get(url, function(response){
        response.on("data", function(data){
            console.log(url)
            const weatherData = JSON.parse(data);
            // console.log(weatherData)
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write("<h1>The temprature in" + query + " is " + temp + " degrees</h1>");
            res.write("<h2>The weather is currently: "+weatherDescription+"</h2>");
            
            res.send();
        });
    });
});

app.listen(3000);

console.log('Server is listening at port 3000!');