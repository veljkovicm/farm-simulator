import React from 'react';
import Button from '@material-ui/core/Button';
import { submitFeedUnit } from './actions';
import { feedUnit } from '../../redux/actions/buildings';
import { connect } from 'react-redux/';

const BuildingUnits = ({ units, feedUnit }) => {
  const handleClick = async (id, i) => {
    submitFeedUnit(id).then((res) => {
      if(!res.error) {
        feedUnit({ index: i, unit: res })
      }
    });
  }

  let unitsMarkup = "This building doesn' have any units yet";

  if(units.length) {
    unitsMarkup = units.map((unit, i) => {
      return <div key={unit.id}>
        <span>{unit.name}</span>
        <span>{unit.health}</span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(unit.id, i)}
          disabled={unit.health === 0 || unit.health === 100}
        >
          {unit.health === 0 ? 'Dead' : unit.health === 100 ? 'Fully fed' : 'Feed unit'}
        </Button>
      </div>
    }) 
  }


  return (
    <div>
      {unitsMarkup}
    </div>
  )
}


const mapDispatchToProps = {
  feedUnit: feedUnit,
}

export default connect(null, mapDispatchToProps)(BuildingUnits);

