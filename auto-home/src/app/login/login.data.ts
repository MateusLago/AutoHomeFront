export class LoginModel {
    username: string;
    password: string;
}

export class RegisterModel {
    username: string;
    password: string;
    email: string;
}

export interface LoginResponse {
    expiry: string;
    token: string;
    password: string;
    id: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
}