module.exports = commonscript => {
    console.log('routes');
    let auth = require('../../middleware/verifytoken');
    const  getlicompanyname  = require("../../controllers/li/commonscript.controller");
    //const { getlicompanyname } = require("../../controllers/li/commonscript.controller.js");
  
    // Create a new Customer
   // commonscript.post("/commonscript", commonscript.create);
  
    // Retrieve all commonscript
    commonscript.get("/api/li/getlicompanyname",auth, getlicompanyname.findAll);
  
    // Retrieve a single Customer with customerId
    commonscript.get("/api/li/getlicompanyname/:customerId", getlicompanyname.findOne);
  
    // Update a Customer with customerId
    //commonscript.put("/commonscript/:customerId", commonscript.update);
  
    // Delete a Customer with customerId
   // commonscript.delete("/commonscript/:customerId", commonscript.delete);
  
    // Create a new Customer
    //commonscript.delete("/commonscript", commonscript.deleteAll);
  };