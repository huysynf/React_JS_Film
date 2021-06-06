import React from 'react';
import {Grid} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  loading: {
    position: 'fixed',
    maxHeight: '100%',
    maxWidth: '100%',
    height: '100vh',
    width: '100vw',
    background: 'rgba(170,166,166,0.58)',
    zIndex:'999',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}));
const Loading = () => {
  const classes =useStyles();
  return (
      <Grid className={classes.loading}>
          <CircularProgress size={40} />
      </Grid>
  );
};

export default Loading;
