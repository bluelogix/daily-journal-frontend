import axios from 'axios';

export const LOGIN_USER_START= 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

///////////////////// LOGIN ACTION /////////////////

export const login = logins => dispatch => {
    dispatch({ type: LOGIN_USER_START });
    axios
      .post("https://daily-journal-backend.herokuapp.com/api/login", logins)
      .then(res => {
       
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem('userId', res.data.id)
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data.id
        });
        
      })
      .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err }));
  };