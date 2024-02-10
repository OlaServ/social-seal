import { FlexProps } from "@chakra-ui/react";
import { SectionContentElements as el } from "./section-content.elements";
import { ISectionWithButton } from "@/domain/sections.t";
import { TextParser } from "@/helpers/text-parser";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { SectionContentButton } from "../section-content-button/section-content-button";

interface ISectionContentProps extends ISectionWithButton, FlexProps {}

export const SectionContent = ({
  sectionTitle,
  sectionBody,
  sectionSubtitle,
  sectionButtonText,
  onClickSectionButton,
  ...rest
}: ISectionContentProps) => {
  const parsedText = TextParser.renderFormattedText(sectionBody);
  const isMobile = useIsMobile();

  return (
    <el.Container {...rest}>
      <el.Subtitle>{sectionSubtitle}</el.Subtitle>
      <el.Title as="h2">{sectionTitle}</el.Title>
      <el.Body>{...parsedText}</el.Body>
      {!isMobile && (
        <SectionContentButton size="large" onClick={onClickSectionButton}>
          {sectionButtonText}
        </SectionContentButton>
      )}
    </el.Container>
  );
};
