import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div className="log-in">
      <div className="log-img">
        <img
          src="https://i.ibb.co/BsC4TsP/Boy.png"
          alt="logo-pic"
          className="header-logo-img"
        />
      </div>
      <div className="log-log-in">
        <div>
          <h2>Login</h2>

          <form action="/action_page.php" method="post">
            <div className="container">
              <label htmlFor="email">
                <b>Username</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
            </div>
          </form>
          <a href="/CreateAccount">
            <button className="Create-Account">Register</button>
          </a>

          <p className="psw">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
