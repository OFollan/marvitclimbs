import React from "react";
import "./App.css";
import firebase from "firebase";
import "firebase/firestore";
import FooComponent from "./FooComponent";

function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyD8oWGuYEs8f7QIti6pAag5kuManznGZhk",
      authDomain: "marvitclimbs.firebaseapp.com",
      databaseURL: "https://marvitclimbs.firebaseio.com",
      projectId: "marvitclimbs",
      storageBucket: "marvitclimbs.appspot.com",
      messagingSenderId: "327503153719",
      appId: "1:327503153719:web:c5d8becfec99740036cdb2",
      measurementId: "G-Y7DWQWF9DC",
    });
  }
  return (
    <div className="App">
      <FooComponent />
      <header className="App-header">Funker github actions???</header>
    </div>
  );
}

export default App;
