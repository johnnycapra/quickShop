export default(state = [], action) => {
  switch(action.type) {
    case 'GET_CART':
      return state;
    case 'GET_CART_FULFILLED':
      return [...action.payload.data]
    case 'ADD_CART_FULFILLED':
      return [...action.payload.data.filter(camera => camera.inCart === true)]

    case 'REMOVE_CART_FULFILLED':
      return [...action.payload.data.filter(camera => camera.inCart === true)]
    default:
      return state;
  }
}
