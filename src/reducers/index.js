import 
{ LOGIN_USER_START,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
  ENTRY_START, 
  ENTRY_SUCCESS,
  ENTRY_FAILURE,
  ENTRY_ADD_START,
  ENTRY_ADD_SUCCESS,
  ENTRY_ADD_FAILURE,
  ENTRY_DELETE_START,
  ENTRY_DELETE_SUCCESS,
  ENTRY_DELETE_FAILURE,
  ENTRY_EDIT_START,
  ENTRY_EDIT_SUCCESS,
  ENTRY_EDIT_FAILURE,

} 
from "../actions";


const initialState = {
    fetchLogin: false,
    fetchJournals: false,
     error: null,
     userId: localStorage.getItem('userId'),
     journals: [],
     deleteJournals: false,
     isUpdating: false,
     noteToUpdate: null 
    
};

 const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_USER_START:
        return {
            ...state,
            fetchLogin: true
        };
        case LOGIN_USER_SUCCESS:
        return {
            ...state,
            fetchLogin: false,
            error: false,
            userId: action.payload
        };
        case LOGIN_USER_FAILURE:
        return {
            ...state,
            fetchLogin: false,
            error: action.payload
        };
        case ENTRY_START:
            return {
                ...state,
                fetchJournals: true
            };
        case ENTRY_SUCCESS:
        
            return {
              ...state,
              journals: action.payload,
              fetchJournals: false,
              error: null
            };
        case ENTRY_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchJournals: false
              }
        case ENTRY_ADD_START:
            return {
                ...state,
                    fetchJournals: true
                };
        case ENTRY_ADD_SUCCESS:
       
                return {
                ...state,
                fetchJournals: false,
                journals: action.payload,
                error: null
                };
        case ENTRY_ADD_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    fetchJournals: false
                }
        case ENTRY_DELETE_START:
                return {
                    ...state,
                    deleteJournals: true
                    };
        case ENTRY_DELETE_SUCCESS:
                return {
                    ...state,
                    deleteJournals: false,
                     error: null,
                     journals: state.journals.filter(entry => action.id !== entry.id )
                    
                        };
        case ENTRY_DELETE_FAILURE:
                return {
                     ...state,
                      error: action.payload,
                      deleteJournals: false
                        }
    
        case ENTRY_EDIT_START:
                return {
                    ...state,
                    fetchJournals: true,
                    isUpdating: true
                }
        case ENTRY_EDIT_SUCCESS:
                return {
                    ...state,
                    fetchJournals: false,
                    error: false,
                    isUpdating: false,
                    journals: state.journals.map(entry => { 
                        if( entry.id === action.payload.id) {
                            return action.payload //edited updated entry 
                        } else {
                            return entry
                        }
                    })
                }
        case ENTRY_EDIT_FAILURE: 
                return {
                    ...state,
                    fetchJournals: false,
                    error: action.payload,
                    isUpdating: false
                }
              default: 
                return state;
    }
 }

export default rootReducer;

