import { menuHeight } from "@/theme/globals";
import { DrawerBody, DrawerContent, Flex, styled } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MegaMenuLink } from "../mega-menu-link/mega-menu-link";

const Container = styled(motion.div, {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxW: "721px",
    w: "100%",
    transition: "all 0.3s ease-in-out",
    zIndex: { base: "100", md: "6000" },
    flexDirection: { base: "column", md: "row" },
    mt: {md: "36px", lg: "0"},
  },
});

const SideDrawerContent = styled(DrawerContent, {
  baseStyle: {
    mt: menuHeight,
  },
});

const SideDrawerBody = styled(DrawerBody, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    p: "0",
  },
});

const StyledLink = styled(MegaMenuLink, {
  baseStyle: {
    py: "26px",
    borderBottom: "1px solid",
    borderColor: "secondary.gray",
    borderRadius: "0",
    alignSelf: "center",
    w: "100%",
  },
});

const ButtonContainer = styled(Flex, {
  baseStyle: {
    w: "100%",
    px: "15px;",
  },
});
export const MegaMenuNavigationElements = {
  Container,
  SideDrawerContent,
  SideDrawerBody,
  StyledLink,
  ButtonContainer,
};
