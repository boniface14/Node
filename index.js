/* require is a keyword used to use a package and below are the packages */
const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();// now we have our express app

// middleware
app.set("view engine", "pug"); //setting the view engine as pug
app.set("views", path.join(__dirname, "views")); //there's a folder called views and this is how to get it
app.use(bodyParser.urlencoded({ extended: true })); //for geting the posted data from the form in the console/body and the output is json
// app.use(bodyParser.json());

//import routes
const RegistrationRoute = require("./routes/routes")
app.use("/register",RegistrationRoute)

/* mongoose db connection */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");//


/* creates documents in the db------------------------------------- name of the collection model(collection storage,schemaStructure)....takes on the structure of schema and the req.body(user data) into the Register collection */
//const Register = mongoose.model("Register", registerSchema);


/* listening for requests: the server */
app.listen(3000, function() {
  console.log("Express listening  on 3000");
});