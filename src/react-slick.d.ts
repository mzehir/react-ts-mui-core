declare module 'react-slick' {
  import { Component } from 'react';

  interface SliderProps {
    adaptiveHeight?: boolean;
    arrows?: boolean;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    children?: React.ReactNode;
  }

  export default class Slider extends Component<SliderProps> {}
}
