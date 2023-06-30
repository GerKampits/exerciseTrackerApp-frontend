export interface BodyMeasurements {
    height: string;
    weight: string;
}

export interface Phone {
    type: string;
    number: string;
}

export interface User {
    username: string;
    password: string;
    name: string;
    surname: string;
    email: string;
    bodyMeasurements: BodyMeasurements;
    phone: Phone[];
}

export interface UserAPIList {
    status: boolean;
    data: User[];
}