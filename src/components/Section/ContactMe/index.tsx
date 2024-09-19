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
    const [companyError, setCompanyError] = useState<{isError:boolean, errors:string[]}>({isError:false, errors:[]});
    const [messageError,setMessageError] = useState<{isError:boolean, errors:string[]}>({isError:true, errors:[]});

    function submitForm(event:FormEvent) {
        event.preventDefault();

        createMessage({fullName, email, company, message}, setSuccessful);

        setFullName("");
        setEmail("");
        setCompany("");
        setMessage("");

        setEmailError({isError:true, errors:[]});
        setFullNameError({isError:true, errors:[]});
        setCompanyError({isError:false, errors:[]});
        setMessageError({isError:true, errors:[]});

        setTimeout(()=>setSuccessful(""), 10000);
    }

    return <Section id="contactMe" title="Contact Me" titlePosition="left">
        
        <Form onSubmit={submitForm}>
            <p>Feel free to send me a message, all your data will be encrypted at rest and will only be used in order to respond to you.</p>
            <TextInput 
                label="Full name"
                type="text"
                placeholder="Enter your complete name" 
                value={fullName} 
                onChange={(value:string) => { 
                    validateFullName(value, "Full name" ,setFullNameError); 
                    setFullName(value);}
                } 
                errors={fullNameError.errors}
                required/>
            <TextInput 
                label="E-mail"
                type="email"
                placeholder="Enter your contact e-mail" 
                value={email} 
                onChange={(value:string) =>{
                    validateEmail(value, setEmailError); 
                    setEmail(value);}
                }
                errors={emailError.errors}
                required/>
            <TextInput 
                label="Company"
                type="text" 
                placeholder="Enter the company you work for" 
                value={company} 
                onChange={(value:string) => {
                    validateCompany(value, "Company" , setCompanyError);
                    setCompany(value);}
                }
                errors={companyError.errors}  />
            <TextAreaInput 
                label="Message" 
                placeholder="Enter the message" 
                value={message} 
                onChange={(value:string) => {
                    validateMessage(value, setMessageError);
                    setMessage(value)}
                }
                errors={messageError.errors}
                required/>
            {successful &&  (successful === "Y" ?  <ResultMessage $isSuccessful={successful}>Thank you for your message.</ResultMessage> : <ResultMessage $isSuccessful={successful}>Unable to send message, please try again later.</ResultMessage>)}
            <CallToAction disabled={emailError.isError || fullNameError.isError || companyError.isError || messageError.isError} type="submit">Submit</CallToAction>
        </Form>
    </Section>
}