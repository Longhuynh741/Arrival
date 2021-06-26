import { Container } from "react-bootstrap";
import React, { useState } from "react";

export default function Questions() {
  const questions = [
    {
      questionText: "Do you like pizza?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    },
    {
      questionText: "Are you 18 or older?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    },
    {
      questionText: "Are you 21 or older?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    },
    {
      questionText: "Are you vegan?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    },
    {
      questionText: "Are you ok?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    },
    {
      questionText: "Are you lactose intolerant?",
      answerOptions: [
        { answerText: "Yes", clickedValue: true },
        { answerText: "No", clickedValue: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showYes, setShowYes] = useState(0);
  const [showNo, setShowNo] = useState(0);
  const [questionsCompleted, setQuestionsCompleted] = useState(false);

  const handleAnswerOptionClick = (clickedValue) => {
    if (clickedValue === true) {
      setShowYes(showYes + 1);
    }
    if (clickedValue === false) {
      setShowNo(showNo + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(currentQuestion);
      setQuestionsCompleted(true);
    }
  };

  return (
    <div className="questions">
      <Container>
        {questionsCompleted ? (
          <div className="answerSection">
            You answered {showYes} times yes and {showNo} no.
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.clickedValue)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
