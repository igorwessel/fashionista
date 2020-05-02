import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './actions';
import createReducer from 'reducers/create-reducer';
const initialState = [];

const cart = createReducer(initialState, {
  [ADD_PRODUCT]: (state, action) => [...state.concat(action.payload)],
  [REMOVE_PRODUCT]: (state, action) => state.filter(({ id }) => id !== action.payload.id),
  [INCREASE_QUANTITY]: (state, action) => [
    ...state.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ),
  ],
  [DECREASE_QUANTITY]: (state, action) => [
    ...state.map((product) =>
      product.id === action.payload.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ),
  ],
});

export default cart;
