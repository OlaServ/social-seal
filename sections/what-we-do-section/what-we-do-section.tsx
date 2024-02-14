"use client";
import { GridProps, Image } from "@chakra-ui/react";
import { IWhatWeDoSection } from "@/domain/sections.t";
import { WhatWeDoSectionElements as el } from "./what-we-do-section.elements";
import { SectionBody } from "@/components/section-body/section-body";
import { SectionContent } from "@/components/section-content/section-content";

interface IWhatWeDoSectionProps extends GridProps, IWhatWeDoSection {}

export const WhatWeDoSection = ({
  sectionData,
  cards,
  ...rest
}: IWhatWeDoSectionProps) => {
  return (
    <el.Container {...rest}>
      <el.LeftColumn>
        <el.ImageContainer>
          <el.StyledImage src="/assets/images/bakery-2.png" />
          <el.CardOne {...cards[0]} />
          <el.CardTwo {...cards[1]} />
        </el.ImageContainer>
      </el.LeftColumn>
      <SectionContent {...sectionData} />
    </el.Container>
  );
};
