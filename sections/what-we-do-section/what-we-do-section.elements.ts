import { Flex, Image, styled, Box } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { InfoCard } from "@/components/info-card/info-card";

const Container = styled(SectionGrid, {
  baseStyle: {
    gridColumnGap: "40px",
    gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    px: { base: "16px", md: "24px", lg: "120px" },
  },
});

const LeftColumn = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    pb: { base: "12px", md: "98px", lg: "0" },
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
  },
});

const StyledCard = styled(InfoCard, {
  baseStyle: {
    position: "absolute",
    visibility: { base: "hidden", md: "visible" },
  },
});

const CardOne = styled(StyledCard, {
  baseStyle: {
    top: { md: "-34px", lg: "12px" },
    left: "-50px",
    w: "196px",
  },
});

const CardTwo = styled(StyledCard, {
  baseStyle: {
    bottom: "-80px",
    right: { md: "24px", lg: "-54px" },
    w: { md: "250px", lg: "292px" },
  },
});

const ImageContainer = styled(Box, {
  baseStyle: {
    position: "relative",
  },
});

export const WhatWeDoSectionElements = {
  Container,
  LeftColumn,
  StyledImage,
  CardOne,
  ImageContainer,
  CardTwo,
};
