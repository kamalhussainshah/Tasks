import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { githubUserSuccess, githubUserFailed } from '../redux/github-user/github-user-actions';
import { frontendCategory, backendCategory, devopsCategory } from '../redux/category/user-category-actions';
import { alphaGroup, bravoGroup, charlieGroup } from '../redux/group/user-group-actions';
import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';

import Header from '../components/header';
import history from '../history';

import UserCard from '../components/card';
import Footer from '../components/footer';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const Homepage = ( props ) => {

        var config = {
            headers: {'Authorization': 'token 8d58c78df4b95dd69e990921dab2073ba9a6c826'}
        }

        const handleLogOut = () => {
            auth.signOut();
            props.setUserLogOut(null);
            history.push('/');
        }
        


        

        const [userData, setUserData] = useState(null);
        const [ userInput, setUserInput ] = useState('');
        
        const [show, setShow] = useState(false);
        const handleClose = () => {setShow(false)};
        const handleShow = (item) => 
            {
                setUserData(item);
                // console.log(item);
                setShow(true);
            }
           

        const [ modal, setModal ] = useState({
            frontend: false,
            backend: false,
            devops: false
        })

        const [ groups, setGroups ] = useState({
            alpha: false,
            bravo: false,
            charlie: false
        })
        
        // useEffect(() => {
        //     fetch('https://api.github.com/users/example')
		//     .then(response => response.json())
		//     .then(users => (
        //         setData(users)))
        //     .catch(err => alert('Username not found'));
        // }, []);


        const handleSubmit = (event) => {
            event.preventDefault();
            
            axios.get(`https://api.github.com/users/${userInput}`, config)
            .then(res => {
                console.log(res);
                // setData(res.data);
                props.setGithubUserSuccess(res.data);
            })
            .catch(err => {
                alert('Username not found');
                props.setGithubUserFail(err);
            });
            
        };

        const handleGroups = e => {
            console.log("hello");
            setGroups({
                ...groups,
                [e.target.name]: e.target.checked
            });
        }

        const handleChange = e => {
            console.log("modal", e.target.checked);
            setModal({...modal,
                [e.target.name]: e.target.checked
            });
        }

        const handleAlphaBravoCharlie = () => {

            if (props.userAlpha.length > 0) {
                
                if(props.userAlpha.includes(userData, 0)) {
                    
                    alert("Already a Alpha Group User");                        
                }
                else {
                    props.setAlphaGroup(userData);   

                }
            }
            else {
                props.setAlphaGroup(userData);
            }

            if (props.userBravo.length > 0) {
                
                if(props.userBravo.includes(userData, 0)) {
                    
                    alert("Already a Bravo Group User");
                    
                }
                else {
                    props.setBravoGroup(userData);   

                }
            }
            else {
                props.setBravoGroup(userData);
            } 

            if (props.userCharlie.length > 0) {
                
                if(props.userCharlie.includes(userData, 0)) {
                   
                    alert("Already a Charlie Group User");
                    
                    
                }
                else {
                    props.setCharlieGroup(userData);   

                }
            }

            else {
                props.setCharlieGroup(userData);
            }

        }
        
        const handleAlphaBravo = () => {

            if (props.userAlpha.length > 0) {
                
                if(props.userAlpha.includes(userData, 0)) {
                    
                    alert("Already a Alpha Group User");                        
                }
                else {
                    props.setAlphaGroup(userData);   

                }
            }
            else {
                props.setAlphaGroup(userData);
            }

            if (props.userBravo.length > 0) {
                
                if(props.userBravo.includes(userData, 0)) {
                    
                    alert("Already a Bravo Group User");
                    
                }
                else {
                    props.setBravoGroup(userData);   

                }
            }
            else {
                props.setBravoGroup(userData);
            }

        }

        const handleBravoCharlie = () => {
            if (props.userBravo.length > 0) {
                
                if(props.userBravo.includes(userData, 0)) {
                    
                    alert("Already a Bravo Group User");
                    
                }
                else {
                    props.setBravoGroup(userData);   

                }
            }
            else {
                props.setBravoGroup(userData);
            } 

            if (props.userCharlie.length > 0) {
                
                if(props.userCharlie.includes(userData, 0)) {
                   
                    alert("Already a Charlie Group User");
                    
                    
                }
                else {
                    props.setCharlieGroup(userData);   

                }
            }

            else {
                props.setCharlieGroup(userData);
            }

        }

        const handleAlphaCharlie = () => {
            if (props.userAlpha.length > 0) {
                
                if(props.userAlpha.includes(userData, 0)) {
                    
                    alert("Already a Alpha Group User");                        
                }
                else {
                    props.setAlphaGroup(userData);   

                }
            }
            else {
                props.setAlphaGroup(userData);
            }

            if (props.userCharlie.length > 0) {
                
                if(props.userCharlie.includes(userData, 0)) {
                   
                    alert("Already a Charlie Group User");
                    
                    
                }
                else {
                    props.setCharlieGroup(userData);   

                }
            }

            else {
                props.setCharlieGroup(userData);
            }
        }

        const handleAlpha = () => {
            if (props.userAlpha.length > 0) {
                
                if(props.userAlpha.includes(userData, 0)) {
                    
                    alert("Already a Alpha Group User");                        
                }
                else {
                    props.setAlphaGroup(userData);   

                }
            }
            else {
                props.setAlphaGroup(userData);
            }
 
        }

        const handleBravo = () => {
            if (props.userBravo.length > 0) {
                
                if(props.userBravo.includes(userData, 0)) {
                    
                    alert("Already a Bravo Group User");
                    
                }
                else {
                    props.setBravoGroup(userData);   

                }
            }
            else {
                props.setBravoGroup(userData);
            }
        }

        const handleCharlie = () => {
            if (props.userCharlie.length > 0) {
                
                if(props.userCharlie.includes(userData, 0)) {
                   
                    alert("Already a Charlie Group User");
                    
                    
                }
                else {
                    props.setCharlieGroup(userData);   

                }
            }

            else {
                props.setCharlieGroup(userData);
            }  
        }

        const handleFrontBackDev = () => {

            if (props.userFrontEnd.length > 0) {
                console.log("frontenddata", props.userFrontEnd);
                if(props.userFrontEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a FrontEnd User");                        
                }
                else {
                    props.setFrontEndCategory(userData);   

                }
            }
            else {
                props.setFrontEndCategory(userData);
            }

            if (props.userBackEnd.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userBackEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a BackEnd User");
                    
                }
                else {
                    props.setBackEndCategory(userData);   

                }
            }
            else {
                    props.setBackEndCategory(userData);
            } 

            if (props.userDevOps.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userDevOps.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a DevOps User");
                    
                    
                }
                else {
                    props.setdevopsCategory(userData);   

                }
            }

            else {
                props.setdevopsCategory(userData);
            }
        }

        const handleFrontBack = () => {
            if (props.userFrontEnd.length > 0) {
                console.log("frontenddata", props.userFrontEnd);
                if(props.userFrontEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a FrontEnd User");                        
                }
                else {
                    props.setFrontEndCategory(userData);   

                }
            }
            else {
                props.setFrontEndCategory(userData);
            }

            if (props.userBackEnd.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userBackEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a BackEnd User");
                    
                }
                else {
                    props.setBackEndCategory(userData);   

                }
            }
            else {
                    props.setBackEndCategory(userData);
            } 
        }

        const handleBackDev = () => {
            if (props.userBackEnd.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userBackEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a BackEnd User");
                    
                }
                else {
                    props.setBackEndCategory(userData);   

                }
            }
            else {
                    props.setBackEndCategory(userData);
            } 

            if (props.userDevOps.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userDevOps.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a DevOps User");
                    
                    
                }
                else {
                    props.setdevopsCategory(userData);   

                }
            }

            else {
                props.setdevopsCategory(userData);
            }
        }

        const handleFrontDev = () => {
            if (props.userFrontEnd.length > 0) {
                console.log("frontenddata", props.userFrontEnd);
                if(props.userFrontEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a FrontEnd User");                        
                }
                else {
                    props.setFrontEndCategory(userData);   

                }
            }
            else {
                props.setFrontEndCategory(userData);
            }


            if (props.userDevOps.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userDevOps.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a DevOps User");
                    
                    
                }
                else {
                    props.setdevopsCategory(userData);   

                }
            }

            else {
                props.setdevopsCategory(userData);
            }

        }

        const handleFront = () => {
            
            if (props.userFrontEnd.length > 0) {
                console.log("frontenddata", props.userFrontEnd);
                if(props.userFrontEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a FrontEnd User");                        
                }
                else {
                    props.setFrontEndCategory(userData);   

                }
            }
            else {
                props.setFrontEndCategory(userData);
            }
        }

        const handleBack = () => {
            if (props.userBackEnd.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userBackEnd.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a BackEnd User");
                    
                }
                else {
                    props.setBackEndCategory(userData);   

                }
            }
            else {
                props.setBackEndCategory(userData);
            }

        }

        const handleDev = () => {
            if (props.userDevOps.length > 0) {
                //console.log("frontenddata", props.userFrontEnd);
                if(props.userDevOps.includes(userData, 0)) {
                    //setShow(false);
                    alert("Already a DevOps User");
                    
                    
                }
                else {
                    props.setdevopsCategory(userData);   

                }
            }

            else {
                props.setdevopsCategory(userData);
            }

        }

        const handleModalSubmit = (e) => {
            console.log(modal.frontend);
            console.log(modal.backend);
            console.log(modal.devops);

            if (modal.frontend === true && modal.backend === true && modal.devops === true) {
                
                handleFrontBackDev();
                setShow(false);
                
                modal.frontend = true;
                modal.backend = true;
                modal.devops = true;
                
            }

            else if (modal.frontend === true && modal.backend === true) {

                handleFrontBack();
                setShow(false);
                
                modal.frontend = true;
                modal.backend = true;
                
            }
            else if (modal.backend === true && modal.devops === true) {

                handleBackDev();
                setShow(false);                
                modal.backend = true;
                modal.devops = true;
            }
            else if ( modal.frontend === true && modal.devops === true) {

                handleFrontDev();
                setShow(false);
                modal.frontend = true;                
                modal.devops = true;
            }

            else if (modal.frontend === true) {

                handleFront();
                setShow(false);
                modal.frontend = true;
                console.log("frontend", modal.frontend);
              
            }
            else if (modal.backend === true) {

                handleBack();               
                setShow(false);                
                modal.backend = true;
               
            }
            else if (modal.devops === true) {

                handleDev();
                setShow(false);
                modal.devops = true;
            }
            else {
                alert("Please choose a Category");
                setShow(true);
            }
           
        }

        const handleGroupSubmit = () => {

            if ( groups.alpha === true && groups.bravo === true && groups.charlie === true) {
                                                
                handleAlphaBravoCharlie();
                setGroups({
                    ...groups,
                    alpha: true,
                    bravo: true,
                    charlie: true
                })
            }

            else if ( groups.alpha === true && groups.bravo === true ) {
                handleAlphaBravo();
                setGroups({
                    ...groups,
                    alpha: true,
                    bravo: true                    
                })
            }

            else if ( groups.bravo === true && groups.charlie === true ) {
                handleBravoCharlie();
                setGroups({
                    ...groups,
                    bravo: true,
                    charlie: true
                })
            }
            
            else if ( groups.alpha === true && groups.charlie === true ) {
                handleAlphaCharlie();
                setGroups({
                    ...groups,
                    alpha: true,
                    charlie: true
                })
            }
            
            else if ( groups.alpha === true) {
                               
                handleAlpha();
                setGroups({
                    ...groups,
                    alpha: true
                })
            }
            else if ( groups.bravo === true ) {
                 
                handleBravo();
                setGroups({
                    ...groups,
                    bravo: true
                })
            }
            else if ( groups.charlie === true ) {
                
                handleCharlie();
                setGroups({
                    ...groups,
                    charlie: true
                })
            }
            
            else {
                alert("Please Choose a group");
                setShow(true);
            }
        }

        return (
            <>

                <Modal show={show} onHide={handleClose} backdrop="static" centered>

                    <Modal.Header closeButton>
                            
                            <Modal.Title> ASSIGN PROJECT </Modal.Title>
                            
                    </Modal.Header>

                    <Form>
                        <Modal.Body as={Row}>
                            
                            <Form.Group as={Col}  controlId="formBasicCheckbox">
                                <Form.Label><h4>Categories</h4></Form.Label>
                                <Form.Check type="checkbox" name="frontend" label="Frontend Category" onChange={handleChange} />
                                <Form.Check type="checkbox" name="backend" label="Backend Category" onChange={handleChange}/>
                                <Form.Check type="checkbox" name="devops" label="DevOps Category" onChange={handleChange}/>
                            </Form.Group>
                            
                            <Form.Group as={Col}  controlId="formBasicCheckbox">
                                <Form.Label><h4>Groups</h4></Form.Label>
                                <Form.Check type="checkbox" name ="alpha" label="Alpha Group" onChange={handleGroups} />
                                <Form.Check type="checkbox" name ="bravo" label="Bravo Group" onChange={handleGroups} />
                                <Form.Check type="checkbox" name ="charlie" label="Charlie Group" onChange={handleGroups} />
                            </Form.Group>
                            
                        </Modal.Body>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            handleModalSubmit();
                            handleGroupSubmit();
                        }}>
                            Submit
                        </Button>
                    </Modal.Footer>

                </Modal>   

                {/* <Modal show={show} onHide={handleClose} backdrop="static" centered>
                            
                     <Modal.Header closeButton>
                            
                            <Modal.Title> User Information </Modal.Title>
                            
                    </Modal.Header>

                    <HorizontalLabelPositionBelowStepper 
                        
                        handleGroups={handleGroups}
                        handleChange={handleChange}                        
                        handleModalSubmit={handleModalSubmit}
                        handleClose={handleClose}
                        userData={userData}
                    /> */}
                    
                    {/* <Button variant="primary" onClick={handleGroupSubmit}> Hello... </Button> */}
                            
                    {/* </Modal> */}

            <div>
            
            <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData} buttonSubmit={handleSubmit} onChange={value => setUserInput(value)}/>

            <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px', fontSize: '46px', fontWeight: 'bold'}}>
                    PLEASE SELECT USERS 
            </h1>

            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                
                { props.userProfile.map((item, idx) => (

                    <UserCard 
                        key={idx}
                        item={item}
                        show={show} 
                        handleClose={handleClose}
                        handleShow={handleShow}
                        handleChange={handleChange}
                        handleModalSubmit={handleModalSubmit}
                    />

                    ))}
                
            </div>

            <Footer />
            
            </div>
            </>
        );
    
}

const mapStateToProps = (state) => ({
    userProfile: state.githubUser.githubData,
    userFrontEnd: state.userCategory.frontendData,
    userBackEnd: state.userCategory.backendData,
    userDevOps: state.userCategory.devopsData,
    userAlpha: state.userGroup.alphaGroup,
    userBravo: state.userGroup.bravoGroup,
    userCharlie: state.userGroup.charlieGroup,
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name
})

const mapDispatchToProps = dispatch => ({
    setGithubUserSuccess: data => dispatch(githubUserSuccess(data)),
    setGithubUserFail: data => dispatch(githubUserFailed(data)),
    setFrontEndCategory: data => dispatch(frontendCategory(data)),
    setBackEndCategory: data => dispatch(backendCategory(data)),
    setdevopsCategory: data => dispatch(devopsCategory(data)),
    setAlphaGroup: data => dispatch(alphaGroup(data)),
    setBravoGroup: data => dispatch(bravoGroup(data)),
    setCharlieGroup: data => dispatch(charlieGroup(data)),
    setUserLogOut: data => dispatch(userLogOut(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

