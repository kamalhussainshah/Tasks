import { FRONTEND_CATEGORY, BACKEND_CATEGORY, DEVOPS_CATEGORY } from './user-category-types';

export const frontendCategory = (data) => dispatch => {
    dispatch ({
        type: FRONTEND_CATEGORY,
        payload: data
    })
}

export const backendCategory = (data) => dispatch => {
    dispatch ({
        type: BACKEND_CATEGORY,
        payload: data
    })
}

export const devopsCategory = (data) => dispatch => {
    dispatch ({
        type: DEVOPS_CATEGORY,
        payload: data
    })
}