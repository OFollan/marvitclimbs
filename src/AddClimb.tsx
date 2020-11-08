import React, { FunctionComponent } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/core";
import { ToClimbingGrade, ToClimbingGradeColor, ToOndraFace } from "./utils";

type Props = {
  sliderValue: number;
  updateSliderValue: (value: number) => void;
};

const AddClimb: FunctionComponent<Props> = ({
  sliderValue,
  updateSliderValue,
}) => {
  const [value, setValue] = React.useState("1");

  return (
    <>
      <Flex mt={4} size="XXL">
        <Flex align="flex-end">
          <FormControl>
            <FormLabel>Type scend</FormLabel>
            <RadioGroup
              onChange={(e) => setValue(e.target.value)}
              value={value}
            >
              <Radio value="1">Bulder</Radio>
              <Radio value="2">Topptau</Radio>
              <Radio value="3">Led</Radio>
            </RadioGroup>
          </FormControl>
        </Flex>
        <Flex maxW="sm" maxH="sm" rounded="lg" overflow="hidden">
          <Image src={ToOndraFace(sliderValue)} />
        </Flex>
      </Flex>
      <FormControl mt={4}>
        <Slider onChange={(val) => updateSliderValue(val)} value={sliderValue}>
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
