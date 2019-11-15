const express = require("express"); 
const router= express.Router();
const Register = require("../models/registerModel");


/* Routes */
//Get reads the registerform.pug and displays it on the path
router.get("/", (req, res) => {
    res.render("register_form");
  });
  
  //extracts all data for the database and displays it
  router.post("/", (req, res) => {
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
  
  module.exports=router;