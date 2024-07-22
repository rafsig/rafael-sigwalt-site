import { selector } from "recoil";
import Skill from "../../models/Skill";
import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const skillListAsync = selector<Skill[]>({
    key:'skillListAsync',
    get: async () => {
        var skillList:Skill[] = [];
        await axios
            .get<Skill[]>(`${API_ENDPOINT}/skill`)
            .then(response => skillList = response.data)
            .catch(err => console.log(err));
        return skillList;
    }
})