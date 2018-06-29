import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// Initial State

const initialState = {
  cities: []
}

// Action Types

const GET_CITIES = 'GET_CITIES'
const ADD_CITY = 'ADD_CITY'
//const REMOVE_CITY = 'REMOVE_CITY'

// Action Creators


export function getCities(cities) {
  const action = { type: GET_CITIES, cities };
  return action;
}

export function addCity(cityInfo) {
  const action = { type: ADD_CITY, cityInfo };
  return action;
}

// Thunk Creators
