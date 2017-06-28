var express = require('express');
var db = require("./models");
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

// var PORT = process.env.PORT || 3000;
var PORT = process.env.NODE_ENV || 3000;
var app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

// app.listen(PORT);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});