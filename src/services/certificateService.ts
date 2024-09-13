import axios from "axios";
import Page from "../models/Page";
import Certificate from "../models/Certificate";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export async function getCertificates(numPerPage:Number, page:Number) {
    let response = await axios
    .get<Page<Certificate>>(`${API_ENDPOINT}/certificate?numPerPage=${numPerPage}&page=${page}`);
    let data = response.data;
    return data;
}