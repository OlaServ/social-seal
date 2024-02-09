import { styled, Image } from "@chakra-ui/react";
import { Swiper } from "swiper/react";

const Container = styled(Swiper, {
  baseStyle: {
    w: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

const SlideImage = styled(Image, {
  baseStyle: {
    display: "block",
    objectFit: "cover",
    cursor: "pointer",
    w: "100%",
  },
});

export const SwiperElements = { Container, SlideImage };
