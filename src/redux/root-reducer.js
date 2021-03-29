import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import githubUserReducer from './github-user/github-user-reducer'
import userCategoryReducer  from './category/user-category-reducer';
import userGroupReducer from './group/user-group-reducer';
import firebaseUserReducer from './firebase-user/firebase-user-reducer';
import projectUserReducer from './project-user/project-user-reducer'

export default combineReducers ({
    user: userReducer,
    githubUser: githubUserReducer,
    userCategory: userCategoryReducer,
    userGroup: userGroupReducer,
    firebaseUser: firebaseUserReducer,
    projectUser:  projectUserReducer
});