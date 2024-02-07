"use client";
import { FlexProps, useBreakpointValue, Flex } from "@chakra-ui/react";
import { MegaMenuElements as el } from "./mega-menu.elements";
import { MegaMenuDataType } from "@/domain/mega-menu.t";
import { useState } from "react";
import { MegaMenuDrawer } from "./mega-menu-drawer/mega-menu-drawer";
import { MegaMenuNavigation } from "./mega-menu-navigation/mega-menu-navigation";
import { MegaMenuCTAButton } from "./mega-menu-cta-button/mega-menu-cta-button";

export interface IMegaMenuProps extends FlexProps {
  data: MegaMenuDataType;
}

export const MegaMenu = ({ data, ...rest }: IMegaMenuProps) => {
  const [activeElementIndex, setActiveElementIndex] = useState<null | number>(
    null
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const showCTAinNavbar = useBreakpointValue(
    { base: false, md: true },
    { fallback: "md" }
  );

  const showMobileMenuButton = useBreakpointValue(
    { base: true, sm: true, md: true, lg: false },
    { fallback: "lg" }
  );
  const showLargeMenuDrawer = useBreakpointValue(
    { base: false, sm: false, md: true },
    { fallback: "md" }
  );

  const menuHandler = (elementIndex: number) => {
    setActiveElementIndex(elementIndex);
    const dataItem = data[elementIndex];
    if (Boolean(dataItem.sections) && showLargeMenuDrawer) {
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
    }

    if (!showLargeMenuDrawer && data[elementIndex].sections) {
      setIsSideMenuOpen(true);
    }
  };

  const sections = activeElementIndex
    ? data[activeElementIndex].sections
    : null;

  const containerStyles = isDrawerOpen
    ? { borderBottomWidth: { base: "0", lg: "1px" }, bg: "secondary.white" }
    : { borderBottomWidth: "0", bg: "primary.white" };

  return (
    <>
      <el.Container {...containerStyles} {...rest}>
        <el.InnerContainer>
          <el.Logo src="/assets/images/logo.png" />
          {!showMobileMenuButton && (
            <MegaMenuNavigation
              isMobileMenuOpen={isMobileMenuOpen}
              data={data}
              menuHandler={menuHandler}
              activeElementIndex={activeElementIndex}
              onCloseSideMenu={() => setIsSideMenuOpen(false)}
            />
          )}
          <Flex>
            {showCTAinNavbar && <MegaMenuCTAButton />}
            {showMobileMenuButton && (
              <el.MobileMenuButton onClick={toggleMobileMenu} />
            )}
          </Flex>
        </el.InnerContainer>
        {showMobileMenuButton && isMobileMenuOpen && (
          <MegaMenuNavigation
            isMobileMenuOpen={isMobileMenuOpen}
            isSideMenuOpen={isSideMenuOpen}
            data={data}
            menuHandler={menuHandler}
            activeElementIndex={activeElementIndex}
            onCloseSideMenu={() => setIsSideMenuOpen(false)}
          />
        )}
      </el.Container>
      {showLargeMenuDrawer && sections && (
        <MegaMenuDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sections={sections}
        />
      )}
    </>
  );
};
