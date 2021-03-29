import { FETCH_GITHUB_USER_SUCCESS, FETCH_GITHUB_USER_FAILURE } from '../github-user/github-user-types';

export const githubUserSuccess = (data) => dispatch =>  {
    console.log(data);
    dispatch({
        type : FETCH_GITHUB_USER_SUCCESS ,
        payload : data
    })
}

export const githubUserFailed = (data) => dispatch =>  {
    console.log(data);
    dispatch({
        type : FETCH_GITHUB_USER_FAILURE ,
        payload : data
    })
}
