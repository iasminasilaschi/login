import { useState } from "react";
import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  // this will have to be deleted, only for checking
  const adminUser = {
    username: "admin",
    password: "admin"
  }
  // tbd end

  const [user, setUser] = useState({page: "login", username: ""});
  const [error, setError] = useState("");

  const Login = details => {

    // this has to be changed 
    if (details.username == adminUser.username && details.password == adminUser.password) {
      setUser({
        page: "home",
        username: details.username
      });
    }
    else {
      setError("Details do not match!");
    }
    // tbc end
  }

  const Logout = () => {
    setUser({
      page: "login",
      username: ""
    });
  }

  const RegisterRedirect = () => {
    setUser({
      page: "register",
      username: ""
    });
  }

  const LoginRedirect = () => {
    setUser({
      page: "login",
      username: ""
    });
  }

  const Register = details => {

  }

  const ProfileRedirect = () => {
    setUser({
      page: "profile",
      username: ""
    });
  }

  return (
    <div className="App">
      {(user.page == "home") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={ProfileRedirect}>PROFILE</button>
          <br/><br/>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        (user.page == "register") ? (
          <div>
            <RegisterForm Register={Register} error={error}/>
            <div className="back-to-login">
              <div>Already have an account?</div>
              <button onClick={LoginRedirect}>LOGIN</button>
            </div>
          </div>
        ) : (
          (user.page == "profile") ? (
            <div>
            </div>
          ) : (
          <div>
            <LoginForm Login={Login} error={error}/>
            <div className="go-to-register">
              <div>Don't have an account yet?</div>
              <button onClick={RegisterRedirect}>REGISTER</button>
            </div>
          </div>
          )
      ))}
    </div>
  );
}

export default App;
