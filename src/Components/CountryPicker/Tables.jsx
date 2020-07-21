import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NativeSelect, FormControl } from '@material-ui/core';
import { data } from 'jquery';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function SimpleTable() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([])

  useEffect(() => {
      async function getData() {
          const response = await fetch(`https://api.thevirustracker.com/free-api?countryTotals=ALL`);
          let data = await response.json();
          console.log(data)
          setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      }
      getData();
  }, [])
  return (
    <FormControl>
    <NativeSelect defaultValue="">
      <option value="">Select Country</option>
      {globalData.map((key, ind) => <option key={ind} value={globalData[ind].title}>{globalData[ind].title}</option>)}
    </NativeSelect>
  </FormControl>
  );
}
