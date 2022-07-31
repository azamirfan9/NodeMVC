const User = require("../../models/admin/usersModel.js");
var jwt = require('jsonwebtoken');
require("dotenv").config();
exports.login = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a user object
    const user = new User(req.body);
    User.login(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else console.log(data[0].username);
      var token = jwt.sign({username: data[0].username, password: data[0].password, department: data[0].department}, process.env.JWT_KEY,
        {
        expiresIn: "1h"
        });
        res.status(200).json({success: true, token: token});
    });
  };

  exports.findOne = (req, res) => {
    console.log('Hello World');
    User.findById(req.params.un,req.params.pa, (err, data) => {
        
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.un}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.un
          });
        }
      } else res.send(data);
    });
  };

  exports.test = (req, res) => {
    res.status(200).send({
      message: "Welcome to the world of Node JS"
    });
  };