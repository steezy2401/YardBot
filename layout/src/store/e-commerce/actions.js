import {
  GET_CART_DATA,
  GET_CART_DATA_FAIL,
  GET_CART_DATA_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,

  GET_RAFLLES,
  GET_RAFFLES_FAIL,
  GET_RAFFLES_SUCCESS,

  GET_RAFLLE,
  GET_RAFFLE_FAIL,
  GET_RAFFLE_SUCCESS,

  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,

  GET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_SUCCESS,
  GET_ANNOUNCEMENTS_FAIL,

  GET_SHOPS,
  GET_SHOPS_FAIL,
  GET_SHOPS_SUCCESS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "./actionTypes"

export const getProducts = () => ({
  type: GET_PRODUCTS,
})

export const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
})

export const getProductsFail = error => ({
  type: GET_PRODUCTS_FAIL,
  payload: error,
})

export const getProductDetail = productId => ({
  type: GET_PRODUCT_DETAIL,
  productId,
})

export const getProductDetailSuccess = products => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: products,
})

export const getProductDetailFail = error => ({
  type: GET_PRODUCT_DETAIL_FAIL,
  payload: error,
})

export const getOrders = () => ({
  type: GET_ORDERS,
})

export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
})

export const getOrdersFail = error => ({
  type: GET_ORDERS_FAIL,
  payload: error,
})

export const getCartData = () => ({
  type: GET_CART_DATA,
})

export const getCartDataSuccess = cartData => ({
  type: GET_CART_DATA_SUCCESS,
  payload: cartData,
})

export const getCartDataFail = error => ({
  type: GET_CART_DATA_FAIL,
  payload: error,
})

export const getShops = () => ({
  type: GET_SHOPS,
})

export const getShopsSuccess = shops => ({
  type: GET_SHOPS_SUCCESS,
  payload: shops,
})

export const getShopsFail = error => ({
  type: GET_SHOPS_FAIL,
  payload: error,
})

//PROD
export const getRaffle = id => ({
  type: GET_RAFLLE,
  id,
})

export const getRaffleSuccess = raffle => ({
  type: GET_RAFFLE_SUCCESS,
  payload: raffle,
})

export const getRaffleFail = error => ({
  type: GET_RAFFLE_FAIL,
  payload: error,
})

export const getRaffles = (page, limit, sort, sort_dir, search) => ({
  type: GET_RAFLLES,
  payload: {page, limit, sort, sort_dir, search},
})

export const getRafflesSuccess = raffles => ({
  type: GET_RAFFLES_SUCCESS,
  payload: raffles,
})

export const getRafflesFail = error => ({
  type: GET_RAFFLES_FAIL,
  payload: error,
})

export const getUsers = (page, limit, sort, sort_dir, search) => ({
  type: GET_USERS,
  payload: {page, limit, sort, sort_dir, search},
})

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const getUsersFail = error => ({
  type: GET_USERS_FAIL,
  payload: error,
})

export const getAnnouncements = (page, limit, sort, sort_dir, search) => ({
  type: GET_ANNOUNCEMENTS,
  payload: {page, limit, sort, sort_dir, search},
})

export const getAnnouncementsSuccess = announcements => ({
  type: GET_ANNOUNCEMENTS_SUCCESS,
  payload: announcements,
})

export const getAnnouncementsFail = error => ({
  type: GET_ANNOUNCEMENTS_FAIL,
  payload: error,
})
