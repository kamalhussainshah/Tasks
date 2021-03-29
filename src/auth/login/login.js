import React, { useState } from 'react';
import FormInput from '../input/input';
import CustomButton from '../button/button';
import { auth } from '../firebase-utils';
import { connect } from 'react-redux';
import { firebaseCurrentUser } from '../../redux/firebase-user/firebase-user-actions';
import './login.css';

const Login = ( props ) => {

    const [ login, setLogin ] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {

        const { value, name } = event.target;    
        setLogin({...login,
            [name]: value });
      };

    const handleSubmit = async event => {
        event.preventDefault();

        try {

            await auth.signInWithEmailAndPassword(login.email, login.password);
            const currentUser = auth.currentUser;
            const userName = currentUser.displayName;
            const userEmail = currentUser.email;

                console.log("signin", userName, userEmail);

                props.setFirebaseUser(userName, userEmail);
                        
            alert("Login Successful");
            setLogin({
                email: '',
                password: ''
            })
            

        } catch(error){
            alert(error.message);
        }

      };
    

    return(
        
        <div className='sign-in'>
            <h2 className='title'> I already have an account </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
            <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={login.email}
                label='Email'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={login.password}
                handleChange={handleChange}
                label='Password'
                required
            />
            <div className='buttons'>
                <CustomButton type='submit'> Sign in </CustomButton>
            </div>
            </form>
            
      </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    setFirebaseUser: (data1,data2) => dispatch(firebaseCurrentUser(data1, data2))
});

export default connect(null, mapDispatchToProps)(Login);