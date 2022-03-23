import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/Components/Navbar'
import Search from './Components/Search';
import Home from './Components/Home'
import DataFetch from './Components/DataFetch'
import Global from '../src/Components/Global'
import BarChart from '../src/Components/BarChart'
import Line from './Components/Line'
import BarChartAlter from '../src/Components/BarChartAlter'
import Display from './Components/Display'
import BarChartSearch from '../src/Components/BarChartSearch'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/global" element={<Global />} />
        <Route path="/chart" element={<BarChart />} />
        <Route path="/line" element={<Line />} />
        <Route path="/bar" element={<BarChartAlter/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="/displaybar" element={<BarChartSearch />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
