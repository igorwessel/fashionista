import { call, put, takeEvery } from 'redux-saga/effects';
import { getProducts } from 'services/catalog';

function* fetchProducts(action) {
  try {
    const products = yield call(getProducts, action.payload.products);
    yield put({ type: 'PRODUCTS_FETCH_SUCCEEDED', products });
  } catch (err) {
    yield put({ type: 'PRODUCTS_FETCH_FAILED', message: err });
  }
}

function* saga() {
  yield takeEvery('PRODUCTS_FETCH_REQUEST', fetchProducts);
}

export default saga;
