import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function PureResponsiveSlider() {
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
        <SliderContainer>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8 ].map((n) => (
                    <SliderCase key={n}>
                        {n}
                    </SliderCase>
                ))}
            </Slider>
        </SliderContainer>
    );
}

export const SliderCase = styled.div`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: coral;
`;

const SliderContainer = styled.div`
    overflow: hidden;
    .slick-slide {
        margin: 0 27px;
    }

    /* the parent */
    .slick-list {
        margin: 0 -27px;
    }
`

export default PureResponsiveSlider;
