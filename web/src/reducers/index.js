import { combineReducers } from 'redux';
import ui from './ui';
import inventory from './inventory';

export default combineReducers({
  ui,
  inventory,
});
