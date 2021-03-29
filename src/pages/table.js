import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'react-bootstrap';
import history from '../history';
import Header from '../components/header';

import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';

import HorizontalLabelPositionBelowStepper from '../components/stepper';
import './project.css';

import emailjs from 'emailjs-com';

const ProjectTable = ( props ) => {

    const [show, setShow] = useState(false);
    const [ sender, setSender] = useState("");

    const [ category, setCategory ] = useState({
        frontend: false,
        backend: false,
        devops: false
    })

    const [ groups, setGroups ] = useState({
        alpha: false,
        bravo: false,
        charlie: false
    })

    const handleClose = () => {setShow(false)};
    const handleShow = (itm) => 
            {   
                setSender(itm);               
                setShow(true);

            }
    
    const handleGroups = e => {

                setGroups({
                    ...groups,
                    [e.target.name]: e.target.checked
                });
            }
    
    const handleChange = e => {

                setCategory({...category,
                    [e.target.name]: e.target.checked
                });
            }
    
    const handleLogOut = () => {
        auth.signOut();
        props.setUserLogOut(null);
        history.push('/');
    }

    const handleMail = () => {

      for (var name in category) {
        //   console.log("name", name);
          if( category[name] === true){

              if (name === "frontend") {
                    console.log(props.frontend);
                    props.frontend.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
              }
              else if (name === "backend") {
                    console.log(props.backend);
                    props.backend.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
              }
              else if (name === "devops") {
                    console.log(props.devops);
                    props.devops.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
                }

            }
        }

        for (var groupname in groups) {
        //   console.log("name", name);
          if( groups[groupname] === true){

              if (groupname === "alpha") {
                    console.log(props.alpha);
                    props.alpha.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
              }
              else if (groupname === "bravo") {
                    console.log(props.bravo);
                    props.bravo.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
              }
              else if (groupname === "charlie") {
                    console.log(props.charlie);
                    props.charlie.map(item => {
                        console.log("item", item);
                        sendEmail(item, sender);
                    })
                }
            }              
        }
    }

    const sendEmail = async (item, sender) => {

        console.log("reciever", item.email);
        console.log("sender", sender);
        let templateParams = {
            from_name: sender,
            to_name: item.email,
            subject: 'Subject',
            message_html: 'hey...',
        }
        console.log("temp-late",templateParams)

    await emailjs.send('service_am0tumt','template_tz9sdk5', templateParams, 'user_pLNNFkPpErhSWiqZbRYYL')
    
}
    

    return(
        
    <>
            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                            
                <Modal.Header closeButton>
                            
                    <Modal.Title> User Information </Modal.Title>
                            
                </Modal.Header>

                    <HorizontalLabelPositionBelowStepper 
                        
                        handleGroups={handleGroups}
                        handleChange={handleChange}                        
                        
                        handleClose={handleClose}
                        handleMail={handleMail}
                        
                    />

                    {/* <Button onClick={handleMail}> click</Button> */}
                            
            </Modal>

        <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

        <div className='header'>
            <div className='options'>
                <Button 
                        onClick={() => history.push('/project')}
                        variant="primary" type="submit" 
                        style= {{ fontWeight: 'bold', fontSize: '18px'}}>
                    CREATE NEW PROJECT
                </Button>                            
            </div>
        </div>

        <div style={{ margin: '20px 80px'}}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '52px', fontWeight: 'bold'}}>
                    PROJECTS
                </h1>

                <Table striped bordered hover variant="dark">
                    { props.projectUserData.length > 0 &&
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Project Name</th>
                        <th>Project Type</th>
                        <th>Assign Project</th>
                        <th>Project Details</th>
                        </tr>
                    </thead>
                    }

                  
                        { props.projectUserData.length > 0 ? props.projectUserData.map((item, idx) =>  (
                            <tbody>

                            <tr>
                            <td> {idx + 1} </td>
                            <td> { item.name } </td>
                            <td> { item.email } </td>
                            <td> { item.projectname } </td>
                            <td> { item.projecttype } </td>
                            
                                <td>
                                    <Button onClick = { () => {
                                        handleShow(item.email);                                        
                                    }}> Assign Project
                                    </Button>
                                </td>
                                <td> 
                                    <Button onClick = { () => history.push(
                                            {
                                                pathname: '/project/projects/:id',
                                                state: item
                                            }
                                            )}> View Project
                                    </Button>                                                                         
                                </td>
                            </tr>
                            </tbody>
                        )) : <h3 style={{ marginLeft: '25rem', paddingTop: '6px'}}> N0 PROJECTS DATA AVAILABLE </h3> }
                        
                  
                </Table>

        </div>

    </>
    )
}

const mapStateToProps = (state) => ({
    frontend: state.userCategory.frontendData,
    backend: state.userCategory.backendData,
    devops: state.userCategory.devopsData,
    alpha: state.userGroup.alphaGroup,
    bravo: state.userGroup.bravoGroup,
    charlie: state.userGroup.charlieGroup,
    projectUserData: state.projectUser.data,
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name
});

const mapDispatchToProps = dispatch => ({
    setUserLogOut: data => dispatch(userLogOut(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTable);