import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context";
import "./qna.css";

export const QuestionsAndOptions = ({ quizData }) => {
  const [currentQuiz] = quizData;
  const { category, quiz } = currentQuiz;
  const { index, score, quizDispatch, selectedOption } = useQuiz();
  const navigate = useNavigate();
  const handleNextButton = () => {
    localStorage.setItem("index", index + 1);
    if (index !== quiz.length - 1) {
      quizDispatch({
        type: "NEXT QUESTION",
      });
    } else {
      quizDispatch({
        type: "SUBMIT",
      });
      navigate("/result");
    }
  };

  const handleOptionSelect = (optionId, isRight) => {
    quizDispatch({
      type: "SELECTED_OPTION",
      payload: { optionId, isRight },
    });
  };
  const handleQuitButton = () => {
    quizDispatch({
      type: "QUIT",
    });
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("option", selectedOption);
    localStorage.setItem("score", score);
  }, [selectedOption]);
  return (
    <div className="qna-container d-flex justify-center direction-col my-text">
      <div className="d-flex gap-m justify-center direction-row">
        <section className="questions-bar">{category}</section>
        <span className="watcher"></span>
      </div>

      <div className="ques-score-bar d-flex  direction-row justify-space-between">
        <div className="ques-number">
          Question: {index + 1}/{quiz.length}
        </div>
        <div className="score-number">Score:{score}</div>
      </div>
      <div className="question">{quiz[index].question}</div>
      <div className="options-container d-flex justify-center direction-col align-center">
        {quiz[index].options.map(({ id, option, isRight }) => (
          <button
            key={id}
            onClick={() => handleOptionSelect(id, isRight)}
            disabled={selectedOption}
            className={`option ${selectedOption && isRight ? "right" : ""}
                                       ${
                                         selectedOption === id && !isRight
                                           ? "wrong"
                                           : ""
                                       }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="questions-bar-foot d-flex  direction-row justify-space-between ">
        <button className="ques-quit" onClick={handleQuitButton}>
          Quit
        </button>
        <button className="ques-quit" >
          Explain
        </button>
        <button className="ques-next" onClick={handleNextButton}>
          {index === quiz.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
