import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Form = () => {
  const [formData, setFormData] = useState({
    agency: '',
    jobTitle: '',
    role: '',
    tasks: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Which agency?
        <input
          type="text"
          name="agency"
          value={formData.agency}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        What job title?
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        What role?
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        What tasks?
        <input
          type="text"
          name="tasks"
          value={formData.tasks}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to="graphs">
        <button type="submit">Submit and view Graphs</button>
      </Link>
    </form>
  );
};

export default Form;
