import { styled, Image } from "@chakra-ui/react";

export const StyledImage = styled(Image, {
  baseStyle: {
    position: "absolute",
    transition: "all 0.7s linear",
  },
});

export const ScrollAnimatedImageElements = { StyledImage };
