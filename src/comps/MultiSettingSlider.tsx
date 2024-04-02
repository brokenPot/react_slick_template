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


export const Arrow = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  color: #fff;
  width: calc(4rem + 4vw);
  height: calc(4rem + 4vw);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 1; 

  &.left { 
    left: -15px;
  }

  &.right {
    right: -15px;
  }
`;


function MultiSettingSlider() {

    const settings = {
        className: "center",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true
    };
    return (
        <SliderWrapper>
            <Case>
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((n) => (
                        <div key={n}>
                            <StepCover>
                                {n}
                            </StepCover>
                        </div>
                    ))}
                </Slider>
            </Case>


        </SliderWrapper>

    );
}

const SliderWrapper = styled.div`
    width:calc(19rem + 19vw);
    height: 500px;

    .slick-slide {
        display: flex;
        justify-content: center;
    }
`

const Case = styled.div`
    width:calc(18rem + 18vw) ;
    height: 330px;
    border: 1px solid transparent;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

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
    justify-content: center;
    width: calc(12rem + 12vw);
    height: 50px;
`;


export default MultiSettingSlider;
