export function validadeEmailFormat(email:string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export function validateLength(text:string, maxLength:number) {
    return text.length <= maxLength
}

export function validateRequired(value:any){
    return !value;
}