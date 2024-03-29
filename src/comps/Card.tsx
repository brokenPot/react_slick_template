import styled from "styled-components";
import {MusicInfo} from "./CustomSlider.tsx";


const CustomImg = styled.img`
    width:120px;
    height:120px;
    transition: box-shadow 0.3s ease;
    border: 1px solid transparent;
    &:hover{
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
`


const Card = ({image,title,desc}:MusicInfo)=> {
    return (
        <div>
            <Wrapper>
                <LeftSide>
                    <CustomImg src={image}/>
                    <div>{title}</div>
                </LeftSide>
                <RightSide>
                    <div style={{fontSize:'15px',textAlign:'center', whiteSpace: 'pre-wrap' }}>
                        {desc}
                    </div>
                </RightSide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    background-color: white;
    width: 700px;
    height: 430px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 290px;
    height: 430px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 430px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

`

export default Card;