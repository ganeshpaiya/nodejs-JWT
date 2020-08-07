module.exports = register => {
    console.log('routes');
    const adminregister = require("../../controllers/fa_admin/register.controller.js");
    //const { getlicompanyname } = require("../../controllers/li/commonscript.controller.js");
  
    // Create a new Customer
   // commonscript.post("/commonscript", commonscript.create);
      // Create a new empolyee
    register.post("/api/fa_admin/register", adminregister.create, (req, res) => {
      
    });
    // register.post("/api/fa_admin/login", adminlogin.create,(req, res) => {
      
    // });
  
    // Retrieve a single Customer with customerId
    //register.get("/api/li/getlicompanyname/:customerId", getlicompanyname.findOne);
  
    // Update a Customer with customerId
    //commonscript.put("/commonscript/:customerId", commonscript.update);
  
    // Delete a Customer with customerId
   // commonscript.delete("/commonscript/:customerId", commonscript.delete);
  
    // Create a new Customer
    //commonscript.delete("/commonscript", commonscript.deleteAll);
  };
// const express = require("express");
// const bcrypt = require("bcrypt");
// const DB = require("../../models/li/db.js");
// const router = express.Router();
// var Register = require("../../models/fa_admin/register.model.js");
// const AdminRegister = require("../../controllers/fa_admin/register.controller.js");
// var adminregister = new AdminRegister();
// //console.log(AdminRegister);
// console.log(adminregister);

// router.post("/register", async (req, res) => {
//     try {
//         console.log("Step01");
//         var register = new Register(req.body);
//         //res.send(register);
//         var error  = new register.validate(register);
//         if (error) {
//             res.status(400).send({ message: error.details[0].message });
//         }
//         else {
//             console.log("Step02");
//             //let checkadmin = await adminregister.fetchuserbyemail(register.email);
//             adminregister.fetchuserbyemail(register.email, (err, data) => {
//              console.log(register.email);
//                 if (err) {
                  
//                   } else {
//                       console.log("ganesh",data);
//                     res.send(data);
//                   }
               
//               });
//             }
//             // console.log("gansh",checkadmin.length);
//             // if (checkadmin.length = 0) {
//             //     res.status(400).send("Email Already Registered");
//             //     console.log("Email Already Registered");
//             // }
//             // else {
//             //     console.log(register.password);
//             //     const salt = await bcrypt.genSalt(10);
//             //     register.password = bcrypt.hash(register.password, salt)
//             //     let user = await adminregister.doadminregister(register);
//             //     console.log(user.insertedId);
//             //     console.log(error);
//             //     res.status(200).send("hey");
//             // }

//        // }





//     } catch (error) {
//         res.status(400).send(error);
//     }

// });

// module.exports = router;
