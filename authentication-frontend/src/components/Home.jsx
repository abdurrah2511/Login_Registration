import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home({ user, setUser }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    alert("You have been Logged out");
  };

  return (
    <div className="outer-bg">
      <div className="inner-frame">
        <div className="content-wrapper">

          {user ? (
            <>
              <p className="greeting">HI,</p>
              <h1 className="user-name">{user.username.toUpperCase()}.</h1>

              <div className="button-container">
                <button className="btn" onClick={logout}>LOGOUT</button>
              </div>

              <div className="description">
                <p>THIS IS AN AUTHENTICATION SITE.</p>
                <p className="sub-text">INTERNSHIP PROJECT BY ABDURRAHMAN.</p>
              </div>
            </>
          ) : (
            <>
              <h1 className="user-name" id="defaultHeader">Skillfeid Mentor<span>.</span></h1>

              <div className="button-container">
                <button className="btn" onClick={() => navigate("/login")}>LOGIN</button>
                <button className="btn" onClick={() => navigate("/register")}>REGISTER</button>
              </div>

              <div className="description">
                <p>THIS IS AN AUTHENTICATION SITE.</p>
                <p className="sub-text">INTERNSHIP PROJECT BY ABDURRAHMAN.</p>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Home;