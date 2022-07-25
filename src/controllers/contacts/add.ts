import Contact from "../../models/contact.js";
import {Request, Response} from "express";
import {IContact} from "../../types";

const add = async (req: Request, res: Response): Promise<Response|never> => {
    const result: IContact = await Contact.create(req.body);
    return res.status(201).json(result)
}

export default add;