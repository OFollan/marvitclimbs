import React, { FunctionComponent } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import { ToClimbingGrade } from "./utils";
import firebase from "firebase";
import AddClimb from "./AddClimb";

type Props = {};

const AddSession: FunctionComponent<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sliderValues, setSliderValues] = React.useState([30]);

  const AddScend = () => {
    setSliderValues([...sliderValues, 30]);
  };

  const addSession = async () => {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    const grades = sliderValues.map((val) => ToClimbingGrade(val)).join(", ");
    await db.collection("sessions").add({
      dateUtc: Date.now(),
      climbs: grades,
      userId: user?.uid,
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Legg til klatreøkt</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Legg til klatreøkt</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {sliderValues.map((value) => (
              <AddClimb a_sliderValue={value} />
            ))}
            <Button onClick={AddScend}>Legg til scend</Button>
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={addSession}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSession;
