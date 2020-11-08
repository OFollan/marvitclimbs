import React, { FunctionComponent } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/core";
import { ToClimbingGrade, ToClimbingGradeColor } from "./utils";

type Props = {
  a_sliderValue: number;
};

const AddClimb: FunctionComponent<Props> = ({ a_sliderValue }) => {
  const [sliderValue, setSliderValue] = React.useState(a_sliderValue);
  const [value, setValue] = React.useState("1");

  return (
    <>
      <FormControl mt={4}>
        <FormLabel>Type scend</FormLabel>
        <RadioGroup onChange={(e) => setValue(e.target.value)} value={value}>
          <Radio value="1">Bulder</Radio>
          <Radio value="2">Topptau</Radio>
          <Radio value="3">Led</Radio>
        </RadioGroup>
      </FormControl>
      <FormControl mt={4}>
        <Slider onChange={(val) => setSliderValue(val)} value={sliderValue}>
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb>
            <Box mb={10} color={ToClimbingGradeColor(sliderValue)}>
              {ToClimbingGrade(sliderValue)}
            </Box>
          </SliderThumb>
        </Slider>
      </FormControl>
    </>
  );
};

export default AddClimb;