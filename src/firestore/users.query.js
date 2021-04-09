import { firestore } from "../firebase/firebase";

const usersRef = firestore.collection("users");

const findAll = async () => {
  const snapshot = await usersRef.get();
};
