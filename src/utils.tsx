export const ToClimbingGradeColor = (sliderVal: number) => {
  switch (true) {
    case sliderVal < 15:
      return "green.500";
    case sliderVal < 35:
      return "blue.500";
    case sliderVal < 50:
      return "yellow.500";
    case sliderVal < 60:
      return "tomato";
    case sliderVal < 80:
      return "black.500";
  }
};
export const ToClimbingGrade = (sliderVal: number) => {
  switch (true) {
    case sliderVal < 10:
      return "4";
    case sliderVal < 15:
      return "5";
    case sliderVal < 35:
      return "6a/6a+";
    case sliderVal < 50:
      return "6b/6b+";
    case sliderVal < 60:
      return "6c/6c+";
    case sliderVal < 80:
      return "7a/7a+";
    default:
      return "jæææævli hardt";
  }
};
