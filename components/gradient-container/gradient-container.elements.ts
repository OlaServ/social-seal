import { styled, Flex } from "@chakra-ui/react";

const Container = styled(Flex, {
  baseStyle: {
    w: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bgGradient: "linear(to-b, #ffffff, #f2faff, #ffffff)",
  
  },
});

export const GradientContainerElements = {
    Container,
};
