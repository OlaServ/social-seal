import { styled, Button } from "@chakra-ui/react";

const StyledButton = styled(Button, {
  baseStyle: {
    borderRadius: "20px",
    p: "19px 33px",
    fontSize: "16px",
    fontWeight: "400",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
  },
});
export const ButtonElements = { StyledButton };
