import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { useState } from "react";
import Galery from "./components/Section/Galery";
import WorkExperienceSection from "./components/Section/WorkExperience";
import AboutMe from "./components/Section/AboutMe";
import Skills from "./components/Section/Skills";
import Modal from "./components/Modal";
import Project from "./models/Project";
import { specialFontColor } from "./components/GlobalStyle/styleVariables";


const ContentContainer = styled.div`
  max-width:1400px;
  width: 100%;
  margin: 0 auto;
`;

const MainStyled = styled.main`
  position:absolute;
  width:100vw;
  top:135px;
  left:0;
`;

const EndBar = styled.div`
  background-color: ${specialFontColor};
  height:25px;
`  

function App() {

  const [project, setProject] = useState<Project>();

  return (
    <>
      <GlobalStyle></GlobalStyle>
      
      <Header></Header>
      <MainStyled>
        <ContentContainer>
          <AboutMe/>
          <Skills/>
          <WorkExperienceSection/>
          <Galery onSelectProject={setProject}></Galery>
        </ContentContainer>
        <EndBar/>
        <Modal project={project} setProject={setProject}/>
      </MainStyled>
    </>
  )
}

export default App
