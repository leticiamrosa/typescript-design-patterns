export class QuizQuestion {
  private _question: string;
  private _answer1: string;
  private _answer2: string;
  private _answer3: string;
  private _answer4: string;
  private _correctAnswer: number;

  public constructor(
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
    answer4: string,
    correctAns: number
  ) {
    this._question = question;
    this._answer1 = answer1;
    this._answer2 = answer2;
    this._answer3 = answer3;
    this._answer4 = answer4;
    this._correctAnswer = correctAns;
  }

  public get question(): string {
    return this._question;
  };

  public get answer1(): string {
    return this._answer1;
  }

  public get answer2(): string {
    return this._answer2;
  };

  public get answer3(): string {
    return this._answer3;
  };

  public get answer4(): string {
    return this._answer4;
  };

  public get correctAnswer(): number {
    return this._correctAnswer;
  }
};

export class TrueFalseQuestion extends QuizQuestion {
  constructor(question) {
      super(question, "TRUE", "FALSE", null, null, 1);
  }
}

function formatQuestion(quizQuestion: QuizQuestion) {
  console.log(quizQuestion.question)
  console.log(`1. ${quizQuestion.answer1}`)
  console.log(`2. ${quizQuestion.answer2}`)
  console.log(`3. ${quizQuestion.answer3}`)
  console.log(`4. ${quizQuestion.answer4}`)
}

let quizQuestion = new QuizQuestion("Which framework is using Typescript", "React", "Vue", "Angular", "Cycle", 3)
// formatQuestion(quizQuestion)

let trueFalseQuestion = new TrueFalseQuestion("Typescript is a superset a Javascript, this is broken the principle")
formatQuestion(trueFalseQuestion)