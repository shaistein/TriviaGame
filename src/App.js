import React from 'react'
import {useState, useEffect} from 'react'
import QuestionCard from './components/QuestionCard/QuestionCard';
import ScorePage from './components/ScorePage/ScorePage';
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState();
  const [score, setScore] = useState(0);
  const [showScorePage, SetShowScorePage] = useState(false);
  const [nextQuestion, setNextQuestion] = useState();
  const [newQestionsneeded, setNewQestionsneeded] = useState(true);
	
	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) setScore(score + 10);
		setTimeout(() => setQuestionNumber(questionNumber => questionNumber + 1), 1000);
		if (questionNumber+1 > 9) {
			SetShowScorePage(true);
		}
	}

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('https://opentdb.com/api.php?amount=10')
			setQuestions(request.data.results)
			setQuestionNumber(0);
			setNewQestionsneeded(false);
			return request;
	   	}
		fetchData();
	}, [newQestionsneeded]);
	
	useEffect(() => {
		setNextQuestion(questions[questionNumber]);
	}, [questionNumber]);

	const handleReplayClick = () => {
		setQuestionNumber(0);
		SetShowScorePage(false);
		setScore(0);
		setNewQestionsneeded(true);
	}

  return (
    <div className="app">
		{
			showScorePage 
				?(<ScorePage score={score} onClick={handleReplayClick} />)
				:( nextQuestion && <QuestionCard questioncard={nextQuestion} onClick={handleAnswerClick} score={score} />)
		}
    </div>
  );
}

export default App;
