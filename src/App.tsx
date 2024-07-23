import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { specialFontColor } from "./components/GlobalStyle/styleVariables";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectGalery from "./pages/ProjectGalery";
import EducationPage from "./pages/Education";
import NotFound from "./pages/NotFound";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import ReactGA from 'react-ga';

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

  ReactGA.initialize('G-PWVWVME0J7');

  return (
    <RecoilRoot>
      <Suspense fallback="">
        <Router>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
          <MainStyled>
            <ContentContainer>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="education" element={<EducationPage/>}/>
                    <Route path="projectGalery" element={<ProjectGalery/>}/>
                  </Route>
                  <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </ContentContainer>
            <EndBar/>
          </MainStyled>
        </Router>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
