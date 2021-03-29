import { PROJECT_USER } from './project-user-type';
import history from '../../history';

export const newProjectUser = (data) => dispatch =>  {
    //console.log(data);
    history.push('/projects');
    dispatch({
        type : PROJECT_USER,
        payload : data
    })
}