import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import {useState, useEffect} from 'react'

// const data01 = [
//   { name: 'Facebook', value: 400 },
//   { name: 'Google', value: 300 },
//   { name: 'Twitter', value: 300 },
//   { name: 'Telegram', value: 200 },
// ];
// const data02 = [
//   { name: 'A1', value: 100 },
//   { name: 'A2', value: 300 },
//   { name: 'B1', value: 100 },
//   { name: 'B2', value: 80 },
//   { name: 'B3', value: 40 },
//   { name: 'B4', value: 30 },
//   { name: 'B5', value: 50 },
//   { name: 'C1', value: 100 },
//   { name: 'C2', value: 200 },
//   { name: 'D1', value: 150 },
//   { name: 'D2', value: 50 },
// ];
const Line =() =>{
const [chart, setChart] = useState([])
    var url= "https://covidpagination.herokuapp.com/country/"

    useEffect(() => {
        const fetchCovid = async () => {
            await fetch(`${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                }
            }).then((response)=> {
                response.json().then((json) => {
                    console.log(json.data)
                    setChart(json.data)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchCovid()
    },[url])
    console.log(chart)


    var data= {
      labels: chart?.map(x => x.Country),
      // datasets: [{
      //     label: `${chart?.length} Covid Data`,
      //     data: chart?.map(x=> x.TotalCases),
      // }]
  }

  
    return (
      
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="data" cx="50%" cy="50%" outerRadius={600} fill="#8884d8" />
          <Tooltip/>
        </PieChart>
     
    );
  
}
export default Line