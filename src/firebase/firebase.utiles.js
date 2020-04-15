import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "crwn-db-b901a.firebaseapp.com",
  databaseURL: "https://crwn-db-b901a.firebaseio.com",
  projectId: "crwn-db-b901a",
  storageBucket: "",
  messagingSenderId: "801291341403",
  appId: "1:801291341403:web:5a39ac45f3bb6d4f38b97e",
  measurementId: "G-4RK0SD62M4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc('users/123sdsd'))

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
