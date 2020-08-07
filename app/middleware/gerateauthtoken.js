const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
global.config = require('../config/jwtaccessk');
//const config = require("config");

   const gerateAuthToken=login=>
    {
        console.log(login);
    const token=jwt.sign({
    _id:login.id,
    _username:login.username
    },
    global.config.secretKey,
    
    {
        algorithm: global.config.algorithm,
        expiresIn: '1m'
    }
);
    return token
}
module.exports.gerateAuthToken=gerateAuthToken; 

    