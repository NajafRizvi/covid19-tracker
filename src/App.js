import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Cards from './Components/Cards/Card';
import Chart from './Components/Charts/Chart';
import axios from 'axios';
import Countries from './Components/CountryPicker/CountryPicker';
import { fetchData } from './Components/API/Api';
function App() {
  const [data,setData] = useState({data:""})
  const [country,setCountry] = useState({country:""})
  const [globalData, setGlobalData] = useState({
    confirmed:"",
    recovered:"",
    deaths:""
  })
  const url = "https://covid19.mathdro.id/api"
  useEffect(() => {
      const covid = async (country)=>{
          let changeableUrl = url;
          if (country) {
            changeableUrl = `${url}/countries/${country}`;
          }
          const Fetch = await axios.get(url)
          setGlobalData({
            confirmed:Fetch.data.confirmed,
            recovered:Fetch.data.recovered,
            deaths:Fetch.data.deaths,
            lastUpdate:Fetch.data.lastUpdate

          })
      }
      covid()
  }, [])


    const handleCountryChange = async (country) => {
      const data = await fetchData(country);
      setCountry({country: country });
      setData({data:data})
    }
  
    return(
      <div className="App">
      <Navbar/>
      <Cards data={globalData}/>
      <Chart data={data} country={country}/>
      <Countries handleCountryChange={handleCountryChange}/>
      </div>
    )
  }

export default App;
