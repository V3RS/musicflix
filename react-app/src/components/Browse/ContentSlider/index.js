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
// push to heroku
export default function ContentSlider({ title, mvs }) {
  return (
    <div className="whole__slider__c">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        totalSlides={3}
      >
        <h1 id="slider__title">{title}</h1>
        <Slider>
          <Slide index={0}>
            <VideoSlide mvs={mvs?.slice(0, 7)} />
          </Slide>
          <Slide index={1}>
            <VideoSlide mvs={mvs?.slice(7, 14)} />
          </Slide>
          <Slide index={2}>
            <VideoSlide mvs={mvs?.slice(14, 21)} />
          </Slide>
        </Slider>
        <span className="slide_btns">
          <div>
            <ButtonBack id="left">
              <i className="fas fa-angle-left fa-2x"></i>
            </ButtonBack>
            <ButtonNext id="right">
              <i className="fas fa-angle-right fa-2x"></i>
            </ButtonNext>
          </div>
        </span>
      </CarouselProvider>
    </div>
  );
}
