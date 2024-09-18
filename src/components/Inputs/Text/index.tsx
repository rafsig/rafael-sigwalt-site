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

interface MessageErrorContainerProp{
    $errors?:string[];
}

const MessageErrorContainer = styled.div<MessageErrorContainerProp>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => (props.$errors && props.$errors.length > 0)? 'space-between': 'right'};
`

const CharacterCount = styled.p`
    margin:0;
    margin-top:2px;
`

export function TextInput({value, placeholder, label, required, onChange, type, errors, onFocusOut}:{value:string, placeholder:string, label:string, required?:boolean, onChange:Function, type:string, errors?:string[], onFocusOut?:Function}) { 
    return (

    <FieldContainer>
        <Label required={required} htmlFor={label}>{label}</Label>
        <Input 
            name={label} 
            type={type} 
            placeholder={placeholder} 
            value={value}  
            required={required} 
            onChange={e => onChange(e.target.value)}
            onBlur = {e => {onFocusOut ? onFocusOut(e.target.value) : "";}} ></Input>
            {errors && errors.map((error, index) => <ErrorParagraph key={index}>{error}</ErrorParagraph>)}
    </FieldContainer>);
}

export function TextAreaInput({value, placeholder, label, required, onChange, errors, onFocusOut}:{value:string, placeholder:string, label:string, required?:boolean, onChange:Function, errors?:string[], onFocusOut?:Function}) {
    return ( 
    <FieldContainer>
        <Label required={required} htmlFor={label}>{label}</Label>  
        <TextArea 
            rows={5} 
            name={label} 
            placeholder={placeholder} 
            value={value}  
            required={required} 
            onChange={e => onChange(e.target.value)}
            onBlur={e => {onFocusOut ? onFocusOut(e.target.value) : "";}}></TextArea>
            <MessageErrorContainer $errors={errors}>
                <div>
                    {errors && errors.map((error, index) => <ErrorParagraph key={index}>{error}</ErrorParagraph>)}
                </div>
                <CharacterCount>{value.length + "/200"}</CharacterCount>
            </MessageErrorContainer>
    </FieldContainer>
    )
}