import React from 'react';
import FarmItem from '../FarmItem.jsx';

const FarmList = ({ farms }) => {
  return (
    <>
      {
        farms.map((farm) => (
          <div key={farm.id}>
            <FarmItem farm={farm}/>
          </div>
        ))
      }
    </>
  )
}

export default FarmList;


