import { styled, Flex, Image } from "@chakra-ui/react";

import { MotionStyle } from "framer-motion";

const Container = styled(Flex, {
  baseStyle: {
    bg: "secondary.blackRaisin",
    w: "100%",
    overflow: "hidden",
    borderRadius: "20px",
    h: "167px",
    justifyContent: "center",
    alignItems: "center",
  },
});

const InnerContainer = styled(Flex, {
  baseStyle: {
    position: "relative",
    w: { base: "500%", md: "200%" },
    h: "100%",
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    maxW: "10%",
  },
});

/*workaround applied because of a conflicting transition type between ChakraUI and motion*/
export const motionBoxStyles = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  gap: "0px",
} as MotionStyle;

export const CarouselElements = { Container, InnerContainer, StyledImage };
