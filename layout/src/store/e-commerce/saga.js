import { call, put, takeEvery } from "redux-saga/effects"

// Ecommerce Redux States
import {
  GET_CART_DATA,

  GET_RAFLLES,
  GET_USERS,

  GET_ORDERS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS,
  GET_SHOPS,
} from "./actionTypes"
import {
  getCartDataFail,
  getCartDataSuccess,

  getRafflesFail,
  getRafflesSuccess,

  getUsersFail,
  getUsersSuccess,

  getOrdersFail,
  getOrdersSuccess,
  getProductDetailFail,
  getProductDetailSuccess,
  getProductsFail,
  getProductsSuccess,
  getShopsFail,
  getShopsSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getCartData,

  getRaffles,
  getUsers,

  getOrders,
  getProducts,
  getShops,
  getProductDetail,
} from "../../helpers/fakebackend_helper"

function* fetchProducts() {
  try {
    const response = yield call(getProducts)
    yield put(getProductsSuccess(response))
  } catch (error) {
    yield put(getProductsFail(error))
  }
}

function* fetchProductDetail({ productId }) {
  try {
    const response = yield call(getProductDetail, productId)
    yield put(getProductDetailSuccess(response))
  } catch (error) {
    yield put(getProductDetailFail(error))
  }
}

function* fetchOrders() {
  try {
    const response = yield call(getOrders)
    yield put(getOrdersSuccess(response))
  } catch (error) {
    yield put(getOrdersFail(error))
  }
}

function* fetchCartData() {
  try {
    const response = yield call(getCartData)
    yield put(getCartDataSuccess(response))
  } catch (error) {
    yield put(getCartDataFail(error))
  }
}

function* fetchRaffles({page}) {
  try {
    const response = yield call(getRaffles, page)
    yield put(getRafflesSuccess(response))
  } catch (error) {
    yield put(getRafflesFail(error))
  }
}

function* fetchUsers({page}) {
  try {
    const response = yield call(getUsers, page)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

function* fetchShops() {
  try {
    const response = yield call(getShops)
    yield put(getShopsSuccess(response))
  } catch (error) {
    yield put(getShopsFail(error))
  }
}

function* ecommerceSaga() {
  yield takeEvery(GET_PRODUCTS, fetchProducts)
  yield takeEvery(GET_PRODUCT_DETAIL, fetchProductDetail)
  yield takeEvery(GET_ORDERS, fetchOrders)
  yield takeEvery(GET_CART_DATA, fetchCartData)

  yield takeEvery(GET_RAFLLES, fetchRaffles)
  yield takeEvery(GET_USERS, fetchUsers)

  yield takeEvery(GET_SHOPS, fetchShops)
}

export default ecommerceSaga
