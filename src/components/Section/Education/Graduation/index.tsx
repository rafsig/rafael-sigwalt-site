import styled from "styled-components"
import Graduation from "../../../../models/Graduation"
import { GraduationType } from "../../../../models/GraduationType"
import { formatMonthYear } from "../../../../utils/FormatDate"


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
                    <TitleCell>{GraduationType[graduation.degree as keyof typeof GraduationType]} in {graduation.programName}</TitleCell>
                    <RightCell>{formatMonthYear(graduation.dateFinished)}</RightCell>
                </tr>
                <tr>
                    <td>{graduation.institution}</td>
                    <RightCell></RightCell>
                </tr>
            </tbody>
        </table>

    )

}