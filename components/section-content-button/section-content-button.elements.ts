import { styled } from "@chakra-ui/react";
import { Button } from "../button/button";

const StyledButton = styled(Button, {
  baseStyle: {
    bg: "primary.blue",
    color: "primary.white",
    mt: { base: "26px", md: "56px", lg: "0" },
    justifySelf: { base: "center", lg: "flex-start" },
  },
});

export const SectionContentButtonElements = { StyledButton };
