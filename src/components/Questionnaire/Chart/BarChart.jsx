import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import salaries from '../../../data/salaries.json'
import getRandomColor from '../../../helpers/getRandomColor'

const BarChart = ({ professionScores }) => {
  
  
  const sortedProfessions = [...professionScores].sort((a, b) => b.score - a.score);
  
    // Take the top 5 professions
  const top5Professions = sortedProfessions.slice(0, 5);


  
  
  
  useEffect(() => {

    

    const barCanvas = document.getElementById('salaries');
    const barCtx = barCanvas.getContext('2d');
    
    Chart.getChart(barCtx)?.destroy();

    if(barCanvas){
      const barLabels = top5Professions.map(item => item.profession);
      const barData = barLabels.map(profession => {
        return parseInt(salaries[profession].replace(/\$|,/g, ''), 10)
        
      }); 

      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: barLabels,
          datasets: [{
            label: 'Profession Salary',
            data: barData,
            backgroundColor: barLabels.map(() => getRandomColor()),
            borderColor: 'white',
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,  // Set responsive to false
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  }





  }, [top5Professions]);


  
  return (
    <div >
      <canvas id="salaries" width="600" height="500"></canvas>
      
    </div>
  );
};

export default BarChart;