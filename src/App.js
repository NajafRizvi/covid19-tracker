import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards/Card';
import Chart from './Components/Charts/Chart';
import axios from 'axios';
import Countries from './Components/CountryPicker/CountryPicker';
import { fetchData } from './Components/API/Api';
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Navbar/>
        <div style={{display:"flex",alignItems:"center", top:"130px",position:"relative",marginRight:"20px"}}>
        <Countries handleCountryChange={this.handleCountryChange} />
        </div>
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;