// import { Navbar } from "../../components";

import { Fragment } from "react";
// import { useQuiz } from "../../context/Index";
import { useQuiz } from "../../context";
import { Navbar } from "../../components/Index";

export const Result = () => {
  const { score } = useQuiz();

  const resultBarStyle = {
    height: "60%",
    width: "40%",
    marginTop: "6rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "var(--accent-color)",
    padding: "12px",
    fontSize: "1.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Fragment>
      <Navbar />
      <div style={resultBarStyle}>
        <div className="result-head">Score</div>
        <h5 className="result-score">{score}</h5>
      </div>
    </Fragment>
  );
};
