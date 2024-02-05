import { styled, Flex, Image } from "@chakra-ui/react";
import { Button } from "../button/button";
import { MegaMenuButton } from "./mega-menu-button/mega-menu-button";

const Container = styled(Flex, {
  baseStyle: {
    w: "100%",
    h: "101px",
    px: { base: "24px", lg: "105px" },
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    bg: "secondary.white",
    borderBottom: "1px solid",
    borderBottomColor: "secondary.gray",
  },
});

const DesktopMenu = styled(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    maxW: "721px",
    w: "100%",
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
  Logo,
  CTAButton,
  DesktopMenu,
  ColumnRight,
  MobileMenuButton,
};
