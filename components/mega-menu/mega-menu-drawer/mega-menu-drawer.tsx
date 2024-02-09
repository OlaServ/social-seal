"use client";
import { Drawer, DrawerProps, DrawerOverlay } from "@chakra-ui/react";
import { MegaMenuDrawerElements as el } from "./mega-menu-drawer.elements";
import { MegaMenuSectionType } from "@/domain/mega-menu.t";

interface IMegaMenuDrawerProps extends Pick<DrawerProps, "isOpen" | "onClose"> {
  sections: Array<MegaMenuSectionType>;
  isMainMenuOpen: boolean;
}

export const MegaMenuDrawer = ({
  isOpen,
  onClose,
  sections,
  isMainMenuOpen,
}: IMegaMenuDrawerProps) => {
  const windowHeight = window.innerHeight;
  const isLargeWindow = windowHeight > 1024;

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
      placement="top"
    >
      <el.Content pt={{ md: isMainMenuOpen ? "100px" : "36px", lg: "76px" }}>
        <el.Body>
          <el.BodyGrid
            gridRowGap={isLargeWindow ? "80px" : "12px"}
            gridTemplateColumns={{
              base: "50% 50%",
              lg: `repeat(${sections.length}, 1fr)`,
            }}
          >
            {sections.map((section, idx) => {
              const { title, description, sectionElements } = section;
              return (
                <el.Section key={title + idx}>
                  <el.Title pb={isLargeWindow ? "28px" : "12px"}>
                    {title}
                  </el.Title>
                  {description && (
                    <el.Description pb={isLargeWindow ? "24px" : "12px"}>
                      {description}
                    </el.Description>
                  )}

                  <el.Elements>
                    {sectionElements.map((sectionEl, idx) => {
                      const { title, iconUrl } = sectionEl;
                      return (
                        <el.ListElement
                          key={title + idx + Math.random()}
                          bgImage={`url(${iconUrl})`}
                        >
                          {title}
                        </el.ListElement>
                      );
                    })}
                  </el.Elements>
                </el.Section>
              );
            })}
          </el.BodyGrid>
          <el.BottomRow>
            <el.CTAButton>View All Services</el.CTAButton>
          </el.BottomRow>
        </el.Body>
      </el.Content>
      <DrawerOverlay bg="secondary.whiteOverlay" opacity="0.2" zIndex="100" />
    </Drawer>
  );
};
