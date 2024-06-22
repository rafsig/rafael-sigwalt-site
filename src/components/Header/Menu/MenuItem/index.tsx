import { MouseEvent } from "react";
import styled from "styled-components";
import MenuItemProps from "../../../../models/props/MenuItemProps";

const ListItemStyled = styled.li`
    margin:10px 0;
    @media (max-width:600px) {
        margin: 0;
        padding: 10px 0;
        border-top:0;
        border-bottom: 1px;
        border-right:0;
        border-left:0;
        border-color: #f0f0f0;
        border-style: solid;
        font-size:1.5em;
    }
`;
const LinkStyled = styled.a`
    color:#F0F0F0;
    font-family: monospace;
    font-size:1.2em;
    text-decoration: none;
    @media (max-width: 600px) {
        display: block;
    }
`

const MenuItem = (props:MenuItemProps) => {
    return(
        <ListItemStyled>
            <LinkStyled href={`#${props.target}`} onClick={(e) => goToReference(e)}>{props.text}</LinkStyled>
        </ListItemStyled>
    );

    function goToReference(event: MouseEvent<HTMLAnchorElement>) {

        event.preventDefault();

        const a = event.target as HTMLAnchorElement;
        const elementId = a.href.substring(a.href.lastIndexOf("#") + 1, a.href.length);

        const targetElement = document.getElementById(elementId);

        try{
            var top = 0;
            if(window.innerWidth > 1040){
                top =  targetElement!.offsetTop +  window.innerHeight;
            } else {
                top = targetElement!.offsetTop - 50;
            }

            props.onSelectSection("collapse");
            window.scrollTo({top, behavior: 'smooth'})
        } catch(e) {
            console.log(`not able to find ${elementId}`);
        }

    }
}

export default MenuItem;