import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import store, { fetchWeather } from '../store';
import axios from 'axios';
// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from 'react-icons-weather';

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  icon: {
    fontSize: '1.5em'
  }
};


class City extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
   
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    let appId = process.env.REACT_APP_WEATHER_KEY
    let cityId = this.props.idNum
    // store.dispatch(fetchWeather(cityId, appId))
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${appId}&units=imperial`)
      .then(res => res.data)
      .then(weather => this.setState({ localWeather: weather }))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  

  render () {
    const { classes } = this.props;
    let weather = this.state.localWeather

    if(weather){
      const name = weather.name
      const temp = Math.floor(Number(weather.main.temp)) 
      const humidity = weather.main.humidity
      const iconCode = weather.weather[0].id
      console.log('icon code', iconCode)
      return (
        <Card className={classes.card}>
          <CardMedia
            component={Link} to={`/weatherdetail/${this.props.idNum}`}
            className={classes.media}
            image={this.props.imageUrl}
          />
          <CardContent>
            
            <Typography gutterBottom variant="subheading" component="h2">
              {name}
            </Typography>
            <WeatherIcon className={classes.icon} name="owm" iconId={iconCode} flip="horizontal" rotate="90" />
            <Typography gutterBottom variant="headline" component="h2">
              {temp}°
            </Typography>
            <Typography component="p">
              {weather.weather[0].description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" component={Link} to={`/weatherdetail/${this.props.idNum}`}>
              detailed weather report
            </Button>
          </CardActions>
        </Card>
       
      )
    } else {
      return <h1>loading</h1>
    }
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(City);



// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// };

      // <Card className={classes.card}>
      //   <CardMedia
      //     className={classes.media}
      //     image="/static/images/cards/contemplative-reptile.jpg"
      //     title="Contemplative Reptile"
      //   />
      //   <CardContent>
      //     <Typography gutterBottom variant="headline" component="h2">
      //       Lizard
      //     </Typography>
      //     <Typography component="p">
      //       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
      //       across all continents except Antarctica
      //     </Typography>
      //   </CardContent>
      //   <CardActions>
      //     <Button size="small" color="primary">
      //       Share
      //     </Button>
      //     <Button size="small" color="primary">
      //       Learn More
      //     </Button>
      //   </CardActions>
      // </Card>

   // <Link to={`/weatherdetail/${this.props.idNum}`}>
          {/* <Panel>
            <Panel.Heading>{name}</Panel.Heading>
            <Panel.Body>
              <h1>{temp} F</h1>
              <h2>{humidity}% humidity</h2>
            </Panel.Body>
          </Panel> */}
          
        {/* </Link> */}