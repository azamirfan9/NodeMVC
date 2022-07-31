const ManageQuestion = require("../../models/admin/manageQuestionModel");
var jwt = require('jsonwebtoken');
var path = require('path');
exports.add = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    var ext = path.extname(req.files.myfile.name);
    var now_date = new Date().toISOString().slice(0,10);
    var finalGeneratedFile = now_date+'-'+req.body.exam_date+ext;
    console.log(finalGeneratedFile);
    res.send(finalGeneratedFile)
    // var bodyData = {'start_datetime' : req.body.exam_date+' '+'11:00:00', 'end_datetime' : req.body.exam_date+' '+'19:30:00',
    //             'question_view_before':'45', 'department_id':req.userData.department};
    //             for (var key in req.body) {
    //               bodyData[key] = req.body[key];
    //               }
    //             //res.send(bodyData);
  
    // const manageQuestion = new ManageQuestion(bodyData);
    // ManageQuestion.add(manageQuestion, (err, data) => {
    //   if (err)
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the Customer."
    //     });
    //   else 
    //   res.json({message: 'Data submitted successfully'});
    // });
  };

  exports.getAll = (req, res) => {
    //console.log(req.userData.department);
    //console.log(req.body);
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const manageQuestion = new ManageQuestion(req.body);
    ManageQuestion.getAll(manageQuestion, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving"
          });
        }
      } else res.send(data);
    });
  };