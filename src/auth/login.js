import React, { Component } from 'react';
import { login } from '../actions'
import { connect } from "react-redux";


// const styles = theme => ({
//   main: {
//     width: 'auto',
//     display: 'block', 
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//   },
//   avatar: {
//     margin: theme.spacing.unit,
    
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', 
//     marginTop: theme.spacing.unit,
//   },
//   submit: {
//     marginTop: theme.spacing.unit * 3,
//   },
//   buttons: {
//     color: '#3fdfca',
//   }
 
// });


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
   
        <div>
        <h1>Log in</h1>
        <form onSubmit={this.addLogin} >
            <input autoComplete='off' id="username" name="username" type="text" 
                value={this.state.username}
                onChange={this.handleLogin}  />
        
        
           
            <input autoComplete='off' name="password" type="password" id="password" 
                value={this.state.password}
                onChange={this.handleLogin} />
        
            <button type="submit" >Sign In</button>

        </form>

        </div>

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

            