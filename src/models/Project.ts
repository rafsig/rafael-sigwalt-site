export default interface Project {
    title:string;
    shortDescription:string;
    description:string;
    imageUrl:string;
    git?:string;
    skills:string[];
    nextSteps?:string[];
}