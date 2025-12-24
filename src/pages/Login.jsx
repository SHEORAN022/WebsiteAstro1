import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // TODO: Add real authentication logic here
    console.log("Logging in:", { email, password });
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to AstroConnect</h2>
        <p>Enter your credentials to access your personalized astrology dashboard.</p>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-footer">
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="login-bg">
        <h1>✨ Welcome to AstroConnect ✨</h1>
        <p>Your personalized astrology insights await.</p>
      </div>
    </div>
  );
};

export default Login;
