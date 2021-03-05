import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { submitNewUnit } from './actions';
import { addUnit } from '../../redux/actions/buildings';

const BuildingDetails = ({ building, addUnit }) => {
  const handleClick = async (id) => {
    submitNewUnit(id)
    .then((res) => {
      addUnit(res);
    });
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Number of units</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">{building.name}</TableCell>
              <TableCell align="right">{building.farmUnit}</TableCell>
              <TableCell align="right">{building.units?.length}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClick(building.id)}  
                >
                ADD UNIT
              </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const mapDispatchToProps = {
  addUnit,
}

export default connect(null, mapDispatchToProps)(BuildingDetails);
