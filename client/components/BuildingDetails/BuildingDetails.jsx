import { connect } from 'react-redux';
import { submitNewUnit } from './actions';
import { addUnit } from '../../redux/actions/buildings';
import Button from '@material-ui/core/Button';

const BuildingDetails = ({ building, addUnit }) => {

  const handleClick = async (id) => {
    submitNewUnit(id)
    .then((res) => {
      addUnit(res);
    })
  }

  return (
    <>
      <span>{building.name}</span>
        <span>{building.farmUnit}</span>
        <span>{building.units.length}</span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(building.id)}  
        >
          ADD UNIT
        </Button>
    </>
  )
}

const mapDispatchToProps = {
  addUnit: addUnit,
}

export default connect(null, mapDispatchToProps)(BuildingDetails);


