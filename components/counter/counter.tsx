"use client";

import { FlexProps, Text } from "@chakra-ui/react";
import { CounterElements as el } from "./counter.elements";
import { ICounter } from "@/domain/sections.t";
import { useCountUp } from "react-countup";
import { useRef } from "react";

interface ICounterProps extends ICounter, FlexProps {}

export const Counter = ({
  text,
  colorVariant,
  backgroundUrl,
  number,
  symbol,
  bgPlacement = "left",
  ...rest
}: ICounterProps) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useCountUp({
    start: 0,
    end: number,
    ref: counterRef,
    enableScrollSpy: true,
  });

  return (
    <el.Container
      bgImage={`url(${backgroundUrl})`}
      bgPosition={`bottom ${bgPlacement}`}
      {...rest}
    >
      <el.NumberText color={colorVariant}>
        <span ref={counterRef}>{number}</span>
        {symbol ?? symbol}
      </el.NumberText>
      <el.BottomText>{text}</el.BottomText>
    </el.Container>
  );
};
