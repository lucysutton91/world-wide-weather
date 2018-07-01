import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

import Header from './components/Header';
import WeatherDetail from './components/WeatherDetail';
import Landing from './components/Landing';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Switch>
          <Route exact path="/weatherdetail/:cityId" component={WeatherDetail} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));