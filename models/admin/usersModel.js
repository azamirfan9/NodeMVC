const sql = require("../db.js");

// constructor
const User = function(user) {
    Object.keys(user).forEach(argKey => this[argKey] = user[argKey])
    };
    User.login = (staffInfo, result) => {
      console.log(staffInfo);
        sql.query('SELECT * FROM users WHERE username = ? and password = ?', [staffInfo.username,staffInfo.password], function(err, res) {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log(res);
            result(null, res);
        });
  };

  User.findById = (stid,pa, result) => {
        sql.query('SELECT * FROM staff_login WHERE username = ? and password = ?', [stid,pa], function(err, res) {
        if (err) 
        {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) 
        {
          console.log("found customer: ", res[0]);
          result(null, res[0]);
          return;
        }
        result({ kind: "not_found" }, null);
      });
  };
  
  module.exports = User;