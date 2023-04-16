import { Link } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setSubmitDisabled(!(event.target.value && password));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setSubmitDisabled(!(event.target.value && username));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send login request here...
  };

  return (
    <div>
      <div className="home-logo">
        <img src="orca.svg" alt="orca" />
        <h1>O.R.C.A</h1>
        <h3>Outbreak Response and Cost Analysis (ORCA) tool</h3>
        <span>Colorado Integrated food safety center of excellence</span>
      </div>
      <form onSubmit={handleSubmit} className="app-login">
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="input"
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <Link to="/adminhomepage">
          <button
            type="submit"
            disabled={submitDisabled}
            className="is-fullwidth has-background-black has-text-white button"
          >
            Login
          </button>
        </Link>
        <Link to="/adminhomepage">
          <button className="is-fullwidth has-background-white has-text-black button">
            Continue as Guest
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
