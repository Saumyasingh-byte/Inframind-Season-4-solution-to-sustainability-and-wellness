import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAQk7dbV17FWv4X7jj_7VFxYO0zlZ6A6GY",
  authDomain: "sampletest-f3619.firebaseapp.com",
  databaseURL: "https://sampletest-f3619.firebaseio.com",
  projectId: "sampletest-f3619",
  storageBucket: "sampletest-f3619.appspot.com",
  messagingSenderId: "582154600148",
  appId: "1:582154600148:web:6aab4b7629bfaeb0004541"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;