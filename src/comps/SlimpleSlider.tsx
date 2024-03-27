import Slider from "react-slick";
// import "../style/slick.scss"
// import "../style/slick-theme.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className={`right`} onClick={onClick}>
            <div style={{backgroundColor: 'red', width: '100px', height: '10px'}}/>
        </div>
    );
}

function PrevArrow(props: any) {
    const {onClick} = props;
    return (
        <div className={`left`} onClick={onClick}>
            <div style={{backgroundColor:'blue', width:'100px', height:'10px' }} />
        </div>
    );
}


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
                    <div style={{backgroundColor: "blue"}}>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
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