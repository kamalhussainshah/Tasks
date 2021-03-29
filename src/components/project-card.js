import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

const ProjectCard = (props) => {

    const [ userData, setUserData ] = useState(undefined);

    useEffect(() => {
        setUserData(props.location.state && props.location.state);
    }, [props.location.state]);

    console.log("project card", userData);

    return(
        <>
        <h1 style={{textAlign: 'center', marginTop: '20px', textTransform: 'uppercase'}}>PROJECT NAME: { userData && userData.projectname } </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <Card  border = "info" style={{ width: '40rem' }}>                                  
                    <ListGroup horizontal as= {Row} style= {{ marginLeft: '0px', marginRight: '0px'}}>
                        <ListGroupItem as ={Col} > Subject: { userData && userData.subject } </ListGroupItem>
                        <ListGroupItem  as ={Col} > Name: { userData && userData.name } </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem> Email: { userData && userData.email } </ListGroupItem>
                    </ListGroup>
                    <ListGroup horizontal as= {Row} style= {{ marginLeft: '0px', marginRight: '0px'}}>
                        <ListGroupItem as ={Col}> Project Name: { userData && userData.projectname } </ListGroupItem>
                        <ListGroupItem as ={Col}> Project Type: { userData && userData.projecttype } </ListGroupItem>
                        <ListGroupItem as ={Col}> Time to Deliever: { userData && userData.date } </ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem> Description: { userData && userData.description } </ListGroupItem>
                    </ListGroup>    
                    
                    
                    
                </Card>
                </div>
                </>
    )
}

export default ProjectCard;