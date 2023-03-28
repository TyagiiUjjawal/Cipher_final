import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangePassword, setIsChangePassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`User ID: ${userId}, Password: ${password}`);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log(`User ID: ${userId}, New Password: ${newPassword}`);
    setIsChangePassword(false);
    setNewPassword("");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isChangePassword ? (
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        ) : (
          <button
            className="change-password-btn"
            onClick={() => setIsChangePassword(true)}
          >
            Change Password
          </button>
        )}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      {isChangePassword && (
        <form onSubmit={handleChangePassword}>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
