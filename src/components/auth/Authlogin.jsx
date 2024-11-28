import "./auth.css";
import { useAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../../service/auth-service";
import { Toaster, toast } from "alert";
import { Fragment } from "react";
export const AuthLogin = () => {
  const navigate = useNavigate();
  const { username, password, authDispatch } = useAuth();
  console.log(username, password);

  const handleUserNameChange = (event) => {
    authDispatch({
      type: "USERNAME",
      payload: event.target.value,
    });
  };
  const handlePassChange = (event) => {
    authDispatch({
      type: "PASSSWORD",
      payload: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const token = loginHandler(username, password);
    if (token) {
      navigate("/");
    }
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
    authDispatch({
      type: "CLEAR CREDENTIALS",
    });
  };

  const handleTestUser = () => {
    const token = loginHandler("guest", "guest123");
    if (token) {
      navigate("/");
    }
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
  };

  return (
    <Fragment>
      <Toaster />
      <div className="d-grid auth-login-container">
        <div className="auth-login my-text d-flex justify-center direction-col align-center">
          <h2>Login</h2>
          <form
            onSubmit={handleFormSubmit}
            className="d-flex direction-col gap-m align-center"
          >
            <div className="auth-form">
              <label className="form-label ml-s">Username</label>
              <input placeholder="Username" onChange={handleUserNameChange} />
            </div>
            <div className="auth-form ">
              <label className="form-label ml-l">Password</label>
              <input placeholder="*********" onChange={handlePassChange} />
            </div>
            <div className="cta">
              <button className="auth-login-btn gap-l">Login</button>
            </div>
          </form>
          <button className="test-btn" onClick={handleTestUser}>
            Login with Test Credentials
          </button>
        </div>
      </div>
    </Fragment>
  );
};
