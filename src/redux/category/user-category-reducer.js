import { FRONTEND_CATEGORY, BACKEND_CATEGORY, DEVOPS_CATEGORY } from './user-category-types';

const INITIAL_STATE = {

    frontendData: [],
    backendData: [],
    devopsData: []
  };

const userCategoryReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'FRONTEND_CATEGORY':
          return {
            ...state,
            frontendData: [...state.frontendData, action.payload]
          };
              
        case 'BACKEND_CATEGORY':
                  return {
                    ...state,
                    backendData: [...state.backendData, action.payload]
                  };
        
        case 'DEVOPS_CATEGORY':
                  return {
                    ...state,
                    devopsData: [...state.devopsData, action.payload]
                  };
        default:
            return state;
    }
}

export default userCategoryReducer;