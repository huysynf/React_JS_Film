import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: '100%',
    maxWidth: '100%',
    height: '100vh',
    width: '100vw'
  },
  button: {
    margin: theme.spacing(1),
  },
  loginButtonWrap: {
    textAlign: 'center',
    marginTop: '1rem'
  }
}));

function Login(props) {
  
  
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };
  
  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
      <Grid container
            justify={'center'}
            alignItems="center"
            className={classes.container}
      >
        <Card className={'p-5'}>
          <h3 className={'text-center'}>Sign In</h3>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailIcon/>
                    </InputAdornment>
                  }
              />
            </FormControl>
          </Grid>
          <Grid className={'mt-4'}>
            <FormControl>
              <InputLabel
                  htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon/>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                      </IconButton>
                    </InputAdornment>
                  }
              />
            </FormControl>
          </Grid>
          <Grid justify={'center'}
                className={classes.loginButtonWrap}
          >
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                endIcon={
                  <ExitToAppIcon />
                }
            >
              Login
            </Button>
          </Grid>
        </Card>
      </Grid>
  );
}

export default Login;