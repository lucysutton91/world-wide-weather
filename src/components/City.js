import React, { Component } from 'react';
import { Grid, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

export default class City extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      weather: ''
    }
  }
  componentDidMount() {
    let appId = config.WEATHER_KEY
    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.props.idNum}&APPID=${appId}`)
      .then(res => {
        const weather = res.data;
        this.setState({ weather });
      })
  }
  handleClick(event){
    console.log('click')
  }
  render () {
    console.log(this.state)
    return (
      <Link to="/weatherdetail">
        <Panel>
          <Panel.Heading>City Name</Panel.Heading>
          <Panel.Body>Weather Info</Panel.Body>
        </Panel>
      </Link>
    )
  }
}
