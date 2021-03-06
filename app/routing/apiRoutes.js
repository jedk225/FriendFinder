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

        var newFriend = req.body;

        //Maximum difference (5 * 10) - (1 * 10) = 40
        var initialDifference = 40;
        //First friend will always be Emilia (like Tom for MySpace unless there is a better match)
        var indexOfBestMatch = 0;

        for (var i = 0; i < friendsArray.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                var difference = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsArray[i].scores[j]));
                totalDifference = + difference;
            }

            if (totalDifference < initialDifference) {
                indexOfBestMatch = i;
                initialDifference = totalDifference;

            }
        }

        friendsArray.push(newFriend);

        res.json(friendsArray[indexOfBestMatch]);


    });

};


//TESTING LOOPS
// for (var i = 0; i < friendsArray.length; i++) {

//     for (var j = 0; j < friendsArray[i].scores.length; j++) {
//         console.log(friendsArray[i].scores[j])
//     }
// }