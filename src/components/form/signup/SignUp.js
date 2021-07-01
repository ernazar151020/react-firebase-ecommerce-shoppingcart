import React, { useState } from "react";
import { CustomButton } from "../../CustomButton/CustomButton";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";
const SignUp = () => {
  const [userValue, setUserValue] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const { email, name, password, confirmPassword } = userValue;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { name });
      setUserValue({ email: "", name: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email or password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          name="name"
          value={name}
          label="Name"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
