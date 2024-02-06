"use client";

import { ButtonProps } from "@chakra-ui/react";
import { MegaMenuLinkElements as el } from "./mega-menu-link.elements";

interface IMegaMenuLinkProps extends ButtonProps {
  isExpandable?: boolean;
  isActive: boolean;

}
export const MegaMenuLink = ({
  isActive,
  onClick,
  isExpandable = false,
  children,
  ...rest
}: IMegaMenuLinkProps) => {
  return (
    <el.Container
      color={isActive ? "primary.orange" : "secondary.black"}
      onClick={onClick}
      {...rest}
    >
      {children}
      {isExpandable && (
        <el.StyledIcon
          iconName="chevron"
          transform={`rotate(${isActive ? "180deg" : "0"})`}
          color="inherit"
        />
      )}
    </el.Container>
  );
};
