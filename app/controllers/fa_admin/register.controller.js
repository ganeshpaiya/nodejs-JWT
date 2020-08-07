const AdminRegister = require("../../models/fa_admin/register.model.js");

const { registerValidation, loginValidation } = require("../../validation/li/li.validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

console.log('controller');
// Create and Save a new commonscript
exports.create =  (req, res) => {

  (async () => {
    try {
      let error = await registerValidation(req.body);
      //console.log('num', error);
      //if (error) {
    
             //return res.status(400).send("testerror");
        //       //return res.status(400).send({ message: error.details[0].message });
          // }
    } catch(e) {
      return res.status(400).json({ message: e.details[0].message });
     // return res.status(400).send("testerror");
      //console.log(e);
    }
  })();
 
  //return res.status(400).send({ message: error.details[0].message });
  // (async () => {
  //   let error = await registerValidation(req.body).catch((err) => console.log('caught it'));
  //   if (error) {
    
  //     return res.status(400).send("testerror");
  //       //return res.status(400).send({ message: error.details[0].message });
  //   }
  //    })();
   
  // if (error) {
    
  //   return res.status(400).send("testerror");
  //     //return res.status(400).send({ message: error.details[0].message });
  // }
    // Validate request
    // if (!req.body) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    // }
    var salt= bcrypt.genSalt(10)
//=bcrypt.hash('',salt);
// Create a commonscript
const adminregister = new AdminRegister({
    username: req.body.username,
    //password:bcrypt.hash(req.body.password,salt),
     password:bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
    
  })

  // Save commonscript in the database
  AdminRegister.create(adminregister, async (err, data) => {
    if (err)
     await res.status(500).send({
        message:
          err.message || "Some error occurred while creating the commonscript."
      });
    else await res.send(data);
  });
};

