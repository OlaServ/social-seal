import { ImageProps } from "@chakra-ui/react";
import { RefObject, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ScrollAnimatedImageElements as el } from "./scroll-animated-image.elements";

interface IScrollAnimatedImageProps extends ImageProps {
  containerRef: RefObject<HTMLDivElement>;
}

export const ScrollAnimatedImage = ({
  containerRef,
  ...rest
}: IScrollAnimatedImageProps) => {
  const [exclamationMarkPosition, setExclamationMarkPosition] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const calculateProgress = (ref: RefObject<HTMLDivElement>, offset = 1) => {
      const element = ref.current;
      const elementTop =
        (element?.getBoundingClientRect().top ?? offset) +
        document.documentElement.scrollTop;
      const elementHeight = element?.getBoundingClientRect().height ?? 0;
      return elementTop - latest >= elementHeight
        ? elementHeight
        : Math.max(0, elementTop - latest);
    };

    const progress = calculateProgress(containerRef);

    setExclamationMarkPosition(progress);
  });

  return <el.StyledImage bottom={exclamationMarkPosition} {...rest} />;
};
