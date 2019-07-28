import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {NavLink } from 'react-router-dom';
// import NavBarLogin from '../navbar/NavBarLogin'
import { login } from '../actions'
import { connect } from "react-redux";


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  buttons: {
    color: '#3fdfca',
  }
 
});


class LogIn extends Component {
        constructor(props) {
          super(props);
            this.state = {
              username: '',
              password: '',
      
            }
      
       }
       componentDidUpdate(prevProps, prevState){
        if(localStorage.getItem("jwt")){
          this.props.history.push("/");
        }
      }
        handleLogin = e => {
            this.setState({[e.target.name]: e.target.value })
            
        }

        addLogin = e => {
          e.preventDefault();
            this.props.login({username: this.state.username, password: this.state.password});
        };
      
      


  render() {
   
  return ( 
    //   const {classes } = props;
   
    <main className={styles.main} > 
       
      <CssBaseline />
      <Paper className={styles.paper} style={{width: '50%', margin: 'auto'}} >
        <Avatar className={styles.avatar}  style={{ margin: 'auto'}} >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Log in
        </Typography>
        <form className={styles.form} onSubmit={this.addLogin} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input autoComplete='off' id="username" name="username" type="text" 
                value={this.state.username}
                onChange={this.handleLogin} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input autoComplete='off' name="password" type="password" id="password" 
                value={this.state.password}
                onChange={this.handleLogin} />
          </FormControl>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            // color="primary"
            className={styles.buttons}
          >
            Sign in
          </Button>
        </form>
        <p>Don't have a account?</p>
        <NavLink style={{ color: '#59e3bb', textDecoration: 'none'}} to='/signup'>Sign up here!</NavLink>
      </Paper>
    </main>
  );
}
}

const mapStateToProps = state =>  ({
  fetchLogin: state.fetchLogin,
  
 
});



export default connect(
  mapStateToProps,
   { login }
 )(LogIn);

            