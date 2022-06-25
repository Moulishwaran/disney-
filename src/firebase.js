import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUpyyhzLZjroKMWG86pC4htSaD9SFRkgg",
  authDomain: "disney-28ecc.firebaseapp.com",
  projectId: "disney-28ecc",
  storageBucket: "disney-28ecc.appspot.com",
  messagingSenderId: "304626811438",
  appId: "1:304626811438:web:596b0051d2087b170255bf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
