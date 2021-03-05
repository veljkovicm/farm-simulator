import { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addBuilding } from '../../redux/actions/buildings';
import { submitNewBuilding } from './actions';

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
      setFarmUnit('');
    });
  }

  return (
    <div style={{ marginBottom: '20px'}}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Building name"
          value={name}
          onChange={handleChange(setName)}
          style={{ marginRight: '40px'}}
        />
        <TextField
          id="standard-basic"
          label="Farm unit name"
          value={farmUnit}
          onChange={handleChange(setFarmUnit)}
          style={{ marginRight: '40px'}}
        />
        <Button
          variant="contained"
          color="primary" 
          onClick={handleSubmit}
          style={{ marginTop: '10px'}}
          disabled={!name || !farmUnit}
        >
          Add new building
        </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addBuilding: addBuilding
}

export default connect(null, mapDispatchToProps)(AddBuildingInput);
