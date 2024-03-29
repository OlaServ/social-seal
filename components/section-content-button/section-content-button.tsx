import { ButtonProps } from "@chakra-ui/react";
import { SectionContentButtonElements as el } from "./section-content-button.elements";

export const SectionContentButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <el.StyledButton size="large" {...rest}>
      {children}
    </el.StyledButton>
  );
};
