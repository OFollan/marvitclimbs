import React, { FunctionComponent } from "react";
import firebase from "firebase";
import { Box, Button, List, ListItem } from "@chakra-ui/core";

const ClimbsList: FunctionComponent = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  const [climbs, setClimbs] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await db
        .collection("sessions")
        .where("userId", "==", user?.uid)
        .get();
      setClimbs(res.docs);
      console.warn(res.docs[0].data());
    };
    fetchData();
  }, [db, user]);

  const addSomething = async () => {
    await db.collection("sessions").add({
      dateUtc: Date.now(),
      climbs: "[Rødt bulder, 7 taurute]",
      userId: user?.uid,
    });
  };

  return (
    <>
      <Box rounded="lg" overflow="hidden">
        <Button
          leftIcon="add"
          variantColor="teal"
          variant="outline"
          onClick={async () => await addSomething()}
        >
          Opprett ny klatreøkt
        </Button>
      </Box>
      <List>
        {climbs.map((climb) => (
          <ListItem>{climb.data().climbs}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ClimbsList;
