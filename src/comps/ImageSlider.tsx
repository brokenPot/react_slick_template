import Slider from "react-slick";
// import "../style/slick.scss"
// import "../style/slick-theme.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import departure from '../Images/departure.jpg';
import metaphorical from '../Images/metaphorical.jpg';
import modalsoul from '../Images/modalsoul.jpg';
import spiritual from '../Images/spiritual.jpg';

import rightIconPath  from '../Icons/right.svg'
import leftIconPath  from '../Icons/left.svg'
export const RightIcon = () => <img src={rightIconPath} alt="Right"  style={{width:'48px', height:'48px' }} />;
export const LeftIcon = () => <img src={leftIconPath} alt="Left"  style={{width:'48px', height:'48px' }}  />;

const images = [
    departure,metaphorical,modalsoul,spiritual
];

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <Arrow className={`right`} onClick={onClick}>
            <RightIcon />
            {/*<div style={{backgroundColor: 'red', width: '5px', height: '5px' }}/>*/}
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
  // 화살표가 뒤에 묻히길래 z-index 주었다. 

  &.left { 
  // &를 붙여야 한다! 
    left: -50px;
  }

  &.right {
    right: -50px;
  }
`;

export const SliderImg = styled.img`
  position: relative; 
  width: 965px;
  height: 520px;
  border-radius: 4px;
`;


function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <SliderWrapper>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image)=> (
                        <div key={image}>
                            <SliderImg src={image}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </SliderWrapper>

    );
}

const SliderWrapper = styled.div`
    width: 800px;
    height: 500px;
`

export default SimpleSlider;