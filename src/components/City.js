import React, { Component } from 'react';
import { Grid, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class City extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      weatherJSON: ''
    }
  }
  componentDidMount(){
    // it's returning something that isn't a json ??
    // fetch(url)
    // .then(res => {
    //   return res.json()
    // })
    // .then(json => console.log(json))
  }
  handleClick(event){
    console.log('click')
  }
  render () {
    // console.log(this.state)
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
