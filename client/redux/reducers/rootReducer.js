import { combineReducers } from 'redux';
import main from './main';
import buildings from './buildings';

const rootReducer = combineReducers({
  main: main,
  buildings: buildings,
});

export default rootReducer;
