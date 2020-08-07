const sql = require("../../models/li/db");

// constructor
const Adminlogin = function (adminlogin) {
  
  this.username = adminlogin.username;
  this.password = adminlogin.password;
};

Adminlogin.create =  (adminlogin, result) => {
  console.log(adminlogin.username);
  sql.query("select * from faa_commtrack_uat.fa_admin where username ='" + adminlogin.username + "'",async (err, res) => {
    if (err) {
      console.log("error: ", err);
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
     
      result(null,await res[0]);
      return;
    }
     else {
        result(null,'User Name Not Match');
        return;
     }

  });


};


module.exports = Adminlogin