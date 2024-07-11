import styled from "styled-components";
import { GaleryCardProps } from "../../../../models/props/GaleryCardProps";
import { SkillList, Skill } from "../../../Skills";

const CardDivStyled = styled.div`
    width:300px;
    height:420px;
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


const Card = (props:GaleryCardProps) => {

    return (
        <CardDivStyled onClick={event =>  {event.stopPropagation(); props.onSelectProject(props.project);}}>
            <CardImageStyled src={props.project.imageUrl}></CardImageStyled>
            <CardContentCotainer>
                <CardTitle>{props.project.title}</CardTitle>
                <Description>{props.project.shortDescription}</Description>
                <SkillList>
                    {props.project.skills.map((tech, index)=> <Skill key={index} >{tech}</Skill>)} 
                </SkillList>
                {
                    props.project.git ? 
                        <a 
                            href={props.project.git} 
                            target="_blank" 
                            rel="noreferrer" 
                            onClick={event => event.stopPropagation()}>GitHub</a> : <></>
                }
                
            </CardContentCotainer>
        </CardDivStyled>  
    );
}

export default Card;