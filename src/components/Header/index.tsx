import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import ScrollIndicator from "./ScrollIndicator";

interface FigureProps {
    $pictureHeight:Number;
    $marginTop:Number
}

interface TitlePosition {
    $nameLeft:Number;
}

interface ContentStyling {
    pictureHeight:Number;
    nameLeft:Number;
    marginTop:Number;
}

const HeaderStyled = styled.header`
    position: fixed;
    background-color: #020250;
    z-index: 999;
    top: 0;
    width:100vw;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const FigureStyled = styled.figure<FigureProps>`
    padding: 0;
    width:100vw;
    height:${ props => `${props.$pictureHeight}vh`};
    margin: ${ props => `${props.$marginTop}px`} auto 0 auto;
    display: flex;
    justify-content: center;
`

const ImageStyled = styled.img`
    max-height: 100%;
    margin:0 auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);;

`

const TitleStyled = styled.h1<TitlePosition>`
    font-weight: 400;
    font-size: 3em;
    color:#ffffff;
    position: absolute;
    bottom:30px;
    margin:20px;
    left:${props => `${props.$nameLeft}px`};
`

const Header = ({setTopMain}:{setTopMain:React.Dispatch<React.SetStateAction<number>>}) => {

    const imageReference = useRef<HTMLImageElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", resizeHeaderOnScroll);
    })

    var imageProportions = 0;

    useEffect(() => {imageProportions = imageReference.current!.width / imageReference.current!.height;})


    const [contentStyling, setContentStyling] = useState<ContentStyling>({pictureHeight:100, nameLeft:0, marginTop:0});


    return (
    <HeaderStyled>
            <FigureStyled $pictureHeight = {contentStyling.pictureHeight} $marginTop={contentStyling.marginTop}>
                <ImageStyled ref={imageReference} src="/images/panorama.jpg"></ImageStyled>
                <TitleStyled $nameLeft={contentStyling.nameLeft} >Rafael Sigwalt</TitleStyled>
                <ScrollIndicator/>
            </FigureStyled>
            <Menu></Menu>
    </HeaderStyled>);


    function resizeHeaderOnScroll() {
        const distanceY = window.scrollY;
        const shrinkUpTo = 1000;

        var pictureHeight;
        var topMain;
        var nameLeft;
        var marginTop;

        const visualViewportHeight = window.innerHeight;
        const visualViewportWidth = window.innerWidth;

        if(distanceY < shrinkUpTo) {
            pictureHeight = -0.07*distanceY+100;
            marginTop = 0.005*distanceY;
        } 
        else {
            pictureHeight = 30;
            marginTop = 5;
        }
        if(distanceY < shrinkUpTo) {
            topMain = ((pictureHeight)/100 + 45/visualViewportHeight) * visualViewportHeight + distanceY;
        }
        else {
            topMain = ((pictureHeight)/100 + 45/visualViewportHeight) * visualViewportHeight + shrinkUpTo; 
        }
        const imageWidth = (pictureHeight/100 * visualViewportHeight) * imageProportions;
        if(imageWidth  < visualViewportWidth){
            nameLeft = (visualViewportWidth - imageWidth)/2;
        }
        else{
            nameLeft = 0;
        }

        setContentStyling({pictureHeight, nameLeft, marginTop});
        setTopMain(topMain);
    }
}

export default Header;
