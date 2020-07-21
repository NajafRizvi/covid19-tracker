import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"
      style={{
        backgroundColor: "rgba(74, 144, 226, 1)"
    }}
      >
        <Toolbar>
        <IconButton>
        </IconButton>
          <Typography variant="h6" className={classes.title}>
            COVID19-TRACKER
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Chart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
