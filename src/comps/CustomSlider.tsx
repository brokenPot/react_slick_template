import Slider from "react-slick";
import "../style/slick.css"
import "../style/slick-theme.css"

import styled from "styled-components";

import {useState} from "react";
import Card from "./Card.tsx";
import {musicObjArr} from "../dummyData/musicData.ts";
import {Arrow} from "./Arrow.ts";
import {SliderCase} from "./SliderCase.ts";
import {LeftIcon, RightIcon} from "./Icons.tsx";



export interface MusicInfo {
    image : string;
    title : string;
    desc : string;
}

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
                            <SliderCase >
                                <Card  image={image} title={title} desc={desc} />
                            </SliderCase>
                        </div>
                    ))}
                </Slider>
        </SliderWrapper>

    );
}

const SliderWrapper = styled.div`
    width: 1000px;
    height: 500px;

    .slick-slide {
        display: flex;
        justify-content: center;
    }
`

export default CustomSlider;