import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';
import history from '../history';

import { Table } from 'react-bootstrap';
import Header from '../components/header';

const User = (props) => { 

        const handleLogOut = () => {
            auth.signOut();
            props.setUserLogOut(null);
            history.push('/');
        }
   
        return (
            <div> 
                <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

                <div style={{ margin: '40px 80px'}}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '52px', fontWeight: 'bold'}}>
                    USERS PROFILE
                </h1>

                <Table striped bordered hover variant="dark">
                    { props.userData.length > 0 &&
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        </tr>
                    </thead>
                    }

                  
                        { props.userData.length > 0 ? props.userData.map((item, idx) =>  (
                            <tbody>

                            <tr>
                            <td> {idx + 1} </td>
                            <td> { item.username } </td>
                            <td> { item.email } </td>
                            <td> { item.password } </td>
                            <td> { item.city } </td>
                            <td> { item.state } </td>
                            <td> { item.zip } </td>
                            </tr>
                            </tbody>
                        )) : <h3 style={{ marginLeft: '30rem', paddingTop: '10px'}}> N0 USERS AVAILABLE </h3> }
                        
                  
                </Table>

                </div>
            </div>
        );
}

const mapStateToProps = (state) => ({
    userData: state.user.data,
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name
});


const mapDispatchToProps = dispatch => ({
    setUserLogOut: data => dispatch(userLogOut(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(User);