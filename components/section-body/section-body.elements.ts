import { styled, Text } from "@chakra-ui/react";

const Body = styled(Text, {
  baseStyle: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 300,
    color: "primary.gray",
    whiteSpace: "pre-line",
  },
});

export const SectionBodyElements = { Body };
