"use client";
import { FlexProps } from "@chakra-ui/react";
import uniqid from "uniqid";
import { BrandSectionElements as el } from "./brand-section.elements";
import { Swiper } from "@/components/swiper/swiper";
import { IBrandSection } from "@/domain/sections.t";

interface IBrandSectionProps extends IBrandSection, FlexProps {}

export const BrandSection = ({
  sectionData,
  bottomText,
  swipers,
  ...rest
}: IBrandSection) => {
  const swiperBreakpointValues = {
    0: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
    830: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1218: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  const { sectionTitle, sectionButtonOne, sectionSubtitle } = sectionData;

  return (
    <el.Container {...rest}>
      <el.UpperTextContainer>
        <el.Subtitle variant="subtitle">{sectionSubtitle}</el.Subtitle>
        <el.Title>{sectionTitle}</el.Title>
      </el.UpperTextContainer>
      <el.SwiperOuterContainer>
        <el.SwiperInnerContainer>
          {swipers.map((swiper) => {
            return (
              <Swiper
                key={uniqid()}
                autoplayDelay={8000}
                breakpoints={swiperBreakpointValues}
                imageUrls={swiper}
              />
            );
          })}
        </el.SwiperInnerContainer>
      </el.SwiperOuterContainer>
      <el.BottomRow>
        <el.BottomText>{bottomText}</el.BottomText>
        <el.StyledButton>
          {sectionButtonOne.sectionButtonText}
        </el.StyledButton>
      </el.BottomRow>
    </el.Container>
  );
};
