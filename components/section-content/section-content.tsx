import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { FlexProps } from "@chakra-ui/react";
import { SectionContentElements as el } from "./section-content.elements";
import { ISectionWithButtons } from "@/domain/sections.t";
import { TextParser } from "@/helpers/text-parser";
import { SectionContentButton } from "../section-content-button/section-content-button";

interface ISectionContentProps extends ISectionWithButtons, FlexProps {
  showButtonOnMobile?: boolean;
}

export const SectionContent = ({
  sectionTitle,
  sectionBody,
  sectionSubtitle,
  sectionButtonOneText,
  onClickSectionButton,
  showButtonOnMobile = false,
  children,
  ...rest
}: ISectionContentProps) => {
  const parsedText = TextParser.renderFormattedText(sectionBody);
  const { isMobile } = useContext(MobileContext);

  return (
    <el.Container {...rest}>
      <el.Subtitle>{sectionSubtitle}</el.Subtitle>
      <el.Title as="h2">{sectionTitle}</el.Title>
      <el.Body>{...parsedText}</el.Body>
      {(!isMobile || showButtonOnMobile) && (
        <SectionContentButton size="large" onClick={onClickSectionButton}>
          {sectionButtonOneText}
        </SectionContentButton>
      )}
    </el.Container>
  );
};
