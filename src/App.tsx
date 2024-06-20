import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { useState } from "react";
import Galery from "./components/Section/Galery";
import WorkExperience from "./components/Section/WorkExperience";
import AboutMe from "./components/Section/AboutMe";
import Skills from "./components/Section/Skills";


interface MainProp {
  $top:Number;
}

const ContentContainer = styled.div`
  max-width:1040px;
  width: 100%;
  margin: 0 auto;
`;

const MainStyled = styled.main<MainProp>`
  background: linear-gradient(#05012c, #050575);

  position:absolute;
  width:100vw;

  top:${props => props.$top?`${props.$top}px`:"100vh"};
  left:0;
`;

const EndBar = styled.div`
  background-color: #05012c;
  height:25px;
`

function App() {

  const [topMain, setTopMain] = useState(0);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      
      <Header setTopMain={setTopMain}></Header>
      <MainStyled $top={topMain}>
        <ContentContainer>
          <AboutMe/>
          <Skills/>
          <WorkExperience/>
          <Galery></Galery>
        </ContentContainer>
        <EndBar/>
      </MainStyled>
    </>
  )
}

export default App
