import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../API/Api';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './countrypicker.css';
import { FullscreenExitRounded } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "Right",
        marginBottom: "10px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    const [country,selectCountry] = useState("WorldWide")
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} justify="center">
                <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">United States</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
                </FormControl>
                </Grid>
            </Grid>
        </div>
    );
};

export default Countries;