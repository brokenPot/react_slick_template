import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {SliderCase} from "./ResponsiveSlider.tsx";


const Container = styled.div`
    width: 50vw;
    margin-top: 10px;
    :not(:last-child) {
        margin-bottom: 50px;
    }
    /* the slides */
    .slick-slide {
        margin: 0 5px;
    }

    /* the parent */
    .slick-list {
        margin: 0 -5px;
    }
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 25px;
`;

const Wrapper = styled.div`
    margin: 40px auto; 
    width: 95%;
`;

interface Props {
    slide: boolean,
    title?: string,
    children: React.ReactNode
}

export const Section: React.FunctionComponent<Props> = ({ slide, title, children }) => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7
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
        <Container>
            {title && (
                <Title>{title}</Title>
            )}
            {
                slide &&
                <Wrapper><Slider {...settings}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
                    <SliderCase key={n}>
                        {n}
                    </SliderCase>
                ))}</Slider></Wrapper>
            }
            {
                !slide &&
                <Grid>{children}</Grid>
            }
        </Container>
    );
};