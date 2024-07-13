import styled from "styled-components";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuProps } from "../../../models/props/MenuProps";
import { sectionTitleColor, specialFontColor } from "../../GlobalStyle/styleVariables";

const BarsIcon = styled.span`
    color: ${specialFontColor};
    visibility: hidden;
    position: absolute;
    padding-bottom: 15px;
    padding-left:20px;
    padding-right: 20px;
    cursor: pointer;
    font-size: 1.5em;
    @media (max-width: 800px) {
        visibility: visible;
    }
`

const NavStyled = styled.nav`
    height:40px;
`

const ListStyled = styled.ul<MenuProps>`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-flow: row;
    flex-grow: 0;
    @media (max-width:800px) {
        visibility: ${props => props.$visibility};
        position: absolute;
        top:135px;
        left:0;
        flex-direction: column;
        background-color: ${sectionTitleColor};
        gap:0;
        li {
            margin:0;
            border-bottom: 1px solid ${specialFontColor};
        }
    }
`;

const Overlay = styled.div<MenuProps>`
    background-color: rgba(0,0,0,0.5);
    position:fixed;
    top:135px;
    bottom:0;
    left:0;
    right:0;
    visibility: ${props => props.$visibility === "visible"? "visible" : "hidden"};
`

const Menu = () => {

    const routes = [
        {
            label:'Home',
            to:'/'
        },
        {
            label:'Project Galery',
            to:'/projectGalery'
        }
    ]
    
    const [menuVisibility, setMenuVisibility] = useState("hidden");
    
    return (
    <NavStyled>
        <Overlay $visibility={menuVisibility} onClick={toggleMenuVisibility}/>
        <BarsIcon onClick={toggleMenuVisibility}><FontAwesomeIcon icon={faBars}/></BarsIcon>
        <ListStyled $visibility={menuVisibility}>
            {routes.map(route => 
                <MenuItem text={route.label} target={route.to} onSelectSection={setMenuVisibility}/>
            )}
        </ListStyled>
    </NavStyled>);

    function toggleMenuVisibility() {
        if(menuVisibility === "collapse") {
            setMenuVisibility("visible");
        }else {
            setMenuVisibility("collapse")
        }
    }
   
}

export default Menu;