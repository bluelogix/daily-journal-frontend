import 
{ LOGIN_USER_START,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
} 
from "../actions";


const initialState = {
     fetchLogin: false,
     fetchEntries: false,
     error: null,
     userId: localStorage.getItem('userId'),
     entries: [],
     deleteEntries: false,
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

        default: 
        return state;
}
}

export default rootReducer;