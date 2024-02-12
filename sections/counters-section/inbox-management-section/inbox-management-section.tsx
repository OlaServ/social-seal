"use client";
import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { GridProps } from "@chakra-ui/react";
import { InboxManagementSectionElements as el } from "./inbox-management-section.elements";
import { SectionContent } from "@/components/section-content/section-content";
import { ISectionWithButtons } from "@/domain/sections.t";

interface IInboxManagementSectionProps extends GridProps {
  sectionData: ISectionWithButtons;
}

export const InboxManagementSection = ({
  sectionData,
  ...rest
}: IInboxManagementSectionProps) => {
  const { isMobile } = useContext(MobileContext);
  return (
    <el.Container {...rest}>
      <el.StyledImage
        src="/assets/images/phone.png"
        alt="A cellphone with an instant messenger app on the screen and icons floating around"
      />
      <SectionContent {...sectionData} />
      {!isMobile && (
        <>
          <el.RotatingImage imageUrl="/assets/images/shapes/shape-3.svg" />
          <el.FloatingImage
            imageUrl="/assets/images/shapes/shape-4.svg"
            animationVariant="float"
          />
        </>
      )}
      {isMobile && (
        <el.StyledButton>
          {sectionData.sectionButtonOne.sectionButtonOneText}
        </el.StyledButton>
      )}
    </el.Container>
  );
};
