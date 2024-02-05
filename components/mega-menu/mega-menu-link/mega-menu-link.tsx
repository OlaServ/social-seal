"use client";

import { ButtonProps, Icon } from "@chakra-ui/react";
import { MegaMenuLinkElements as el } from "./mega-menu-link.elements";

interface IMegaMenuLinkProps extends ButtonProps {
  isExpandable?: boolean;
  isActive: boolean;
  variant?: "desktop" | "mobile";
}
export const MegaMenuLink = ({
  isActive,
  onClick,
  isExpandable = false,
  variant = "mobile",
  children,
}: IMegaMenuLinkProps) => {
  return (
    <el.Container
      color={isActive ? "primary.orange" : "secondary.black"}
      onClick={onClick}
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
