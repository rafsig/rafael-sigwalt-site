import axios from "axios";
import Project from "../../models/Project";
import { selector } from "recoil";
import { selectedProjectIdState } from "../atom";


const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const projectAsync = selector<Project | undefined>({
    key:'projectAsync',
    get: async ({get}) => {
        const projectId = get(selectedProjectIdState);
        let project:Project | undefined = undefined;
        if(projectId){
            await axios
                .get<Project>(`${API_ENDPOINT}/project/${projectId}`)
                .then(response => project = response.data)
                .catch(err => console.log(err));
        }
        return project;
    }
})

export const projectListAsync = selector<Project[]>({
    key:'projectListAsync',
    get: async () => {
        let projectList:Project[] = [];
        await axios
            .get<Project[]>(`${API_ENDPOINT}/project`)
            .then(response => projectList = response.data)
            .catch(err => console.log(err));
        return projectList;
    }
})


