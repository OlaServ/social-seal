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
    pt: "42px",
  },
});

const Body = styled(DrawerBody, {
  baseStyle: {
    pb: { md: "56px", xl: "48px" },
    minHeight: { md: "67vh", xl: "45vh" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const BodyGrid = styled(Grid, {
  baseStyle: {
    justifyItems: "center",
    w: "100%",
    px: "120px",
    gridTemplateRows: { base: "auto auto", xl: "100%" },
    gridColumnGap: "28px",
    gridRowGap: "80px",
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
    fontSize: "28px",
    fontWeight: "200",
    pt: "0",
    pb: "28px",
    borderBottom: "1px solid",
    borderBottomColor: "secondary.blueGrayish",
    mb: "28px",
    px: "0",
    mx: "0",
  },
});

const Description = styled(Text, {
  baseStyle: {
    fontSize: "19px",
    color: "primary.gray",
    lineHeight: "1.2",
    pb: "24px",
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
    fontSize: "19px",
    lineHeight: "32px",
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
