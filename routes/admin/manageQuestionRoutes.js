var express = require('express');

var router = express.Router();

var manageQuestion = require("../../controllers/admin/manageQuestionController");
var checkAuth = require('../../middleware/checkAuth.js');

router.get('/question-list',checkAuth, manageQuestion.getAll);
router.post('/add-question',checkAuth, manageQuestion.add);

module.exports = router;