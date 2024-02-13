"use client";
import { CreativeDesignSectionElements as el } from "./creative-designs-section.elements";
import { SectionBody } from "@/components/section-body/section-body";
import { List } from "@/components/list/list";
import { ICreativeDesignSection } from "@/domain/sections.t";
import { FlexProps } from "@chakra-ui/react";
import { SectionContentButton } from "@/components/section-content-button/section-content-button";

interface ICreativeDesignSectionProps
  extends ICreativeDesignSection,
    FlexProps {}

export const CreativeDesignSection = ({
  sectionData,
  list,
  ...rest
}: ICreativeDesignSectionProps) => {
  const { sectionTitle, sectionBody, sectionButtonOne, sectionSubtitle } =
    sectionData;

  const { listItems, listTitle } = list;
  return (
    <el.Container {...rest}>
      <el.TextContainer>
        <el.Subtitle variant="subtitle">{sectionSubtitle}</el.Subtitle>
        <el.Title>{sectionTitle}</el.Title>
        <SectionBody bodyText={sectionBody} />
      </el.TextContainer>
      <el.BottomContainer>
        <el.StyledImage src="/assets/images/web.png" />
        <el.RightColumn>
          <el.GradientText>{listTitle}</el.GradientText>
          <List listItems={listItems} />
          <el.StyledButton>
            {sectionButtonOne.sectionButtonOneText}
          </el.StyledButton>
        </el.RightColumn>
      </el.BottomContainer>
    </el.Container>
  );
};
