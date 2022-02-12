import colors from '../../utils/colors';
import styled from 'styled-components';

export const ScoreContainer = styled.div`
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
  font-size: 32px;
`;

export const Replay = styled.button`
    width: 25%;
    font-size: 25px;
    color: #ffffff;
    background-color: ${colors.answer};
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