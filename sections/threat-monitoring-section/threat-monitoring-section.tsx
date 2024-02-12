"use client";
import React, { useRef, useContext } from "react";
import { GridProps } from "@chakra-ui/react";
import { ISectionWithButtons } from "@/domain/sections.t";
import { ThreatMonitoringSectionElements as el } from "./threat-monitoring-section.elements";
import { SectionContent } from "@/components/section-content/section-content";
import { MobileContext } from "@/context/mobile-context";

interface IThreatMonitoringSectionProps extends GridProps {
  sectionData: ISectionWithButtons;
}

export const ThreatMonitoringSection = ({
  sectionData,
  ...rest
}: IThreatMonitoringSectionProps) => {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useContext(MobileContext);

  return (
    <el.Container {...rest}>
      <el.LeftColumn ref={leftColumnRef}>
        <el.StyledImage
          src="/assets/images/social-trolls.png"
          alt="Three miniature trolls with colourful hair standing on a laptop and a smartphone"
        />

        {!isMobile && (
          <el.ExclamationMark
            src="/assets/images/exclamation.svg"
            containerRef={leftColumnRef}
          />
        )}
      </el.LeftColumn>
      <SectionContent showButtonOnMobile {...sectionData} />
      <el.StyledFlyingIcon
        imageUrl="/assets/images/troll.svg"
        variant="forward"
        animationDuration={20}
        containerRef={leftColumnRef}
      />
      <el.StyledFlyingIcon
        imageUrl="/assets/images/circle.svg"
        variant="reverse"
        animationDuration={18}
        containerRef={leftColumnRef}
      /> 
    </el.Container>
  );
};
