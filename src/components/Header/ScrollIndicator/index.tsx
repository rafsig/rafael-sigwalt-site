import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ScrollIndicatorContainerProps {
    $visibility: string;
}

const ScrollIndicatorContainer = styled.div<ScrollIndicatorContainerProps>`
    width:fit-content;
    color:#f0f0f0;
    background-color: rgba(0,0,0,0.3);
    padding:15px;
    border-radius: 20px;
    font-size:1.2em;
    position: absolute;
    bottom: 2em;
    left: 50%;
    transform: translateX(-50%);
    visibility: ${props => props.$visibility};
    opacity: ${props => props.$visibility == "visible"? "100%" : 0};
    transition: visibility 0.5s, opacity 0.5s ease-out;
    @media (max-width:1040px) {
        visibility: hidden;
    }
`

const ScrollText = styled.h1`
    margin: 0px;
`

const IconContainer = styled.span`
    display:block;
    transform:translateX(42.5%);
    font-size: 2em;
`

const ScrollIndicator = () => {

    const [scrollVisible, setScrollVisible] = useState('visible');

    useEffect(() => {
        window.addEventListener("scroll", hideScrollIndicator);
    })

    return (<ScrollIndicatorContainer $visibility={scrollVisible}>
        <ScrollText>Scroll Down</ScrollText>
        <IconContainer>
          <FontAwesomeIcon icon={faAngleDown} />
        </IconContainer>
      </ScrollIndicatorContainer>
    );

    function hideScrollIndicator() {
        const distY = window.scrollY
        if(distY < 100) {
            setScrollVisible('visible');
        }
        else {
            setScrollVisible('hidden');
        }
    }
}


export default ScrollIndicator;