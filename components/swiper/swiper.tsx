import { StyleProps } from "@chakra-ui/react";
import { SwiperElements as el } from "./swiper.elements";
import { SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import uniqid from "uniqid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

interface ISwiperProps
  extends Omit<StyleProps, "grid">,
    Omit<SwiperProps, "color" | "height" | "width"> {
  imageUrls: Array<string>;
  autoplayDelay?: number;
}

export const Swiper = ({
  imageUrls,
  autoplayDelay = 5000,
  ...rest
}: ISwiperProps) => {
  return (
    <el.Container
      spaceBetween={30}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={false}
      navigation={false}
      loop={true}
      modules={[Autoplay, Grid]}
      {...rest}
    >
      {imageUrls.map((imageUrl) => {
        return (
          <SwiperSlide key={uniqid()}>
            <el.SlideImage src={imageUrl} alt="" />
          </SwiperSlide>
        );
      })}
    </el.Container>
  );
};
