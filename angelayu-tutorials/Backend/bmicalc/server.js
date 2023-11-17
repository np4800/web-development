const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(request,response) {
    response.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator", function(request,response){
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height)

    var bmi = (weight/height * height)
    console.log(bmi)
    // console.log(response)

    response.send("<h2>Result: " + Math.round(bmi) + "</h2>");
});

app.listen(3000, function(){
    console.log('Server is listening to port 3000')
})