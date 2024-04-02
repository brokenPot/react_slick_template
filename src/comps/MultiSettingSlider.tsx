import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {LeftIcon, RightIcon} from "./Icons.tsx";


function NextArrow(props: any) {
    const {onClick} = props;

    return (
        <Arrow className={`right`} onClick={onClick}>
            <RightIcon />
        </Arrow>
    );
}

function PrevArrow(props: any) {
    const {onClick} = props;
    return (
        <Arrow className={`left`} onClick={onClick}>
            <LeftIcon/>
        </Arrow>
    );
}


export const Arrow = styled.p`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  color: #fff;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 1; 

  &.left { 
    left: -50px;
  }

  &.right {
    right: -50px;
  }
`;


function MultiSettingSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };
    return (
        <SliderWrapper>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16 ].map((n) => (
                    <div key={n}>
                        <StepCover >
                            {n}
                        </StepCover>
                    </div>
                ))}
            </Slider>
        </SliderWrapper>
    );
}

const SliderWrapper = styled.div`
    width: 800px;
    height: 120px;

    //.slick-slide {
    //    display: flex;
    //    justify-content: center;
    //}
`

const StepCover = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1.5px solid lightgrey;
  border-radius: 7px;
  padding: 13px;
    margin-bottom: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    width: 40px;
    height: 20px;
`;


export default MultiSettingSlider;
