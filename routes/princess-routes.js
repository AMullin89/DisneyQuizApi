const express = require('express')
const princessController = require('../controllers/princess-controller');

const router = express.Router();

router.post('/new-question', princessController.createNewQuestion);

router.get('/questions', princessController.getAllQuestions);

module.exports = router;
