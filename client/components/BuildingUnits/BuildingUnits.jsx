import { connect } from 'react-redux/';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { feedUnit } from '../../redux/actions/buildings';
import { submitFeedUnit } from './actions';


const useStyles = makeStyles({
  container: {
    width: 'auto',
    marginLeft: '50px',
  },
});

const BuildingUnits = ({ units, feedUnit }) => {
  const classes = useStyles();
  const handleClick = async (id, i) => {
    submitFeedUnit(id).then((res) => {
      if (!res.error) {
        feedUnit({ index: i, unit: res })
      }
    });
  }

  let unitsMarkup = <h4 style={{ paddingLeft: '10px'}}>This building doesn' have any units yet</h4>;

  if(units.length) {
    unitsMarkup = units.map((unit, i) => (
      <TableRow key={unit.id}>
        <TableCell component="th" scope="row">{unit.name}</TableCell>
        <TableCell align="right">{unit.health}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClick(unit.id, i)}
            disabled={unit.health === 0 || unit.health === 100}
          >
            {unit.health === 0 ? 'Dead' : unit.health === 100 ? 'Fully fed' : 'Feed unit'}
          </Button>
        </TableCell>
      </TableRow>
    ))
  }

  return (
    <div>
      <TableContainer component={Paper} style={{ marginLeft: '50px'}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Health</TableCell>
            <TableCell align="center">Feed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unitsMarkup}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

const mapDispatchToProps = {
  feedUnit,
}

export default connect(null, mapDispatchToProps)(BuildingUnits);
