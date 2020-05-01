import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import {
  receiveProducts,
  receiveProduct,
} from 'reducers/inventory/action-creators';
import { PRODUCTS_GET_BY_NAME } from 'reducers/inventory/actions';
import { getProducts, getProductByName } from 'services/catalog';

export function* getAllProducts() {
  const products = yield call(getProducts);
  yield put(receiveProducts(products));
}

export function* getProductDetails(action) {
  const product = yield call(getProductByName, action.payload.name);

  yield put(receiveProduct(product));
}

function* watchProductDetails() {
  yield takeEvery(PRODUCTS_GET_BY_NAME, getProductDetails);
}

function* rootSaga() {
  yield all([fork(getAllProducts), fork(watchProductDetails)]);
}

export default rootSaga;
