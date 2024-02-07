import {
  styled,
  Text,
  DrawerBody,
  GridItem,
  Heading,
  List,
  ListItem,
  DrawerContent,
} from "@chakra-ui/react";
import { Button } from "@/components/button/button";
import { menuHeight } from "@/theme/globals";

const Content = styled(DrawerContent, {
  baseStyle: {
    mt: menuHeight,
  }
})


const Body = styled(DrawerBody, {
  baseStyle: {
    display: "grid",
    justifyItems: "center",
    w: "100%",
    px: "120px",
    gridTemplateRows: {base: "auto auto auto",lg: "90% 10%"},
    pb: "84px",
    
  },
});

const Section = styled(GridItem, {
  baseStyle: {
    w: "90%"
  },
});

const Title = styled(Heading, {
  baseStyle: {
    color: "secondary.black",
    fontSize: "28px",
    fontWeight: "200",
    pt: "42px",
    pb: "28px",
    borderBottom: "1px solid",
    borderBottomColor: "secondary.gray",
    mb: "28px",
  },
});

const Description = styled(Text, {
  baseStyle: {
    fontSize: "19px",
    color: "primary.gray",
    lineHeight: "1.2",
    pb: "24px"
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
    pl: "32px" 
  },
});

const BottomRow = styled(GridItem, {
  baseStyle: {
    gridColumn: "1 /-1",
    alignItems: "bottom",
  },
});

const CTAButton = styled(Button, {
  baseStyle: {
    bg: "transparent",
    color: "primary.blue",
    border: "1px solid",
    borderColor: "primary.blue",
    justifySelf: "center",
    h: "72px",
    minW: "242px",
    mt: {base: "60px", lg: "0"}
  },
});

export const MegaMenuDrawerElements = {
  Content,
  Body,
  Section,
  Title,
  Description,
  Elements,
  ListElement,
  BottomRow,
  CTAButton,
};
