/* require is a keyword used to use a package and below are the packages */
const express = require("express"); 
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();// now we have our express app
app.set("view engine", "pug"); //setting the view engine as pug
app.set("views", path.join(__dirname, "views")); //there's a folder called views and this is how to get it
app.use(bodyParser.urlencoded({ extended: true })); //for geting the posted data from the form in the console/body and the output is json
// app.use(bodyParser.json());




/* mongoose db connection */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");//


/* Creating a Database Schema....schema should be the same format as req.body */
const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
  required: 'Please Enter first name'},
  lastname: String,
  gender: String,
  country: String,
  city: String
});

/* creates documents in the db------------------------------------- name of the collection model(collection storage,schemaStructure)....takes on the structure of schema and the req.body(user data) into the Register collection */
const Register = mongoose.model("Register", registerSchema);

/* Routes */
//Get reads the registerform.pug and displays it on the path
app.get("/register", (req, res) => {
  res.render("register_form");
});

//extracts all data for the database and displays it
app.post("/register", (req, res) => {
  const register = new Register(req.body); //create an instance of the Register model for data entered(req.body==got from the user) 
  register.save() //and the model is the one saved to the database
    .then(item => { //.then promise and used because nodejs asyncronously waits
      Register.find().then( //query the collection
        items=>{
                 res.render("list", { users: items }); //{users:items}--variable name users---passes all the items to the next page/for i.e list
               })
    })
    .catch(err => { //.catch promise and used because nodejs asyncronously waits
      res.status(500).send("unable to save to database");
    });
});

/* listening for requests: the server */
app.listen(3000, function() {
  console.log("Express listening  on 3000");
});