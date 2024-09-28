export enum Role{
    Admin, Client, DeliveryAgent
}
export class User{
    id!:number;

    username!:string;
    email!:string;
    password!:string;
    numtel!:number;

    role!:Role;
}