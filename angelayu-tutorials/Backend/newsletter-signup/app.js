const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merged_fields: {
                    FNAME: fname,
                    LNAME: lname,
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);
    console.log("First Name: "+fname + " \n" + "Last Name: " +lname+ "\nEmail: "+email);
    const url = "https://us21.api.mailchimp.com/3.0/lists/dfd0d2e7c7";
    const options = {
        method: "POST",
        auth: "nikhil:ca1bed24a3b5901207a02bddebe47cf5-us2"
    }

    const request = https.request(url, options, function(response){
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    app.post("/failure", function(req,res){
        res.redirect("/");
    })

    request.write(jsonData);
    request.end();

    

});


app.listen(3000, function() {
    console.log("Server is listening to port 3000");
});

// API Key: ca1bed24a3b5901207a02bddebe47cf5-us21
// List ID: dfd0d2e7c7

// curl -X POST \
//   'https://${dc}.api.mailchimp.com/3.0/lists/{list_id}?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>' \
//   --user "anystring:${apikey}"' \
//   -d '{"members":[],"sync_tags":false,"update_existing":false}'