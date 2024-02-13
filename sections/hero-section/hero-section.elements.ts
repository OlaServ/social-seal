import {
  Grid,
  styled,
  Tag as ChakraTag,
  Flex,
  Text,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";
import { Carousel } from "../../components/carousel/carousel";

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    px: { base: "16px", md: "38px", lg: "120px" },
    pt: "0",
  },
});

const InnerContainer = styled(Grid, {
  baseStyle: {
    w: "100%",
    gridTemplateColumns: { base: "100%", lg: "1fr 1fr" },
    gridColumnGap: { base: "0", lg: "66px" },
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const ColumnLeft = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: { base: "center", lg: "flex-start" },
    w: "100%",
  },
});

const Tag = styled(ChakraTag, {
  baseStyle: {
    background: "primary.orange",
    p: { base: "12px 18px", lg: "12px 24px" },
    color: "primary.white",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "400",
    justifyContent: "center",
    borderRadius: "32px",
    w: "max-content",
    maxW: "98%",
  },
});

const H1 = styled(Text, {
  baseStyle: {
    color: "primary.blackCharcoal",
    fontSize: { base: "36px", md: "72px", lg: "60px" },
    lineHeight: "1.1",
    fontWeight: "700",
    my: "32px",
    textAlign: { base: "center", lg: "left" },
  },
});

const ButtonsContainer = styled(Flex, {
  baseStyle: {
    mt: { base: "42px", lg: "66px" },
    w: { base: "100%", md: "max-content" },
  },
});

const PlansButton = styled(SectionContentButton, {
  baseStyle: {
    background: "primary.blue",
    color: "primary.white",
    mr: { base: "0", lg: "12px" },
  },
});

const OfferButton = styled(SectionContentButton, {
  baseStyle: {
    color: "primary.blue",
    background: "primary.white",
  },
});

const ColumnRight = styled(Grid, {
  baseStyle: {
    gridTemplateColumns: "0.46fr 0.54fr",
    gridColumnGap: "16px",
    justifyItems: "center",
    alignItems: "center",
    w: "100%",
  },
});

const ImagesContainer = styled(Grid, {
  baseStyle: {
    gridTemplateRows: "1fr 1fr",
    gridRowGap: "16px",
    w: "100%",
  },
});

const Placeholder = styled(Box, {
  baseStyle: {
    bg: "secondary.grayLight",
    borderRadius: "16px",
    h: "100%",
    w: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const StyledImage = styled(Image, {
  baseStyle: {
    w: "100%",
  },
});

const SocialMediaIcons = styled(Image, {
  baseStyle: {
    w: { base: "50%", lg: "267px" },
  },
});

const MobileBottomPart = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
    gridColumn: "1 /-1",
    pt: "32px",
  },
});

const LogosContainer = styled(Center, {
  baseStyle: {
    w: "100%",
    overflowX: "hidden",
    borderRadius: "20px",
    bg: "url(/assets/images/partner_logos.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "167px",
    mt: { base: "51px", md: "99px", lg: "55px" },
    transform: "translateY(50%)",
  },
});

const StyledCarousel = styled(Carousel, {
  baseStyle: {
    mt: { base: "51px", md: "99px", lg: "55px" },
    transform: "translateY(50%)",
  },
});

export const HeroSectionElements = {
  Container,
  InnerContainer,
  ColumnLeft,
  Tag,
  H1,
  ButtonsContainer,
  PlansButton,
  OfferButton,
  ColumnRight,
  ImagesContainer,
  Placeholder,
  StyledImage,
  SocialMediaIcons,
  MobileBottomPart,
  LogosContainer,
  StyledCarousel,
};
