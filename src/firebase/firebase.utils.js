import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCWyh08tystukYaUbJSM3JSUTn3j7OJwnM",
  authDomain: "crwn-db-505.firebaseapp.com",
  projectId: "crwn-db-505",
  storageBucket: "crwn-db-505.appspot.com",
  messagingSenderId: "773887412835",
  appId: "1:773887412835:web:f4658a9451931a28eb4656",
  measurementId: "G-TS2V1RWPE4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth; 
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
