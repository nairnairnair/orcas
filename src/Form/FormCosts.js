import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyReports from "../MyReports/MyReports";

const FormCosts = () => {
  const [formData, setFormData] = useState({
    travel: "",
    courier: "",
    hours: "",
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
      <form class="form-costs" onSubmit={handleSubmit}>
        <label className="label">
          Travel Costs?
          <input
            className="input"
            type="text"
            name="travel"
            value={formData.travel}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label">
          Courier Costs?
          <input
            className="input"
            type="text"
            name="courier"
            value={formData.courier}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label">
          Hours Worked?
          <input
            className="input"
            type="text"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
          />
        </label>
        <Link to="/graphs">
          <button
            class="is-fullwidth has-background-black has-text-white button"
            type="submit"
          >
            Submit and View Graphs
          </button>
        </Link>
      </form>
      <MyReports />
    </section>
  );
};

export default FormCosts;
