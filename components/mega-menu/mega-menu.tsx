"use client";
import { FlexProps, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { MegaMenuElements as el } from "./mega-menu.elements";
import { MegaMenuLink } from "./mega-menu-link/mega-menu-link";
import { MegaMenuDataType } from "@/domain/mega-menu.t";
import { useState } from "react";

export interface IMegaMenuProps extends FlexProps {
  data: MegaMenuDataType;
}

export const MegaMenu = ({ data, ...rest }: IMegaMenuProps) => {
  const [activeElementIndex, setActiveElementIndex] = useState<null | number>(
    null
  );

  const breakpoint = useBreakpoint();
  const isMobile =
    breakpoint === "base" || breakpoint === "sm" || breakpoint === "md";
  const showCTAinNavbar = useBreakpointValue(
    { base: false, sm: true },
    { fallback: "sm" }
  );

  return (
    <el.Container {...rest}>
      <el.Logo src="/assets/images/logo.png" />
      {!isMobile && (
        <el.DesktopMenu>
          {data.map((dataItem, index) => (
            <MegaMenuLink
              key={dataItem.title}
              onClick={() => setActiveElementIndex(index)}
              isActive={index === activeElementIndex}
              isExpandable={Boolean(dataItem.sections)}
              variant="desktop"
            >
              {dataItem.title}
            </MegaMenuLink>
          ))}
        </el.DesktopMenu>
      )}
      <el.ColumnRight>
        {showCTAinNavbar && <el.CTAButton>Speak With Us!</el.CTAButton>}
        {isMobile && <el.MobileMenuButton />}
      </el.ColumnRight>
    </el.Container>
  );
};
