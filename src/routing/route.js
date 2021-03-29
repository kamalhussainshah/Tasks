import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/homepage';
import User from '../pages/users';
import Forms from '../pages/forms';
import Profile from '../pages/profile';
import Category from '../pages/category';
import MainForm from '../auth/index';
import Project from '../pages/project';
import ProjectTable from '../pages/table';
import ProjectCard from '../components/project-card';

const Routes = () => {

        return (
                <Switch>                        
                        <Route exact path='/home' component= { Homepage }/>
                        <Route exact path='/project/projects/:id' component= { ProjectCard }/>
                        {/* <Route exact path='/signin' component= { MainForm }/> */}
                        <Route exact path='/projects' component= { ProjectTable }/>
                        <Route exact path='/project' component= { Project }/>   
                        <Route exact path='/user' component= { User }/>
                        <Route exact path='/forms' component= { Forms }/>
                        <Route exact path='/profile' component= { Profile }/>
                        <Route exact path='/category' component= { Category }/>    
                </Switch>
        );
}

export default Routes;