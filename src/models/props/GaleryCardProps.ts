import Project from "../Project";

export interface GaleryCardProps{
    project:Project;
    setProject:React.Dispatch<React.SetStateAction<Project | undefined>>;
}