import { styled, Button, Image } from "@chakra-ui/react";

const MenuButton = styled(Button, {
  baseStyle: {
    w: "27px",
    h: "30px",
    display: "flex"
  },
});

const Hamburger = styled(Image, {
  baseStyle: {
    w: "100%",
    h: "100%"
  },
});

export const MegaMenuButtonElements = { MenuButton, Hamburger };
