import { GridProps } from "@chakra-ui/react";
import { SectionGridElements as el } from "./section-grid.elements";

export const SectionGrid = ({ children, ...rest }: GridProps) => {
  return <el.Container {...rest}>{children}</el.Container>;
};
