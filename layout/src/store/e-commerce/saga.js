import { call, put, takeEvery } from "redux-saga/effects"

// Ecommerce Redux States
import {
  GET_CART_DATA,

  GET_RAFLLE,
  GET_RAFLLES,
  GET_USERS,
  GET_ANNOUNCEMENTS,

  GET_ORDERS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS,
  GET_SHOPS,
} from "./actionTypes"
import {
  getCartDataFail,
  getCartDataSuccess,

  getRaffleFail,
  getRaffleSuccess,

  getRafflesFail,
  getRafflesSuccess,

  getUsersFail,
  getUsersSuccess,

  getAnnouncementsSuccess,
  getAnnouncementsFail,

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

  getRaffle,
  getRaffles,
  getUsers,
  getAnnouncements,

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

function* fetchRaffle({ id }) {
  try {
    const response = yield call(getRaffle, id)
    yield put(getRaffleSuccess(response))
  } catch (error) {
    yield put(getRaffleFail(error))
  }
}

function* fetchRaffles({ payload: { page, limit, sort, sort_dir, search } }) {
  try {
    const response = yield call(getRaffles, page, limit, sort, sort_dir, search)
    yield put(getRafflesSuccess(response))
  } catch (error) {
    yield put(getRafflesFail(error))
  }
}

function* fetchUsers({ payload: { page, limit, sort, sort_dir, search } }) {
  try {
    const response = yield call(getUsers, page, limit, sort, sort_dir, search)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

function* fetchAnnouncements({ payload: { page, limit, sort, sort_dir, search } }) {
  try {
    const response = yield call(getAnnouncements, page, limit, sort, sort_dir, search)
    yield put(getAnnouncementsSuccess(response))
  } catch (error) {
    yield put(getAnnouncementsFail(error))
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

  yield takeEvery(GET_RAFLLE, fetchRaffle)
  yield takeEvery(GET_RAFLLES, fetchRaffles)
  yield takeEvery(GET_USERS, fetchUsers)
  yield takeEvery(GET_ANNOUNCEMENTS, fetchAnnouncements)

  yield takeEvery(GET_SHOPS, fetchShops)
}

export default ecommerceSaga
