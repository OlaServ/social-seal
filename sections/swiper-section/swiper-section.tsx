"use client";

import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { GridProps } from "@chakra-ui/react";
import { SwiperSectionElements as el } from "./swiper-section.elements";
import { Swiper } from "@/components/swiper/swiper";
import { ISwiperSection } from "@/domain/sections.t";

interface ISwiperSectionProps extends GridProps, ISwiperSection {}

export const SwiperSection = ({
  imageUrls,
  sectionData,
}: ISwiperSectionProps) => {
  const { isMobile } = useContext(MobileContext);

  const swiperBreakpointValues = {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    830: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1218: {
      slidesPerView: 2.25,
      spaceBetween: 24,
    },
  };
  return (
    <el.Container>
      <el.RotatingImageOne imageUrl="/assets/images/shapes/shape-1.svg" />
      {!isMobile && (
        <el.RotatingImageTwo imageUrl="/assets/images/shapes/shape-2.svg" />
      )}
      <el.StyledContent {...sectionData} />
      <Swiper
        slidesPerView={3}
        breakpoints={swiperBreakpointValues}
        imageUrls={imageUrls}
      />
      {isMobile && (
        <el.ViewMoreButton size="large">
          {sectionData.sectionButtonOne.sectionButtonOneText}
        </el.ViewMoreButton>
      )}
    </el.Container>
  );
};
