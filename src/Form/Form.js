import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyReports from "../MyReports/MyReports";

const Form = () => {
  const [formData, setFormData] = useState({
    agency: "",
    jobTitle: "",
    role: "",
    tasks: "",
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
      <form className="form-input" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Which agency?</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="agency"
              value={formData.agency}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">What job title?</label>
          <input
            className="input"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">What role?</label>
          <input
            className="input"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">What tasks?</label>
          <input
            className="input"
            type="text"
            name="tasks"
            value={formData.tasks}
            onChange={handleChange}
          />
        </div>
        <Link to="/formcosts">
          <button
            class="has-background-black has-text-white button"
            type="submit"
          >
            Add Costs
          </button>
        </Link>
      </form>
      <MyReports />
    </section>
  );
};

export default Form;
