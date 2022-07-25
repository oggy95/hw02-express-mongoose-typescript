import Contact from "../../models/contact";

import { createError } from "../../helpers";
import {IContact} from "../../types";
import {Request, Response} from "express";

const updateById = async (req: Request, res: Response): Promise<Response|never> => {
    const { id } = req.params;
    const result: IContact|null = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.json(result);
}

export default updateById;