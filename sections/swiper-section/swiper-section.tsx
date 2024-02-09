"use client";

import { SwiperSectionElements as el } from "./swiper-section.elements";
import { TextParser } from "@/helpers/text-parser";
import { useIsMobile } from "@/hooks/use-is-mobile";

const parsedText = TextParser.renderUnderlinedText(
  "From the research and planning to creating striking images and videos for your posts, our service focuses on creating a <u>unique voice</u> for your brand that will <u>engage your audience</u> and keep them coming back for more!"
);

export const SwiperSection = () => {
  const isMobile = useIsMobile();
  return (
    <el.Container>
      <el.RotatingImageOne imageUrl="/assets/images/shape-1.svg" />
      {!isMobile && (
        <el.RotatingImageTwo imageUrl="/assets/images/shape-2.svg" />
      )}
      <el.ColumnLeft>
        <el.Subtitle>Our Expertise is Your Success</el.Subtitle>
        <el.Title as="h2">Struggling to Make Engaging Content?</el.Title>
        <el.Body>{...parsedText}</el.Body>
      </el.ColumnLeft>
    </el.Container>
  );
};
