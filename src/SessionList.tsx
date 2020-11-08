import React, { FunctionComponent } from "react";
import firebase from "firebase";
import { SimpleGrid } from "@chakra-ui/core";
import { SessionType, sessionTypeFromFirebase } from "./types";
import Session from "./Session";
import AddSession from "./AddSession";

const SessionList: FunctionComponent = () => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  const [sessions, setSessions] = React.useState<Array<SessionType>>([]);
  const [updated, setUpdated] = React.useState<Date | null>();

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await db
        .collection("sessions")
        .where("userId", "==", user?.uid)
        .get();
      const sessions = res.docs
        .map((doc) => sessionTypeFromFirebase(doc.data()))
        .sort((a, b) => b.dateUtc.getTime() - a.dateUtc.getTime());

      setSessions(sessions);
    };
    fetchData();
  }, [db, user, updated]);

  return (
    <>
      <AddSession setUpdated={setUpdated} />
      <SimpleGrid columns={[1, 1]} spacing="40px">
        {sessions.map((session) => (
          <Session session={session} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SessionList;
