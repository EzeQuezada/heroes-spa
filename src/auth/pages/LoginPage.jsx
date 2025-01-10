import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Ezequiel quezada");
    Navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="scanner"></div>
        <h1 className="cyber-title">SYSTEM ACCESS</h1>
        <div className="input-group">
          <input type="text" placeholder="Username" className="cyber-input" />
          <input type="password" placeholder="Password" className="cyber-input" />
        </div>
        <button className="cyber-button" onClick={onLogin}>
          <span className="button-content">INITIALIZE LOGIN</span>
        </button>
      </div>
    </div>
  );
};
