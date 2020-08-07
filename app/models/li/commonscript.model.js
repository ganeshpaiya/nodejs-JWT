const sql = require("./db.js");
console.log('Models');


// constructor
const getlicompanyname = function(customer) {
  this.email = customer.email;
  //this.name = customer.name;
  //this.active = customer.active;
};





getlicompanyname.findById = (customerId, result) => {
  try{
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, async(err, res) => {
      if (err) {
       
        result(await err, null);
        return;
      }
  
      if (res.length) {
         //const results = await  res[0];
        result(null,await res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  }
  catch
  {
    result("Not working getlicompanyname.findById", null);
        return;
  }
  
};


getlicompanyname.getAll = result => {
  sql.query("SELECT * FROM faa_commtrack_uat.fa_admin",async (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null,await err);
      return;
    }
    else{
      
      result(null,await res);
      
    }

   
  });
};



module.exports = getlicompanyname;
  