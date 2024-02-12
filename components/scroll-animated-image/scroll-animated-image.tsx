import { ImageProps } from "@chakra-ui/react";
import { RefObject, useState, useRef } from "react";
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

  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const imageHeight = imageRef.current?.height ?? 0;
    const calculateProgress = (ref: RefObject<HTMLDivElement>, offset = 1) => {
      const container = ref.current;
      const elementTop =
        (container?.getBoundingClientRect().top ?? offset) +
        document.documentElement.scrollTop;
      const elementHeight = container?.offsetHeight ?? 0;
      return elementTop - latest >= elementHeight
        ? elementHeight
        : Math.max(0, elementTop - latest + imageHeight / 2);
    };

    const progress = calculateProgress(containerRef);

    setExclamationMarkPosition(progress);
  });

  return (
    <el.StyledImage ref={imageRef} bottom={exclamationMarkPosition} {...rest} />
  );
};
