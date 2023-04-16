import { Link } from "react-router-dom"
import React, { useState } from 'react';

const Home = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <Link to="/adminhomepage">
          <button type="submit" disabled={submitDisabled}>Submit</button>
          </Link>
        </form>
      </div>
    );
  }

export default Home;