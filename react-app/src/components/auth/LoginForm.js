import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    const user = dispatch(sessionActions.loginUser({ email, password }));

    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const onDemoLogin = () => {
    setAuthenticated(true);
    dispatch(sessionActions.demoLoginUser());
    // dispatch(closeLogin());
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={onDemoLogin}>
          Demo Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
