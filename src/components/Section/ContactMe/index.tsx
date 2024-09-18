import { FormEvent, useState } from "react";
import Section from "..";
import { CallToAction } from "../../Inputs/CallToAction";
import { Form } from "../../Inputs/Form";
import { TextAreaInput, TextInput } from "../../Inputs/Text";
import { createMessage } from "../../../services/messgageService";
import { validateCompany, validateEmail, validateFullName, validateMessage } from "./Validations/Validations";
import styled from "styled-components";


interface ResultMessageProp {
    $isSuccessful:string | undefined
}

const ResultMessage = styled.p<ResultMessageProp>`
    color: ${prop => prop.$isSuccessful === "Y"? "darkgreen" : "darkred"};
    margin:5px;
`

export default function ContactMe() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const [successful, setSuccessful] = useState<string>("");

    const [emailError, setEmailError] = useState<{isError:boolean, errors:string[]}>({isError:true, errors:[]});
    const [fullNameError, setFullNameError] = useState<{isError:boolean, errors:string[]}>({isError:true, errors:[]});
    const [companyError, setCompanyError] = useState<{isError:boolean, errors:string[]}>({isError:true, errors:[]});
    const [messageError,setMessageError] = useState<{isError:boolean, errors:string[]}>({isError:true, errors:[]});

    function submitForm(event:FormEvent) {
        event.preventDefault();

        createMessage({fullName, email, company, message}, setSuccessful);

        setFullName("");
        setEmail("");
        setCompany("");
        setMessage("");
    }

    return <Section id="contactMe" title="Contact Me" titlePosition="left">
        
        <Form onSubmit={submitForm}>
            <p>Feel free to send me a message, all your data will be encrypted at rest and will only be used in order to respond to you.</p>
            <TextInput 
                label="Full name"
                type="text"
                placeholder="Enter your complete name" 
                value={fullName} 
                onChange={setFullName} 
                onFocusOut={(value:string) => {
                    validateFullName(value, "Full name" ,setFullNameError);
                }}
                errors={fullNameError.errors}
                required/>
            <TextInput 
                label="E-mail"
                type="email"
                placeholder="Enter your contact e-mail" 
                value={email} 
                onChange={setEmail}
                onFocusOut={(value:string) => {
                    validateEmail(value, setEmailError);
                }} 
                errors={emailError.errors}
                required/>
            <TextInput 
                label="Company"
                type="text" 
                placeholder="Enter the company you work for" 
                value={company} 
                onChange={setCompany}
                onFocusOut={(value:string) => {
                    validateCompany(value, "Company" , setCompanyError);
                }}
                errors={companyError.errors}  />
            <TextAreaInput 
                label="Message" 
                placeholder="Enter the message" 
                value={message} 
                onChange={setMessage}
                onFocusOut={(value:string) => {
                    validateMessage(value, setMessageError);
                }}
                errors={messageError.errors}
                required/>
            {successful &&  (successful === "Y" ?  <ResultMessage $isSuccessful={successful}>Thank you for your message.</ResultMessage> : <ResultMessage $isSuccessful={successful}>Unable to send message, please try again later.</ResultMessage>)}
            <CallToAction disabled={emailError.isError || fullNameError.isError || companyError.isError || messageError.isError} type="submit">Submit</CallToAction>
        </Form>
    </Section>
}