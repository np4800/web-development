const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    console.log("Result: "+result)
    response.send("<h2>Result:"+  result +  "<h2>");
});

app.listen(3000, function(){
    console.log('Server is listening on port 3000')
});
