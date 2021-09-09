import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHaATWFY2Hrse15WCcFIixRdU48tFnVaQ",
  authDomain: "expensify-25520.firebaseapp.com",
  databaseURL: "https://expensify-25520-default-rtdb.firebaseio.com",
  projectId: "expensify-25520",
  storageBucket: "expensify-25520.appspot.com",
  messagingSenderId: "893210729840",
  appId: "1:893210729840:web:d238d8e6f9f29b865083b5",
  measurementId: "G-RS190RW0CZ"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: "Andrew Michaelis"
})