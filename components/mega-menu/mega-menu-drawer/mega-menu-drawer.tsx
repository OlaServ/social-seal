"use client";
import {
  Drawer,
  DrawerContent,
  DrawerProps,
  DrawerOverlay,
} from "@chakra-ui/react";
import { MegaMenuDrawerElements as el } from "./mega-menu-drawer.elements";
import { MegaMenuSectionType } from "@/domain/mega-menu.t";

interface IMegaMenuDrawerProps extends Pick<DrawerProps, "isOpen" | "onClose"> {
  sections: Array<MegaMenuSectionType>;
}

export const MegaMenuDrawer = ({
  isOpen,
  onClose,
  sections,
}: IMegaMenuDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
      placement="top"
    >
      <DrawerContent pt="100px">
        <el.Body gridTemplateColumns={{base: "50% 50%", lg: `repeat(${sections.length}, 1fr)`}}>
          {sections.map((section, idx) => {
            const { title, description, sectionElements } = section;
            return (
              <el.Section key={title + idx}>
                <el.Title>{title}</el.Title>
                {description && <el.Description>{description}</el.Description>}

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
          <el.BottomRow>
            {" "}
            <el.CTAButton>View All Services</el.CTAButton>
          </el.BottomRow>
        </el.Body>
      </DrawerContent>
      <DrawerOverlay bg="secondary.whiteOverlay" opacity="0.2" zIndex="100" />
    </Drawer>
  );
};
