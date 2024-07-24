import { selector } from "recoil";
import Graduation from "../../models/Graduation";
import axios from "axios";


const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const graduationListAsync = selector<Graduation[]>({
    key:'graduationListAsync',
    get: async () => {
        let graduationList:Graduation[] = [];
        await axios
            .get<Graduation[]>(`${API_ENDPOINT}/graduation`)
            .then(response => graduationList = response.data)
            .catch(err => console.log(err));
        return graduationList;
    }
})