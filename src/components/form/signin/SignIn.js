import React, { useState } from "react";
import { CustomButton } from "../../CustomButton/CustomButton";
import FormInput from "../form-input/form-input";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
const SignIn = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputValue;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInputValue({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={inputValue.email}
          required
          handleChange={handleChange}
          name="email"
          label="Email"
          //
        />
        <FormInput
          type="password"
          value={inputValue.password}
          required
          handleChange={handleChange}
          name="password"
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            isGoogleSignIn={true}
            style={{ whiteSpace: "nowrap" }}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
