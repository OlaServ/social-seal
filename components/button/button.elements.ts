import { styled, Button } from "@chakra-ui/react";

const StyledButton = styled(Button, {
  baseStyle: {
    borderRadius: "20px",
    p: "19px 33px",
    fontSize: "16px",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
    w: "max-content"
  },
});
export const ButtonElements = { StyledButton };
