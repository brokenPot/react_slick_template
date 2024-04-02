import styled from "styled-components";

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
    width: calc(4rem + 4vw);
    height: calc(4rem + 4vw);
    
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  z-index: 1; 

  &.left { 
    left: -15px;
  }

  &.right {
    right: -15px;
  }
`;
