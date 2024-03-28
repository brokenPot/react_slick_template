import styled from "styled-components";

function Card() {
    return (
        <div>
            <Wrapper>
                <LeftSide/>
                <RightSide/>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    background-color: white;
    width: 700px;
    height: 400px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 400px;
    background-color: chocolate;
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 400px;
    background-color: coral;

`

export default Card;