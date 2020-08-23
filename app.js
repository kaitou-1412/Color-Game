var express = require("express");
var app = express();
var path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function(req, res){
	console.log("The Color Game server has started!");
	console.log("Listening through PORT 3000");
	res.render("home");
});

app.listen(process.env.PORT || 3000, process.env.IP);