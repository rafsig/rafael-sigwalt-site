import styled from "styled-components";
import Certificate from "../../../../models/Certificate";
import Card from "../../../Card";
import axios from "axios";

const CardImage = styled.img`
    width: 100%;
    height: fit-content;
`

const Table = styled.table`
    padding: 10px 10px 0 10px;
    width: 100%;
    tr{
        width: 100%;
        td{
            width: 50%;
        }
    }
`

const CardTitle = styled.h3`
    font-size: 1.1em;
    font-weight: bold;
    height: 4em;
    padding:0;
    margin: 0;
`

const LeftCell = styled.td`
    text-align: right;
`

export default function CertificateCard({certificate, setCertificate}:{certificate:Certificate, setCertificate:React.Dispatch<React.SetStateAction<Certificate | undefined>>}) {

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    function selectCertificate(event:React.MouseEvent<HTMLDivElement, MouseEvent>, certificate:Certificate) {
        event.stopPropagation();
        if(certificate.id) {
        axios.get<Certificate>(`${API_ENDPOINT}/project/${certificate?.id}`)
            .then(response => setCertificate(response.data))
            .catch(err => console.log(err));
        }
    }

    return (
        <Card callBack={selectCertificate} selection={certificate}>
            <CardImage src={certificate.imagePath}/>
            <Table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <CardTitle>
                                {certificate.title}
                            </CardTitle>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Concluded
                        </td>
                        <LeftCell>
                            {certificate.concluded}
                        </LeftCell>
                    </tr>
                    <tr>
                        <td>
                            Institution
                        </td>
                        <LeftCell>
                            {certificate.institution}
                        </LeftCell>
                    </tr>
                </tbody>
            </Table>
    </Card>);
}