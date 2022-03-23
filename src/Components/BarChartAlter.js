import React from "react"
import { Bar } from "react-chartjs-2"
import Chart from 'chart.js/auto'
import {useState, useEffect} from 'react'
const BarChartAlter = () => {
    const [chart, setChart] = useState([])
    var url = "https://covidpagination.herokuapp.com/country/"

    useEffect(() => {
        const fetchCovid = async () => {
            await fetch(`${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json.data)
                    setChart(json.data)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchCovid()
    }, [url])
    console.log(chart)
    var data = {
        labels: chart?.map(x => x.Country),
        datasets: [{
            label: `Total Cases`,
            data: chart?.map(x => x.TotalCases),
            axis:"y",
            backgroundColor: [
                '#dbe9ff',
                
            ],
            borderColor: [
                '#4294ff',
                
            ],
            borderWidth: 1
        },
        {
            label: `Total Recovered`,
            data: chart?.map(x => x.TotalRecovered),
            axis:"y",
            backgroundColor: [
                '#dbffeb',
                
            ],
            borderColor: [
                '#00ba38',
                
            ],
            borderWidth: 1
        },
        {
            label: `Active Cases`,
            data: chart?.map(x => x.ActiveCases),
            axis:"y",
            backgroundColor: [
                '#fffedb',
                
            ],
            borderColor: [
                '#deb318',
                
            ],
            borderWidth: 1
        },
        {
            label: `Total Deaths`,
            data: chart?.map(x => x.TotalDeaths),
            axis:"y",
            backgroundColor: [
                '#ffdbde',
                
            ],
            borderColor: [
                '#c40014',
                
            ],
            borderWidth: 1
        }]
    }
    var options={
        indexAxis:"y",
    }
    return (
        <div className="Bar" style={{ "width": "900px", "height": "auto", "marginTop": "100px", "marginLeft": "250px" }}>
            <h4 style={{"marginLeft":"350px"}}>Global Total Cases Record</h4>
            <div className="barchart" style={{"height":"500px"}}>
            <Bar data={data} options={options} height={10000} width={900}>

            </Bar>
            </div>
        </div>

    )
}
export default BarChartAlter;