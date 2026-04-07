export type User = {
    id:string;
    displayName:string;
    email:string;
    token:string;
    imagreUrl?:string;
}

export type loginCreds = {
    email:string;
    password:string;
}

export type registerCreds = {
    email:string;
    password:string;
    displayName:string;
}