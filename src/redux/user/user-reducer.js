import { USER_SUCCESS } from './user-types';

const INITIAL_STATE = {
    data: []
  };

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'USER_SUCCESS':
                return {
                    ...state,
                    data: [...state.data, action.payload]
                  };
    
        default:
            return state;
    }
}

export default userReducer;