import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';
import history from '../history';

import { Navbar, Nav, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import Header from '../components/header';

const Profile = (props) => {

    const handleLogOut = () => {
        auth.signOut();
        props.setUserLogOut(null);
        history.push('/');
    }

    const [ userData, setUserData ] = useState(undefined);

    useEffect(() => {
        setUserData(props.location.state && props.location.state);
    }, [props.location.state]);

    console.log(userData);

    return (
        <div>

            <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <Card  border = "info" style={{ width: '25rem' }}>
                    <Card.Header><h3> { userData && userData.login } </h3></Card.Header>
                    <Card.Img variant="top" src={userData && userData.avatar_url} style={{ width: '100%', height: '300px'}}/>
                   
                    <ListGroup horizontal as= {Row} style= {{ marginLeft: '0px', marginRight: '0px'}}>
                        <ListGroupItem as ={Col} > ID: { userData && userData.id } </ListGroupItem>
                        <ListGroupItem  as ={Col} > Name: { userData && userData.name } </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem> Bio: { userData && userData.bio } </ListGroupItem>
                    </ListGroup>
                    <ListGroup horizontal as= {Row} style= {{ marginLeft: '0px', marginRight: '0px'}}>
                        <ListGroupItem as ={Col}> Repos: { userData && userData.public_repos } </ListGroupItem>
                        <ListGroupItem as ={Col}> Followers: { userData && userData.followers } </ListGroupItem>
                        <ListGroupItem as ={Col}> Following: { userData && userData.following } </ListGroupItem>
                    </ListGroup>    
                    <ListGroup>
                        <ListGroupItem> Date: { userData && userData.created_at } </ListGroupItem>
                    </ListGroup>
                    
                    
                </Card>
                </div>
        </div>
    ) 
}

const mapStateToProps = (state) => ({
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name 
})

const mapDispatchToProps = dispatch => ({
    setUserLogOut: data => dispatch(userLogOut(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);