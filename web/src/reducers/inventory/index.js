import createReducer from 'reducers/create-reducer';
import {
  PRODUCTS_RECEIVED,
  PRODUCTS_RECEIVED_PRODUCT_BY_NAME,
} from './actions';

const initialState = {
  products: [],
  actual_product: {},
};

const inventory = createReducer(initialState, {
  [PRODUCTS_RECEIVED]: (state, action) => ({
    ...state,
    products: action.products,
  }),
  [PRODUCTS_RECEIVED_PRODUCT_BY_NAME]: (state, action) => ({
    ...state,
    actual_product: action.payload,
  }),
});

export default inventory;
