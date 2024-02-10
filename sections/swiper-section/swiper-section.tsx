"use client";

import { GridProps } from "@chakra-ui/react";
import { SwiperSectionElements as el } from "./swiper-section.elements";
import { TextParser } from "@/helpers/text-parser";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Swiper } from "@/components/swiper/swiper";
import { ISwiperSection } from "@/domain/sections.t";
import { SectionContent } from "@/components/section-content/section-content";

interface ISwiperSectionProps extends GridProps, ISwiperSection {}

export const SwiperSection = ({
  imageUrls,
  sectionData,
}: ISwiperSectionProps) => {
  const isMobile = useIsMobile();

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
      <el.RotatingImageOne imageUrl="/assets/images/shape-1.svg" />
      {!isMobile && (
        <el.RotatingImageTwo imageUrl="/assets/images/shape-2.svg" />
      )}
      <SectionContent {...sectionData} />
      <Swiper
        slidesPerView={3}
        breakpoints={swiperBreakpointValues}
        imageUrls={imageUrls}
      />
      {isMobile && (
        <el.ViewMoreButton size="large">
          {sectionData.sectionButtonText}
        </el.ViewMoreButton>
      )}
    </el.Container>
  );
};
