import {
  OPEN_SEARCH_PANEL,
  CLOSE_SEARCH_PANEL,
  OPEN_CART_PANEL,
  CLOSE_CART_PANEL,
} from './actions';
import createReducer from '../create-reducer';

const initialState = {
  searchPanel: false,
  cartPanel: false,
};

const ui = createReducer(initialState, {
  [OPEN_SEARCH_PANEL]: (state, action) => ({ ...state, ...action.payload }),
  [CLOSE_SEARCH_PANEL]: (state, action) => ({ ...state, ...action.payload }),
  [OPEN_CART_PANEL]: (state, action) => ({ ...state, ...action.payload }),
  [CLOSE_CART_PANEL]: (state, action) => ({ ...state, ...action.payload }),
});

export default ui;
