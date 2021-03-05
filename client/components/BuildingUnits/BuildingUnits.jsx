import React from 'react';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { submitFeedUnit } from './actions';
import { feedUnit } from '../../redux/actions/buildings';
import { connect } from 'react-redux/';

const BuildingUnits = ({ units, feedUnit }) => {
  console.log({units});


  const handleClick = async (id, i) => {
    submitFeedUnit(id).then((res) => {
      if(!res.error) {
        feedUnit({ index: i, unit: res })
      }
    });
  }

  let unitsMarkup = "This building doesn' have any units yet";
  console.log('UNITS', units);
  if(units.length) {
    unitsMarkup = units.map((unit, i) => {
      return <div key={unit.id}>
        <span>{unit.name}</span>
        <span>{unit.health}</span>
        
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(unit.id, i)}  
        >
          FEED UNIT
          </Button>
      </div>
    }) 
  }


  return (
      <div>
        {unitsMarkup}
        {/* {units.map((unit, i) => {
          return <div key={unit.id}>
            <span>{unit.name}</span>
            <span>{unit.health}</span>
            
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(unit.id, i)}  
            >
              FEED UNIT
              </Button>
          </div>
        }) } */}
      </div>

  )
}




const mapDispatchToProps = {
  feedUnit: feedUnit,
}

export default connect(null, mapDispatchToProps)(BuildingUnits);

