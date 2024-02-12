import { styled, Flex, Text } from "@chakra-ui/react";
import { SectionTitle } from "@/components/section-title/section-title";

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

export const BrandSectionElements = {
  Container,
  UpperTextContainer,
  Subtitle,
  Title,
};
