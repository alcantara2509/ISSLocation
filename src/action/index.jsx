import getCurrentISSLocation from '../services/issAPI'

export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
})

export const requestISSLocationSuccess = (latitude, longitude) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  latitude,
  longitude,
})

export function fetchISSLocation() {
  return async (dispatch) => {
    dispatch(requestISSLocation());

    const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
    dispatch(requestISSLocationSuccess(latitude, longitude))
  }
}