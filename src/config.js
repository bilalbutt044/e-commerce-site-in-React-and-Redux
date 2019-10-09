import * as firebase from "firebase";

export const config = {
  apiKey: process.REACT_APP_API_KEY,
  authDomain: process.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.REACT_APP_DATABASE_URL,
  projectId: process.REACT_APP_PROJECT_ID,
  storageBucket: process.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.REACT_APP_APP_ID,
  measurementId: process.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
