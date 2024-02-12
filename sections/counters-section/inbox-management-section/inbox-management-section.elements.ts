import { styled, Image } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { AnimatedShape } from "@/components/animated-shape/animated-shape";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";

const Container = styled(SectionGrid, {
  baseStyle: {
    pt: { base: "58px", sm: "112px", lg: "158px" },
    pl: { base: "16px", sm: "24x", lg: "120px" },
    pr: { base: "16px", sm: "24px", lg: "15.6vw" },
    pb: { base: "90px", sm: "112px", lg: "166px" },
    gridTemplateColumns: { base: "1fr", lg: "1.1fr 0.8fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    gridColumnGap: "150px",
    position: "relative",
    justifyItems: "start",
    overflow: "hidden",
    alignItems: "center",
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
    justifySelf: { base: "center", lg: "start" },
  },
});

const FloatingImage = styled(AnimatedShape, {
  baseStyle: {
    right: "11.9vw",
    bottom: "166px",
  },
});

const RotatingImage = styled(AnimatedShape, {
  baseStyle: {
    position: "absolute",
    zIndex: -1,
    right: "16.8vw",
    top: "108px",
  },
});

const StyledButton = styled(SectionContentButton, {
  baseStyle: {
    mt: { base: "26px", md: "56px", lg: "0" },
  },
});


export const InboxManagementSectionElements = {
  Container,
  StyledImage,
  FloatingImage,
  RotatingImage,
  StyledButton
};
