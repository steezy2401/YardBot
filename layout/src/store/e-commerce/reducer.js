import {
  GET_CART_DATA_FAIL,
  GET_CART_DATA_SUCCESS,


  GET_RAFFLE_FAIL,
  GET_RAFFLE_SUCCESS,
  GET_RAFFLES_FAIL,
  GET_RAFFLES_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_ANNOUNCEMENTS_SUCCESS,
  GET_ANNOUNCEMENTS_FAIL,

  GET_ORDERS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_SHOPS_FAIL,
  GET_SHOPS_SUCCESS,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  products: [],
  product: {},
  orders: [],
  cartData: {},
  raffles: [],
  raffle: {},
  announcements: [],
  users: [],
  shops: [],
  error: {},
}

const Ecommerce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        product: action.payload,
      }

    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      }

    case GET_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_CART_DATA_SUCCESS:
      return {
        ...state,
        cartData: action.payload,
      }

    case GET_CART_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_RAFFLE_SUCCESS:
      return {
        ...state,
        raffle: action.payload,
      }

    case GET_RAFFLE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_RAFFLES_SUCCESS:
      return {
        ...state,
        raffles: action.payload,
      }

    case GET_RAFFLES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }

    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        announcements: action.payload,
      }

    case GET_ANNOUNCEMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
      }

    case GET_SHOPS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Ecommerce
