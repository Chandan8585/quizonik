import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/index";
export const Navbar = () => {
  const token = localStorage.getItem("token");
  const { quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const handleAuthClick = () => {
    if (token) {
      localStorage.clear("token");
      quizDispatch({
        type: "QUIT",
      });
    }
    navigate("/");
  };
  const handleEndingGame = () => {
    quizDispatch({
      type: "QUIT",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/assets/logo.png" width={"150px"} alt="logo" />
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                onClick={handleEndingGame}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/auth/login"
                className="nav-link active"
                onClick={handleAuthClick}
              >
                {token ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
