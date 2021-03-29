import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import history from '../history';

const Header = (props) => {

    const [show, setShow] = useState(false);

    useEffect(()=> {
        if(history.location.pathname === '/home' ) {
            setShow(true);
        }
    }, [history.location.pathname]);

    return(
        <Navbar bg="dark" variant="dark" style={{textTransform: 'uppercase'}}>
            
        <Nav className="mr-auto">
            <Nav.Link onClick = { () => history.push('/home')} > Home </Nav.Link>
            <Nav.Link onClick = { () => history.push('/user')} > User </Nav.Link>
            <Nav.Link onClick = { () => history.push('/forms')} > Form </Nav.Link>
            <Nav.Link onClick = { () => history.push('/category')} > Category </Nav.Link>
            <Nav.Link onClick = { () => history.push('/project')} > Project </Nav.Link>
            <Nav.Link onClick = { () => history.push('/projects')} > List </Nav.Link>
        </Nav>


        {
            ( show === true ) ?
                <Form inline>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        onChange={event => props.onChange(event.target.value)}
                    />
                    <Button variant="outline-info" onClick= {props.buttonSubmit} style={{fontWeight: 'bold'}}>
                        Search
                    </Button>
                </Form> : null
        }

        <Nav style={{marginLeft: '15px'}}>
            <Nav.Link> 
                { props.firebaseData } 
            </Nav.Link>
            
            <Nav.Link>
                { props.firebaseData ? 
                        (<div onClick={props.handleLogOut}>
                            SIGN OUT 
                        </div>)
                        :  (<div onClick={() => history.push('/')} >
                                SIGN IN
                            </div>)
                    }
            </Nav.Link>
        </Nav>
                
    </Navbar>
    ) 
}
export default Header;