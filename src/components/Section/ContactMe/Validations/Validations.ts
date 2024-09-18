import { validadeEmailFormat, validateLength, validateRequired } from "../../../Inputs/Validation/Validation";

export function validateEmail(
    email:string, 
    setErrors:React.Dispatch<React.SetStateAction<{isError: boolean, errors: string[]}>>) {
    
    let errors:string[] = [];

    if(validateRequired(email)){
        errors.push(`Email is required`);
    } 
    else {
        if(!validateLength(email, 50)) {
            errors.push(`Email cannot exceed 50 characters`);
        }
        if(!validadeEmailFormat(email)) {
            errors.push("Invalid email");
        } 
    }


    if(errors.length > 0) {
        setErrors({isError:true, errors});
    }
    else {
        setErrors({isError:false, errors})
    }
}

export function validateFullName(
    text:string,
    fieldName:string,
    setErrors:React.Dispatch<React.SetStateAction<{isError: boolean, errors: string[]}>>) {
    
    let errors:string[] = [];

    if(validateRequired(text)){
        errors.push(`${fieldName} is required`);
    }
    if(!validateLength(text, 50)) {
        errors.push(`${fieldName} cannot exceed 50 characters`);
    }


    if(errors.length > 0) {
        setErrors({isError:true, errors});
    }
    else {
        setErrors({isError:false, errors})
    }
}

export function validateCompany(
    text:string,
    fieldName:string,
    setErrors:React.Dispatch<React.SetStateAction<{isError: boolean, errors: string[]}>>) {
    
    let errors:string[] = [];

    if(!validateLength(text, 50)) {
        errors.push(`${fieldName} cannot exceed 50 characters`);
    }


    if(errors.length > 0) {
        setErrors({isError:true, errors});
    }
    else {
        setErrors({isError:false, errors})
    }
}


export function validateMessage(
    text:string,
    setErrors:React.Dispatch<React.SetStateAction<{isError: boolean, errors: string[]}>>) {
    
    let errors:string[] = [];

    if(validateRequired(text)){
        errors.push(`Message is required`);
    }
    if(!validateLength(text, 200)) {
        errors.push(`Message cannot exceed 200 characters`);
    }


    if(errors.length > 0) {
        setErrors({isError:true, errors});
    }
    else {
        setErrors({isError:false, errors})
    }
}
