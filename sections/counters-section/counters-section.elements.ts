import { Flex, Grid, styled, Text } from "@chakra-ui/react";
import { Button } from "@/components/button/button";
import { SectionGrid } from "@/components/section-grid/section-grid";

const Container = styled(SectionGrid, {
  baseStyle: {
    pt: { base: "144px", sm: "164px", lg: "195px" },
    px: { base: "16px", sm: "84px", lg: "120px" },
    pb: { base: "80px", sm: "170px", lg: "112px" },
    bg: "primary.blueDark",
    gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
    gridTemplateRows: { base: "auto auto", lg: "auto" },
  },
});

const ColumnLeft = styled(Flex, {
  baseStyle: {
    flexDirection: "column",
  },
});

const Subtitle = styled(Text, {
  baseStyle: {
    color: "primary.yellow",
    fontSize: "20px",
    lineHeight: "1.1",
    mb: { base: "20px", md: "32px" },
  },
});

const Title = styled(Text, {
  baseStyle: {
    color: "primary.white",
    fontSize: "50px",
    lineHeight: "1.2",
    fontWeight: "700",
    mb: "32px",
  },
});

const Body = styled(Text, {
  baseStyle: {
    color: "primary.grayLight",
    fontSize: "18px",
    lineHeight: "1.8",
  },
});

const ColumnRight = styled(Grid, {
  baseStyle: {
    gridTemplateColumns: { base: "250px", md: "250px 250px" },
    gridGap: "30px",
    pr: { base: "0", md: "20px" },
    mt: {
      base: "56px",
      md: "none",
    },
  },
});

const CountersColumn = styled(Grid, {
  baseStyle: {
    gridTemplateRows: { base: "repeat(2, 250px)", md: "250px 250px" },
    gridGap: "30px",
  },
});

const CountersColumnLeft = styled(CountersColumn, {
  baseStyle: {
    transform: { base: "unset", md: "translateY(80px)" },
  },
});

const ButtonsContainer = styled(Flex, {
  baseStyle: {
    flexDirection: { base: "column", md: "row" },
    justifyContent: { base: "center", lg: "flex-start" },
    alignItems: "center",
    mt: { base: "16px", md: "64px" },
    px: { base: "0", md: "62px", lg: "0" },
  },
});

const ContactButton = styled(Button, {
  baseStyle: {
    background: "primary.blue",
    color: "primary.white",
    mr: { base: "0", md: "12px" },
    mb: { base: "12px", md: "0" },
    w: "100%",
    maxW: { base: "unset", md: "211px" },
  },
});

const HelpButton = styled(Button, {
  baseStyle: {
    background: "transparent",
    color: "primary.blue",
    w: "100%",
    maxW: { base: "unset", md: "271px" },
  },
});

export const CountersSectionElements = {
  Container,
  ColumnLeft,
  Subtitle,
  Title,
  Body,
  ColumnRight,
  CountersColumn,
  CountersColumnLeft,
  ButtonsContainer,
  ContactButton,
  HelpButton,
};
