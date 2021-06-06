import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
import {getStatus, loginAsync} from '../../../features/auth/authSlide';

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: '100%',
    maxWidth: '100%',
    height: '100vh',
    width: '100vw',
  },
  button: {
    margin: theme.spacing(1),
  },
  loginButtonWrap: {
    textAlign: 'center',
    marginTop: '1rem',
  },
}));

function Login(props) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const status = useSelector(getStatus);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const login = async ()=>{
    let data = {
      email,
      password
    };
    console.log(status);
    await dispatch(loginAsync(data));
    console.log(status);
  
  }
  
  return (
      <Grid container
            alignItems="center"
            className={classes.container}
            justify={'center'}
      >
        <Card className={'p-5'}>
          <h3 className={'text-center'}>Sign In</h3>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                  id="input-with-icon-adornment"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon/>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                          aria-label="toggle password visibility"
                          onClick={()=>setShowPassword(!showPassword)}
                          onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                      </IconButton>
                    </InputAdornment>
                  }
              />
            </FormControl>
          </Grid>
          <Grid
                className={classes.loginButtonWrap}
          >
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={login}
                endIcon={
                  <ExitToAppIcon/>
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