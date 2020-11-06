import React, { FunctionComponent } from "react";
import firebase from "firebase";

const FooComponent: FunctionComponent = () => {
  const db = firebase.firestore();
  const addSomething = async () => {
    await db.collection("Foo").add({
      navn: "Bernt",
      data: "Her er det både tall 123 og tekst {foo: 1}",
    });
  };

  return (
    <button onClick={async () => await addSomething()}>Trykk på meg</button>
  );
};

export default FooComponent;
