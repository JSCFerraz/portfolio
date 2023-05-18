import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import img from "@/public/static/img/background/dots.svg";

export const ProjectHeader = styled("header", {
  backgroundColor: "$brand1",
  padding: "2.7rem 0",
  "@mobile": {
    padding: "2.62rem 0 ",
  },
});

// export const HeaderContent = styled("div", {
//   maxWidth: "100%",
//   width: "36rem",
//   display: "flex",
//   flexDirection: "column",
//   gap: "$2",
// });

// export const HeaderButtonsArea = styled(Flex, {
//   marginTop: "$2",
//   "@mobile": {
//     flexDirection: "column",
//     [`& ${Button}`]: {
//       width: "100%",
//     },
//   },
// });

// export const StackSection = styled("section", {
//   backgroundColor: "$grey4",
//   padding: "4rem 0 2rem 0",
// });

// export const StackCards = styled("div", {
//   display: "grid",
//   gridTemplateColumns: "auto auto auto auto auto auto",
//   justifyContent: "space-between",
//   padding: "3rem 0rem",
//   gap: "2rem",

//   "@mobile": {
//     display: "flex",
//     marginInline: "-1rem",
//     paddingInline: "1rem",
//     overflow: "auto",
//   },
// });

export const ProjectsArea = styled("section", {
  padding: "2rem 0 8rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    marginTop: "1rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "4rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
});

export const ProjectAreaWrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",
  flexDirection: "column",
  // "@mobile": {
  //   flexDirection: "column",
  // },
});
