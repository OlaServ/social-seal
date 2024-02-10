import { styled, Image } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { AnimatedShape } from "@/components/animated-shape/animated-shape";

const Container = styled(SectionGrid, {
  baseStyle: {
    pt: { base: "58px", sm: "112px", lg: "158px" },
    pb: { base: "90px", sm: "60px", lg: "132px" },
    pl: { base: "16px", sm: "24x", lg: "120px" },
    pr: { base: "16px", sm: "24px", lg: "15.6vw" },
    gridTemplateColumns: { base: "1fr", lg: "1.1fr 1fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    position: "relative",
    justifyItems: "baseline",
    overflow: "hidden",
    alignItems: "center",
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
    justifySelf: "center",
  },
});

const StyledAnimatedShape = styled(AnimatedShape, {
  baseStyle: {
    position: "absolute",
    zIndex: -1,
  },
});

const FloatingImage = styled(StyledAnimatedShape, {
  baseStyle: {
    right: "11.9vw",
    bottom: "132px",
  },
});

const RotatingImage = styled(StyledAnimatedShape, {
  baseStyle: {
    position: "absolute",
    zIndex: -1,
    right: "9.4vw",
    top: "158px"
  },
});

export const InboxManagementSectionElements = {
  Container,
  StyledImage,
  FloatingImage,
  RotatingImage
};
