//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose')
const _ = require('lodash')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB")

const itemsSchema = new mongoose.Schema(
  {
    name: String
  }
);

const listSchema = new mongoose.Schema(
  {
    name: String,
    items: [itemsSchema]
  }
);


const Item = mongoose.model("Item", itemsSchema)
const List = mongoose.model("List", listSchema)

const marvel = new Item({
  name: "Read Marvel Book"
});

const dccomis = new Item({
  name: "Red DC-Comics"
})

const stape = new Item({
  name: "Have oxo with Sneha!"
})

const defaultItems = [marvel, dccomis,stape]

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

app.get("/", function(req, res) {

  const day = date.getDate();

  Item.find({})
  .then(function (foundItems) {
    if (foundItems.length == 0) {
      Item.insertMany(defaultItems)
      .then(function (err){
        if (err) {
          console.log(err)
        } else {
          console.log("Inserted Default values!")
        }
      })
      res.redirect("/")
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  })
  .catch(function (err) {
    console.log(err);
  });
});

// Dynamic Route
app.get("/:customListName", (req, res)=>{
  console.log(req.params.customListName)
  const customListName = _.capitalize(req.params.customListName)

  List.findOne({name: customListName})
  .then(function(foundList){
    // console.log(foundList)
    if(!foundList){
        // Custom List to be used in Dynamic Route
      const list = new List({
        name: customListName,
        items: defaultItems
      });
      list.save();
      res.redirect("/" + customListName);
    }else {
      // console.log('Found One!')
      res.render('list', {listTitle: foundList.name, newListItems: foundList.items})
    }
  })
  .catch(function(err){
    console.log('Already Exists!')
  })
});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list
  const day = date.getDate();
  const item = new Item({
    name: itemName
  });

  if (listName === "Today"){
    item.save()
    res.redirect("/")
  }else {
    List.findOne({name: listName})
    .then(function(foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
    .catch(function(err){
      console.log(err)
    })
  }
});

app.post("/delete", function(req,res){
  const checkedItemId = req.body.checkbox; // Sends the name-value pair from the form (list.ejs)
  const listName = req.body.listName
  console.log(listName)

  if (listName === "Today"){
    Item.findByIdAndRemove(checkedItemId)
    .then(function(obj){
      console.log(obj)
      console.log("Deleted Successfully!")
    })
    .catch(function(err){
      console.log(err)
    })
    res.redirect("/")
  } else {
    List.findOneAndUpdate(
      {name: listName}, 
      {$pull: {items: {_id: checkedItemId}}}
    ).then(function(foundItem){
      console.log('Item deleted successfully!')
      res.redirect("/" + listName);
    })
    .catch(function(err){
      console.log("Error Deleting!" + err)
    })
  }
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
