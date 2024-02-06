import { ButtonElements as el } from "./button.elements";
import { ButtonProps } from "@chakra-ui/react";

export const Button = ({children,...rest} : ButtonProps) => {
    return <el.StyledButton variant="unstyled" {...rest}>{children}</el.StyledButton>
}