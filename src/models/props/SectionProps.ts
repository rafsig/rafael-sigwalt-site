import { ReactNode } from "react";

export default interface SectionProps {
    title:string,
    mode:"transparent" | "white",
    id:string,
    children:ReactNode
}