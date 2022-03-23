import React from 'react'
import Navbar from './Navbar'
import DataFetch from './DataFetch'
export default function Global() {
  return (
    <div>
        <Navbar />
        <h3 style={{"marginTop":"30px", "marginLeft":"550px"}}>Global Covid Data Report</h3>
        <DataFetch/>
    </div>
  )
}
