import { styled, Flex, Text } from "@chakra-ui/react";

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});

const Subtitle = styled(Text, {
  baseStyle: {
    color: "primary.orange",
    fontSize: "20px",
    lineHeight: "1.1",
    mb: { base: "20px", md: "32px" },
    mt: {base: "60px", lg: "0"}
  },
});

const Title = styled(Text, {
  baseStyle: {
    color: "primary.grayDark",
    fontSize: { base: "32px", md: "48px", lg: "50px" },
    lineHeight: "1.2",
    fontWeight: 700,
    mb: "26px",
    px: {
      base: "32px",
      md: "110px",
      lg: "0",
    },
  },
});

const Body = styled(Text, {
  baseStyle: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 300,
    color: "primary.gray",
    whiteSpace: "pre-line",
    mb: { base: "0", lg: "32px" },
    px: { base: "0", md: "16px", lg: "0" },
  },
});

export const SectionContentElements = {
  Container,
  Subtitle,
  Title,
  Body,
};
