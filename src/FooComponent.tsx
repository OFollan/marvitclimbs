import React, { FunctionComponent } from "react";
import firebase from "firebase";

const FooComponent: FunctionComponent = () => {
  const [climbs, setClimbs] = React.useState<Array<string>>();
  const db = firebase.firestore();
  const addSomething = async () => {
    await db.collection("Sessions").add({
      dateUtc: Date.now(),
      climbs: "[Rødt bulder, 7 taurute]",
    });
  };

  return (
    <>
      <button onClick={async () => await addSomething()}>Trykk på meg</button>
    </>
  );
};

export default FooComponent;
