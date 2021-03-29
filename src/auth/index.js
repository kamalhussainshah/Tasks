import React, { useState } from 'react';

import Login from './login/login';
import Register from './register/register';

import './index.css'

const MainForm = () => {

    

    return(
        <div className = 'sign-in-and-sign-up'>
           <Login /> 
           <Register />
        </div>
    )
}

export default MainForm;