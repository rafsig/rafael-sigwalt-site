import { selector } from "recoil";
import Certificate from "../../models/Certificate";
import axios from "axios";
import { selectedCertificateIdState } from "../atom";
import Page from "../../models/Page";
import { getCertificates } from "../../services/certificateService";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const certificateAsync = selector<Certificate | undefined>({
    key:'certificateAsync',
    get: async ({get}) => {
        const certificateId = get(selectedCertificateIdState);
        let certificate:Certificate | undefined = undefined;
        if(certificateId){
            await axios
                .get<Certificate>(`${API_ENDPOINT}/certificate/${certificateId}?`)
                .then(response => certificate = response.data)
                .catch(err => console.log(err));
        }
        return certificate;
    }
})

export const certificateListAsync = selector<Page<Certificate>>({
    key:'certificateListAsync',
    get: async () => {
        let response = await getCertificates(8, 0);

        response.content.forEach(certificate => certificate.dateFinished = new Date(certificate.dateFinished));
        return response ;
    }
})