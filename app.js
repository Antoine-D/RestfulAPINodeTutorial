/* express initialization */
var express = require('express');
var app = express();

/* body-parser initialization (use the body-parser json package) */
var bodyParser = require('body-parser');
app.use(bodyParser.json());

/* Main Router */
var ourApiRouter = express.Router();

//Function that's called when /api/ is accessed
ourApiRouter.use(function (req, res, next) {
    res.json({
        name: "Carolina Panthers",
        city: "Charlotte",
        state:"North Carolina",
        key_players:[
            {name: "Cam Newton", age: 25, height_meters: 1.96, weight_pounds: 245, position: "Quarterback", college: "Auburn"},
            {name: "Jonathan Stewart", age: 27, height_meters: 1.78, weight_pounds: 235, position: "Runningback", college: "Oregon"},
            {name: "Kelvin Benjamin", age: 23, height_meters: 1.96, weight_pounds: 240, position: "Wide Receiver", college: "Florida State"}
        ],
        conference: "NFC",
        division: "South"
    });
});

//Registering the main router
app.use('/api/', ourApiRouter);

//Add our app the the module
module.exports = app;
