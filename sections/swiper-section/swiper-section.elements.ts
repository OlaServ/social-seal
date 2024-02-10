import { styled, Text, Flex } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { AnimatedShape } from "@/components/animated-shape/animated-shape";
import { Button } from "@/components/button/button";

const Container = styled(SectionGrid, {
  baseStyle: {
    pt: { base: "80px", sm: "112px", lg: "112px" },
    pl: { base: "16px", sm: "24px", lg: "120px" },
    pr: { base: "16px", sm: "24px", lg: "0" },
    gridTemplateColumns: { base: "1fr", lg: "0.33fr 0.68fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    position: "relative",
    justifyItems: "baseline",
    gridColumnGap: "44px",
  },
});

const ColumnLeft = styled(Flex, {
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

const StyledRotatingImage = styled(AnimatedShape, {
  baseStyle: {
    position: "absolute",
    zIndex: -1,
  },
});

const RotatingImageOne = styled(StyledRotatingImage, {
  baseStyle: {
    left: { base: "34px", md: "70px", lg: "16px" },
    top: "1%",
  },
});

const RotatingImageTwo = styled(StyledRotatingImage, {
  baseStyle: {
    left: "30%",
    bottom: "0%",
  },
});

const ViewMoreButton = styled(Button, {
  baseStyle: {
    bg: "primary.blue",
    color: "primary.white",
    mt: { base: "26px", md: "56px", lg: "0" },
    justifySelf: { base: "center", lg: "flex-start" },
  },
});

export const SwiperSectionElements = {
  Container,
  ColumnLeft,
  Subtitle,
  Title,
  Body,
  RotatingImageOne,
  RotatingImageTwo,
  ViewMoreButton,
};
