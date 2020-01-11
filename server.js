const express = require("express"); // Server
const bodyParser = require("body-parser"); // Allows JSON Body from POST Request to be Accessed
const exphbs = require("express-handlebars"); // Require Templating Engine Handlebars

const app = express(); // Initalise Express Server

let PORT = process.env.PORT || 9080; 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); 


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgersController.js");
app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});