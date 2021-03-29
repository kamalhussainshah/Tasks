import { PROJECT_USER} from './project-user-type';

const INITIAL_STATE = {
    data: []
  };

const projectUserReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'PROJECT_USER':
                return {
                    ...state,
                    data: [...state.data, action.payload]
                  };
    
        default:
            return state;
    }
}

export default projectUserReducer;