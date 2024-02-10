"use client";
import { GridProps } from "@chakra-ui/react";
import { InboxManagementSectionElements as el } from "./inbox-management-section.elements";
import { SectionContent } from "@/components/section-content/section-content";
import { ISectionWithButton } from "@/domain/sections.t";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface IInboxManagementSectionProps extends GridProps, ISectionWithButton {}

export const InboxManagementSection = ({
  sectionTitle,
  sectionSubtitle,
  sectionBody,
  sectionButtonText,
}: IInboxManagementSectionProps) => {
  const isMobile = useIsMobile();
  return (
    <el.Container>
      <el.StyledImage
        src="/assets/images/phone.png"
        alt="A cellphone with an instant messenger app on the screen and icons floating around"
      />
      <SectionContent
        sectionTitle={sectionTitle}
        sectionSubtitle={sectionSubtitle}
        sectionButtonText={sectionButtonText}
        sectionBody={sectionBody}
      />
      {!isMobile && (
        <>
          <el.RotatingImage imageUrl="/assets/images/shapes/shape-3.svg" />
          <el.FloatingImage
            imageUrl="/assets/images/shapes/shape-4.svg"
            animationVariant="float"
          />
        </>
      )}
    </el.Container>
  );
};
