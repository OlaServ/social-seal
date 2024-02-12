import { TextProps } from "@chakra-ui/react";
import { SectionTitleElements as el } from "./section-title.elements";

interface ITitleProps extends TextProps {
  variant?: "title" | "subtitle";
}

export const SectionTitle = ({
  children,
  variant = "title",
  ...rest
}: ITitleProps) => {
  if (variant === "subtitle") {
    return <el.Subtitle {...rest}>{children}</el.Subtitle>;
  }

  return (
    <el.Title as="h2" {...rest}>
      {children}
    </el.Title>
  );
};
