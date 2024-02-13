import { Flex, Grid, Image, Text, styled } from "@chakra-ui/react";
import { SectionTitle } from "@/components/section-title/section-title";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    w: "100%",
    pt: { base: "104px", md: "78px", lg: "112px" },
    pb: { base: "32px", md: "100px", lg: "112px" },
    px: { base: "16px", md: "24px", lg: "120px" },
    alignItems: "center",
    justifyContent: "center",
  },
});

const TextContainer = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxW: {
      base: "100%",
      md: "720px",
      lg: "800px",
    },
    mb: { base: "62px", md: "62px", lg: "52px" },
  },
});

const Subtitle = styled(SectionTitle, {
  baseStyle: {
    textAlign: "center",
    color: "primary.orange",
  },
});

const Title = styled(SectionTitle, {
  baseStyle: {
    textAlign: "center",
    my: "16px",
  },
});

const BottomContainer = styled(Grid, {
  baseStyle: {
    gridColumnGap: "40px",
    gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
  },
});

const RightColumn = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: { base: "center", lg: "flex-start" },
    mt: { base: "50px", lg: "0" },
  },
});

const GradientText = styled(SectionTitle, {
  baseStyle: {
    bgGradient: "linear(to-l, #CCB41A, #AA676F, #6071D9)",
    bgClip: "text",
    maxW: { base: "264px", md: "486px", lg: "264px" },
    textAlign: { base: "center", lg: "left" },
    fontSize: { base: "36px", md: "50px" },
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
    justifySelf: "center",
  },
});

const StyledButton = styled(SectionContentButton, {
  baseStyle: {
    mt: { base: "52px", md: "60px" },
    w: { base: "100%", md: "max-content" },
  },
});

export const CreativeDesignSectionElements = {
  Container,
  TextContainer,
  Subtitle,
  Title,
  BottomContainer,
  RightColumn,
  GradientText,
  StyledImage,
  StyledButton,
};
