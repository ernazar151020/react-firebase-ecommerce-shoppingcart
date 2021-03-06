import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVA4sC2vjR4aboHHmyNDUO4H9TW6upU3A",
  authDomain: "crwn-db-9b77e.firebaseapp.com",
  projectId: "crwn-db-9b77e",
  storageBucket: "crwn-db-9b77e.appspot.com",
  messagingSenderId: "735693162303",
  appId: "1:735693162303:web:b90b8b8300893b7074758a",
  measurementId: "G-8660VSKKX6",
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
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
