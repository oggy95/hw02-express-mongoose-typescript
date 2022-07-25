import Contact from "../../models/contact";

import { createError } from "../../helpers";
import {Request, Response} from "express";
import {IContact} from "../../types";

const removeById = async (req: Request, res: Response): Promise<Response|never> => {
    const { id } = req.params;
    const result: IContact|null = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    return res.status(204).json({
        message: "Delete success"
    })
}

export default removeById;