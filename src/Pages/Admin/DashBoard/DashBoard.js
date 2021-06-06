import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

const DashBoard = () => {
  return (
      <Grid container
        justify={'center'}
      >
        <h3>Dashboard</h3>
        <Link to={'/users'}>Users</Link>
      </Grid>
  );
};

export default DashBoard;
