import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { specialFontColor } from "./components/GlobalStyle/styleVariables";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


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

  

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainStyled>
        <ContentContainer>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}></Route>
              </Route>
            </Routes>
          </Router>
        </ContentContainer>
        <EndBar/>
      </MainStyled>
    </>
  )
}

export default App
