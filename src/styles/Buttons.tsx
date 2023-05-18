import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey2",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",

  "&:hover": {
    backgroundColor: "$brand2",
    borderColor: "$brand2",
  },

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "$grey6",
      },
      primary: {
        background: "$brand1",
        borderColor: "$brand1",
        color: "$whiteFixed",
        "&:hover": {
          backgroundColor: "$brand2",
          borderColor: "$brand2",
        },
      },
      icon: {
        borderColor: "$brand1",
        backgroundColor: "brand2",
        padding: "0 0.5rem",
        height: "3rem",
        width: "3rem",
        fontSize: "1.5rem",
        "&:hover": {
          backgroundColor: "$brand2",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "$whiteFixed",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
    },
    ...colors,
  },
});
