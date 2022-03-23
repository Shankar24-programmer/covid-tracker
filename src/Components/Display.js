import React from 'react'
import Navbar from '../Components/Navbar'
import { useLocation } from "react-router-dom";
import { RiRocketFill } from "react-icons/ri"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { FaStethoscope } from "react-icons/fa"
import { MdDangerous } from "react-icons/md"
import BarChartSearch from '../Components/BarChartSearch'
export default function Display() {
    const { state } = useLocation();

    return (
        <div>
            <Navbar />
            <h4 style={{ "marginLeft": "600px", "marginTop": "50px" }}>Covid Reports for {state.Country}</h4>
            {/* <div className="card-deck">
            <div className="card" style={{ "backgroundColor": "#e6fbff", "width": "500px", "marginLeft": "470px", "marginTop": "20px", "textAlign": "center","color":"black", "padding":"20px","borderRadius":"10px"}}>
                <div  className="card-body">


                    <h3 className="card-title" style={{"fontSize":"45px","marginBottom":"25px"}}> {state.Country}</h3>
                    <h5 className="card-title" style={{"fontSize":"18px"}}><strong>Population</strong>   {state.Population}</h5>
                    <h5 className="card-title" style={{"fontSize":"18px"}}><strong>Total Tests</strong>   {state.TotalTests}</h5>
                    <h5 className="card-title" style={{"fontSize":"18px"}}><strong>Total Cases</strong>   {state.TotalCases}</h5>
                    <h5 className="card-title" style={{"fontSize":"18px"}}><strong>Total Deaths</strong>   {state.TotalDeaths}</h5>
                    <h5 className="card-title" style={{"fontSize":"18px"}}><strong>Total Recovered</strong>   {state.TotalRecovered}</h5>


                </div>
            </div>
        </div> */}

            <div className="card-design" style={{ "display": "flex", "marginTop": "40px", "marginLeft": "25px", "cursor": "pointer"}}>
                <div className="card1">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#dbe9ff", "border": "1px solid #4294ff", "borderRadius": "10px", "box-shadow": "0 15px 25px rgba(129, 124, 124, 0.2)"}}>
                        <div className="box-part text-center"> <RiRocketFill size="25px" color=" #4294ff" aria-hidden="true"></RiRocketFill></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#4294ff" }}>Total Cases</h5>
                            <p className="card-text" style={{ "fontSize": "18px", "fontWeight": "bold" }}>{state.TotalCases}</p>

                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#dbffeb", "border": "1px solid #42ff8b", "borderRadius": "10px", "box-shadow": "0 15px 25px rgba(129, 124, 124, 0.2)"}}>
                        <div className="box-part text-center"> <AiFillSafetyCertificate size="25px" color="#00ba38" aria-hidden="true"></AiFillSafetyCertificate></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#00ba38" }}>Total Recovered</h5>
                            <p className="card-text" style={{ "fontSize": "18px", "fontWeight": "bold" }}>{state.TotalRecovered}</p>

                        </div>
                    </div>
                </div>
                <div className="card3">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#fffedb", "border": "1px solid #fff242", "borderRadius": "10px", "box-shadow": "0 15px 25px rgba(129, 124, 124, 0.2)"}}>
                        <div className="box-part text-center"> <FaStethoscope size="25px" color="#deb318" aria-hidden="true"></FaStethoscope></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#deb318" }}>Active Cases</h5>
                            <p className="card-text" style={{ "fontSize": "18px", "fontWeight": "bold"}}>{state.ActiveCases}</p>

                        </div>
                    </div>
                </div>
                <div className="card4">
                    <div className="card" style={{ "width": "20rem", "height": "170px", "padding": "30px", "marginLeft": "20px", "backgroundColor": "#ffdbde", "border": "1px solid #ff4249", "borderRadius": "10px","box-shadow": "0 15px 25px rgba(129, 124, 124, 0.2)" }}>
                        <div className="box-part text-center"> <MdDangerous size="25px" color="#c40014" aria-hidden="true"></MdDangerous></div>
                        <div className="card-body" style={{ "textAlign": "center" }}>
                            <h5 className="card-title" style={{ "fontWeight": "bold", "fontSize": "25px", "color": "#c40014" }}>Total Deaths</h5>
                            <p className="card-text" style={{ "fontSize": "18px", "fontWeight": "bold"}}>{state.TotalDeaths}</p>

                        </div>
                    </div>
                </div>
            </div>
            <BarChartSearch  value={state}/>
        </div>

    )
}
