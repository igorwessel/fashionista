import { expect } from 'chai';
import {
  OPEN_SEARCH_PANEL,
  CLOSE_SEARCH_PANEL,
  OPEN_CART_PANEL,
  CLOSE_CART_PANEL,
} from './actions';
import ui, { initialState } from '.';

it('ui should be a function', () => {
  expect(ui).to.be.a('function');
});

describe('Open Panels', () => {
  it('should open searchpanel', () => {
    const before = initialState;
    const action = {
      type: OPEN_SEARCH_PANEL,
      payload: {
        searchPanel: true,
      },
    };
    const after = { ...initialState, searchPanel: true };
    expect(ui(before, action)).to.be.eql(after);
  });

  it('should close searchPanel', () => {
    const before = initialState;
    const action = {
      type: CLOSE_SEARCH_PANEL,
      payload: {
        searchPanel: false,
      },
    };
    const after = { ...initialState, searchPanel: false };
    expect(ui(before, action)).to.be.eql(after);
  });

  it('should open cartPanel', () => {
    const before = initialState;
    const action = {
      type: OPEN_CART_PANEL,
      payload: {
        cartPanel: true,
      },
    };
    const after = { ...initialState, cartPanel: true };
    expect(ui(before, action)).to.be.eql(after);
  });

  it('should close cartPanel', () => {
    const before = initialState;
    const action = {
      type: CLOSE_CART_PANEL,
      payload: {
        cartPanel: false,
      },
    };
    const after = { ...initialState, cartPanel: false };
    expect(ui(before, action)).to.be.eql(after);
  });
});
