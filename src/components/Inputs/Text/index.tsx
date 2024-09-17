import styled, { css } from "styled-components";
import {specialFontColor} from '../../GlobalStyle/styleVariables'

interface LabelProp{
    required?:boolean;
}

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label<LabelProp>`
    color:${specialFontColor};
    font-weight: bold;
    &::after {
        content: "${(props) => (props.required ? '*' : '')}";
        color: darkred;
    } 
`

const style = css`
    padding:5px 20px;
    font-size:1.3em;
`

const Input = styled.input`
    ${style}
`

const TextArea = styled.textarea`
    ${style}
    resize: none;
`

const ErrorParagraph = styled.p`
    margin:0;
    color:darkRed;
    margin-top:2px;
`

export function TextInput({value, placeholder, label, required, onChange, type, error}:{value:string, placeholder:string, label:string, required?:boolean, onChange:Function, type:string, error?:string}) { 
    return (

    <FieldContainer>
        <Label required={required} htmlFor={label}>{label}</Label>
        <Input 
            name={label} 
            type={type} 
            placeholder={placeholder} 
            value={value}  
            required={required} 
            onChange={e => onChange(e.target.value)}></Input>
            {error && <ErrorParagraph>{error}</ErrorParagraph>}
    </FieldContainer>);
}

export function TextAreaInput({value, placeholder, label, required, onChange}:{value:string, placeholder:string, label:string, required?:boolean, onChange:Function}) {
    return ( 
    <FieldContainer>
        <Label required={required} htmlFor={label}>{label}</Label>  
        <TextArea 
            rows={5} 
            name={label} 
            placeholder={placeholder} 
            value={value}  
            required={required} 
            onChange={e => onChange(e.target.value)}></TextArea>
    </FieldContainer>
    )
}