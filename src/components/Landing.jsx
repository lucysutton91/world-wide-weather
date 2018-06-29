import React, { Component } from 'react';
import { PanelGroup, Grid, Panel } from 'react-bootstrap';
import City from './City';
import axios from 'axios';


export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      cities: ['5128638', '6455259', '1581130', '593116', '3929520'],
      weather: []
    }
  }

  render () {
    console.log(this.state)
    return (
      <Grid>
        <PanelGroup>
          {
            this.state.cities.map((city, index) => {
              return <City key={index} idNum={city} />
            })
          }
        </PanelGroup>
      </Grid>
    )
  }
}

// export default Root;