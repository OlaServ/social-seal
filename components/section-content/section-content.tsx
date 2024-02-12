import { useContext } from "react";
import { MobileContext } from "@/context/mobile-context";
import { FlexProps } from "@chakra-ui/react";
import { SectionContentElements as el } from "./section-content.elements";
import { ISectionWithButtons } from "@/domain/sections.t";
import { TextParser } from "@/helpers/text-parser";
import { SectionContentButton } from "../section-content-button/section-content-button";
import { Pills } from "../pills/pills";

interface ISectionContentProps extends ISectionWithButtons, FlexProps {
  showButtonOnMobile?: boolean;
  showButtonArrow?: boolean;
}

export const SectionContent = ({
  sectionTitle,
  sectionBody,
  sectionSubtitle,
  sectionButtonOne,
  sectionButtonTwo,
  pills,
  showButtonOnMobile = false,
  showButtonArrow = false,
  children,
  ...rest
}: ISectionContentProps) => {
  const parsedText = TextParser.renderFormattedText(sectionBody);
  const { isMobile } = useContext(MobileContext);

  return (
    <el.Container {...rest}>
      <el.Subtitle variant="subtitle">{sectionSubtitle}</el.Subtitle>
      <el.Title>{sectionTitle}</el.Title>
      <el.Body>{...parsedText}</el.Body>
      {pills && <Pills {...pills} />}
      {(!isMobile || showButtonOnMobile) && (
        <el.ButtonsContainer>
          <SectionContentButton size="large">
            {sectionButtonOne.sectionButtonOneText}
          </SectionContentButton>
          {!isMobile && sectionButtonTwo && (
            <el.StyledSectionButton>
              {sectionButtonTwo.sectionButtonTwoText}
            </el.StyledSectionButton>
          )}
            {!isMobile && showButtonArrow && <el.FloatingImage
            imageUrl="/assets/images/shapes/shape-4.svg"
            animationVariant="float"
          />}
        </el.ButtonsContainer>
      )}
    </el.Container>
  );
};
