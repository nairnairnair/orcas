import React, { useState } from 'react';
import { Link } from "react-router-dom"
import MyReports from "../MyReports/MyReports"

const FormCosts = () => {
  const [formData, setFormData] = useState({
    travel: '',
    courier: '',
    hours: ''
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
  <section>
    <Link to="/">
      <button>Log Out</button>
    </Link>
    <form onSubmit={handleSubmit}>
      <label>
        Travel Costs?
        <input
          type="text"
          name="travel"
          value={formData.travel}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Courier Costs?
        <input
          type="text"
          name="courier"
          value={formData.courier}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hours Worked?
        <input
          type="text"
          name="hours"
          value={formData.hours}
          onChange={handleChange}
        />
      </label>
      <Link to="/graphs">
        <button type="submit">Submit and view Graphs</button>
      </Link>
    </form>
    <MyReports/>
    </section>
  );
};

export default FormCosts;
