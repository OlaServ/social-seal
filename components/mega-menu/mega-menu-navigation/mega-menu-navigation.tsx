import { FlexProps, useBreakpoint, Drawer } from "@chakra-ui/react";
import { MegaMenuNavigationElements as el } from "./mega-menu-navigation.elements";
import { MegaMenuDataType } from "@/domain/mega-menu.t";
import { MegaMenuLink } from "../mega-menu-link/mega-menu-link";
import { Button } from "@/components/button/button";
import { MegaMenuCTAButton } from "../mega-menu-cta-button/mega-menu-cta-button";

interface IMegaMenuNavigationProps extends FlexProps {
  isMobileMenuOpen: boolean;
  isSideMenuOpen?: boolean;
  data: MegaMenuDataType;
  menuHandler: (index: number) => void;
  activeElementIndex: number | null;
  onCloseSideMenu: () => void;
}

export const MegaMenuNavigation = ({
  isMobileMenuOpen,
  menuHandler,
  data,
  activeElementIndex,
  isSideMenuOpen = false,
  onCloseSideMenu,
  ...rest
}: IMegaMenuNavigationProps) => {
  const breakpoint = useBreakpoint();
  const isDesktop =
    breakpoint !== "base" && breakpoint !== "sm" && breakpoint !== "md";

  const MappedLinks = data.map((dataItem, index) => (
    <MegaMenuLink
      key={dataItem.title + index + "-link"}
      onClick={() => menuHandler(index)}
      isActive={index === activeElementIndex}
      isExpandable={Boolean(dataItem.sections)}
    >
      {dataItem.title}
    </MegaMenuLink>
  ));

  if (isDesktop) {
    return <el.Container {...rest}>{MappedLinks}</el.Container>;
  } else {
    return (
      <>
        <el.Container
          initial={{ transform: "translateY(-100%)" }}
          animate={{ transform: "translateY(0)" }}
          key="mobile-menu"
          pt="28px"
          {...rest}
        >
          {data.map((dataItem, index) => (
            <el.StyledLink
              border="none"
              key={dataItem.title + index + "mobile-link"}
              onClick={() => menuHandler(index)}
              isActive={index === activeElementIndex}
              isExpandable={Boolean(dataItem.sections)}
            >
              {dataItem.title}
            </el.StyledLink>
          ))}
          {breakpoint === "base" && <MegaMenuCTAButton fullWidth />}
        </el.Container>
        {activeElementIndex !== null && (
          <Drawer
            isOpen={isSideMenuOpen}
            onClose={onCloseSideMenu}
            isFullHeight={false}
            size="full"
          >
            <el.SideDrawerContent>
              <el.SideDrawerBody>
                <el.StyledLink
                  isActive={true}
                  isExpandable
                  onClick={onCloseSideMenu}
                >
                  {data[activeElementIndex].title}
                </el.StyledLink>
                {data[activeElementIndex].sections !== undefined &&
                  data[activeElementIndex].sections?.map((section, idx) => {
                    return (
                      <el.StyledLink
                        key={section.title + idx + "side-link"}
                        border="none"
                        isActive={false}
                      >
                        {section.title}
                      </el.StyledLink>
                    );
                  })}
                {breakpoint === "base" && (
                  <el.ButtonContainer>
                    <MegaMenuCTAButton fullWidth />{" "}
                  </el.ButtonContainer>
                )}
              </el.SideDrawerBody>
            </el.SideDrawerContent>
          </Drawer>
        )}
      </>
    );
  }
};
