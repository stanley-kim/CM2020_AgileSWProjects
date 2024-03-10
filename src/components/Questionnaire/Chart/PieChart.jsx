import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import getRandomColor from '../../../helpers/getRandomColor'


const PieChart = ({ professionScores }) => {
  
  const sortedProfessions = [...professionScores].sort((a, b) => b.score - a.score);
  
    // Take the top 5 professions
  const top5Professions = sortedProfessions.slice(0, 5);
  
  useEffect(() => {

    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    Chart.getChart(ctx)?.destroy();

    if (canvas) {
        const labels = top5Professions.map(item => item.profession);
        const data = top5Professions.map(item => item.score);
    
        new Chart(ctx, {
            type: 'pie',
            data: {
            labels: labels,
            datasets: [{
                label: 'Your personal results and best profession fits',
                data: data,
                backgroundColor: labels.map(() => getRandomColor()),
                borderColor: 'white',
                borderWidth: 1
            }]
            },
            options: {
              responsive: false,
              maintainAspectRatio: false,
              legend: {
                position: 'left',
              },
            }
        });
    }

  }, [top5Professions]);


  
  return (
    <div>
      <canvas id="myChart" width="600" height="500"></canvas>
    </div>
  );
};

export default PieChart;