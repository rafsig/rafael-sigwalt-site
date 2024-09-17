import { FormEvent, useState } from "react";
import Section from "..";
import { CallToAction } from "../../Inputs/CallToAction";
import { Form } from "../../Inputs/Form";
import { TextAreaInput, TextInput } from "../../Inputs/Text";
import { createMessage } from "../../../services/messgageService";



export default function ContactMe() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    function submitForm(event:FormEvent) {
        event.preventDefault();

        createMessage({fullName, email, company, message});

        setFullName("");
        setEmail("");
        setCompany("");
        setMessage("");
    }

    return <Section id="contactMe" title="Contact Me" titlePosition="left">
        <p>Feel free to send me a message, all your data will be encrypted at rest and will only be used in order to respond to you.</p>
        
        <Form onSubmit={submitForm}>
            <TextInput 
                label="Full name"
                type="text"
                placeholder="Enter your complete name" 
                value={fullName} 
                onChange={setFullName} 
                required/>
            <TextInput 
                label="E-mail"
                type="e-mail"
                placeholder="Enter your contact e-mail" 
                value={email} 
                onChange={setEmail} 
                required/>
            <TextInput 
                label="Company"
                type="text" 
                placeholder="Enter the company you work for" 
                value={company} 
                onChange={setCompany} />
            <TextAreaInput 
                label="Message" 
                placeholder="Enter the message" 
                value={message} 
                onChange={setMessage} 
                required/>
            <CallToAction type="submit">Submit</CallToAction>
        </Form>
    </Section>
}