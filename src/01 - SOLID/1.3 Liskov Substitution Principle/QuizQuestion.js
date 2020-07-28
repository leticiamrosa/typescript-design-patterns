"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuizQuestion {
    constructor(question, ans1, ans2, ans3, ans4, correctAns) {
        this._question = question;
        this._answer1 = ans1;
        this._answer2 = ans2;
        this._answer3 = ans3;
        this._answer4 = ans4;
        this._correctAnswer = correctAns;
    }
    get question() {
        return this._question;
    }
    ;
    get answer1() {
        return this._answer1;
    }
    get answer2() {
        return this._answer2;
    }
    ;
    get answer3() {
        return this._answer3;
    }
    ;
    get answer4() {
        return this._answer4;
    }
    ;
    get correctAnswer() {
        return this._correctAnswer;
    }
}
exports.QuizQuestion = QuizQuestion;
;
