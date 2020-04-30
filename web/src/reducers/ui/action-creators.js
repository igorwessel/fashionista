import {
  OPEN_SEARCH_PANEL,
  CLOSE_SEARCH_PANEL,
  OPEN_CART_PANEL,
  CLOSE_CART_PANEL,
} from './actions';

export const openSearchPanel = () => ({
  type: OPEN_SEARCH_PANEL,
  payload: {
    searchPanel: true,
  },
});

export const closeSearchPanel = () => ({
  type: CLOSE_SEARCH_PANEL,
  payload: {
    searchPanel: false,
  },
});

export const openCartPanel = () => ({
  type: OPEN_CART_PANEL,
  payload: {
    cartPanel: true,
  },
});

export const closeCartPanel = () => ({
  type: CLOSE_CART_PANEL,
  payload: {
    cartPanel: false,
  },
});
