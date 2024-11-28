import { Fragment } from "react";
import { AuthLogin, Navbar } from "../../components/Index";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLogin />
    </Fragment>
  );
};
