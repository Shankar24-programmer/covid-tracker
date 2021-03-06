import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, Tooltip,LinearScale}from 'chart.js'
import {Bar} from 'react-chartjs-2'
import {useState, useEffect} from 'react'

ChartJS.register (
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
)
const BarChart = () => {

    const [chart, setChart] = useState([])
    var url= "https://covidpagination.herokuapp.com/country/"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"

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
        datasets: [{
            label: `${chart?.length} Covid Data`,
            data: chart?.map(x=> x.TotalCases),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    
    var options= {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        legend: {
            labels: {
                fontSize: 600
            }
        }
    }
  return (
    <div>
        <Bar
            data={data}
            height={700}
            width={200}
            options={options}
        />
    </div>
  )
}

export default BarChart