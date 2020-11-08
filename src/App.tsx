import React from "react";
import "./App.css";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { StyledFirebaseAuth } from "react-firebaseui";
import SessionList from "./SessionList";
import { ThemeProvider } from "@chakra-ui/core";

function App() {
  const [user, setSignedInUser] = React.useState<
    firebase.User | null | undefined
  >();
  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => setSignedInUser(user));
  }, []);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
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
    firebase.analytics();
  }
  if (user === undefined) {
    return <div>Laster...</div>;
  }
  if (!user) {
    return (
      <div className="App-login">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }

  const foo = async () => {
    await user?.sendEmailVerification();
    await firebase.auth().signOut();
    setSignedInUser(null);
  };
  if (!user?.emailVerified) {
    foo().then();
  }

  return (
    <ThemeProvider>
      <div className="App">
        <SessionList />
      </div>
    </ThemeProvider>
  );
}

export default App;
