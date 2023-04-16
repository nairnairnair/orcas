import { useRef } from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import ImpactChart from "./impact-chart";
import PrimaryRoleChart from "./primary-role-chart";

const Graphs = () => {  
    return (
      <section>
      <div>
        <Link to="/">
          <button>Log Out</button>
        </Link>
        <Link to="/form">
            <button type="submit">Submit A Report</button>
        </Link>
        <Link to="adminhomepage">
          <button>My Dashboard</button>
        </Link>
      </div>
      <div className="graphs">
        <ImpactChart />
        <PrimaryRoleChart />
        <div>
          <h2 className="listTop">Individual Costs</h2>
          <ul>
            <li>Agency Leadership/Investigation Team Management - $3847.65</li>
            <li>Communicable Disease Investigator - $208.00</li>
            <li>Communications - $269.50</li>
            <li>Environmental Health - $772.67</li>
            <li>Epidemiology - $14398.29</li>
            <li>Laboratory - $2414.68</li>
            <li>Student Interviewer - $171.00</li>
            <li>Unaccounted for or assigned to multiple roles - $47334.70</li>
          </ul>
          <h3 className="respTotal listTop">Total: $69416.49</h3>
        </div>

        <div>
          <h2 className="listTop">Number of Responses by State</h2>
          <ul>
            <li>Agency Leadership/Investigation Team Management - 655.4</li>
            <li>Communicable Disease Investigator - 237.2</li>
            <li>Communications - 1</li>
            <li>Environmental Health - 236.5</li>
            <li>Epidemiology - 2</li>
            <li>Laboratory - 1900</li>
            <li>Roles during Outbreak - 77</li>
            <li>Student Interviewer - 82.7</li>
            <li>Unaccounted for or assigned to multiple roles - 189.2</li>
          </ul>
          <h3 className="respTotal listTop">Total: 3384</h3>
        </div>
      </div>
    </section>
  );
};

export default Graphs;
