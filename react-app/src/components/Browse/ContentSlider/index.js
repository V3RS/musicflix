import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./ContentSlider.css";

import VideoSlide from "../../VideoSlide";

export default function ContentSlider() {
  return (
    <div className="whole__slider__c">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        totalSlides={3}
      >
        <h1 id="slider__title">Trending Now</h1>
        <Slider>
          <Slide index={0}>
            <VideoSlide />
          </Slide>
          <Slide index={1}>
            <VideoSlide />
          </Slide>
          <Slide index={2}>
            <VideoSlide />
          </Slide>
        </Slider>
        <ButtonBack id="left">
          <i className="fas fa-angle-left fa-2x"></i>
        </ButtonBack>
        <ButtonNext id="right">
          <i className="fas fa-angle-right fa-2x"></i>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
