import styled from "styled-components";
import rightIconPath from "../Icons/right.svg";
import leftIconPath from "../Icons/left.svg";

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

export const RightIcon = () => <CustomImg src={rightIconPath} alt="Right" />;
export const LeftIcon = () => <CustomImg src={leftIconPath} alt="Left" />;