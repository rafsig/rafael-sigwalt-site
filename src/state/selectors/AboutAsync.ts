import axios from "axios";
import { selector } from "recoil";
import About from "../../models/About";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const aboutAsync = selector<About>({
    key:'aboutAsync',
    get: async () => { 
        var about:About = {} as About;
        await axios.get<About>(`${API_ENDPOINT}/about`)
            .then(response =>{about = response.data;})
            .catch(err => console.log(err));
        return about;
    }
})