import { FlexProps, StyleProps } from "@chakra-ui/react";
import { SwiperElements as el } from "./swiper.elements";
import { SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid"

interface ISwiperProps
  extends Omit<StyleProps, "grid">,
    Omit<SwiperProps, "color" | "height" | "width"> {
  imageUrls: Array<string>;
}

export const Swiper = ({ imageUrls, ...rest }: ISwiperProps) => {
  return (
    <el.Container
      spaceBetween={30}
      autoplay={{
        delay: 5000,
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
          <SwiperSlide key={imageUrl}>
            <el.SlideImage src={imageUrl} alt="" />
          </SwiperSlide>
        );
      })}
    </el.Container>
  );
};
