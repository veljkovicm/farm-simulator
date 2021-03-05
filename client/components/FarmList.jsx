import React from 'react';
import FarmItem from './FarmItem';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const FarmList = ({ farms }) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Farm Name</TableCell>
              <TableCell align="right">Farm ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              farms.map((farm) => (
                <TableRow key={farm.id}>
                    <TableCell component="th" scope="row">
                      <div>
                        <FarmItem farm={farm}/>
                      </div>
                    </TableCell>
                    <TableCell align="right">{farm.id}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default FarmList;
