import * as t from '../types';

const main = (state = {
  farms: [],
}, action) => {
  switch (action.type) {
    case t.SET_FARMS:
      return {
        ...state,
        farms: action.payload,
      };
    case t.ADD_FARM:
      return {
        ...state,
        farms: [
          action.payload,
          ...state.farms,
        ],
      };
    default:
      return { ...state };
  }
};

export default main;
