import mongoose, {Document} from "mongoose";
import {IContact, RequestError} from "../types";

const {Schema, model} = mongoose;

const contactSchema = new Schema<IContact>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
}, {versionKey: false, timestamps: true});

const handleErrors = (error: RequestError, data: Document, next: () => void): void => {
    const {name, code} = error;
    error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next();
}

contactSchema.post("save", handleErrors);

const Contact = model<IContact>("contact", contactSchema);

export default Contact;