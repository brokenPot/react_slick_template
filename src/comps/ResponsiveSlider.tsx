import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";




function ResponsiveSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SliderWrapper>
            <div className="slider-container">
                <Slider {...settings}>
                    <SliderCase>
                        <h3>1</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>2</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>3</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>4</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>5</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>6</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>7</h3>
                    </SliderCase>
                    <SliderCase>
                        <h3>8</h3>
                    </SliderCase>
                </Slider>
            </div>
        </SliderWrapper>
    )
}

export const SliderCase = styled.div`
  position: relative;
    width: 200px;
    height: 50px;
    margin:10px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SliderWrapper = styled.div`
    width: 1000px;
    height: 500px;

    .slick-slide {
        display: flex;
        justify-content: center;
        
    }
`


export default ResponsiveSlider;