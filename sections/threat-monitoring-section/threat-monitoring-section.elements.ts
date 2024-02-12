import { styled, Image, Flex } from "@chakra-ui/react";
import { SectionGrid } from "@/components/section-grid/section-grid";
import { ScrollAnimatedImage } from "@/components/scroll-animated-image/scroll-animated-image";
import { FlyingIcon } from "@/components/flying-icon/flying-icon";

const Container = styled(SectionGrid, {
  baseStyle: {
    pt: "0",
    pl: { base: "16px", sm: "24x", lg: "120px" },
    pr: { base: "16px", sm: "24px", lg: "96px" },
    pb: { base: "70px", sm: "100px", lg: "112px" },
    gridTemplateColumns: { base: "1fr", lg: "0.54fr 0.46fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
    gridColumnGap: "61px",
    position: "relative",
    justifyItems: "start",
    alignItems: "center",
    overflowX: "clip",
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    alignSelf: "center",
    justifySelf: { base: "center", lg: "start" },
    height: "100%",
  },
});

const StyledFlyingIcon = styled(FlyingIcon, {
  baseStyle: {
    top: "50%",
    left: "50%",
  },
});

const LeftColumn = styled(Flex, {
  w: "100%",
  h: "100%",
  position: "relative",
});

const ExclamationMark = styled(ScrollAnimatedImage, {
  baseStyle: {
    left: "25%",
  },
});

export const ThreatMonitoringSectionElements = {
  Container,
  StyledImage,
  StyledFlyingIcon,
  LeftColumn,
  ExclamationMark,
};
