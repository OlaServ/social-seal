"use client";
import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { GridProps } from "@chakra-ui/react";
import { FollowersSectionElements as el } from "./followers-section.elements";
import { ISectionWithButtons } from "@/domain/sections.t";

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
      <el.StyledContent {...sectionData} showButtonOnMobile showButtonArrow />
      <el.StyledImage src="assets/images/success.jpg" />

      {!isMobile && (
        <el.RotatingImage imageUrl="/assets/images/shapes/shape-5.svg" />
      )}
    </el.Container>
  );
};
