import { styled, Text } from "@chakra-ui/react";

const Title = styled(Text, {
  baseStyle: {
    fontSize: { base: "32px", md: "48px", lg: "50px" },
    lineHeight: "1.2",
    fontWeight: 700,
    mb: "26px",
  },
});

const Subtitle = styled(Text, {
  baseStyle: {
    fontSize: "20px",
    lineHeight: "1.1",
    fontWeight: 500,
  },
});

export const SectionTitleElements = { Title, Subtitle };
