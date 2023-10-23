import { randomUUID }  from 'node:crypto';
import { Replace } from "../../../helpers/Replace";
import { Name } from '../name';
import { Email } from './email';
import { Password } from './password';

export interface UserProps {
    userId?: string;
    email: Email;
    password: Password;
    userName: Name;
    createdAt: Date;
}
export class User {
    private _id: string;
    private props: UserProps;
    
    constructor(props: Replace<UserProps, {createdAt?: Date}>,userId?: string,) {
        this._id = userId ?? randomUUID();
        this.props = { 
            ...props,
            createdAt: props.createdAt ?? new Date()

        }
    }
    public get userId() {
        return this._id;
    }
    public get userName(): Name {
        return this.props.userName
    }
    public set userName(userName: Name) {
        this.props.userName = userName
    }
    public get email(): Email {
        return this.email;
    }
    public set email(email: Email) {
        this.props.email = email
    }
    public get password(): Password {
        return this.password;
    }
    public set password(password: Password) {
        this.props.password = password
    }
    public get createdAt() {
        return this.props.createdAt
    }
}