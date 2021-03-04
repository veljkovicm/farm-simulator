import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addBuilding } from '../../redux/actions/buildings';
import { submitNewBuilding } from './actions';
import { useState } from 'react';

const AddBuildingInput = ({ addBuilding, farmId }) => {

  const [ name, setName ] = useState('');
  const [ farmUnit, setFarmUnit ] = useState('');

  const handleChange = (setValue) => (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitNewBuilding({
      farmId,
      name,
      farmUnit,
    })
    .then((res) => {

      addBuilding(res);
      setName('');
      setUnitName('');
    });

  }

  return (
    <div>
      <form >
        <TextField id="standard-basic" label="Building name" value={name} onChange={handleChange(setName)} />
        <TextField id="standard-basic" label="Farm unit name" value={farmUnit} onChange={handleChange(setFarmUnit)} />
        <Button variant="contained" color="primary"  onClick={handleSubmit}>Add new building</Button>
      </form>
    </div>
  )
}



const mapDispatchToProps = {
  addBuilding: addBuilding
}



export default connect(null, mapDispatchToProps)(AddBuildingInput);