// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Tells node that we are creating an "express" server
var app = express();


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// The below points our server to a series of "route" files which give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// =============================================================================
//Listener: "Starts" the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});