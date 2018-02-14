import axios from 'axios';

export const getCart = () => {
  return {
    type:'GET_CART',
    payload: axios.get(`http://localhost:8000/cart`)
  }
}
export const addToCart = (id) => {
  return {
    type: 'ADD_CART',
    payload: axios.patch(`http://localhost:8000/cart/${id}/add`)
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_CART',
    payload: axios.patch(`http://localhost:8000/cart/${id}/remove`)
  }
}
