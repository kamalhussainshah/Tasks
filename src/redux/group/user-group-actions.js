import { ALPHA_GROUP, BRAVO_GROUP, CHARLIE_GROUP} from './user-group-types';

export const alphaGroup = (data) => dispatch => {
    dispatch ({
        type: ALPHA_GROUP,
        payload: data
    })
}

export const bravoGroup = (data) => dispatch => {
    dispatch ({
        type: BRAVO_GROUP,
        payload: data
    })
}

export const charlieGroup = (data) => dispatch => {
    dispatch ({
        type: CHARLIE_GROUP,
        payload: data
    })
}