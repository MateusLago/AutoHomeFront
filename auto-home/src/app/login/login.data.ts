export interface LoginModel {
    username: string;
    password: string;
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