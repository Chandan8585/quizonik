import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
  username: "guest",
  password: "guest123",
  token: "",
};
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    authDispatch({
      type: "INITIAL STATE",
      payload: token,
    });
  }, []);

  const [{ username, password, token }, authDispatch] = useReducer(
    authReducer,
    initialState
  );
  return (
    <AuthContext.Provider value={{ username, password, token, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
