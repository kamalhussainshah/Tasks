import { FETCH_GITHUB_USER_SUCCESS, FETCH_GITHUB_USER_FAILURE } from '../github-user/github-user-types';

const INITIAL_STATE = {
    githubData: [],
    error: ''
  };

const githubUserReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'FETCH_GITHUB_USER_SUCCESS':
                  return {
                        ...state,
                        githubData: [...state.githubData, action.payload]
                    };

        case 'FETCH_GITHUB_USER_FAILURE':
                  return {
                            ...state,
                            error: action.payload
                        };
    
        default:
            return state;
    }
}

export default githubUserReducer;