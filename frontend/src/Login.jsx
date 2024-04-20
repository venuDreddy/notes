import { useNavigate } from "react-router-dom";
import VerifyUser from "./VerifyUser";
const Login = () => {
  const url = "http://localhost:5000/api/login";
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          VerifyUser(
            url,
            e.target.username.value,
            e.target.password.value,
            (path) => {
              navigate(path);
            }
          );
        }}
      >
        <div>
          <label>Username: </label>
          <input type='text' name='username' />
        </div>
        <div>
          <label>Password: </label>
          <input type='password' name='password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div>
        Don't have an account <a href='/signUp'>signup</a>
      </div>
    </div>
  );
};
export default Login;
