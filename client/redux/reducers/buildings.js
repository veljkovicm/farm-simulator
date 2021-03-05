import * as t from '../types';

const buildings = (state = {
  buildings: {}, // change if bugs
}, action) => {
  switch (action.type) {
    case t.SET_BUILDINGS:
      return {
        buildings: action.payload,
      };
    case t.ADD_BUILDING:
      return {
        buildings: {
          [action.payload.id]: {
            ...action.payload,
          },
          ...state.buildings,
        },
      };
    case t.ADD_UNIT:
      return {
        buildings: {
          ...state.buildings,
          [action.payload.buildingId]: {
            ...state.buildings[action.payload.buildingId],
            units: [
              action.payload,
              ...state.buildings[action.payload.buildingId].units,
            ],
          },
        },
      };
    case t.FEED_UNIT:
      const { buildingId } = action.payload.unit;
      const { index } = action.payload;
      const updatedUnits = [...state.buildings[buildingId].units];
      updatedUnits[index] = action.payload.unit;

      return {
        buildings: {
          ...state.buildings,
          [action.payload.unit.buildingId]: {
            ...state.buildings[action.payload.unit.buildingId],
            units: [...updatedUnits],
          },
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default buildings;
