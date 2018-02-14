export default(state = 'title', action) => {
  switch(action.type) {
    case 'SORT_CAMERAS':
      return action.payload;
    default:
      return state;
  }
}
