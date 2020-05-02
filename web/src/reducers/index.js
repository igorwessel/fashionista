import { combineReducers } from 'redux';
import ui from './ui';
import inventory from './inventory';
import cart from './cart';

export default combineReducers({
  ui,
  inventory,
  cart,
});
