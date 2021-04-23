import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOeg14eVMzwTZaD0EpALCqFpMJ3uoJceY",
  authDomain: "crown-store-db-2fa99.firebaseapp.com",
  projectId: "crown-store-db-2fa99",
  storageBucket: "crown-store-db-2fa99.appspot.com",
  messagingSenderId: "598190651883",
  appId: "1:598190651883:web:e6d3fd99cb0febf80a01ae",
  measurementId: "G-Y17GZXRLN9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;