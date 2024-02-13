"use client";
import { GradientContainerElements as el } from "./gradient-container.elements";
import { FlexProps } from "@chakra-ui/react";

export const GradientContainer = ({ children, ...rest }: FlexProps) => {
  return <el.Container {...rest}>{children}</el.Container>;
};
