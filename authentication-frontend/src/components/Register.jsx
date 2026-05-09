import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields to continue");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("The registration was successful.");
      navigate("/login");

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="main-container">
        <div className="branding-section">
            <h1 className="text-white">LOGIN</h1>
            <h1 className="text-white">AND</h1>
            <h1 className="text-black">REGISTER</h1>
        </div>

        <div className="auth-card">
            <div className="auth-tabs">
                <Link to="/login" className="tab">LOGIN</Link>
                <div className="tab active">REGISTER</div>
            </div>
            <div className="tab-underline tab-underline-register"></div>

            <div className="auth-form">
                <div className="input-group">
                    <label>NAME.</label>
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input-group">
                    <label>EMAIL ADDRESS.</label>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <label>PASSWORD.</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>


                <button className="register-btn" onClick={register}>Register</button>

                <Link to="/login" className="login-link">ALREADY HAVE AN ACCOUNT? LOGIN</Link>

            </div>
        </div>
    </div>
  );
}

export default Register;