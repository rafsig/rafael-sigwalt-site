import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { useState } from "react";
import Galery from "./components/Section/Galery";
import WorkExperience from "./components/Section/WorkExperience";
import AboutMe from "./components/Section/AboutMe";
import Skills from "./components/Section/Skills";
import Modal from "./components/Modal";
import Project from "./models/Project";


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
  @media (max-width:1040px) {
    top:135px;
  }
`;

const EndBar = styled.div`
  background-color: #05012c;
  height:25px;
`  

function App() {

  const [topMain, setTopMain] = useState(0);
  const [project, setProject] = useState<Project>();

  return (
    <>
      <GlobalStyle></GlobalStyle>
      
      <Header setTopMain={setTopMain}></Header>
      <MainStyled $top={topMain}>
        <ContentContainer>
          <AboutMe/>
          <Skills/>
          <WorkExperience/>
          <Galery onSelectProject={setProject}></Galery>
        </ContentContainer>
        <EndBar/>
        <Modal project={project} setProject={setProject}/>
      </MainStyled>
    </>
  )
}

export default App
