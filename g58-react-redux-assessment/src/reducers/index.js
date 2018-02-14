import { combineReducers } from 'redux'
import cameras from './cameras';
import updatePhrase from './updatePhrase';
import sortCameras from './sortCameras';
import cart from './cart';

const rootReducer = combineReducers({
  cameras,
  updatePhrase,
  sortCameras,
  cart
})

export default rootReducer;
