import Contact from "../../models/contact.js";

import { createError } from "../../helpers";
import {Request, Response} from "express";
import {IContact} from "../../types";

const getById = async (req: Request, res: Response): Promise<Response|never> => {
    const { id } = req.params;
    const result: IContact|null = await Contact.findById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.json(result);
}

export default getById;