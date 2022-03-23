import React from 'react'
import Navbar from '../Components/Navbar'
import DataFetch from './DataFetch'
import { FaRegHospital } from "react-icons/fa";
import { RiRocketFill } from "react-icons/ri"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { FaStethoscope } from "react-icons/fa"
import { MdDangerous } from "react-icons/md"
import BarChart from '../Components/BarChart'
import BarChartAlter from '../Components/BarChartAlter'
export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <h4 style={{ "marginTop": "30px", "marginLeft": "550px", "fontWeight": "bold" }}>Welcome to Covid Tracker !!!</h4>
            </div>
            <div className="card-design" style={{ "display": "flex", "marginTop": "40px", "marginLeft": "25px", "cursor": "pointer" }}>
                <div className="card1">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#dbe9ff", "border": "1px solid #4294ff", "borderRadius": "10px" }}>
                        <div className="box-part text-center"> <RiRocketFill size="25px" color=" #4294ff" aria-hidden="true"></RiRocketFill></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#4294ff" }}>Total Cases</h5>
                            <p className="card-text" style={{ "fontSize": "18px" }}>471751369</p>

                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#dbffeb", "border": "1px solid #42ff8b", "borderRadius": "10px" }}>
                        <div className="box-part text-center"> <AiFillSafetyCertificate size="25px" color="#00ba38" aria-hidden="true"></AiFillSafetyCertificate></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#00ba38" }}>Total Recovered</h5>
                            <p className="card-text" style={{ "fontSize": "18px" }}>407953008</p>

                        </div>
                    </div>
                </div>
                <div className="card3">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#fffedb", "border": "1px solid #fff242", "borderRadius": "10px" }}>
                        <div className="box-part text-center"> <FaStethoscope size="25px" color="#deb318" aria-hidden="true"></FaStethoscope></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#deb318" }}>Active Cases</h5>
                            <p className="card-text" style={{ "fontSize": "18px" }}>57694987</p>

                        </div>
                    </div>
                </div>
                <div className="card4">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#ffdbde", "border": "1px solid #ff4249", "borderRadius": "10px" }}>
                        <div className="box-part text-center"> <MdDangerous size="25px" color="#c40014" aria-hidden="true"></MdDangerous></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#c40014" }}>Total Deaths</h5>
                            <p className="card-text" style={{ "fontSize": "18px" }}>6103374</p>

                        </div>
                    </div>
                </div>
            </div>
            <BarChartAlter />
           
        </div>
    )
}
