import { styled, Flex, FlexProps, Text } from "@chakra-ui/react";
import { PillColorVariantType } from "@/domain/pills";

type PillColorVariantObject = {
  [Key in PillColorVariantType]: FlexProps;
};

export const pillColorVariants: PillColorVariantObject = {
  orange: {
    background: "#FFFAF1",
    borderColor: "#F89E52",
  },
  yellow: {
    background: "#FFFFEE",
    borderColor: "#FFF04D",
  },
  blue: {
    background: "#F6FCFF",
    borderColor: "#C7D9F2",
  },
  pink: {
    background: "#FFF6FA",
    borderColor: "#FFB6D8",
  },

  green: {
    background: "#F7FFF7",
    borderColor: "#CFE2CF",
  },
  red: {
    background: "#FFF6F6",
    borderColor: "#FFAFAF",
  },
  violet: {
    background: "#FCF9FF",
    borderColor: "#DAC0FF",
  },
  purple: {
    background: "#FFF6FF",
    borderColor: "#FFB6FF",
  },
};

const Container = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: { base: "center", lg: "flex-start" },
    w: "100%",
  },
});

const Title = styled(Text, {
  baseStyle: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 300,
    color: "primary.gray",
    mb: "24px",
    mt: { base: "16px", lg: "0" },
  },
});

const PillsContainer = styled(Flex, {
  baseStyle: {
    flexWrap: "wrap",
    justifyContent: { base: "center", lg: "flex-start" },
    w: "100%",
    mb: { base: "0", lg: "32px" },
  },
});

const Pill = styled(Flex, {
  baseStyle: {
    py: "4px",
    px: "18px",
    mr: "4px",
    mb: "8px",
    border: "1px solid",
    borderRadius: "32px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    color: "primary.black",
  },
});

export const PillsElements = {
  Container,
  PillsContainer,
  Title,
  Pill,
};
