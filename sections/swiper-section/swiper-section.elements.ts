import { styled, Text, Flex } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { RotatingImage } from "@/components/rotating-image/rotating-image";

const Container = styled(SectionGrid, {
  baseStyle: {
    p: { base: "80px 16px", sm: "112px 24px", lg: "112px 120px" },
    gridTemplateColumns: { base: "1fr", lg: "0.33fr 0.68fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    position: "relative",
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
  },
});

const StyledRotatingImage = styled(RotatingImage, {
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

export const SwiperSectionElements = {
  Container,
  ColumnLeft,
  Subtitle,
  Title,
  Body,
  RotatingImageOne,
  RotatingImageTwo,
};
