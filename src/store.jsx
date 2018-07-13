import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// Initial State

const initialState = {
  cities: ['5128638', '6455259', '1581130', '593116', '3929520'],
  currentWeather: [],
  detail: ''
}

// Action Types

const GET_CITIES = 'GET_CITIES'
const GET_WEATHER = 'GET_WEATHER'
const GET_DETAIL = 'GET_DETAIL'

// Action Creators


export function getCities(cities) {
  const action = { type: GET_CITIES, cities };
  return action;
}

export function getWeather(weather) {
  const action = { type: GET_WEATHER, weather};
  return action;
}

export function getDetail(detail) {
  const action = { type: GET_DETAIL, detail};
  return action;
}

// Thunk Creators

export function fetchWeather(cityId, appId) {

  return function thunk(dispatch) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${appId}&units=imperial`)
          .then(res => res.data)
          .then(weather => {
              const action = getWeather(weather);
              dispatch(action);
          });
  }
}

export function fetchDetail(cityId, appId) {

  return function thunk(dispatch) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${appId}&units=imperial`)
          .then(res => res.data)
          .then(detail => {
              const action = getDetail(detail);
              dispatch(action);
          });
  }
}

// Reducers

function reducer(state = initialState, action) {
  let newState;
  
  switch (action.type) {
    case GET_CITIES:
      newState = Object.assign({}, state, { cities: action.cities });
      break;

    case GET_WEATHER:
      newState = Object.assign({}, state, { currentWeather: state.currentWeather.concat(action.weather) });
      break;
    case GET_DETAIL:
      newState = Object.assign({}, state, { detail: action.detail });
      break;
    
    default:
      newState = state;
      break;
  }
  return newState;
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      createLogger()
  ))
);

export default store;
