import { useRef } from "react";
import { useEffect } from "react";
import Chart from 'chart.js/auto'

const Graphs = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "Visitors",
            data: [500, 600, 100, 800, 900, 1000, 1100],
            borderColor: "rgb(255, 99, 132)",
            fill: false
          },
          {
            label: "Sales",
            data: [10, 60, 70, 80, 10, 100, 110],
            borderColor: "rgb(54, 162, 235)",
            fill: false
          },
          {
            label: "Oscar$$!",
            data: [100, 100, 120, 1000, 900, 110, 150],
            borderColor: "rgb(0, 0, 0)",
            fill: false
          }
        ]
      };
  
      const options = {
        title: {
          display: true,
          text: 'Website Visitors and Sales'
        },
        legend: {
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
  
      if (chartRef && chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: "line",
          data: data,
          options: options
        });
      }
    }, [chartRef]);
  
    return (
      <div>
        <h1>TE$T</h1>
        <canvas ref={chartRef} width="800" height="280"></canvas>
        <Link to="form">
            <button type="submit">Submit A Report</button>
        </Link>
        <Link to="adminhomepage">
            <button>My Dashboard</button>
        </Link>
      </div>
    );
  };
  

export default Graphs;