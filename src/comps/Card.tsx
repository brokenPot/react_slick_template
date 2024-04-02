import styled from "styled-components";
import {MusicInfo} from "./CustomSlider.tsx";


const CustomImg = styled.img`
    width: calc(3.5rem + 3.5vw);
    height: calc(3.5rem + 3.5vw);
    
    transition: box-shadow 0.3s ease;
    border: 1px solid transparent;
    border-radius: 10px;
    &:hover{
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
`
const Card = ({image,title,desc}:MusicInfo)=> {
    return (
            <Wrapper>
                <LeftSide>
                    <CustomImg src={image}/>
                    <div style={{fontSize: 'calc(0.55rem + 0.55vw)'}}>{title}</div>
                </LeftSide>
                <RightSide>
                    <div style={{fontSize: 'calc(0.4rem + 0.4vw)' ,textAlign:'center', whiteSpace: 'pre-wrap' }}>
                        {desc}
                    </div>
                </RightSide>
            </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: white;
    width: calc(15rem + 15vw);
    height: calc(15rem + 15vw);
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    //width: 290px;
    width: calc(5rem + 5vw);
    height: calc(13rem + 13vw);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //width: 400px;
    width: calc(9rem + 9vw);
    height: calc(13rem + 13vw);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

`

export default Card;