
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink } from 'react-router-dom';


const styles = {
    toolsbar: {
        // position: 'fixed',
        backgroundColor: '#343c4c',
        width: '100%'
    },
  root: {
    flexGrow: 1,
    
  },
  grow: {
    flexGrow: 1,
    color: 'black',
    fontSize: '25px',
  }

};



function NavBar(props) {

   const signout = () => {
        localStorage.removeItem("jwt");
      };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.palette} position="static" >
        <Toolbar className={classes.toolsbar} >
          <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '50px'}} to='/' color="inherit">Home</NavLink>
          <NavLink style={{ color: 'white', textDecoration: 'none'}} to="/login" exact onClick={signout}>Sign Out</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

