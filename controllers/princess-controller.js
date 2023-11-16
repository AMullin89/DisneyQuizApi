const Question = require('../models/princess-model');

async function createNewQuestion(req, res, next){

    const question = new Question(req.body.question, req.body.ans1, req.body.ans2, req.body.ans3, req.body.ans4, req.body.correctAns)

    try {
        await question.addNewQuestion()
    } catch (error) {
        return next(error);
    }

    res.json({message: 'Question added successfully'});
    
}

async function getAllQuestions(req, res, next){
    let questions;

    try {
        questions = await Question.findAllQuestions();
        console.log(questions);
    } catch (error) {
        next(error);
    }

    res.json(questions);
}

module.exports = {
    createNewQuestion: createNewQuestion,
    getAllQuestions: getAllQuestions
}

