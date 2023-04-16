import React from 'react';
import Chart from 'chart.js/auto';

function PrimaryRoleChart() {
  React.useEffect(() => {
    let costTotal = document.querySelector('.costTotal');
    let respTotal = document.querySelector('.respTotal');
    let hrsTotal = document.querySelector('.hrsTotal');
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Investigation Team Management', 'Communicable Disease Investigator', 'Communications', 'Enviromental Health', 'Epidemiology', 'Laboratory', 'Student Interviewer'],
        datasets: [{
          label: 'Hours worked during Outbreak',
          data: [3847.65, 208, 269.50, 772.67, 14398.29, 2414.68, 171],
          backgroundColor: [
						'rgb(0,209,178)',
						'rgb(77,104,227)',
						'rgb(13,67,149)',
						'rgb(81,190,237)',
						'rgb(174,228,251)',
						'rgb(0,148,126)',
						'rgb(0,148,126)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>Primary Role Chart</h1>
      <canvas id="myChart2" width="800" height="280"></canvas>

      <h4>47335 positions unaccounted for or assigned to multiple roles.</h4>
    </div>
  );
}

export default PrimaryRoleChart
