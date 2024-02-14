import { styled, Card, Text } from "@chakra-ui/react";

const Container = styled(Card, {
  baseStyle: {
    borderRadius: "20px",
    background: "primary.white",
    boxShadow: "0px 35px 54px rgba(61,90,125, 0.13)",
    px: "32px",
    py: "40px",
    textAlign: "left",
  },
});

const Heading = styled(Text, {
  baseStyle: {
    fontSize: { md: "52px", lg: "55px" },
    fontWeight: "700",
    mb: "6px",
    p: "0",
    lineHeight: 1,
  },
});

const Subheading = styled(Text, {
  baseStyle: {
    color: "primary.grayDark",
    fontSize: "18px",
    w: "80%",
    lineHeight: 1.2,
    fontWeight: "500",
  },
});

export const InfoCardElements = { Container, Heading, Subheading };
