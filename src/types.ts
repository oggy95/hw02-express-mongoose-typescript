export interface RequestError extends Error {
    status?: number,
    code?: number
}

export interface IContact extends Document {
    name: string
    email: string
    phone: number
    favorite?: boolean
}

export interface IMessage {
    readonly [index: number]: string
}

export const ERROR_CODE = 1;