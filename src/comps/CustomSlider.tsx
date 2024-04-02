import Slider from "react-slick";
import "../style/slick.css"
import "../style/slick-theme.css"

import styled from "styled-components";

import {useState} from "react";
import Card from "./Card.tsx";
import {musicObjArr} from "../dummyData/musicData.ts";
import {Arrow} from "./Arrow.ts";
import rightIconPath from "../Icons/right.svg";
import leftIconPath from "../Icons/left.svg";



export interface MusicInfo {
    image : string;
    title : string;
    desc : string;
}


const CustomImg = styled.img`
    width:calc(1.2rem + 1.2vw);
    height:calc(1.2rem + 1.2vw);
    transition: box-shadow 0.3s ease;
    border: 1px solid transparent;
    border-radius: 100%;
    &:hover{
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
`

 const RightIcon = () => <CustomImg src={rightIconPath} alt="Right" />;
 const LeftIcon = () => <CustomImg src={leftIconPath} alt="Left" />;

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

function CustomSlider() {
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
                IMAGES {slideState.activeSlide + 1}/{musicObjArr.length}
            </div>
                <Slider {...settings}>
                    {musicObjArr.map(({image,title, desc}:MusicInfo) => (
                        <div key={image}>
                                <Card  image={image} title={title} desc={desc} />
                        </div>
                    ))}
                </Slider>
        </SliderWrapper>

    );
}

const SliderWrapper = styled.div`
    width:calc(20rem + 20vw);
  
    height: 500px;

    .slick-slide {
        display: flex;
        justify-content: space-evenly;
    }
`

export default CustomSlider;