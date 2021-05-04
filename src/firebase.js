import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBpY06GeUyr7YBkctHBTzDZXv_YnFB60Wc",
  authDomain: "disney-clone-react.firebaseapp.com",
  projectId: "disney-clone-react",
  storageBucket: "disney-clone-react.appspot.com",
  messagingSenderId: "743753220633",
  appId: "1:743753220633:web:76b632c849d1c0ed726088",
  measurementId: "G-FQBXVCX9N1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
