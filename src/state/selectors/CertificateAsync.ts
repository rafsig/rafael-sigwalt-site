import { selector } from "recoil";
import Certificate from "../../models/Certificate";
import axios from "axios";
import { selectedCertificateIdState } from "../atom";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const certificateAsync = selector<Certificate | undefined>({
    key:'certificateAsync',
    get: async ({get}) => {
        const projectId = get(selectedCertificateIdState);
        let project:Certificate | undefined = undefined;
        if(projectId){
            await axios
                .get<Certificate>(`${API_ENDPOINT}/certificate/${projectId}`)
                .then(response => project = response.data)
                .catch(err => console.log(err));
        }
        return project;
    }
})

export const certificateListAsync = selector<Certificate[]>({
    key:'certificateListAsync',
    get: async () => {
        let projectList:Certificate[] = [];
        await axios
            .get<Certificate[]>(`${API_ENDPOINT}/certificate`)
            .then(response => projectList = response.data)
            .catch(err => console.log(err));
            let sortedList = projectList.sort((a, b) => b.dateFinished.valueOf() - a.dateFinished.valueOf() )
        return sortedList;
    }
})