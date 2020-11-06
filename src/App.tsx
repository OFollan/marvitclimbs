import React from "react";
import "./App.css";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import FooComponent from "./FooComponent";
import { StyledFirebaseAuth } from "react-firebaseui";

function App() {
  const [user, setSignedInUser] = React.useState<firebase.User | null>();
  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => setSignedInUser(user));
  }, []);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
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
  if (!user) {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
  }

  const foo = async () => {
    await user?.sendEmailVerification();
    await firebase.auth().signOut();
    setSignedInUser(null);
  };
  console.log(user);
  if (!user?.emailVerified) {
    foo().then();
  }

  return (
    <div className="App">
      <FooComponent />
      <header className="App-header">Funker github actions???</header>
    </div>
  );
}

export default App;
