import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import history from '../history';
import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';
import { newProjectUser } from '../redux/project-user/project-user-actions';
import Header from '../components/header';

import './project.css';

const Project = ( props ) => {

    const [projectForm, setProjectForm] = useState({
        name: '',
        email: '',
        projectname: '',
        projecttype: '',
        subject: '',
        date: '',
        description: ''
    })

    const [ showErrors, setShowErrors] = useState({
        name: '',
        email: '',
        projectname: '',
        projecttype: '',
        subject: '',
        date: '',
        description: ''
    })

    const onHandleChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setProjectForm({...projectForm,
            [event.target.name]: event.target.value
        });
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        // console.log("data", projectForm);

        if (projectForm.name === '') {
            setShowErrors({
                name: "Name is required"
            })
          }

        else if (projectForm.email === '') {
            setShowErrors({
                email: "Email is required"
            })
        }
        else if (projectForm.projectname === '') {
            setShowErrors({
                projectname: "Project Name is required"
            })
        }
        
        else if ( projectForm.projecttype === '') {
            setShowErrors({
                projecttype: "Project Type is required"
            })
        }

        else if (projectForm.subject === '') {
            setShowErrors({
                subject: "Subject is required"
            })
        }
        
        else if ( projectForm.date === '') {
            setShowErrors({
                date: "Date is required"
            })
        }

        else if ( projectForm.description === '') {
            setShowErrors({
                description: "Description is required"
            })
        }
        else {
            props.setNewProjectUser(projectForm);
            alert("PROJECT SUCCESSFULLY CREATED");
        }
        
        // setProjectForm({
        //     name: '',
        //     email: '',
        //     projectname: '',
        //     projecttype: '',
        //     description: ''
        // })
        // console.log("new",projectForm);
    }
    
    const handleLogOut = () => {
        auth.signOut();
        props.setUserLogOut(null);
        history.push('/');
    }
    return(
        <>

        <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

        {/* <div className='header'>
            <div className='options'>
                <div className='option' style={{textTransform: 'uppercase'}}>
                    { props.firebaseData }
                </div>
                { props.firebaseData ? 
                    (<div className='option' onClick={handleLogOut}>
                        SIGN OUT 
                    </div>)
                    :  (<div className='option' onClick={() => history.push('/')} >
                            SIGN IN
                        </div>)
                }               
            </div>
        </div> */}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}} >
        
        <Form style={{ width: '42rem', border: '1px solid black', padding: '35px' }}>
            
            <h1 style={{ textAlign: 'center', marginBottom: '25px', fontSize: '28px', fontWeight: '700'}}>
                    CREATE A NEW PROJECT
            </h1>

            <Form.Row style= {{marginTop: '10px'}}>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                name="name" 
                type="text" 
                placeholder="Enter name"
                value={projectForm.name}
                onChange={onHandleChange}                
                />
                { showErrors.name }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                name="email" 
                type="email" 
                placeholder="Enter email"
                value={projectForm.email} 
                onChange={onHandleChange}
                />
                { showErrors.email }
                </Form.Group>
            </Form.Row>

            <Form.Row style= {{marginTop: '10px'}}>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Project Name</Form.Label>
                <Form.Control 
                name="projectname" 
                placeholder="Enter project name"
                value={projectForm.projectname}
                onChange={onHandleChange}                
                />
                { showErrors.projectname }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" >
                <Form.Label>Project Type</Form.Label>
                <Form.Control 
                as="select" 
                name="projecttype" 
                defaultValue="Choose..."
                value={projectForm.projecttype}
                onChange={onHandleChange}
                >
                    <option>Choose...</option>
                    <option>Web Apps</option>
                    <option>Mobile Apps</option>
                    <option>Desktop Apps</option>
                </Form.Control>
                { showErrors.projecttype }
                </Form.Group>

            </Form.Row>

            <Form.Row style= {{marginTop: '10px'}}>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                name="subject" 
                placeholder="Enter project name"
                value={projectForm.subject}
                onChange={onHandleChange}                
                />
                { showErrors.subject }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" >
                <Form.Label>Delievery Time</Form.Label>
                <Form.Control 
                as="select" 
                name="date" 
                defaultValue="Choose..."
                value={projectForm.date}
                onChange={onHandleChange}
                >
                    <option>Choose...</option>
                    <option>10 Days</option>
                    <option>15 Days</option>
                    <option>20 Days</option>
                </Form.Control>
                { showErrors.date }
                </Form.Group>

            </Form.Row>

            <Form.Group controlId="formGridAddress2" style= {{marginTop: '10px'}}>
                <Form.Label> Project Description </Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3}
                name="description"
                type="text"
                placeholder="Describe your project"
                value={projectForm.description}
                onChange={onHandleChange}                
                />
                { showErrors.description }
            </Form.Group>

            
            <Col sm={{  offset: 4 }}>
                <Button 
                        onClick={onHandleSubmit}
                        variant="primary" type="submit" 
                        style= {{ marginTop: '15px', fontWeight: '400', fontSize: '18px'}}>
                    CREATE PROJECT
                </Button>
            </Col>
        </Form>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name 
})

const mapDispatchToProps = dispatch => ({
    setUserLogOut: data => dispatch(userLogOut(data)),
    setNewProjectUser: data => dispatch(newProjectUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);