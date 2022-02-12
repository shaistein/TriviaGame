import React from 'react'
import {useState, useEffect} from 'react'
import QuestionCard from './components/QuestionCard/QuestionCard';
import ScorePage from './components/ScorePage/ScorePage';
import TriviaProvider from './provider/TriviaProvider';
import axios from "axios";

//const triviaProvider = TriviaProvider();

function App() {
//   const questions = [
//     {
//       category: "Entertainment: Video Games",
//       type: "multiple",
//       difficulty: "easy",
//       question: "Who is Sonic&#039;s sidekick?",
//       correct_answer: "Tails",
//       incorrect_answers: ["Shadow", "Amy", "Knuckles"]
//     },
//     {
//       category: "Entertainment: Cartoon & Animations",
//       type: "multiple",
//       difficulty: "easy",
//       question: "When did the last episode of &quot;Futurama&quot; air?",
//       correct_answer: "September 4, 2013",
//       incorrect_answers: ["December 25, 2010", "March 28, 1999", "On Going"]
//     },
//     {
//       category: "Animals",
//       type: "multiple",
//       difficulty: "easy",
//       question: "What do you call a baby bat?",
//       correct_answer: "Pup",
//       incorrect_answers: ["Cub", "Chick", "Kid"]
//     },
//     {
//       category: "Politics",
//       type: "boolean",
//       difficulty: "easy",
//       question: "Russia passed a law in 2013 which outlaws telling children that homosexuals exist.",
//       correct_answer: "True",
//       incorrect_answers: ["False"]
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "multiple",
//       difficulty: "medium",
//       question: "The creator of the Touhou Project series is:",
//       correct_answer: "ZUN",
//       incorrect_answers: ["SUN", "RUN", "PUN"]
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "boolean",
//       difficulty: "easy",
//       question: "Ana was added as a new hero for the game Overwatch on July 19th, 2016.",
//       correct_answer: "True",
//       incorrect_answers: ["False"]
//     },
//     {
//       category: "Politics",
//       type: "multiple",
//       difficulty: "hard",
//       question: "In June 2017, Saudi Arabia and Egypt broke off ties with which country over its supposed support for terrorism?",
//       correct_answer: "Qatar",
//       incorrect_answers: ["Bahrain", "United States of America", "Russia"]
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "multiple",
//       difficulty: "medium",
//       question: "What is the subtitle for Gran Turismo 3?",
//       correct_answer: "A-Spec",
//       incorrect_answers: ["Championship", "Drive", "Nitro"]
//     },
//     {
//       category: "Science: Gadgets",
//       type: "multiple",
//       difficulty: "hard",
//       question: "Which round does a WW2 M1 Garand fire?",
//       correct_answer: ".30-06",
//       incorrect_answers: [".308", "7.62", "7.62x51mm"]
//     },
//     {
//       category: "Entertainment: Music",
//       type: "multiple",
//       difficulty: "medium",
//       question: "Which song previously recorded by Elvis Presley was covered by UB40 with a reggae beat?",
//       correct_answer: "Can&#039;t Help Falling in Love",
//       incorrect_answers: ["Jailhouse Rock", "In the Ghetto", "Wooden Heart"]
//     }
//   ];


  const [questions, setQuestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState();
  const [score, setScore] = useState(0);
  const [showScorePage, SetShowScorePage] = useState(false);
  const [nextQuestion, setNextQuestion] = useState();
	
	const handleAnswerClick = (isCorrect) => {
		if (isCorrect) setScore(score + 10);
		setTimeout(() => setQuestionNumber(state => state+1), 1000);
		console.log(questionNumber);
		if (questionNumber+1 > 9) {
			SetShowScorePage(true);
		}
	}

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('https://opentdb.com/api.php?amount=10')
			setQuestions(request.data.results)
			setQuestionNumber(0);
			console.log(request.data.results)
			return request;
	   	}
		fetchData();
		}, []);
	
	useEffect(() => {
		setNextQuestion(questions[questionNumber]);
	}, [questionNumber]);

	const handleReplayClick = () => {
		setQuestionNumber(0);
		SetShowScorePage(false);
		setScore(0);
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
