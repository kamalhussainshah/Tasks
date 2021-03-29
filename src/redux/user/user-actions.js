import { USER_SUCCESS } from './user-types';
import history from '../../history';

export const currentUser = (data) => dispatch =>  {
     //console.log(data);
    history.push('/user');
    dispatch({
        type : USER_SUCCESS ,
        payload : data
    })
}

