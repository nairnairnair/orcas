import { useRef } from "react";
import { useEffect } from "react";
import Chart from 'chart.js/auto'
import { Link } from "react-router-dom"
import ImpactChart from "./impact-chart";
import PrimaryRoleChart from "./primary-role-chart";

const Graphs = () => {
  
    return (
      <div>
        <Link to="/form">
            <button type="submit">Submit A Report</button>
        </Link>
        <Link to="/adminhomepage">
            <button>My Dashboard</button>
        </Link>
        <ImpactChart/>
        <PrimaryRoleChart/>
      </div>
    );
  };
  

export default Graphs;