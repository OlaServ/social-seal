import { Image, styled } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { SectionContent } from "@/components/section-content/section-content";
import { AnimatedShape } from "@/components/animated-shape/animated-shape";

const Container = styled(SectionGrid, {
  baseStyle: {
    px: { base: "16px", sm: "24px", lg: "120px" },
    pb: { base: "0", sm: "0px", lg: "182px" },
    position: "relative",
    gridTemplateColumns: { base: "1fr", lg: "1.02fr 1fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
  },
});

const StyledContent = styled(SectionContent, {
  baseStyle: {
    order: { base: "1", lg: "-1" },
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
    justifySelf: "center",
    order: { base: "-1", lg: "1" },
    zIndex: -2,
  },
});

const RotatingImage = styled(AnimatedShape, {
  baseStyle: {
    left: "55%",
    top: "-62px",
  },
});

export const FollowersSectionElements = {
  Container,
  StyledContent,
  StyledImage,
  RotatingImage,
};
