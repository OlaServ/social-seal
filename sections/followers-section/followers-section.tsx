"use client";
import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { GridProps } from "@chakra-ui/react";
import { FollowersSectionElements as el } from "./followers-section.elements";
import { ISectionWithButtons } from "@/domain/sections.t";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";

interface IFollowersSectionProps extends GridProps {
  sectionData: ISectionWithButtons;
}

export const FollowersSection = ({
  sectionData,
  ...rest
}: IFollowersSectionProps) => {
  const { isMobile } = useContext(MobileContext);
  return (
    <el.Container {...rest}>
      <el.StyledContent {...sectionData} showButtonOnMobile />
      <el.StyledImage src="assets/images/success.jpg" />

      {!isMobile && (
        <>
          <el.FloatingImage
            imageUrl="/assets/images/shapes/shape-4.svg"
            animationVariant="float"
          />
          <el.RotatingImage imageUrl="/assets/images/shapes/shape-5.svg" />
        </>
      )}
    </el.Container>
  );
};
