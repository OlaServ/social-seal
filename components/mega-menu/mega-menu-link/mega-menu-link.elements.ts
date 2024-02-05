import { Icon } from "@/components/icon/icon";
import { styled, Button } from "@chakra-ui/react";

const Container = styled(Button, {
  baseStyle: {
    outline: "none",
    bg: "transparent",
    fontSize: "16px",
    fontWeight: "600",
    _hover: {
        background: "none"
    }
  },
});

const StyledIcon = styled(Icon, {baseStyle: {
    color: "inherit",
    transition: "transform 0.3s linear",
    ml: "10px",
    display: "inline-block",
    boxSize: "16px"
  
}})

export const MegaMenuLinkElements = { Container, StyledIcon };
