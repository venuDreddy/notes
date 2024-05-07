import { useNavigate } from "react-router-dom";
import VerifyUser from "./VerifyUser";
import "./loginAndSignup.css";
import { useState } from "react";
const Login = () => {
  const baseUrl = import.meta.env.VITE_URL;
  const url = baseUrl + "api/login";
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  return (
    <section>
      {" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>
      <div className='signin'>
        <div className='content'>
          <h2>Sign In</h2>

          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              VerifyUser(
                url,
                e.target.username.value,
                e.target.password.value,
                (path) => {
                  navigate(path);
                },
                setIsValid
              );
            }}
          >
            <div className='inputBox'>
              <input type='text' name='username' required /> <i>Username</i>
            </div>

            <div className='inputBox'>
              <input type='password' name='password' required /> <i>Password</i>
            </div>
            {isValid ? (
              ""
            ) : (
              <div>
                <p style={{ color: "red" }}>Invalid Username/Password</p>
              </div>
            )}
            <div className='links'>
              {" "}
              <p>Don't have an account?</p>
              <a href='/signUp'>Signup</a>
            </div>

            <div className='inputBox'>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
