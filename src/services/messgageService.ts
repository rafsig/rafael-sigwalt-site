import axios from "axios";
import Message from "../models/Message";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export async function createMessage(message:Message, setSuccessful: React.Dispatch<React.SetStateAction<string>>) {
    try {
        let response = await axios
        .post(`${API_ENDPOINT}/message`, message, {
            headers:{
                'Content-Type':'application/json'
            }
        });

        if (response.status === 201) {
            setSuccessful("Y");
        }
        else {
            setSuccessful("N");
        } 
    }
    catch(e) {
        setSuccessful("N");
    }


}