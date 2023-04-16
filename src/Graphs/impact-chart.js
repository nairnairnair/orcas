import React from "react";
import Chart from "chart.js/auto";

function ImpactChart() {
  React.useEffect(() => {
    let costTotal = document.querySelector(".costTotal");
    let respTotal = document.querySelector(".respTotal");
    let hrsTotal = document.querySelector(".hrsTotal");
    var ctx = document.getElementById("myChart1").getContext("2d");
    var myChart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Investigation Team Management",
          "Communicable Disease Investigator",
          "Communications",
          "Enviromental Health",
          "Epidemiology",
          "Laboratory",
          "Student Interviewer",
        ],
        datasets: [
          {
            label: "Hours worked during Outbreak",
            data: [56, 8, 10, 31, 382, 55, 10],
            backgroundColor: ["rgba(153, 102, 255, 0.5)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    let hrsVal = 56 + 8 + 10 + 31 + 382 + 55 + 10 + 1086;
    hrsVal = hrsVal.toFixed(0);
    hrsTotal.textContent = "Total: " + hrsVal;
  }, []);

  return (
    <div>
      <h1>Outbreak Impact</h1>
      <canvas id="myChart1" width="800" height="280"></canvas>

      <h4>1086 hours unaccounted for or assigned to multiple roles.</h4>
      <h4 className="hrsTotal">Total: </h4>
    </div>
  );
}

export default ImpactChart;
