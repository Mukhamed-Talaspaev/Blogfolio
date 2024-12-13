import { useState } from "react";
import styles from "./SignIN.module.scss";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/SignInSlice";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
interface ILogin {
  email: string;
  password: string;
}
const SignIn = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();
  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInUser(loginData));
  };
  return (
    <div>
      <form className={styles.form} onSubmit={formHandler}>
        <input
          type="email"
          name="email"
          onChange={inputHandler}
          placeholder="enter your email"
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={inputHandler}
        />
        <button type="submit">Log in</button>
      </form>
      <Link to={"/sign-up"}>Sign UP</Link>
    </div>
  );
};
export default SignIn;
