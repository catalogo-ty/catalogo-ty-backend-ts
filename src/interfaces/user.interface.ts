
export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    img?: string
    role:string
    status?:boolean
    google?: boolean
}