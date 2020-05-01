import { expect } from 'chai';
import products from '.';

describe('Fetch catalog data', () => {
  it('products should be a function', () => {
    expect(products).to.be.a('function');
  });
});
