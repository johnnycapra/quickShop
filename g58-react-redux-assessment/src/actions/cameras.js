import axios from 'axios';

export const getCameras = () => {
  return {
    type:'GET_CAMERAS',
    payload: axios.get(`http://localhost:8000/cameras`)
  }
}
