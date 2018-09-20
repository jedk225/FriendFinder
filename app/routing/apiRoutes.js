// LOAD DATA
var friendsArray = require("../data/friends");
//console.log(friendsArray)

module.exports = function (app) {

    //API GET request
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    //API POST request
    app.post("/api/friends", function (req, res) {

    });

};