import {
  PRODUCTS_RECEIVED,
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_BY_NAME,
  PRODUCTS_RECEIVED_PRODUCT_BY_NAME,
  PRODUCTS_FILTER_BY_NAME,
} from './actions';

export const getAllProducts = () => ({ type: PRODUCTS_GET_ALL });

export const getProductDetails = (name) => ({
  type: PRODUCTS_GET_BY_NAME,
  payload: {
    name,
  },
});

export const filterByName = (name) => ({
  type: PRODUCTS_FILTER_BY_NAME,
  payload: {
    name: name.toLowerCase(),
  },
});

export const receiveProducts = (products) => ({
  type: PRODUCTS_RECEIVED,
  products,
});

export const receiveProduct = (product) => ({
  type: PRODUCTS_RECEIVED_PRODUCT_BY_NAME,
  payload: {
    ...product,
  },
});
