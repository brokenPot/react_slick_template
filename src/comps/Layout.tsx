import {ReactNode} from "react";
import styled from "styled-components";
import NavigationMenu1 from "./NavigationMenu1.tsx";


interface LayoutProps {
    children : ReactNode
}
function Layout({children}:LayoutProps) {
    return (
        <Background>
            <NavigationMenu1 navwidth={"calc(15rem + 30vw)"} navtabfontsize={"calc(0.8rem + 0.8vw)"} highlighttabwidth={"calc(3rem + 3vw)"} />
            {children}
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
`



export default Layout;