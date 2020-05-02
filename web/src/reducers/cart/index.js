import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_QUANTITY } from './actions';
import createReducer from 'reducers/create-reducer';
const initialState = [];

const cart = createReducer(initialState, {
  [ADD_PRODUCT]: (state, action) => [...state.concat(action.payload)],
  [REMOVE_PRODUCT]: (state, action) => state.filter(({ id }) => id !== action.payload.id),
  [INCREASE_QUANTITY]: (state, action) => [
    {
      ...state.filter(({ id }) => id === action.payload.id)[0],
      quantity: 1,
    },
  ],
});

export default cart;
