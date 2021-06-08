import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "./actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return { ...state, data: null, loading: true, error: "" };
    case GET_WEATHER_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: "" };
    case GET_WEATHER_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
