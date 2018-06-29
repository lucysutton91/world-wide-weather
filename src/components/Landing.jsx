// import React, { Component } from 'react';
// import { PanelGroup, Grid, Panel } from 'react-bootstrap';
// import City from './City';
// import store, { fetchCities } from '../store';


// export default class Landing extends Component {
//   constructor(){
//     super()
//     this.state = store.getState()
//   }

//   render () {
//     const cities = this.state.cities
//     const { classes } = this.props
//     console.log('classes in landing', classes)
//     return (
//       <Grid>
//           <City idNum={cities[0]} arrIndex={0} />
//           <City idNum={cities[1]} arrIndex={1} />
//           <City idNum={cities[2]} arrIndex={2} />
//           <City idNum={cities[3]} arrIndex={3} />
//           <City idNum={cities[4]} arrIndex={4} />
//       </Grid>
//     )
//   }
// }

// export default Root;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';

import City from './City';
import store, { fetchCities } from '../store';

// import Header from './components/Header';
// import WeatherDetail from './components/WeatherDetail';
// import Landing from './components/Landing';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }

  render() {
    const { classes } = this.props;
    const cities = this.state.cities
    return (
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={6}>
            <City idNum={cities[0]} arrIndex={0} />
          </Grid>
          <Grid item xs={6}>
            <City idNum={cities[1]} arrIndex={1} />
          </Grid>
          <Grid item xs={4}>
            <City idNum={cities[2]} arrIndex={2} />
          </Grid>
          <Grid item xs={4}>
            <City idNum={cities[3]} arrIndex={3} />
          </Grid>
          <Grid item xs={4}>
            <City idNum={cities[4]} arrIndex={4} />
          </Grid>
        </Grid>

    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Landing));