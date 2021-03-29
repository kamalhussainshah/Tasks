import React, { useState } from 'react';
import FormInput from '../input/input';
import CustomButton from '../button/button';
import { auth } from '../firebase-utils';
import './register.css';

const Register = () => {

    const [ register, setRegister ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = event => {

        const { value, name } = event.target;    
        setRegister({...register,
            [name]: value });
      };

    const handleSubmit = async event => {
          
        event.preventDefault();
        console.log(register);
        if (register.password !== register.confirmPassword) {
          alert("passwords don't match");
          return;
        }

        try {
          
         let user = await auth.createUserWithEmailAndPassword(
            register.email,
            register.password
          );

          let currentUser = auth.currentUser;

          console.log("currentUser", currentUser);

          await currentUser.updateProfile({
            displayName: register.displayName
          });

          setRegister({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });

          alert("User Successfully Registered, Now User can Login");
        } catch (error) {
          alert(error.message);
        }
      
    
      };    

    return(
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={register.displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={register.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={register.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={register.confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
            <div className='buttons'>
                <CustomButton type='submit' > Register </CustomButton>
               
            </div>
        </form> 
           
      </div>
    )
}

export default Register;