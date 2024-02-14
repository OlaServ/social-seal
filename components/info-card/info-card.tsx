import { CardProps } from "@chakra-ui/react";
import { ICard } from "../../domain/card.t";
import { InfoCardElements as el } from "./info-card.elements";

interface IInfoCardProps extends CardProps, ICard {}

export const InfoCard = ({
  cardHeading,
  cardSubHeading,
  headingColor,
  ...rest
}: IInfoCardProps) => {
  return (
    <el.Container {...rest}>
      <el.Heading color={headingColor}>{cardHeading}</el.Heading>
      <el.Subheading>{cardSubHeading}</el.Subheading>
    </el.Container>
  );
};
