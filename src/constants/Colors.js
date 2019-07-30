
const Colors = {
  transparent: "transparent",
  activeTintColor: "#5F87E7",
  descriptionColor: "#82A0B7",
  headingColor: "#554E8F",
  inactiveTintColor: '#9F9F9F',
  onboardingBtnBackground: "#48B413",
  white: '#fff',
  black: "#000",
  taskButton: "#F857C3",
  addTaskButton: "#7EB6FF",
  ////////////////////////////////
  personalFlag: "#FFD506",
  workFlag: "#5DE61A",
  meetingFlag: '#D10263',
  studyFlag: '#3044F2',
  shoppingFlag: "#F29130",
  partyFlag: "#9BFFF8",
  categoryButtonsText: "#686868",
  taskCount: "#A1A1A1",
  ////////////////////////////////
  personalCircce: "rgba(255,238,155,0.36)",
  workCirlce: "rgba(181,255,155,0.36)",
  meetingCirlce: "rgba(255,155,205,0.36)",
  studyCirlce: "rgba(245,155,255,0.36)",
  shoppingCirlce: "rgba(255,208,155,0.36)",
  partyCirlce: "rgba(155,255,248,0.36)",
  ////////////////////////////////
  opaqueBackground: 'rgba(0,0,0,0.2)',
  inputBorders: "#CFCFCF",
  uncheckedCirlce: "#B5B5B5"
};
export default Colors;

export function renderColoredCircle(color) {
  style = {
      width: 20,
      height: 20,
      borderRadius: 20,
      marginHorizontal: 5
  };
  if (color == "Personal")
      return {
          ...style,
          backgroundColor: Colors.personalFlag
      };
  else if (color == "Work")
      return {
          ...style,
          backgroundColor: Colors.workFlag
      };
  else if (color == "Meeting")
      return {
          ...style,
          backgroundColor: Colors.meetingFlag
      };

  else if (color == "Study")
      return {
          ...style,
          backgroundColor: Colors.studyFlag
      };
  else if (color == "Shopping")
      return {
          ...style,
          backgroundColor: Colors.shoppingFlag
      }
  else if (color == "Party")
      return {
          ...style,
          backgroundColor: Colors.partyFlag
      }
}