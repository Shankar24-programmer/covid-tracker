import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Display from '../Components/Display'
const Search = () => {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('https://covidpagination.herokuapp.com/country/')
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
                setInfo(res.data.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);
    const filter = (e) => {
        let s = [];

        if (e.target.value !== "") {
            s = data.filter((emp) => {
                return emp.Country.toLowerCase().match(e.target.value.toLowerCase());
            });
            setData(s);
        } else {
            setData(info);
        }
    };
    return (
        <div>
            <Navbar />
            <h5 style={{ "marginTop": "50px", "marginLeft": "520px" }}>You can search the reports through country...</h5>
            <div className="search" style={{ "marginTop": "20px", "marginLeft": "470px" }}>


                <div className="input-group mb-3" style={{ "width": "500px" }}>

                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Select a Country" onChange={filter} />
                    
                    <div className="container scroll" style={{ "height":"580px",overflow:"scroll"}}>
                        {data.map((data, index) => {
                            return (
                                <Link to={"/display"} key={index} state={data} className="link">
                                    <div className="scroll-page" style={{"height":"30px"}}>
                                        <p>{data.Country}</p>
                                    </div>
                                </Link>
                            )
                        }
                        )}
                    </div>
                </div>
                    {/* <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default"style={{ "cursor": "pointer", "backgroundColor": "black", "color": "white" }}>Search</span>
                    </div> */}
                    {/* <div className="scroll-container">
                        {data.map((data, index) => {
                            return (
                                <Link to={"/display"} key={index} state={data} className="link">
                                    <div className="scroll-page" style={{"height":"200px"}}>
                                        <p>{data.Country}</p>
                                    </div>
                                </Link>
                            )
                        }
                        )}
                    </div>
                </div> */}


            </div>
        </div>
    )
}
export default Search;