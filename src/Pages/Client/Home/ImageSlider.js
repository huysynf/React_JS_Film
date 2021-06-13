import React from 'react';
import InnerSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImageSlider = (props) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
      <Carousel {...settings}>
        <Wrap>
          <div>
            <SlideImage src="/images/slider-badag.jpg" alt=""/>
          </div>
        </Wrap>

        <Wrap>
          <div>
            <SlideImage src="/images/slider-scale.jpg" alt=""/>
          </div>
        </Wrap>

        <Wrap>
          <div>
            <SlideImage src="/images/slider-badging.jpg" alt=""/>
          </div>
        </Wrap>

        <Wrap>
          <div >
            <SlideImage src="/images/slider-scales.jpg" alt=""/>
          </div>
        </Wrap>
      </Carousel>
  );
};

const Wrap = styled.div`
  div{
    cursor: pointer;
    position: relative;
    padding: 4px;
    border-radius: 4px;
    &:hover{
      padding: 0;
      border:4px solid white;
    }
  }
`;

const Carousel = styled(InnerSlider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;

      transition: opacity 1s ease 0s;
    }

    ul li button {
      &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
      }
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;
export default ImageSlider;
