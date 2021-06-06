import React, {useEffect} from 'react';
import {Container} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers, getUsers} from '../../../features/user/userSlide';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Users = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect( () => {
     dispatch(fetchUsers());
    return () => {
    };
  }, [dispatch]);
  const users = useSelector(getUsers);

  return (
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0 && users.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                    <TableCell align="right">
                      {user.gender == 1
                          ? <AccessibilityIcon color={'primary'}/>
                          : <PregnantWomanIcon color={'secondary'}/>
                      }
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
  );
};

export default Users;
