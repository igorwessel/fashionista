import {
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_PRODUCT,
} from './actions';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {
    ...product,
  },
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: {
    id,
  },
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: {
    id,
  },
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: {
    id,
  },
});
