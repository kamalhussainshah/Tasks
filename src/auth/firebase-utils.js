import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcbmMbBjvah633NJyVP46xLQ97VAWBHlc",
    authDomain: "mythical-lens-307810.firebaseapp.com",
    projectId: "mythical-lens-307810",
    storageBucket: "mythical-lens-307810.appspot.com",
    messagingSenderId: "417429698387",
    appId: "1:417429698387:web:3dfbae9121c28f59c6d3a6",
    measurementId: "G-P0WEQ3V7FK"
  };

  firebase.initializeApp(config);

  // export const createUserProfileDocument = async (userAuth, additionalData ) => {
  //     if (!userAuth) return;
    
  //     const userRef = firestore.doc(`users/${userAuth.uid}`);
    
  //     const snapShot = await userRef.get();
      
  //     if (!snapShot.exists) {
  //       const { displayName, email } = userAuth;
  //       const createdAt = new Date();
  //       try {
  //         await userRef.set({
  //           displayName,
  //           email,
  //           createdAt,
  //           ...additionalData
  //         });
  //       } catch (error) {
  //         console.log('error creating user', error.message);
  //       }
  //     }
    
  //     return userRef;
  //   };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;