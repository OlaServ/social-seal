"use client";
import { CountersElements as el } from "./counters.elements";
import { Counter } from "@/components/counter/counter";
import { ICountersSection } from "@/domain/sections.t";
import { GridProps } from "@chakra-ui/react";

interface ICountersProps extends ICountersSection, GridProps {}

export const Counters = ({
  sectionTitle,
  subtitle,
  body,
  counters,
  ...rest
}: ICountersProps) => {
  return (
    <el.Container {...rest}>
      <el.ColumnLeft>
        <el.Subtitle>{subtitle}</el.Subtitle>
        <el.Title as="h2">{sectionTitle}</el.Title>
        <el.Body>{body}</el.Body>
        <el.ButtonsContainer>
            <el.ContactButton size="large">Contact Us</el.ContactButton>
            <el.HelpButton size="large">How Can We Help</el.HelpButton>
        </el.ButtonsContainer>
      </el.ColumnLeft>
      <el.ColumnRight>
        <el.CountersColumnLeft>
          {counters.map((counter, idx) =>
            idx % 2 === 0 ? (
              <Counter key={`counter-${idx}`} {...counter} />
            ) : null
          )}
        </el.CountersColumnLeft>
        <el.CountersColumn>
          {counters.map((counter, idx) =>
            idx % 2 !== 0 ? (
              <Counter key={`counter-${idx}`} {...counter} />
            ) : null
          )}
        </el.CountersColumn>
      </el.ColumnRight>
    </el.Container>
  );
};
