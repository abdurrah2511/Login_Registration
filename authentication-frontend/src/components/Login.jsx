import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all fields to continue");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.name);

      setUser({ username: data.name });

      
      alert("You are logged in.");
      navigate("/");

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="main-container">
        <div className="branding-section">
            <h1 className="text-black">LOGIN</h1>
            <h1 className="text-white">AND</h1>
            <h1 className="text-white">REGISTER</h1>
        </div>

        <div className="auth-card">
            <div className="auth-tabs">
                <div className="tab active">LOGIN</div>
                <Link to="/register" className="tab">REGISTER</Link>
            </div>
            <div className="tab-underline tab-underline-login"></div>

            <div className="auth-form">
                <div className="input-group">
                    <label>EMAIL ADDRESS.</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <label>PASSWORD.</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="login-btn" onClick={login}>Login</button>
                
                <Link to="/register" className="register-link">DON'T HAVE AN ACCOUNT? REGISTER</Link>
              
            </div>
        </div>
    </div>
  );
}

export default Login;