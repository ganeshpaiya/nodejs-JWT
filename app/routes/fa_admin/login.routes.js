module.exports = AdminLogin => {
    
    const adminlogin = require("../../controllers/fa_admin/login.controller.js");
    //const { getlicompanyname } = require("../../controllers/li/commonscript.controller.js");
      // Create a new Customer
   // commonscript.post("/commonscript", commonscript.create);
   AdminLogin.post("/api/fa_admin/login", adminlogin.create, (req, res) => {
      
     });
}