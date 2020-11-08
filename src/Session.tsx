import React, { FunctionComponent } from "react";
import { Box } from "@chakra-ui/core";
import { SessionType } from "./types";

type Props = {
  session: SessionType;
};

const Session: FunctionComponent<Props> = ({ session }) => {
  return (
    <Box>
      {session.dateUtc.toDateString()}
      <Box>{session.climbs}</Box>
    </Box>
  );
};

export default Session;
