import React from "react";
import SignIn from "./signin/SignIn";
import SignUp from "./signup/SignUp";
import "./sign-in-up.scss";
const SignInUpComponent = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUpComponent;
