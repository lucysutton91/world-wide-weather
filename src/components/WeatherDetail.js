// import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import config from '../config';
// import store, { fetchDetail } from '../store';

// export default class Results extends Component {
//   constructor(props){
//     super(props)
//     this.state = store.getState()
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//     let appId = config.WEATHER_KEY
//     let cityId = this.props.match.params.cityId
//     store.dispatch(fetchDetail(cityId, appId))
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render () {
//     let weather = this.state.detail
//     console.log(weather)
//     if(weather){
//       const name = weather.name
//       const temp = weather.main.temp
//       const humidity = weather.main.humidity
//       const description = weather.weather[0].description
//       const windSpeed = weather.wind.windSpeed
//       const visibility = weather.visibility
//       const cloudCover = weather.clouds.all
//       return (
//         <ul>
//           <li>{name}</li>
//           <li>Current temp: {temp}</li>
//           <li>Humidity: {humidity}%</li>
//           <li>{description}</li>
//           <li>{windSpeed}mph winds</li>
//           <li>{visibility} meters</li>
//           <li>{cloudCover}% cloud cover</li>
//         </ul>
//       )
//     }
//     return (
//       <Grid>
//         <h1>detailed weather info here</h1>
//       </Grid>
//     )
//   }
  
  
// }

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import config from '../config';
import store, { fetchDetail } from '../store';
import WeatherIcon from 'react-icons-weather';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2em'
  },
  icon: {
    fontSize: '5em'
  },
  temp: {
    fontSize: '5em'
  },
  name: {
    paddingTop: '1em'
  },
  wind: {
    paddingTop: '-1em'
  },
  speed: {
    paddingBottom: '0em',
    fontSize: '3.5em'
  }
});

class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    let appId = process.env.REACT_APP_WEATHER_KEY
    let cityId = this.props.match.params.cityId
    store.dispatch(fetchDetail(cityId, appId))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { classes } = this.props;
    const cities = this.state.cities
    let weather = this.state.detail
    console.log(weather)
    if (weather){
      const name = weather.name
      const temp = weather.main.temp
      const humidity = weather.main.humidity
      const description = weather.weather[0].description
      const windSpeed = weather.wind.speed
      const visibility = weather.visibility
      const cloudCover = weather.clouds.all
      const iconCode = weather.weather[0].id
      return (
        <Grid container className={classes.root} spacing={16} alignItems="flex-end">
          <Grid item xs={12}>
            <h1>{name}</h1>
          </Grid>
          <Grid item xs={12} sm={4}  alignItems="space-between">
            <WeatherIcon className={classes.icon} name="owm" iconId={iconCode} flip="horizontal" rotate="90" />
            <Typography className={classes.name} variant="subheading" component="h1">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} alignItems="space-between">
            <Typography className={classes.temp} variant="headline" component="h2">
              {temp}°
            </Typography>
            <Typography className={classes.name} variant="subheading" component="h3">
              {humidity}% humidity
            </Typography>
          </Grid>  
          <Grid item xs={12} sm={4} alignItems="space-between">
            <Typography className={classes.speed} variant="headline" component="h3">
              {windSpeed} 
            </Typography>
            <Typography className={classes.wind} variant="subheading" component="h3">
              mph winds
            </Typography>
            <Typography className={classes.name} variant="subheading" component="h3">
              {cloudCover}% cloud cover
            </Typography>
          </Grid>
        </Grid>
      )
    } else {
    return (
      <Grid>
        <h1>detailed weather info here</h1>
      </Grid>
    )
    }
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Detail));