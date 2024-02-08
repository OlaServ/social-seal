"use client";
import { motion } from "framer-motion";
import { FlexProps, useBreakpointValue } from "@chakra-ui/react";
import uniqid from "uniqid";
import { CarouselElements as el, motionBoxStyles } from "./carousel.elements";

interface ICarouselProps extends FlexProps {
  imageUrls: string[];
}

export const Carousel = ({ imageUrls, ...rest }: ICarouselProps) => {
  const smallScreenAnimatedProps = {
    containerWidth: "500%",
    finalAnimationValue: "-250%",
  };

  const animatedStyleProps = useBreakpointValue(
    {
      base: smallScreenAnimatedProps,
      sm: smallScreenAnimatedProps,
      md: { containerWidth: "200%", finalAnimationValue: "-100%" },
    },
    { fallback: "md" }
  );

  const imageAnimationVariants = {
    initial: { x: "0%" },
    slideLeft: { left: animatedStyleProps?.finalAnimationValue },
  };

  const imageAnimationProps = {
    variants: imageAnimationVariants,
    initial: "initial",
    animate: "slideLeft",
    transition: { duration: 12, ease: "linear", repeat: Infinity },
  };

  const extendedImageUrls = [...imageUrls, ...imageUrls];

  return (
    <el.Container {...rest}>
      <el.InnerContainer>
        <motion.div
          style={{
            ...motionBoxStyles,
            width: animatedStyleProps?.containerWidth,
          }}
          {...imageAnimationProps}
          key={uniqid()}
        >
          {extendedImageUrls.map((imageUrl, idx) => (
            <el.StyledImage
              key={`animated-logo-${idx}`}
              src={imageUrl}
              alt=""
            />
          ))}
        </motion.div>
      </el.InnerContainer>
    </el.Container>
  );
};
