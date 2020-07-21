import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chart from './PieChart';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CountUp from "react-countup";
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp';
import LocalHotelSharpIcon from '@material-ui/icons/LocalHotelSharp';
import { NativeSelect, FormControl } from '@material-ui/core';
import { green,blue,red,yellow } from '@material-ui/core/colors';
import Axios from 'axios';
const useStyles = makeStyles((theme)=>({
    root:{
        flex:1,
        marginTop:"140px",
    },
    chart:{
        marginLeft:"400px",
    },
    card: {
        marginTop: 30,
        display: "flex",
        color:"white",
    },
    load: {
        marginLeft: "50%",
        marginTop: "50px",
      },
      table: {
        minWidth: 650,
      },
}));

export default function Cards() {
    const classes = useStyles();
    const [globalData, setGlobalData] = useState([]);
    const [globalCountry, setCountry] = useState([{}])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://disease.sh/v3/covid-19/all")
            let data = await response.json();
            setGlobalData(data);
        }
        fetchData();
    },[])
    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.thevirustracker.com/free-api?countryTotals=ALL`);
            let data = await response.json();
            console.log(data)
            setCountry(Object.values(Object.values(data.countryitems)[0]));
        }
        getData();
    }, [])
    const [Data,setData] = useState([]);
    async function CountryData()
    {
        const defaultRes = Axios.get("https://covid19.mathdro.id/api");
        const resCountry = Axios.get( "https://covid19.mathdro.id/api/countries");
        const countries = Object.keys(resCountry.data.countries);
        setData({
            confirmed: defaultRes.data.confirmed.value,
            recovered: defaultRes.data.recovered.value,
            deaths: defaultRes.data.deaths.value,
            countries: countries,
        });

    }
    const [countrydata,setCountrydata]  = useState([])
    async function getCountryData()
    {
        const defaultRes = await Axios.get("https://covid19.mathdro.id/api");
        const countriesRes = await Axios.get(
          "https://covid19.mathdro.id/api/countries"
        );
        const countries = Object.keys(countriesRes.data.countries);
    
        this.setCountrydata({
          confirmed: defaultRes.data.confirmed.value,
          recovered: defaultRes.data.recovered.value,
          deaths: defaultRes.data.deaths.value,
          countries: countries
        });
      }
    const { active, cases, deaths, recovered,updated } = globalData;
    const date = new Date(parseInt(updated));
    const updateDate = date.toString()
    if (!cases) {
        return (
          <div className={classes.load}>
            <CircularProgress />
          </div>
        );
      }
    return (
        <Container>
        <CssBaseline />
        <div className={classes.root}>
        <small>Last Updates {updateDate}</small>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card} style={{backgroundColor:blue[500]}}>
            <CardHeader
                avatar={
                    <Avatar>
                        <LocalHospitalSharpIcon fontSize="large" color="primary"></LocalHospitalSharpIcon>
                   </Avatar>
                }
            />
            <CardContent>
            <Typography className={classes.active} variant="h5" component="h3">
                Active
                
        </Typography>
        <Typography className={classes.cases} variant="h5" component="h2">
        <CountUp start={0} end={active} duration={5} separator="," />
        </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card} style={{backgroundColor:yellow[400]}} >
            <CardHeader
                avatar={
                    <Avatar>
                       <GroupSharpIcon fontSize="large" style={{color:yellow[500]}} ></GroupSharpIcon>
                   </Avatar>
                }
            />
            <CardContent>
            <Typography  variant="h5" component="h2">
                Cases
                
        </Typography>
        <Typography className={classes.cases} variant="h5" component="h2">
        <CountUp start={0} end={cases} duration={5} separator="," />   
        </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
       <Card className={classes.card} style={{backgroundColor:green[500]}} >
       <CardHeader
           avatar={
               <Avatar>
                   <VerifiedUserSharpIcon  fontSize="large" style={{ color: green[500] }}></VerifiedUserSharpIcon>
              </Avatar>
           }
       />
       <CardContent>
       <Typography  variant="h5" component="h2">
           recovered
           
   </Typography>
   <Typography className={classes.cases} variant="h5" component="h2">
   <CountUp start={0} end={recovered} duration={5} separator="," />

       
      
          
   </Typography>
       </CardContent>
   </Card>
       </Grid>
      </Grid>
    
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
      <Card className={classes.card} style={{backgroundColor:red[400]}} >
<CardHeader
    avatar={
        <Avatar>
           <LocalHotelSharpIcon fontSize="large" color="secondary"></LocalHotelSharpIcon>
       </Avatar>
    }
/>
<CardContent>
<Typography  variant="h5" component="h2">
    Deaths
    
</Typography>
<Typography variant="h5" component="h2">
<CountUp start={0} end={deaths} duration={5} separator="," />



   
</Typography>
</CardContent>
</Card>
    
      </Grid>
       <Grid item xs={6} sm={7}>
      <Chart style={{Align:"center"}}></Chart>
       </Grid>
      </Grid>
      <Grid container spacing={3}>
      
      </Grid>
      <FormControl>
    <NativeSelect defaultValue="" onChange={getCountryData}>
      <option value="">Select Country</option>
     {Data.map((country,i) => <option key={i} value={Data[i]}>{country}</option>)}
    </NativeSelect>
  </FormControl>
    </div>
    </Container>
)}
