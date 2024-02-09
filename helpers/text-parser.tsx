"use client"
import { Text } from "@chakra-ui/react";
import uniqid from "uniqid";

export class TextParser {
  static renderUnderlinedText(inputString: string) {
    const splitString = inputString.split(/<u>|<\/u>/);
    const modifiedString = splitString
      .map((segment, index) => {
        if (index % 2 === 0) {
          return segment
        } else {
          return (
            <Text
              key={uniqid()}
              as="span"
              textDecoration="underline"
              color="secondary.grayDark"
            >
              {segment}
            </Text>
          );
        }
      })
      .filter(Boolean)
     

    return modifiedString;
  }
}
