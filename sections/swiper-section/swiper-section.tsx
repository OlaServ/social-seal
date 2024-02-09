"use client";

import { GridProps } from "@chakra-ui/react";
import { SwiperSectionElements as el } from "./swiper-section.elements";
import { TextParser } from "@/helpers/text-parser";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Swiper } from "@/components/swiper/swiper";
import { ISwiperSection } from "@/domain/sections.t";

interface ISwiperSectionProps extends GridProps, ISwiperSection {}

export const SwiperSection = ({
  sectionTitle,
  body,
  subtitle,
  imageUrls,
}: ISwiperSectionProps) => {
  const parsedText = TextParser.renderUnderlinedText(body);
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
      <el.ColumnLeft>
        <el.Subtitle>{subtitle}</el.Subtitle>
        <el.Title as="h2">{sectionTitle}</el.Title>
        <el.Body>{...parsedText}</el.Body>
        {!isMobile && (
          <el.ViewMoreButton size="large">View More</el.ViewMoreButton>
        )}
      </el.ColumnLeft>
      <Swiper
        slidesPerView={3}
        breakpoints={swiperBreakpointValues}
        imageUrls={imageUrls}
      />
      {isMobile && (
        <el.ViewMoreButton size="large">View More</el.ViewMoreButton>
      )}
    </el.Container>
  );
};
