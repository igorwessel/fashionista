import { expect } from 'chai';
import createReducer from './create-reducer';

const initialState = 0;
const reducer = createReducer(initialState, {
  INCREMENT: (state, action) => state + 1,
  DECREMENT: (state, action) => state - 1,
});

it('createReducer should be a function', () => {
  expect(createReducer).to.be.a('function');
});

it('createReducer(initialState, {}) should return a reducer function', () => {
  expect(createReducer([], {})).to.be.a('function');
});

it('should create reducer', () => {
  const before = 0;
  const action = {
    type: 'INCREMENT',
  };
  const after = 1;
  expect(reducer(before, action)).to.be.eq(after);
});

it('reducer should return latest state if action is unknown', () => {
  const before = 3;
  const action = { type: 'UNKNOWN' };
  const after = 3;
  expect(reducer(before, action)).to.be.eq(after);
});

it('reducer should return initialState when latest state is undefined', () => {
  const before = undefined;
  const action = { type: 'UNKNOWN' };
  const after = initialState;
  expect(reducer(before, action)).to.be.eq(after);
});

it('initialState should not be undefined', () => {
  expect(createReducer(undefined)).to.throw();
});

it('handleActions should not be a different from object', () => {
  expect(createReducer({}, 0)).to.throw();
});
