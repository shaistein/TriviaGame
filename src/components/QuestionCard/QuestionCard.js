import PropTypes from "prop-types";
import React, { useState, useMemo, useEffect } from "react";
import {
  QuestionContainer,
  Question,
  AnswersContainer,
  Answer,
  QuestionCategory,
  QuestionText,
  Score,
} from "./QuestionCard.styles";
import colors from "../../utils/colors";

const QuestionCard = (props) => {
  const { questioncard, onClick, score } = props;
  const { category, question, correct_answer, incorrect_answers } =
    questioncard;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const shuffledAnsweres = useMemo(
    () =>
      [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random()),
    [correct_answer, incorrect_answers]
  );

  const onAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    onClick(answer === correct_answer);
  };

  useEffect(() => {
    setSelectedAnswer(null);
  }, [questioncard]);

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  return (
    <QuestionContainer>
      <Question>
        <QuestionCategory>
          The category is {htmlDecode(category)}
        </QuestionCategory>
      </Question>
      <Question>
        <QuestionText>{htmlDecode(question)}</QuestionText>
      </Question>
      <AnswersContainer>
        {shuffledAnsweres.map((answer, i) => {
          let background = colors.answer;
          if (selectedAnswer) {
            if (answer === correct_answer) background = colors.correctAnswer;
            else if (answer === selectedAnswer) background = colors.wrongAnswer;
          }

          return (
            <Answer
              key={i}
              onClick={() => onAnswerClick(answer)}
              background={background}
              disabled={!!selectedAnswer}
            >
              {htmlDecode(answer)}
            </Answer>
          );
        })}
      </AnswersContainer>
      <Score>Your score is: {score}</Score>
    </QuestionContainer>
  );
};

QuestionCard.propTypes = {
  questioncard: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default QuestionCard;
