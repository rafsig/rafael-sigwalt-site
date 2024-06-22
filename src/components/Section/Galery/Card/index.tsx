import styled from "styled-components";
import { GaleryCardProps } from "../../../../models/props/GaleryCardProps";

const CardDivStyled = styled.div`
    width:320px;
    height:400px;
    background-color: rgba(240, 240, 240, 0.80);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    &:hover{
        background-color: rgb(240, 240, 240);
        cursor: pointer;
        img{
            opacity: 100%;
        }
    }
`

const CardImageStyled = styled.img`
    width:100%;
    height:33%;
    border-radius:20px, 20px, 0, 0;
    opacity:80%;
`
const CardContentCotainer = styled.div`
    padding:10px 10px;
    display: flex;
    flex-direction: column;
    gap:30px;
    flex-wrap: nowrap;
`

const CardTitle = styled.h3`
    font-size: 1.2em;
    margin: 0;
    padding: 0;
`

const Description = styled.p`
    margin: 0;
    height: 55px;
`

const Technologies = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap:5px;
    column-gap: 20px;
    font-size: 1.2em;
    font-weight: bold;
    font-family: monospace;
    height: 40px;
`

const Technology = styled.p`
    margin: 0;
    padding: 0;
`


const Card = (props:GaleryCardProps) => {

    return (
        <CardDivStyled onClick={() =>  {/*props.onSelectProject(props.project);*/}}>
            <CardImageStyled src={props.project.imageUrl}></CardImageStyled>
            <CardContentCotainer>
                <CardTitle>{props.project.title}</CardTitle>
                <Description>{props.project.description}</Description>
                <Technologies>
                    {props.project.technologies.map((tech)=> <Technology>{tech}</Technology>)} 
                </Technologies>
                <a href={props.project.git}>GitHub</a>
            </CardContentCotainer>
        </CardDivStyled>  
    );
}

export default Card;