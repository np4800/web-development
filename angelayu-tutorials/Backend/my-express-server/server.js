
const express = require('express');
const app = express();

app.listen(3000);

app.get("/", function(request, response){
	response.send("Hello Sneha!");
});

app.get("/contact", function(request, response){
	response.send("<h2><em>Call Me Darling</em></h2>");
});
console.log('Server is listening at port 3000');
