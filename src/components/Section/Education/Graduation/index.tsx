import styled from "styled-components"
import Graduation from "../../../../models/Graduation"


const TitleCell = styled.td`
    font-weight: bold;
`

const RightCell = styled.td`
    text-align: right;
`


export default function GraduationSection({graduation}:{graduation:Graduation}) {

    return (
        <table>
            <tbody>
                <tr>
                    <TitleCell>{graduation.degree} in {graduation.programName}</TitleCell>
                    <RightCell>{graduation.dateConcluded}</RightCell>
                </tr>
                <tr>
                    <td>{graduation.institution}</td>
                    <RightCell></RightCell>
                </tr>
            </tbody>
        </table>

    )

}