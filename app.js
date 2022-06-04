const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname + "/date.js");

const app = express();

const items=["Read books","Workout","Meditate"];
const workItems=[];

app.set("view engine", "ejs"); // for setting ejs
app.use(bodyParser.urlencoded({extended: true}));  // for body parsing 
app.use(express.static("public"));

//get server
app.get("/", function (req, res) { 

    let day =date.getDate();

  res.render("list", { listTitle: day,newListItems: items });  //res.render for displaying a html edited file (list.ejs files)
});


// post server
app.post("/",function(req,res){
    let item= req.body.newItem;  //get inputed file from from to server.

    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work",function(req,res){
res.render("list",{listTitle:"Work List", newListItems: workItems});
});



// listen in port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
