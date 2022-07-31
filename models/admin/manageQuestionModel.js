const sql = require("../db.js");
var table = "set_paper_question";
// constructor
const ManageQuestion = function(data) {
    Object.keys(data).forEach(argKey => this[argKey] = data[argKey])
    };
    ManageQuestion.add = (data, result) => {
      console.log(data);
      sql.query("INSERT INTO "+table+" SET ?", data, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            console.log(res);
            result(null, res);
        });
  };

  ManageQuestion.getAll = (data, result) => {
    console.log(data);
        sql.query('SELECT * FROM '+table, function(err, res) {
        if (err) 
        {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) 
        {
          result(null, res);
          return;
        }
        result({ kind: "not_found" }, null);
      });
  };
  
  module.exports = ManageQuestion;