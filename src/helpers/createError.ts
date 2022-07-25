import {IMessage, RequestError} from "../types";

const messages: IMessage = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
}

const createError = (status: number, message: string = messages[status]): RequestError => {
    const error: RequestError = new Error(message);
    error.status = status;
    return error;
}

export default createError;