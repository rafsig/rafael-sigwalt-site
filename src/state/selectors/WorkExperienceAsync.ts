import { selector } from "recoil";
import WorkExperience from "../../models/WorkExperience";
import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const workExperienceListAsync = selector<WorkExperience[]>({
    key:'workExperienceListAsync',
    get: async () => {
        var workExperienceList:WorkExperience[] = [];
        await axios
            .get<WorkExperience[]>(`${API_ENDPOINT}/workExperience`)
            .then(response => workExperienceList = response.data)
            .catch(err => console.log(err));
        return workExperienceList;
    }
})