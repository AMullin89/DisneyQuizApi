const mongodb = require('mongodb');

const db = require('../database');

class Question {
    constructor(question, ans1, ans2, ans3, ans4, correctAns){
        this.question = question;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.correctAns = correctAns;
    }

    async addNewQuestion(){
        await db.getDb().collection('princess').insertOne({
            question: this.question,
            ans1: this.ans1,
            ans2: this.ans2,
            ans3: this.ans3,
            ans4: this.ans4,
            correctAns: this.correctAns
        })
    }

    static async findAllQuestions(){
        const questions = await db.getDb().collection('princess').find().toArray();

        return questions;
    }
}

module.exports = Question;