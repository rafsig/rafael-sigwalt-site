import { selector } from "recoil";
import Skill from "../../models/Skill";
import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const skillListAsync = selector<string[]>({
    key:'skillListAsync',
    get: async () => {
        let skills;

        try{ 
            skills = await axios
                        .get<Skill>(`${API_ENDPOINT}/skill`);
            return skills.data.skills;
            

        } catch(ex){
            console.log(ex);
        }
        return [];
    }
})