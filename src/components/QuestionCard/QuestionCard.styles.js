import colors from '../../utils/colors';
import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  background-color: ${colors.question};
  width: 700px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  color: #ffffff;
  align-items: center;
  margin: auto;
  width: 800px; /* (311 x 2) */
  height: 700px;
  padding: 0px;
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
    margin: auto;
    padding: 10px;
    text-align: center;
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
    margin: 0 auto;
    width: 70%;
    font-size: 32px;
    color: #ffffff;
    line-height: 60px;
    background-color: ${({background}) => background};
    border-radius: 15px;
    display: flex;
    
    align-items: center;
    border: 5px solid ${colors.border};
    cursor: pointer;
    margin-bottom: 20px;
    justify-content: center;
    :hover {
        transform: scale(1.025);
        border: 2px solid 'green';
    }
`;