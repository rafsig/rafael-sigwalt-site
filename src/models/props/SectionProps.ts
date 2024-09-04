import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export default interface SectionProps {
    title:string,
    imageUrl?:string,
    icon?:IconDefinition,
    titlePosition:"right" | "left" | "top",
    id:string,
    children:ReactNode
}