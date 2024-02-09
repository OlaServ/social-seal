import { MotionProps, motion } from "framer-motion";

interface IRotatingImageProps extends MotionProps {
  imageUrl: string;
}
export const RotatingImage = ({ imageUrl, ...rest }: IRotatingImageProps) => {
  const imageAnimationVariants = {
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

  const imageAnimationProps = {
    variants: imageAnimationVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  } as MotionProps;

  return <motion.img src={imageUrl} {...imageAnimationProps} {...rest} />;
};
