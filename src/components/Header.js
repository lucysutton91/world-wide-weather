import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ButtonBase } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    
  },
  icon: {
    padding: '10px'
  }
};

class Header extends React.Component {
  constructor(props){
    super(props)
  }


  // handleSearchChange(event) {
  //   console.log(event.target.value)
  //   this.setState({ search: event.target.value });
  // }

  // handleSumbit() {
  //   //search weather api
  //   console.log('seaching')
  // }
  
  render () {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.bar}>
            <Toolbar >
              <ButtonBase className={classes.icon} component={Link} to={'/'}>
                <SvgIcon >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
              </ButtonBase>
              <Typography variant="title" color="inherit">
                World Wide Weather
              </Typography>
              
            </Toolbar>
          </AppBar>
        </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);