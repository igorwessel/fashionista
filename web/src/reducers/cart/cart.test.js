import { expect } from 'chai';
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './actions';
import cart from '.';

describe('Cart Flow ', () => {
  it('should cart be a function', () => {
    expect(cart).to.be.a('function');
  });

  it('shuld add new product in cart', () => {
    const before = [];
    const action = {
      type: ADD_PRODUCT,
      payload: {
        id: '5807',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        installments: '3x R$ 66,63',
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    };
    const after = [
      {
        id: '5807',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        installments: '3x R$ 66,63',
        size: ['5807_343_0_PP', '5807_343_0_GG  '],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('should add new product in cart, if already exist some product in cart', () => {
    const before = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: ADD_PRODUCT,
      payload: {
        id: '5831',
        name: 'PRODUCT 2',
        image: 'blabla2.png',
        quantity: 1,
        price: 124.99,
        size: ['5807_343_0_P', '5807_343_0_M'],
      },
    };
    const after = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
      {
        id: '5831',
        name: 'PRODUCT 2',
        image: 'blabla2.png',
        quantity: 1,
        price: 124.99,
        size: ['5807_343_0_P', '5807_343_0_M'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('should remove product in cart', () => {
    const before = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: REMOVE_PRODUCT,
      payload: {
        id: '5830',
      },
    };
    const after = [];
    expect(cart(before, action)).to.be.eql(after);
  });

  it('should not remove anything if id not exists', () => {
    const before = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: REMOVE_PRODUCT,
      payload: {
        id: '5831',
      },
    };
    const after = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('should increase one quantity of product', () => {
    const before = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 1,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: INCREASE_QUANTITY,
      payload: {
        id: '5830',
      },
    };
    const after = [
      {
        id: '5830',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 2,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('should increase one quantity in products', () => {
    const before = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: INCREASE_QUANTITY,
      payload: {
        id: '5831',
      },
    };
    const after = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 16,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('if have 2 products, should increase one in quantity of product with ID specified', () => {
    const before = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
      {
        id: '5832',
        name: 'PRODUCT 2',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: INCREASE_QUANTITY,
      payload: {
        id: '5832',
      },
    };
    const after = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
      {
        id: '5832',
        name: 'PRODUCT 2',
        image: 'blabla.png',
        quantity: 16,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });

  it('should decrease one quantity in products', () => {
    const before = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
      {
        id: '5832',
        name: 'PRODUCT 2',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];
    const action = {
      type: DECREASE_QUANTITY,
      payload: {
        id: '5832',
      },
    };
    const after = [
      {
        id: '5831',
        name: 'PRODUCT 1',
        image: 'blabla.png',
        quantity: 15,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
      {
        id: '5832',
        name: 'PRODUCT 2',
        image: 'blabla.png',
        quantity: 14,
        price: 129.99,
        size: ['5807_343_0_PP', '5807_343_0_GG'],
      },
    ];

    expect(cart(before, action)).to.be.eql(after);
  });
});
