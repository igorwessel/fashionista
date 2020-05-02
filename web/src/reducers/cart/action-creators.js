import {
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_PRODUCT,
} from './actions';

export const addProduct = ({
  id,
  name,
  image,
  quantity,
  price,
  sizes,
  installments,
}) => ({
  type: ADD_PRODUCT,
  payload: {
    id,
    name,
    image,
    quantity,
    price,
    sizes,
    installments,
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
