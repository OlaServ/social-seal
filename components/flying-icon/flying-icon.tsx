import { RefObject } from "react";
import { MotionProps, motion } from "framer-motion";

interface IFlyingIconProps extends MotionProps {
  containerRef: RefObject<HTMLDivElement>;
  imageUrl: string;
  variant?: "forward" | "reverse";
  animationDuration?: number;
}

export const FlyingIcon = ({
  containerRef,
  imageUrl,
  animationDuration,
  variant = "forward",
  ...rest
}: IFlyingIconProps) => {
  const containerHeight =
    containerRef.current?.getBoundingClientRect().height ?? 0;

  const isReverse = variant === "reverse";
  const flyAroundAnimationVariants = {
    initial: {
      transform: "rotate(0deg) translateX(0%)  rotate(0deg)",
    },
    animate: {
      transform: `rotate(${isReverse ? "-" : ""}360deg) translateX(${Math.min(
        containerHeight * 2,
        Math.random() * 1000
      )}px) rotate(${isReverse ? "-" : ""}360deg)`,
    },

    exit: {
      transform: "rotate(0deg) translateX(0%) rotate(0deg)",
    },
  };

  const flyAroundAnimationProps = {
    variants: flyAroundAnimationVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: {
      duration: animationDuration,
      ease: "backInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
    style: {
      position: "absolute",
      zIndex: -1,
    },
  } as MotionProps;

  return (
    <motion.img src={imageUrl} {...flyAroundAnimationProps} {...rest} />
  );
};
