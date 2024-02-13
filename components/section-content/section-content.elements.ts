import { styled, Flex, Text } from "@chakra-ui/react";
import { SectionContentButton } from "../section-content-button/section-content-button";
import { AnimatedShape } from "../animated-shape/animated-shape";
import { SectionTitle } from "../section-title/section-title";
import { SectionBody } from "../section-body/section-body";

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});

const Subtitle = styled(SectionTitle, {
  baseStyle: {
    color: "primary.orange",
    mb: { base: "20px", md: "32px" },
    mt: { base: "60px", lg: "0" },
  },
});

const Title = styled(SectionTitle, {
  baseStyle: {
    color: "primary.grayDark",
    mb: "26px",
    px: {
      base: "32px",
      md: "110px",
      lg: "0",
    },
  },
});

const Body = styled(SectionBody, {
  baseStyle: {
    mb: { base: "0", lg: "32px" },
    px: { base: "0", md: "16px", lg: "0" },
  },
});

const ButtonsContainer = styled(Flex, {
  baseStyle: {
    justifyContent: { base: "center", lg: "flex-start" },
    mt: { base: "26px", md: "56px", lg: "0" },
    position: "relative",
    w: {base: "100%", lg: "max-content"},
    alignSelf: { base: "center", lg: "flex-start" },
  },
});

const StyledSectionButton = styled(SectionContentButton, {
  baseStyle: {
    background: "primary.white",
    color: "primary.blue",
  },
});

const FloatingImage = styled(AnimatedShape, {
  baseStyle: {
    right: "-156px",
    bottom: "-50%",
  },
});

export const SectionContentElements = {
  Container,
  Subtitle,
  Title,
  Body,
  ButtonsContainer,
  StyledSectionButton,
  FloatingImage,
};
