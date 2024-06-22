import Project from "../Project";

export interface GaleryCardProps{
    project:Project;
    onSelectProject:React.Dispatch<React.SetStateAction<Project | undefined>>;
}