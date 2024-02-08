import { Flex, Text, styled } from "@chakra-ui/react";

const Container = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    boxSize: "100%",
    borderRadius: "20px",
    bgColor: "primary.white",
    backgroundRepeat: "no-repeat",
    flexDirection: "column",
  },
});

const NumberText = styled(Text, {
  baseStyle: {
    fontSize: "50px",
    lineHeight: "1",
    fontWeight: 700,
  },
});

const BottomText = styled(Text, {
    baseStyle: {
        color: "counter.gray",
        fontSize: "18px",
        lineHeight: "1.2",
        mt: "20px"
    }
})

export const CounterElements = { Container, NumberText, BottomText };
