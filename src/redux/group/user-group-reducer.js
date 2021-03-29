import { ALPHA_GROUP, BRAVO_GROUP, CHARLIE_GROUP} from './user-group-types';

const INITIAL_STATE = {
    alphaGroup: [],
    bravoGroup: [],
    charlieGroup: []
  };

const userGroupReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'ALPHA_GROUP':
          return {
                ...state,
                alphaGroup: [...state.alphaGroup, action.payload]
          };
              
        case 'BRAVO_GROUP':
            return {
                ...state,
                bravoGroup: [...state.bravoGroup, action.payload]
            };
        
        case 'CHARLIE_GROUP':
            return {
                ...state,
                charlieGroup: [...state.charlieGroup, action.payload]
            };
        default:
            return state;
    }
}

export default userGroupReducer;