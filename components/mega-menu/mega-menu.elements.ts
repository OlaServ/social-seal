import { styled, Flex, Image } from "@chakra-ui/react";
import { Button } from "../button/button";
import { MegaMenuButton } from "./mega-menu-button/mega-menu-button";
import { menuHeight } from "@/theme/globals";

const Container = styled(Flex, {
  baseStyle: {
    w: "100%",
    minH: menuHeight,
    px: { base: "24px", lg: "105px" },
    py: "20px",
    position: "fixed",
    bg: "secondary.white",
    borderBottomWidth: { base: "0", lg: "1px" },
    border: "secondary.gray",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const InnerContainer = styled(Flex, {
  baseStyle: {
    w: "100%",
    h: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    bg: "primary.white",
    zIndex: "2",
  },
});


const Logo = styled(Image, {
  baseStyle: {
    h: { base: "54px", lg: "85px" },
  },
});

const CTAButton = styled(Button, {
  baseStyle: {
    bg: "primary.orange",
    color: "primary.white",
    h: "54px",
    minW: "186px",
  },
});

const ColumnRight = styled(Flex, {
  baseStyle: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const MobileMenuButton = styled(MegaMenuButton, {
  baseStyle: {
    ml: "40px",
  },
});

export const MegaMenuElements = {
  Container,
  InnerContainer,
  Logo,
  CTAButton,
  ColumnRight,
  MobileMenuButton,
};
