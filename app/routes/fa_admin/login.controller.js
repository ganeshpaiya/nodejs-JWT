const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const { registerValidation, loginValidation,Register } = require("../../validation/li/li.validation");
const faadmin = require("../../models/fa_admin/login.model");
//const faadmin =new FAAadmin();
console.log(faadmin);

router.post("/register", async (req, res) => {
      const { error } = await registerValidation(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        let rows=await faadmin.faadminregisterfindOne(req.body.email);
        console.log(rows);
        if (rows) {
            return res.status(400).send("Email alreada");
        }
        // let res
        // try {
        //   res = await iplocation(ipAddr)
        //   if (res.country === 'US') {
        //     return `${res.country} - ${states[res.region_code]}`
        //   } else {
        //     return res.country
        //   }
        // } catch (err) {
        //   throw err
        // }
        // else {
        //     await faadmin.faadminregisterfindOne(req.body.email)
        //         .then(function (rows) {
        //             if (rows) {
        //                 return res.status(400).send("User already Exit");

        //             }
        //             else
        //             { 
                         
        //                 return res.status(400).send("Email ");
        //             }
                   
        //         })
        //         .catch(function (error) {
        //             return res.status(400).send({ message: error.details[0].message });
        //         })
                // const salt=await bcrypt.genSalt(10);
                // const hashpassword=await bcrypt.hash(req.body.password,salt);
                // const adminregister = new AdminRegister({
                //     username: req.body.username,
                //     //password:bcrypt.hash(req.body.password,salt),
                //      password:hashpassword,
                //     email: req.body.email
                    
                //   })
                //   console.log('test',adminregister);
                //   await faadmin.faadminsave(adminregister)
                // .then(function (rows) {
                //     if (rows) {
                //         return res.status(400).send("User already Exit");

                //     }
                   
                // })
                // .catch(function (error) {
                //     return res.status(400).send({ message: error.details[0].message });
                // })
                //   const saveuser= await faadmin.faadminsave(adminregister)
                //    res.sent(saveuser);
                // console.log("NotemailExit");
                
       // }




   
});

module.exports = router;
