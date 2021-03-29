import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button, Form, Col, Row } from 'react-bootstrap';
import Header from '../components/header';
import {currentUser} from '../redux/user/user-actions';
import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';
import history from '../history';

const Forms = (props) => {

        const handleLogOut = () => {
            auth.signOut();
            props.setUserLogOut(null);
            history.push('/');
        }    
    
        const [ values, setValues ] = useState({
            username: '',
            email: '',
            password: '',
            password2: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })

        const [ showErrors, setShowErrors] = useState({
            username: '',
            email: '',
            password: '',
            password2: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })

    const onHandleChange = (event) => {
        setValues({...values,
            [event.target.name]: event.target.value
        });

    }

    const onButtonSubmit = (e) => {
        e.preventDefault();

        if (values.username == '') {
          setShowErrors({
              username: "Name is required"
          })
        } 
        else if (values.email == '') {
            setShowErrors({
                email: "Email is required"
            })
        }
        else if (values.password == '') {
            setShowErrors({
                password: "Password is required"
            })
        }
        else if (values.password2 !== values.password) {
            setShowErrors({
                password2: "Password is required"
            })
        }
        else if (values.address == '') {
            setShowErrors({
                address: "Address is required"
            })
        }
        else if (values.city == '') {
            setShowErrors({
                city: "City is required"
            })
        }
        else if (values.state == '') {
            setShowErrors({
                state: "State is required"
            })
        }
        else if (values.zip == '') {
            setShowErrors({
                zip: "Zipcode is required"
            })
        }
        else {
            props.setCurrentUser(values);
        }
           
    } 

        return (
            <div>

                <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center'}} >
        <Form /*onSubmit={handleSubmit}*/ style={{ width: '38rem' }}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                name="username" 
                type="text" 
                placeholder="Enter name"
                
                onChange={onHandleChange} 
                />
                { showErrors.username }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                name="email" 
                type="email" 
                placeholder="Enter email" 
                onChange={onHandleChange} 
                />
                { showErrors.email }
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                name="password" 
                type="password" 
                placeholder="Enter password" 
                
                onChange={onHandleChange}
                />
                { showErrors.password }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword2">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control 
                name="password2" 
                type="password" 
                placeholder=" Confirm Password" 
                
                onChange={onHandleChange} 
                />
                { showErrors.password2 }
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                name="address"
                type="text"
                placeholder="Apartment, studio, or floor"
                
                onChange={onHandleChange} 
                />
                { showErrors.address }
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                name="city" 
                placeholder="Enter city"
                
                onChange={onHandleChange}
                />
                { showErrors.city }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                as="select" 
                name="state" 
                defaultValue="Choose..."
                onChange={onHandleChange}
                >
                    <option>Choose...</option>
                    <option>Pakistan</option>
                </Form.Control>
                { showErrors.state }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                name="zip"
                onChange={onHandleChange}
                />
                { showErrors.zip }
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={(e) => onButtonSubmit(e)}  style= {{fontWeight: '700', fontSize: '16px'}}>
                Submit
            </Button>
        </Form>
        </div>
            </div>
        );
}

const mapStateToProps = (state) => ({
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name 
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: data => dispatch(currentUser(data)),
    setUserLogOut: data => dispatch(userLogOut(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);