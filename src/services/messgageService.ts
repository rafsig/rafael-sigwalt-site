import axios from "axios";
import Message from "../models/Message";

const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export async function createMessage(message:Message) {

    await axios
    .post(`${API_ENDPOINT}/message`, message, {
        headers:{
            'Content-Type':'application/json'
        }
    });


}