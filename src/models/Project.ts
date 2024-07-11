export default interface Project {
    id:number;
    title:string;
    shortDescription:string;
    description:string;
    imageUrl:string;
    git?:string;
    skills:string[];
    nextSteps?:string[];
}