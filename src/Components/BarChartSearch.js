import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useLocation} from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend);

// export 

export default function BarChartSearch() {
    const {state} = useLocation();
    const data = {
        labels: ["Total Cases","Active Cases","Total Recovered","Total Deaths"],
        datasets: [
          {
            label: '# of Votes',
            data: [state.TotalCases, state.ActiveCases, state.TotalRecovered, state.TotalDeaths],
            backgroundColor: [
              '#4294ff',
              '#deb318',
              '#00ba38',
              '#c40014',
              
            ],
            borderColor: [
              '#4294ff',
              '#deb318',
              '#00ba38',
              '#c40014',
              
            ],
            borderWidth: 1,
          },
        ],
      };
    
  return (
    <div className="card" style={{"width": "32rem","marginTop":"50px", "marginLeft":"480px","height":"500px","marginBottom":"50px","padding":"50px","box-shadow": "0 15px 25px rgba(129, 124, 124, 0.2)"}}>
  <div style={{"width":"400px","height":"200px"}}>
  <Pie data={data} width={50} height={1000} />
  </div>
  </div>
  

  )
}
