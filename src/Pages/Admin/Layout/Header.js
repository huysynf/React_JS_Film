import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <Grid
          container
          alignItems="center"
          justify={'space-around'}
      >
        <Link to={'/'} >Home</Link>
        <Link to={'/login'} >Login</Link>
        <Link to={'/dashboard'} >Dashboard</Link>
      </Grid>
  );
};

export default Header;
