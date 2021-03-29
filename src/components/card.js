import React from 'react';
import { Button, Card } from 'react-bootstrap';
import history from '../history';


const UserCard = ({ item, handleShow }) => {
    return (
        <Card border = "info" style={{ width: '15rem', margin: '50px 100px' }}>
                        <Card.Header><h4>{item.login}</h4></Card.Header>

                    <Card.Img variant="top" src={item.avatar_url} style={{ width: '100%', height: '215px'}} />

                    <Card.Body>
                        <Button style = {{fontWeight: '500'}} variant="info" onClick = { () => history.push(
                            {
                                pathname: '/profile',
                                state: item
                            }
                            )} > VIEW PROFILE 
                        </Button>
                        <Button style = {{ marginTop: '10px', fontWeight: '500' }} variant="info" onClick={() => handleShow(item)}>
                            ASSIGN 
                        </Button>                        

                    </Card.Body>
                </Card>
    )
}

export default UserCard;