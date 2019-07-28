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
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'red'
  },
});


class SignUp extends Component {
        constructor(props) {
          super(props);
            this.state = {
              email: '',
              username: '',
              password: '',
              firstname: '',
              lastname: ''
            }
      
       }
       
       handleSignUp = e => {
                this.setState({[e.target.name]: e.target.value })
                console.log(e)
            }
          
        addSignUp = e => {
            e.preventDefault();
            const endpoint = "https://daily-journal-backend.herokuapp.com/api/register";
            axios
              .post(endpoint, this.state)
              .then(res => {
                console.log(res);
              })
              .then(() => {
                this.props.history.push("/login");
              })
              .catch(err => {
                console.log({ Error: err });
              });
          };
                
            

     

  render() {
   
  return ( 
    //   const {classes } = props;
    <main className={styles.main}>
      <CssBaseline />
      <Paper className={styles.paper} style={{width: '50%', margin: 'auto'}}>
        <Avatar className={styles.avatar} style={{ margin: 'auto'}} >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Sign Up
        </Typography>
        <form className={styles.form} onSubmit={this.addSignUp} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input autoComplete='off' id="name" name="firstname" type="text" 
                value={this.state.firstName}
                onChange={this.handleSignUp} autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input autoComplete='off' name="lastname" type="text" id="lastname" 
                value={this.state.lastName}
                onChange={this.handleSignUp} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input autoComplete='off' id="email" name="email" type="text" 
                value={this.state.email}
                onChange={this.handleSignUp} autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">User Name</InputLabel>
            <Input autoComplete='off' id="username" name="username" type="text" 
                value={this.state.username}
                onChange={this.handleSignUp} autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input autoComplete='off' name="password" type="password" id="password" 
                value={this.state.password}
                onChange={this.handleSignUp} />
          </FormControl>
         
          <Button
            type="submit"
            fullWidth
            // variant="contained"
            color="primary"
            className={styles.submit}
          >
            Sign Up!
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}


export default withStyles(styles)(SignUp);