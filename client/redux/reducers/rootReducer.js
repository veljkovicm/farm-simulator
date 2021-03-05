import { combineReducers } from 'redux';
import main from './main';
import buildings from './buildings';

const rootReducer = combineReducers({
  main,
  buildings,
});

export default rootReducer;
