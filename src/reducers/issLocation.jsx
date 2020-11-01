import { REQUEST_ISS_LOCATION_SUCCESS, REQUEST_ISS_LOCATION } from '../action';

const INITIAL_STATE = {
  isFetching: false
}

const issLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ISS_LOCATION_SUCCESS:
      return ({
        ...state, 
        latitude: action.latitude,
        longitude: action.longitude,
        isFetching: false,
      });
    case REQUEST_ISS_LOCATION:
      return ({
        ...state,
        isFetching: true,
      });
    default:
      return state
  }
}

export default issLocation;

