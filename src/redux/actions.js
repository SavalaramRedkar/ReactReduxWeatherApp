import axios from "axios";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "./actionTypes";

export const getWeatherRequest = () => {
  return {
    type: GET_WEATHER_REQUEST,
  };
};

export const getWeatherSuccess = (data) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: data,
  };
};

export const getWeatherFailure = (errorMessage) => {
  return {
    type: GET_WEATHER_FAILURE,
    payload: errorMessage,
  };
};

export const getWeatherData = (city) => {
  return (dispatch) => {
    dispatch(getWeatherRequest());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3fedb5dc610bbabcb03b28b837d5b3d`
      )
      .then((response) => {
        dispatch(getWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getWeatherFailure(error.message));
      });
  };
};
