import { MotionProps, motion } from "framer-motion";

type AnimationVariantType = "rotate" | "float";

interface IAnimatedShapeProps extends MotionProps {
  imageUrl: string;
  animationVariant?: AnimationVariantType;
  animationDuration?: number;
}
export const AnimatedShape = ({
  imageUrl,
  animationVariant = "rotate",
  animationDuration = 2.5,
  ...rest
}: IAnimatedShapeProps) => {
  const rotateAnimationVariants = {
    initial: {
      rotate: "10deg",
    },
    animate: {
      rotate: "0deg",
    },

    exit: {
      rotate: "-10deg",
    },
  };

  const floatAnimationVariants = {
    initial: {
      transform: "translateX(10px)",
    },
    animate: {
      transform: "translateX(0px)",
    },

    exit: {
      transform: "translateX(-10px)",
    },
  };

  const getAnimationVariant = (animationVariantType: AnimationVariantType) => {
    switch (animationVariantType) {
      case "rotate": {
        return rotateAnimationVariants;
      }
      case "float": {
        return floatAnimationVariants;
      }
    }
  };

  const imageAnimationProps = {
    variants: getAnimationVariant(animationVariant),
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: {
      duration: animationDuration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
    style: {
      position: "absolute",
      zIndex: -1,
    },
  } as MotionProps;

  return <motion.img src={imageUrl} {...imageAnimationProps} {...rest} />;
};
