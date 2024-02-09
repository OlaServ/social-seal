import {
  styled,
  Text,
  Flex,
  GridItem,
  Heading,
  List,
  ListItem,
  DrawerContent,
  Grid,
  DrawerBody,
} from "@chakra-ui/react";
import { Button } from "@/components/button/button";
import { menuHeight } from "@/theme/globals";

const Content = styled(DrawerContent, {
  baseStyle: {
    mt: menuHeight,
  },
});

const Body = styled(DrawerBody, {
  baseStyle: {
    pb: { md: "56px", xl: "48px" },
    minHeight: { md: "45vh" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const BodyGrid = styled(Grid, {
  baseStyle: {
    justifyItems: "center",
    w: "100%",
    px: { md: "64px", xl: "120px" },
    gridTemplateRows: { base: "auto auto", lg: "100%" },
    gridColumnGap: "28px",
  },
});

const Section = styled(GridItem, {
  baseStyle: {
    w: "100%",
  },
});

const Title = styled(Heading, {
  baseStyle: {
    color: "secondary.black",
    fontSize: { md: "28px", lg: "24px", xl: "28px" },
    fontWeight: "200",
    pt: "0",
    borderBottom: "1px solid",
    borderBottomColor: "secondary.blueGrayish",
    mb: "28px",
    px: "0",
    mx: "0",
  },
});

const Description = styled(Text, {
  baseStyle: {
    fontSize: { md: "16px", lg: "19px" },
    color: "primary.gray",
    lineHeight: "1.2",
  },
});
const Elements = styled(List, {
  baseStyle: {
    listStyleType: "none",
    w: "100%",
    p: "0",
    m: "0",
    listStylePosition: "inside",
  },
});

const ListElement = styled(ListItem, {
  baseStyle: {
    fontSize: { md: "16px", lg: "19px" },
    lineHeight: { md: "28px", lg: "32px" },
    color: "primary.gray",
    verticalAlign: "middle",
    bgRepeat: "no-repeat",
    bgPos: "left center",
    bgSize: "20px",
    pl: "32px",
  },
});

const BottomRow = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    pt: { md: "32px", xl: "0" },
  },
});

const CTAButton = styled(Button, {
  baseStyle: {
    bg: "transparent",
    color: "primary.blue",
    border: "1px solid",
    borderColor: "primary.blue",
    h: "72px",
    minW: "242px",
  },
});

export const MegaMenuDrawerElements = {
  Content,
  Section,
  Body,
  Title,
  Description,
  Elements,
  ListElement,
  BottomRow,
  CTAButton,
  BodyGrid,
};
