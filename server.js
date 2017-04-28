//========================================
// DEPENDENCIES
//========================================

var express = require("express");
var bodyParser = require("body-parser");

//========================================
//EXPRESS CONFIGURATION -- basic prop. for express server
//========================================

var app = express();

// set initial port

var PORT = 3000;
console.log(__dirname)

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/app/public"));

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ==========================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});