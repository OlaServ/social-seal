import { TextProps } from "@chakra-ui/react";
import { SectionBodyElements as el } from "./section-body.elements";
import { TextParser } from "@/helpers/text-parser";

interface ISectionBodyProps extends TextProps {
  bodyText: string;
}

export const SectionBody = ({ bodyText, ...rest }: ISectionBodyProps) => {
  const parsedText = TextParser.renderFormattedText(bodyText);

  return <el.Body {...rest}>{parsedText}</el.Body>;
};
