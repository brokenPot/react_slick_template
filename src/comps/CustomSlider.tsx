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
import Card from "./Card.tsx";

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

export const RightIcon = () => <CustomImg src={rightIconPath} alt="Right"   />;
export const LeftIcon = () => <CustomImg src={leftIconPath} alt="Left"    />;


export interface MusicInfo {
    image : string;
    title : string;
    desc : string;
}

const musicObjArr   = [
    {
        image : departure,
        title : "departure",
        desc : "LP1:\n" +
            "1. Battlecry [Nujabes Feat.Sing02]\n" +
            "2. The Space Between Two World [Nujabes]\n" +
            "3. Aruarian Dance [Nujabes]\n" +
            "4. Transcendence [Nujabes]\n" +
            "5. Mystline [Nujabes]\n" +
            "6. 1st Samurai [Nujabes]\n" +
            "7. 四季ノ唄 [Minmi]\n" +
            "LP2:\n" +
            "1. Ole [Fat Jon]\n" +
            "2. 624 Part2 [Fat Jon]\n" +
            "3. Genome [Fat Jon]\n" +
            "4. No Way Back [Fat Jon]\n" +
            "5. Funkin' [Fat Jon]\n" +
            "6. Stay [Fat Jon]\n" +
            "7. Chambers [Fat Jon]\n" +
            "8. Ask [Fat Jon]\n" +
            "9. How You Feel [Fat Jon]\n" +
            "10. 624 Part1 [Fat Jon]",
    },{
        image : metaphorical,
        title : "metaphorical",
        desc : "1. Blessing It (Remix)\n"+
            "2. Horn In The Middle\n"+
            "3. Lady Brown\n"+
            "4. Kumomi\n"+
            "5. Highs 2 Lows\n"+
            "6. Beat Laments The World\n"+
            "7. Letter From Yokosuka\n"+
            "8. Think Different\n"+
            "9. A Day By Atmosphere Supreme\n"+
            "10. Next View\n"+
            "11. Latitude (Remix)\n"+
            "12. F.I.L.O.\n"+
            "13. Summer Gypsy\n"+
            "14. The Final View\n"+
            "15. Peaceland\n"
    },{
        image : modalsoul,
        title : "modalsoul",
        desc : "1.	Feather (featuring Cise Starr & Akin)\n"+
            "2.	Ordinary Joe (featuring Terry Callier)\n"+
            "3.	Reflection Eternal\n"+
            "4.	Luv (Sic.) Part 3 (featuring Shing02)\n"+
            "5.	Music Is Mine\n"+
            "6.	Eclipse (featuring Substantial)\n"+
            "7.	The Sign (featuring Pase Rock)\n"+
            "8.	Thank You (featuring Apani B)\n"+
            "9.	World's End Rhapsody\n"+
            "10. Modal Soul (featuring Uyama Hiroto)\n"+
            "11. Flowers\n"+
            "12. Sea of Cloud\n"+
            "13. Light on the Land\n"+
            "14. Horizon"
    }
    ,{
        image : spiritual,
        title : "spiritual",
        desc : "1. Spiritual State (featuring Uyama Hiroto)\n"+
            "2. Sky Is Tumbling (featuring Cise Starr)\n"+
            "3. Gone Are the Days (featuring Uyama Hiroto)\n"+
            "4. Spiral\n"+
            "5. City Lights (featuring Pase Rock and Substantial)\n"+
            "6. Color of Autumn\n"+
            "7. Dawn On the Side\n"+
            "8. Yes (featuring Pase Rock)\n"+
            "9. Rainyway Back Home\n"+
            "10. Far Fowls\n"+
            "11. Fellows\n"+
            "12. Waiting For the Clouds (featuring Substantial)\n"+
            "13. Prayer Nujabes\n"+
            "14. Island (featuring Uyama Hiroto and Haruka Nakamura)\n"
    }
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
    left: 50px;
  }

  &.right {
    right: 50px;
  }
`;

export const SliderCase = styled.div`
  position: relative; 
  width: 800px;
  height: 450px;
    margin:10px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
`;


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
            <div className="slider-container">
                <Slider {...settings}>
                    {musicObjArr.map((musicinfo) => (
                        <div key={musicinfo.image}>
                            <SliderCase >
                                <Card  image={musicinfo.image} title={musicinfo.title} desc={musicinfo.desc} />
                            </SliderCase>
                        </div>
                    ))}
                </Slider>
            </div>
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