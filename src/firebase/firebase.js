import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSvBbMRZEVhlpcGni566bPMP-mbr989g4",
  authDomain: "fir-app-react-e2217.firebaseapp.com",
  projectId: "fir-app-react-e2217",
  storageBucket: "fir-app-react-e2217.appspot.com",
  messagingSenderId: "365916169497",
  appId: "1:365916169497:web:397980e1e0335820831188",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (userAuth, ...additionalData) => {
  if (!auth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ email, createAt, ...additionalData });
    } catch (error) {
      console.error(`Error in firebase::createUserProfile -> ${error}`);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
