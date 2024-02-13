import { styled, Flex } from "@chakra-ui/react";

const Container = styled(Flex, {
  baseStyle: {
    w: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bgGradient: "linear(to-r, #ffffff, #f2faff, #ffffff)",
    h: "100vh"
  },
});

export const GradientContainerElements = {
    Container,
};
