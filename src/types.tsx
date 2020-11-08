import firebase from "firebase";

export interface SessionType {
  climbs: string;
  dateUtc: Date;
}

export const sessionTypeFromFirebase = (
  foo: firebase.firestore.DocumentData
): SessionType => {
  return {
    dateUtc: new Date(foo.dateUtc),
    climbs: foo.climbs,
  };
};
