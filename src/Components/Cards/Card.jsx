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
import {fetchDailyData} from '../API/Api'
const useStyles = makeStyles((theme)=>({
    root:{
        flex:1,
        marginTop:"100px",
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

export default function Cards(props) {
    const classes = useStyles();
    const date = new Date(props.data.lastUpdate);
    const updateDate = date.toString()
    return(
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
                 {props.data.confirmed.value}  
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
   {props.data.recovered.value}
   <CountUp start={0} end={props.data.recovered.value} duration={5} separator="," />   
   </Typography>
       </CardContent>
   </Card>
       </Grid>
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
{props.data.deaths.value}
</Typography>
<CountUp start={0} end={props.data.deaths.value} duration={5} separator="," />
</CardContent>
</Card>
      </Grid>      
      </Grid>
     
    </div>
    </Container>
)}
