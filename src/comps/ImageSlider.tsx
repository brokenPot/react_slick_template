import Slider from "react-slick";
import "../style/slick.css"
import "../style/slick-theme.css"

import styled from "styled-components";
import departure from '../Images/departure.jpg';
import metaphorical from '../Images/metaphorical.jpg';
import modalsoul from '../Images/modalsoul.jpg';
import spiritual from '../Images/spiritual.png';

import rightIconPath  from '../Icons/right.svg'
import leftIconPath  from '../Icons/left.svg'
import {useState} from "react";

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


export const RightIcon = () => <CustomImg src={rightIconPath} alt="Right"/>;
export const LeftIcon = () => <CustomImg src={leftIconPath} alt="Left" />;

const images = [
    departure,metaphorical,modalsoul,spiritual
];


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
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  width: calc(5rem + 5vw);
  height: calc(5rem + 5vw);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 1; 

  &.left { 
    left: -80px;
  }

  &.right {
    right: -80px;
  }
`;

export const SliderImg = styled.img`
  position: relative; 
  width: calc(15rem + 15vw);
  height: calc(15rem + 15vw);
    //height: 500px;
  border-radius: 4px;
`;


function ImageSlider() {
    const [slideState, setSlideState] = useState({
        activeSlide: 0,
        activeSlide2: 0,
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) =>
            setSlideState({ activeSlide: next, activeSlide2: current }),
    };

    return (
        <SliderWrapper>
            <div style={{display:"flex", justifyContent:'center', marginBottom:'10px'}}>
                IMAGES {slideState.activeSlide + 1}/{images.length}
            </div>
                <Slider {...settings}>
                    {images.map((image) => (
                        <div key={image}>
                            <SliderImg src={image}/>
                        </div>
                    ))}
                </Slider>
        </SliderWrapper>
    );
}

const SliderWrapper = styled.div`
    margin-top:10px ;
    width:50vw;
    height:500px;

    .slick-slide {
        display: flex;
        justify-content: space-evenly;
    }
`

export default ImageSlider;