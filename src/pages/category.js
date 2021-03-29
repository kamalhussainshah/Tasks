import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import Header from '../components/header';
import UserCard from '../components/card';
import Footer from '../components/footer';

import { auth } from '../auth/firebase-utils';
import { userLogOut } from '../redux/firebase-user/firebase-user-actions';
import history from '../history';

const Category = (props) => {

    const handleLogOut = () => {
        auth.signOut();
        props.setUserLogOut(null);
        history.push('/');
    }

    const [category, setCategory] = useState({
        frontEnd: false,
        backEnd: false,
        devOps: false
    })

    const [ groups, setGroups ] = useState({
        alpha: false,
        bravo: false,
        charlie: false
    })

    const handleAlphaGroup = () => {
     
        setGroups({...groups,
            alpha: true,
            bravo: false,
            charlie: false
        })
        setCategory({
            frontEnd: false,
            backEnd: false,
            devOps: false
        })
    }

    const handleBravoGroup = () => {
        
        setGroups({...groups,
            alpha: false,
            bravo: true,
            charlie: false
        })

        setCategory({
            frontEnd: false,
            backEnd: false,
            devOps: false
        })
    }

    const handleCharlieGroup = () => {
       
        setGroups({...groups,
            alpha: false,
            bravo: false,
            charlie: true
        })

        setCategory({
            frontEnd: false,
            backEnd: false,
            devOps: false
        })
    }

    const frontEndHandle = () => {
       
        setCategory({...category,
            frontEnd: true,
            backEnd: false,
            devOps: false
        })

        setGroups({
            alpha: false,
            bravo: false,
            charlie: false
        })
        
    }

    const backEndHandle = () => {
        

        setCategory({...category,
            frontEnd: false,
            backEnd: true,
            devOps: false
        })

        setGroups({
            alpha: false,
            bravo: false,
            charlie: false
        })
        
    }

    const devOpsHandle = () => {
        
        setCategory({...category,
            frontEnd: false,
            backEnd: false,
            devOps: true
        })

        setGroups({
            alpha: false,
            bravo: false,
            charlie: false
        })
        
    }
    
console.log("groups", groups);
console.log("categories", category);

    return (
        <div>

            <Header handleLogOut={handleLogOut} firebaseData={props.firebaseData}/>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>

                <Button style={{ marginRight: '20px', fontWeight: '600', fontSize: '18px'}} variant="info" onClick={frontEndHandle}>
                    FRONTEND CATEGORY
                </Button>

                <Button style={{ marginRight: '20px', fontWeight: '600', fontSize: '18px'}} variant="info" onClick={backEndHandle}>
                    BACKEND CATEGORY
                </Button>

                <Button  style= {{marginRight: '20px', fontWeight: '600', fontSize: '18px'}} variant="info" onClick={devOpsHandle}>
                    DEVOPS CATEGORY
                </Button>

                <Button style={{ marginRight: '20px', fontWeight: '600', fontSize: '18px'}} variant="info" onClick={handleAlphaGroup}>
                    ALPHA GROUP
                </Button>

                <Button style={{ marginRight: '20px', fontWeight: '600', fontSize: '18px'}} variant="info" onClick={handleBravoGroup}>
                    BRAVO GROUP
                </Button>

                <Button  style= {{fontWeight: '600', fontSize: '18px'}} variant="info" onClick={handleCharlieGroup}>
                    CHARLIE GROUP
                </Button>

            </div>


            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>

                {
                        category.frontEnd === true ?
                        props.frontEndUser.map((item, idx) => (

                            <UserCard 
                                key={idx}
                                item={item}
                            />

                        )) : category.backEnd === true ? 
                        props.backEndUser.map((item, idx) => (

                            <UserCard 
                                key={idx}
                                item={item}
                            />

                        )) : category.devOps === true ?
                        props.devOpsUser.map((item, idx) => (

                            <UserCard 
                                key={idx}
                                item={item}
                            />
                            
                        )) : groups.alpha === true ?
                        props.userAlpha.map((item, idx) => (
    
                            <UserCard 
                                key={idx}
                                item={item}
                            />
    
                        )) : groups.bravo === true ?
                        props.userBravo.map((item, idx) => (
    
                            <UserCard 
                                key={idx}
                                item={item}
                            />
    
                        )) : groups.charlie === true ?
                        props.userCharlie.map((item, idx) => (
    
                            <UserCard 
                                key={idx}
                                item={item}
                            />
    
                        )) : null
                        
                }

                    

            </div>

            <Footer />
            
        </div>
    ) 
}

const mapStateToProps = (state) => ({
    frontEndUser: state.userCategory.frontendData,
    backEndUser: state.userCategory.backendData,
    devOpsUser: state.userCategory.devopsData,
    userAlpha: state.userGroup.alphaGroup,
    userBravo: state.userGroup.bravoGroup,
    userCharlie: state.userGroup.charlieGroup,
    firebaseData: state.firebaseUser && state.firebaseUser.data && state.firebaseUser.data.name
})

const mapDispatchToProps = dispatch => ({
    setUserLogOut: data => dispatch(userLogOut(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);