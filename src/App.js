import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards/Card';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import SimpleTable from './Components/CountryPicker/Tables';
import Chart from './Components/Charts/Chart';
function App() {
    return(
      <div className="App">
      <Navbar/>
      <Cards/>
      <CountryPicker/>
      <SimpleTable />
      <Chart/>
      </div>
    )
  }

export default App;
