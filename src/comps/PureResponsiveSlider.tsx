import Slider from "react-slick";

import '../responsiveStyle/slick.scss'
import '../responsiveStyle/slick-theme.scss'

import styled from "styled-components";
import rightIconPath from "../Icons/right.svg";
import leftIconPath from "../Icons/left.svg";


const CustomImg = styled.img`
    width:48px;
    height:48px;
    transition: box-shadow 0.3s ease;
    border: 1px solid transparent;
    border-radius: 100%;
    &:hover{
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
`

export const RightIcon = () => <CustomImg src={rightIconPath} alt="Right" />;
export const LeftIcon = () => <CustomImg src={leftIconPath} alt="Left" />;

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


function PureResponsiveSlider() {
    const settings = {
        dots: true,
        infinite: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SliderContainer>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8 ].map((n) => (
                    <div key={n}>
                        <StepCover >
                            {n}
                        </StepCover>
                    </div>
                ))}
            </Slider>
        </SliderContainer>
    );
}

const StepCover = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1.5px solid lightgrey;
  border-radius: 7px;
  padding: 13px;
  //width: 100px;
  //  width: calc(6rem + 7.2vw); 작을때

    width: calc(3rem + 3vw);
  color: black;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const SliderContainer = styled.div`
    width:50vw;

    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    .slick-slide {
        display: flex;
        justify-content: center;
    }
    
`

export default PureResponsiveSlider;
