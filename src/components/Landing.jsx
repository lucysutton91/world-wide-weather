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
      <div style={{ padding: 16 }}>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={6} sm={4}>
            <City idNum={cities[0]} arrIndex={0} imageUrl={'https://c1.staticflickr.com/5/4558/24016855707_1e050f887d_b.jpg'}/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <City idNum={cities[1]} arrIndex={1} imageUrl={'https://c1.staticflickr.com/4/3619/3483995761_e5598c99c2_b.jpg'}/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <City idNum={cities[2]} arrIndex={2} imageUrl={'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1060x600/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F766847cc0d4953def69527dc90794839%2F205099142%2F31545398233_3f2f6e19b4_b.jpg'}/>
          </Grid>
          <Grid item xs={6} sm={6}>
            <City idNum={cities[3]} arrIndex={3} imageUrl={'http://www.travelbaltics.eu/wp-content/uploads/2016/11/Gediminas_Tower-750x450.jpg'}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <City idNum={cities[4]} arrIndex={4} imageUrl={'https://c1.staticflickr.com/8/7283/8742743926_4a8d265e41_b.jpg'}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Landing));