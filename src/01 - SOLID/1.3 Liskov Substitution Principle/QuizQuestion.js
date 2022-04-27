"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrueFalseQuestion = exports.QuizQuestion = void 0;
var QuizQuestion = /** @class */ (function () {
    function QuizQuestion(question, answer1, answer2, answer3, answer4, correctAns) {
        this._question = question;
        this._answer1 = answer1;
        this._answer2 = answer2;
        this._answer3 = answer3;
        this._answer4 = answer4;
        this._correctAnswer = correctAns;
    }
    Object.defineProperty(QuizQuestion.prototype, "question", {
        get: function () {
            return this._question;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QuizQuestion.prototype, "answer1", {
        get: function () {
            return this._answer1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "answer2", {
        get: function () {
            return this._answer2;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QuizQuestion.prototype, "answer3", {
        get: function () {
            return this._answer3;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QuizQuestion.prototype, "answer4", {
        get: function () {
            return this._answer4;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QuizQuestion.prototype, "correctAnswer", {
        get: function () {
            return this._correctAnswer;
        },
        enumerable: false,
        configurable: true
    });
    return QuizQuestion;
}());
exports.QuizQuestion = QuizQuestion;
;
var TrueFalseQuestion = /** @class */ (function (_super) {
    __extends(TrueFalseQuestion, _super);
    function TrueFalseQuestion(question) {
        return _super.call(this, question, "TRUE", "FALSE", null, null, 1) || this;
    }
    return TrueFalseQuestion;
}(QuizQuestion));
exports.TrueFalseQuestion = TrueFalseQuestion;
function formatQuestion(quizQuestion) {
    console.log(quizQuestion.question);
    console.log("1. ".concat(quizQuestion.answer1));
    console.log("2. ".concat(quizQuestion.answer2));
    console.log("3. ".concat(quizQuestion.answer3));
    console.log("4. ".concat(quizQuestion.answer4));
}
var quizQuestion = new QuizQuestion("Which framework is using Typescript", "React", "Vue", "Angular", "Cycle", 3);
// formatQuestion(quizQuestion)
var trueFalseQuestion = new TrueFalseQuestion("Typescript is a superset a Javascript");
formatQuestion(trueFalseQuestion);
