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
import { initialize } from "./ga4/util";
import ContactMePage from "./pages/ContactMe";
import { Suspense } from "react";


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

export default function App() {

  initialize();

  return (
    <RecoilRoot>
        <Router>
          <GlobalStyle></GlobalStyle>
          <Suspense fallback="">
          <Header></Header>
          </Suspense>
          <MainStyled>
            <ContentContainer>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="education" element={<EducationPage/>}/>
                    <Route path="projectGalery" element={<ProjectGalery/>}/>
                    <Route path="contactMe" element={<ContactMePage/>}/>
                  </Route>
                  <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </ContentContainer>
            <EndBar/>
          </MainStyled>
        </Router>
    </RecoilRoot>
  )
}