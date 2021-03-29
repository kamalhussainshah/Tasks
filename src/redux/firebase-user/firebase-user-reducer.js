import { FIREBASE_USER, USER_LOGOUT } from './firebase-user-types';
const INITIAL_STATE = {
  data: {
    name: '',
    email: '' 
    }
  };

const firebaseUserReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'FIREBASE_USER':
                console.log("payload", action.payload);
                return {
                    ...state,                  
                    data: {
                      ...state.data,
                      name: action.payload.data1,
                      email: action.payload.data2
                    }
                    
                  };

        case 'USER_LOGOUT':
                return {
                  ...state,
                  data: action.payload
                }
    
        default:
            return state;
    }
}

export default firebaseUserReducer;