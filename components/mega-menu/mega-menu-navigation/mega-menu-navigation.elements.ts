import { menuHeight } from "@/theme/globals";
import { DrawerBody, DrawerContent, styled } from "@chakra-ui/react";
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

export const MegaMenuNavigationElements = {
  Container,
  SideDrawerContent,
  SideDrawerBody,
  StyledLink,
};
