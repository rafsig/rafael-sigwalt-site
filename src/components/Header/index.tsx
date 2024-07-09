import styled from "styled-components";
import Menu from "./Menu";


const HeaderStyled = styled.header`
    position: fixed;
    background-color: #f1f0de;
    z-index: 999;
    top: 0;
    width:100vw;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const HeaderContainer = styled.div`
    width:1400px;
    margin:0px auto;
    @media (max-width:1400px) {
        width:100%;
    }
`

const TitleStyled = styled.h1`
    font-weight: 400;
    font-size: 3em;
    font-family: Philosopher;
    text-decoration: underline;
    color:#060D4A;
    margin-left: 50px;
    margin:20px 50px;
    @media (max-width:1400px) {
        font-size:2.5em
    }
`

const Header = () => {

    return (
    <HeaderStyled>
        <HeaderContainer>
            <TitleStyled >Rafael Sigwalt</TitleStyled>
            <Menu></Menu>
        </HeaderContainer>
    </HeaderStyled>);

}

export default Header;
