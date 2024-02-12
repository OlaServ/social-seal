import { styled, Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "@/components/section-title/section-title";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    w: "100%",
    justifyContent: "center",
    alignItems: "center",
    pt: { base: "64px", md: "112px" },
    pb: { base: "64px", md: "80px", lg: "100px" },
    bg: "primary.blueDark",
  },
});

const UpperTextContainer = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    w: {
      base: "100%",
      lg: "42%",
    },
    maxw: {
      base: "100%",
      lg: "600px",
    },
  },
});

const Subtitle = styled(SectionTitle, {
  baseStyle: {
    mb: { base: "20px", md: "32px" },
    mt: { base: "60px", lg: "0" },
    textAlign: "center",
    color: "primary.orange",
  },
});

const Title = styled(SectionTitle, {
  baseStyle: {
    color: "primary.white",
    textAlign: "center",
  },
});

const SwiperOuterContainer = styled(Flex, {
  baseStyle: {
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const SwiperInnerContainer = styled(Flex, {
  baseStyle: {
    width: { base: "200%", md: "150%" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "30px",
  },
});

const BottomRow = styled(Flex, {
  baseStyle: {
    w: "100%",
    flexDirection: { base: "column", md: "row" },
    justifyContent: { base: "center", md: "space-between" },
    px: { base: "16px", md: "24px", lg: "120px" },
    mt: { base: "46px", md: "70px", lg: "100px" },
  },
});

const BottomText = styled(Text, {
  baseStyle: {
    color: "primary.white",
    fontSize: { base: "24px", md: "45px", lg: "50px" },
    lineHeight: "1.2",
    fontWeight: 700,
    textAlign: {
      base: "center",
      md: "left",
    },
  },
});

const StyledButton = styled(SectionContentButton, {
  baseStyle: {
    w: { base: "100%", md: "auto" },
    mt: { base: "12px", md: "0" },
  },
});
export const BrandSectionElements = {
  Container,
  UpperTextContainer,
  Subtitle,
  Title,
  SwiperOuterContainer,
  SwiperInnerContainer,
  BottomRow,
  BottomText,
  StyledButton,
};
