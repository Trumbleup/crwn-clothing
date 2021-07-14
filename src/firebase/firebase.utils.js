import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBORkRsXVxQQ2m87HGYE-dvjO8hgEoi6D8",
    authDomain: "crwn-db-1b948.firebaseapp.com",
    projectId: "crwn-db-1b948",
    storageBucket: "crwn-db-1b948.appspot.com",
    messagingSenderId: "701985531568",
    appId: "1:701985531568:web:e853ca03bcdb545dc73d75",
    measurementId: "G-3LZJZ8M3PH"
};

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
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;