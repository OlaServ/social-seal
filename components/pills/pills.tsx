import { FlexProps } from "@chakra-ui/react";
import { IPills } from "@/domain/pills.t";
import { PillsElements as el, pillColorVariants } from "./pills.elements";
import uniqid from "uniqid";

interface IPillsProps extends IPills, FlexProps {}

export const Pills = ({ pillsTitle, pillsList, ...rest }: IPillsProps) => {
  return (
    <el.Container>
      <el.Title>{pillsTitle}</el.Title>
      <el.PillsContainer>
        {pillsList.map((pill) => {
          const { text, colorVariant } = pill;
          return (
            <el.Pill
              key={`pill-${uniqid()}`}
              {...pillColorVariants[colorVariant]}
            >
              {text}
            </el.Pill>
          );
        })}
      </el.PillsContainer>
    </el.Container>
  );
};
