import React from 'react';
import Slider from 'react-slick';
import { SliderCompProps, sliderCompDefaultProps } from './sliderHelper';

const SliderComp: React.FC<SliderCompProps> = (props) => {
  const { children, ...sliderProps } = { ...sliderCompDefaultProps, ...props };

  return <Slider {...sliderProps}>{children}</Slider>;
};

export default SliderComp;
