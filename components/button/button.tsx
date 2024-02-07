import { ButtonElements as el } from "./button.elements";
import { ButtonProps } from "@chakra-ui/react";

interface IButtonProps extends ButtonProps {
  size?: "small" | "large";
}

export const Button = ({ size = "small", children, ...rest }: IButtonProps) => {
  const buttonStyles =
    size === "large"
      ? { p: "28px 55px", fontWeight: 600 }
      : { p: "19px 33px", fontWeight: 400 };

  return (
    <el.StyledButton variant="unstyled" {...buttonStyles} {...rest}>
      {children}
    </el.StyledButton>
  );
};
