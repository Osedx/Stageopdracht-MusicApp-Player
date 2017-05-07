"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

require("rootpath")();
var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var path = require("path");
var compress = require("compression");
var bodyParser = require("body-parser");
var cors = require("cors"); //middleware

app.use(compress());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    //    res.header("Content-Type", "application/json", "charset": "UTF-8" );
    next();
});

    // Set static folder
    app.use(express.static(path.join(__dirname, 'dist')));

    var routes = glob("./app/routes/**/*.js", {
        sync: true
    });

    // Require each route
    _.forEach(routes, function(route) {
        // Exclude current file
        if (route !== "app.js") {
            // Remove `./` from route before requiring it
            require(route.substring(2))(app);
        }
    });

    // Fallback route
    app.route(["/", "/*"]).all(function(req, res, next) {
//        res.set("Content-Type", "text/html");
        var indexStream = fs.createReadStream(path.join('dist', "index.html"));

        indexStream.on("error", function(err) {
                res.status(500).json(err);
            });

        indexStream.pipe(res);
    });

// Start the server
server.listen(process.env.PORT || 3016, function () {
    console.log("app listening at http://localhost:%s running in %s mode.", process.env.PORT || 3016, process.env.NODE_ENV); // eslint-disable-line no-console
});

exports = module.exports = app;