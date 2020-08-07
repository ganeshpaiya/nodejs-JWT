const sql = require("../../models/li/db");


module.exports = {
   
//class Faadmin {
    faadminregisterfindOne: function (email,callback) {
        return new Promise(function(resolve, reject) {
            sql.query("SELECT * FROM `faa_commtrack_uat`.`fa_admin` where email =?",[email], function (err, rows) {
                //console.log(rows); // its showing the records in cmd
                if (err) 
                    reject(null,err)
                else 
                    resolve(rows[0],null);
            })
        })
    },
    
    faadminsave: function (adminregister,callback) {
        
        console.log('ganssh',adminregister);
        return new Promise(function(resolve, reject) {
            sql.query("insert into `faa_commtrack_uat`.`fa_admin` SET ?", adminregister, function (err, rows) {
                //console.log(rows); // its showing the records in cmd
                if (err) 
                    reject(err)
                else 
                    resolve(rows[0]);
            })
        })
    }
}

    // faadminregisterfindOne(email){
    //       console.log(email);
    //     sql.query("SELECT * FROM `faa_commtrack_uat`.`fa_admin` where email =?",[email], (err, rows) => {
    //         if (err) {  
    //             return console.error('Error executing query', err.stack);
    //         }
    //         else
    //         {
    //             return rows;
    //             //return console.log('Error executing query',rows[0]);
    //         }
            
    //     });
        // sql.query('select * from faa_commtrack_uat.fa_admin where email=?', [email])
        // .then(rows => {
        //     return console.log(rows);
        // })
        // .catch(err => {
        //     return console.error('Error executing query', err.stack);
        // }); 
        
        // return sql.query("select * from faa_commtrack_uat.fa_admin where email=?",email).then(rows=>{
        //     //console.log(rows);
        //     return rows;
        // });
    //}
//}

//console.log('Error executin',Faadmin.faadminregisterfindOne);

//module.exports = faadminregisterfindOne;