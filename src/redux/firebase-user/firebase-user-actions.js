import { FIREBASE_USER, USER_LOGOUT } from './firebase-user-types';
import history from '../../history';

export const firebaseCurrentUser = (data1, data2) => dispatch =>  {
     //console.log(data);
    history.push('/home');
    dispatch({
        type : FIREBASE_USER,
        payload : {data1, data2}
    })
}

export const userLogOut = ( data ) => dispatch => {
    dispatch({
        type: USER_LOGOUT,
        payload: data
    })
}