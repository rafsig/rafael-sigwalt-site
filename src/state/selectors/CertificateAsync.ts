import { selector } from "recoil";
import Certificate from "../../models/Certificate";
import axios from "axios";
import { selectedCertificateIdState } from "../atom";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export const certificateAsync = selector<Certificate | undefined>({
    key:'certificateAsync',
    get: async ({get}) => {
        const certificateId = get(selectedCertificateIdState);
        let certificate:Certificate | undefined = undefined;
        if(certificateId){
            await axios
                .get<Certificate>(`${API_ENDPOINT}/certificate/${certificateId}`)
                .then(response => certificate = response.data)
                .catch(err => console.log(err));
        }
        return certificate;
    }
})

export const certificateListAsync = selector<Certificate[]>({
    key:'certificateListAsync',
    get: async () => {
        let certificateList:Certificate[] = [];
        await axios
            .get<Certificate[]>(`${API_ENDPOINT}/certificate`)
            .then(response => {
                certificateList = response.data.map(certificateOriginal => {let certificate : Certificate = {
                    ...certificateOriginal,
                    dateFinished: new Date(certificateOriginal.dateFinished)
                };
                return certificate;
                })
            })
            .catch(err => console.log(err));
        certificateList.sort((a,b) => b.dateFinished.valueOf() - a.dateFinished.valueOf());
        return certificateList;
    }
})