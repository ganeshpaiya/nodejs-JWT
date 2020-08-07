const AdminLogin = require("../../models/fa_admin/login1.model.js");

const  {login}  = require("../../validation/li/li.validation");
const geratetoken=require("../../middleware/gerateauthtoken")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

console.log('logincontroller');
// Create and Save a new commonscript
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//     }
exports.create =  (req, res) => {
    // Validate request
    // if (!req.body) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    // }
  (async () => {
    try {
     await login.loginValidation(req.body);
     return res.status(400).json({ message: e.details[0].message });
    } catch(e) {
      return res.status(400).json({ message: e.details[0].message });
    
    }
  })();
    

// Create a commonscript
const adminlogin = new AdminLogin({
    username: req.body.username,
    password:req.body.password,
    email:req.body.email
    
    
  })

  // Save commonscript in the database
  AdminLogin.create(adminlogin, async (err, data) => {
    if (err)
    {
        await res.status(500).send({
            message:
              err.message || "Some error occurred while creating the commonscript."
          });
    }
    else
    {
         const accessTokenSecret = 'somerandomaccesstoken';
         const refreshTokenSecret = 'somerandomstringforrefreshtoken';
        let result=data;
        console.log('length',data);
        if(data.length < 1)
        {
             await res.send(data);
        }
        else{
            bcrypt.compare(req.body.password,data.password,async(err,result)=>{
               if(err)
               { 
                return res.status(401).json({
                    message: 'Unauthorized Access'
                });
                // return res.status(500).send({
                //     message:
                //        "Auth faildt."
                //   });
                   //return res.send('Auth faild');
                }
               if(result)
                {
                   const jwttoken=await geratetoken.gerateAuthToken(req.body)
                    // generate an access token
                    return res.status(500).send({token : jwttoken});

                    return res.send('Auth Sucessfull');
                //return res.ststus(200).json({message:'Auth Sucessfull'});
                }
                // return res.status(500).send({
                //     message:
                //        "Auth faildt."
                //   });
                return res.status(403).json({
                    message: 'Forbidden Access'
                });
                //return res.send('Auth faild 02');
                //return res.ststus(401).json({message:'Auth faild 02'});
               
            })

            

            //await res.send(data);
        }

        
    }
     
    
  });
};

