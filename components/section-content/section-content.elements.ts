import { styled, Flex, Text } from "@chakra-ui/react";
import { Button } from "../button/button";

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
  },
});

const Title = styled(Text, {
  baseStyle: {
    color: "primary.grayDark",
    fontSize: { base: "32px", md: "48px", lg: "50px" },
    lineHeight: "1.2",
    fontWeight: 700,
    mb: "26px",
  },
});

const Body = styled(Text, {
  baseStyle: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 300,
    color: "primary.gray",
    whiteSpace: "normal",
    mb: { base: "36px", lg: "32px" },
  },
});

export const SectionContentElements = {
  Container,
  Subtitle,
  Title,
  Body,
};
