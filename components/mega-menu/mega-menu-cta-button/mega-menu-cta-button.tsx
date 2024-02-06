import { MegaMenuCTAButtonElements as el } from "./mega-menu-cta-button.elements";
import { ButtonProps } from "@chakra-ui/react";

interface IMegaMenuCTAButtonProps extends ButtonProps {
  fullWidth?: boolean;
}
export const MegaMenuCTAButton = ({
  fullWidth = false,
  children,
  ...rest
}: IMegaMenuCTAButtonProps) => {
  return (
    <el.CTAButton w={fullWidth ? "100%" : "auto"} {...rest}>
      {children ?? "Speak With Us!"}
    </el.CTAButton>
  );
};
