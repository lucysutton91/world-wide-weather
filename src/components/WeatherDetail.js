import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import config from '../config';
import store, { fetchDetail } from '../store';

export default class Results extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    let appId = config.WEATHER_KEY
    let cityId = this.props.match.params.cityId
    store.dispatch(fetchDetail(cityId, appId))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    let weather = this.state.detail
    console.log(weather)
    if(weather){
      const name = weather.name
      const temp = weather.main.temp
      const humidity = weather.main.humidity
      const description = weather.weather[0].description
      const windSpeed = weather.wind.windSpeed
      const visibility = weather.visibility
      const cloudCover = weather.clouds.all
      return (
        <ul>
          <li>{name}</li>
          <li>Current temp: {temp}</li>
          <li>Humidity: {humidity}%</li>
          <li>{description}</li>
          <li>{windSpeed}mph winds</li>
          <li>{visibility} meters</li>
          <li>{cloudCover}% cloud cover</li>
        </ul>
      )
    }
    return (
      <Grid>
        <h1>detailed weather info here</h1>
      </Grid>
    )
  }
  
  
}
