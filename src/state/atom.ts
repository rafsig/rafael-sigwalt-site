import { atom } from "recoil";
import About from "../models/About";
import { aboutAsync } from "./selectors/AboutAsync";
import Skill from "../models/Skill";
import { skillListAsync } from "./selectors/SkillAsync";
import Project from "../models/Project";
import { projectAsync, projectListAsync } from "./selectors/ProjectAsync";
import WorkExperience from "../models/WorkExperience";
import { workExperienceListAsync } from "./selectors/WorkExperienceAsync";
import Graduation from "../models/Graduation";
import graduationList from "../components/Section/Education/graduations.json"
import Certificate from "../models/Certificate";
import { certificateAsync, certificateListAsync } from "./selectors/CertificateAsync";

export const aboutState = atom<About>(
    {
        key:'aboutState',
        default: aboutAsync
    }
)

export const skillListState = atom<Skill[]>(
    {
        key:'skillListState',
        default: skillListAsync
    }
)

export const projectListState = atom<Project[]>(
    {
        key:'projectListState',
        default: projectListAsync
    }
)

export const workExperienceListState = atom<WorkExperience[]>(
    {
        key:'workExperienceListState',
        default:workExperienceListAsync
    }
)

export const graduationListState = atom<Graduation[]>(
    {
        key:'graduationListState',
        default: graduationList
    }
)

export const certificateListState = atom<Certificate[]>(
    {
        key:'certificateListState',
        default: certificateListAsync
    }
)

export const certificateState = atom<Certificate | undefined>(
    {
        key:'certificateState',
        default: certificateAsync
    }
)

export const selectedCertificateIdState = atom<Number | undefined>(
    {
        key:'selectedCertificateIdState',
        default: undefined
    }
)

export const projectState = atom<Project | undefined>(
    {
        key:'projectState',
        default: projectAsync
    }
)

export const selectedProjectIdState = atom<Number | undefined>(
    {
        key:'selectedProjectIdState',
        default:undefined
    }
)


