import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useState, useReducer } from "react";

const initialState = { quizResults: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ANSWER":
      return { quizResults: [...state.quizResults, action.answer] };
    case "RESET_ANSWERS":
      return { quizResults: [] };
    case "CALCULATE_RESULTS":
      //Refer to 'Get the element with the highest occurrence in an array' in stackoverflow
      //https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
      return action.setResult(
        state.quizResults.reduce(
          (a, b, i, arr) =>
            arr.filter((v) => v === a).length >=
            arr.filter((v) => v === b).length
              ? a
              : b,
          null
        )
      );
    default:
      return state;
  }
}

function App() {
  const [answers, dispatch] = useReducer(reducer, initialState);
  const [result, setResult] = useState("...pending");

  function handleAnswerClick(choiceId) {
    dispatch({
      type: "ADD_ANSWER",
      answer: choiceId,
    });
  }

  function handleResetButtonClick() {
    dispatch({
      type: "RESET_ANSWERS",
    });
  }
  console.log(answers);
  function calculateResults() {
    dispatch({
      type: "CALCULATE_RESULTS",
      setResult: setResult,
    });
  }

  return (
    <main className="app">
      <h1>Personality Quiz</h1>
      <ol>
        {questionData.map((question) => (
          <QuestionDisplay
            key={question.questionId}
            question={question.questionText}
            choices={question.choices}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ol>
      <button onClick={calculateResults}>Calculate results!</button>
      <ResultsDisplay result={result} />
      <button onClick={handleResetButtonClick}>Reset results!</button>
    </main>
  );
}

export default App;
