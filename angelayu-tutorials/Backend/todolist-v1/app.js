const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + "/date.js");

const app = express();
var items = ["Get Food", "Cook Food", "Eat Food"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req,res) {

    let day = date.getDate();

    res.render('list', {listTitle: day, newItemlist: items});
    console.log("New Item: " + items + " " + day);
});

app.post("/", function(req,res) {
    let item = req.body.todolist;

    console.log(req.body.button);
    if (req.body.button === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});



// New Page Addition 
app.get("/work", function(req,res){
    res.render('list', {listTitle: "Work List", newItemlist: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log('Server is running on port 3000!')
});

// export KOPS_STATE_STORE="s3://my-state-store"
// export CONTROL_PLANE_SIZE="c5.large"
// export NODE_SIZE="m5.large"
// export ZONES="us-east-1a,us-east-1b,us-east-1c"
// kops create cluster --name ${NAME} \
// --node-count 1 \
// --zones "us-east-1a" \
// --node-size m5.large \
// --control-plane-size c5.large \
// --control-plane-zones us-east-1a \
// --yes