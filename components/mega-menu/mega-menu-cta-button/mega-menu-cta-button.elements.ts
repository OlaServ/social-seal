import { styled } from "@chakra-ui/react";
import { Button } from "@/components/button/button";

const CTAButton = styled(Button, {
    baseStyle: {
      bg: "primary.orange",
      color: "primary.white",
      h: "54px",
      minW: "186px",
    },
  });

  export const MegaMenuCTAButtonElements = {CTAButton}