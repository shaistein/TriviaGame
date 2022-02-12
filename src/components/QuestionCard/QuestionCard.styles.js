import colors from '../../utils/colors';
import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 100%;
  background-color: ${colors.question};
  width: 700px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  color: #ffffff;
  align-items: center;
`;

export const Question = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const QuestionText = styled.h1`
    margin-bottom: 12px;
    font-size: 32px;
`;

export const QuestionCategory = styled.h3`
    margin-bottom: 20px;
    font-size: 26px;
`;

export const AnswersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

export const Score = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

export const Answer = styled.button`
    width: 100%;
    font-size: 32px;
    color: #ffffff;
    background-color: ${({background}) => background};
    border-radius: 15px;
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    border: 5px solid ${colors.border};
    cursor: pointer;
    margin-bottom: 20px;
    justify-content: center;
`;