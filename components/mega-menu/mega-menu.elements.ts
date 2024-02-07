import { styled, Flex, Image } from "@chakra-ui/react";
import { Button } from "../button/button";
import { MegaMenuButton } from "./mega-menu-button/mega-menu-button";
import { menuHeight } from "@/theme/globals";

const Container = styled(Flex, {
  baseStyle: {
    w: "100%",
    minH: menuHeight,
    px: { base: "16px", md: "38px", lg: "120px" },
    py: "20px",
    position: "sticky",
    top: "0",
    bg: "secondary.white",
    border: "secondary.gray",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
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

const ColumnRight = styled(Flex, {
  baseStyle: {
    alignItems: "center"
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
  ColumnRight,
  MobileMenuButton,
};
