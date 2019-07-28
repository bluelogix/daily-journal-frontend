import axios from 'axios';

export const LOGIN_USER_START= 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const ENTRY_START = 'ENTRY_START';
export const ENTRY_SUCCESS = 'ENTRY_SUCCESS';
export const ENTRY_FAILURE = 'ENTRY_FAILURE';

export const ENTRY_ADD_START = 'ENTRY_ADD_START';
export const ENTRY_ADD_SUCCESS = 'ENTRY_ADD_SUCCESS';
export const ENTRY_ADD_FAILURE = 'ENTRY_ADD_FAILURE';

export const ENTRY_DELETE_START = 'ENTRY_DELETE_START';
export const ENTRY_DELETE_SUCCESS = 'ENTRY_DELETE_SUCCESS';
export const ENTRY_DELETE_FAILURE = 'ENTRY_DELETE_FAILURE';

export const ENTRY_EDIT_START = 'ENTRY_EDIT_START';
export const ENTRY_EDIT_SUCCESS = 'ENTRY_EDIT_SUCCESS';
export const ENTRY_EDIT_FAILURE = 'ENTRY_EDIT_FAILURE';

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

//////////////////// FETCH ACTION /////////////////
//this will display an entry to the homepage

export const fetchJournals = (userID) => dispatch => {
  dispatch({ type: ENTRY_START });
  const token = localStorage.getItem('jwt');
  const entry = {
      headers: {
        Authorization: token
      }
    };
  axios.get("https://daily-journal-backend.herokuapp.com/api/journals", entry) 
  .then( res => { dispatch({ type:  ENTRY_SUCCESS, payload: res.data }) 
  })
  .catch(err => dispatch({ type: ENTRY_FAILURE, payload: err }))
}

///////////////////// ADD ACTION /////////////////

export const addNewJournal = (userID, enter) => dispatch => {
      dispatch({ type: ENTRY_ADD_START });
      const token = localStorage.getItem('jwt');
      const add = {
          headers: {
              Authorization: token
          }
      };
      axios.post(`https://daily-journal-backend.herokuapp.com/api/journals/${userID}`,
      enter, 
      add
      )
      .then(res => {
        
        return dispatch({ type: ENTRY_ADD_SUCCESS, payload: res.data.fields });
      }) 
      .catch(err => dispatch({ type: ENTRY_ADD_FAILURE, payload: err}));
  };


  ///////////////////// DELETE ACTION /////////////////

  export const deleteJournal = ( userID, entryID) => dispatch => {
      dispatch({ type: ENTRY_DELETE_START });
      const token = localStorage.getItem('jwt');
      const deleteE = {
          headers: {
              Authorization: token
          }
      };
      axios.delete(`https://daily-journal-backend.herokuapp.com/api/journals/${entryID}`, deleteE)
      .then(res => { dispatch({ type: ENTRY_DELETE_SUCCESS, payload: entryID});
      }) 
      .catch(err => dispatch({ type: ENTRY_DELETE_FAILURE, payload: err}));
  };

///////////////////// EDIT ACTION /////////////////




  export const editJournal = (userID, updatedEntry) => dispatch => {
      dispatch({ type: ENTRY_EDIT_START });
      const token = localStorage.getItem("jwt");
      const editToken = {
        headers: {
          Authorization: token
        } 
      };
      axios
        .put(
          `https://daily-journal-backend.herokuapp.com/api/journals/${updatedEntry.id}`,updatedEntry, editToken)
        .then(res => {
          dispatch({
            type: ENTRY_EDIT_SUCCESS,
            payload: updatedEntry
        }) 
      })
        .catch(err => dispatch({ type: ENTRY_EDIT_FAILURE, payload: err }));
    };
