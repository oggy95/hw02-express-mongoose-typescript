import Contact from "../../models/contact";
import {Request, Response} from "express";
import {IContact} from "../../types";

const getAll = async (req: Request, res: Response): Promise<Response|never> => {
    const {page = 1, limit = 10} = req.query;
    const skip: number = (Number(page) - 1) * Number(limit);
    const result: Array<IContact> = await Contact.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)})
    return res.json(result);
}

export default getAll;