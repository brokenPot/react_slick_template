import Slider from "react-slick";
// import "../style/slick.css"
// import "../style/slick-theme.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ResponsiveSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <SliderWrapper>
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,15,16,17,18,19,20].map((n) => (
                        <SliderCase key={n}>
                            {n}
                        </SliderCase>
                    ))}
                </Slider>
            {/*</div>*/}
        </SliderWrapper>

    )
}

export const SliderCase = styled.div`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: coral;
`;

const SliderWrapper = styled.div`
    max-width: 40vw;
    height: 500px;
    /* the slides */
    .slick-slide {
        margin: 0 0px;
    }
    overflow: hidden;
    /* the parent */
    .slick-list {
        margin: 0 -0px;
    }
`


export default ResponsiveSlider;