import { SliderProps } from 'react-slick';

export interface SliderCompProps extends SliderProps {}

export const sliderCompDefaultProps: SliderCompProps = {
  adaptiveHeight: false,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
