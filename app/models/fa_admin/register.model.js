const sql = require("../../models/li/db");

// constructor
const AdminRegister = function (adminregister) {
  this.email = adminregister.email;
  this.username = adminregister.username;
  this.password = adminregister.password;
};

AdminRegister.create =  (adminregister, result) => {
  console.log(adminregister.password);
  sql.query("select * from faa_commtrack_uat.fa_admin where email ='" + adminregister.email + "'",async (err, res) => {
    if (err) {
      console.log("error: ", err);
      result( await err, null);
      return;
    }
    else if (res.length > 0) {
      console.log("res: ",await res.length);
      result(null, "Email ID already exist");
      return;
    }
    else {
      sql.query("insert into `faa_commtrack_uat`.`fa_admin` SET ?", adminregister, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        else {
          console.log("created admin register: ", { id: res.insertId, ...adminregister });
          result(null, { id: res.insertId, ...adminregister });
          return;
        }


      });
    }

  });


};


module.exports = AdminRegister