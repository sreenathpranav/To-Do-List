const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items=["Read books","Workout","Meditate"];

app.set("view engine", "ejs"); // for setting ejs
app.use(bodyParser.urlencoded({extended: true}));  // for body parsing 

//get server
app.get("/", function (req, res) { 

  var today = new Date();
  var options = {
      weekday: "long",
      day: "numeric",
      month: "long"
  };
  var day= today.toLocaleDateString("en-US",options);

  res.render("list", { kindOfDay: day,newListItems: items });  //res.render for displaying a html edited file (list.ejs files)
});


// post server
app.post("/",function(req,res){
    var item= req.body.newItem;  //get inputed file from from to server.
     items.push(item);
    res.redirect("/");

});

// listen in port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
