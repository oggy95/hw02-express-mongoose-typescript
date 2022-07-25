import Contact from "../../models/contact.js";
import {Request, Response} from "express";
import {IContact} from "../../types";

const patchById = async (req: Request, res: Response): Promise<Response|never> => {
    if (!req.body || req.body.favorite === undefined) {
        return res.status(400).json({message: "missing field favorite"})
    }
    const {id} = req.params;
    let result: IContact|null = null;
    try {
        result = await Contact.findByIdAndUpdate(id, {favorite: req.body.favorite}, {new: true});
    } catch (e: unknown) {
        //find only this type of catching exceptions
        if (typeof e === "string") {
            return res.status(400).json({error: e});
        }
        if (e instanceof Error) {
            return res.status(400).json({error: e.message});
        }
    }
    if (!result) {
        return res.status(404).json({message: "Not found"})
    }
    return res.json(result);
}

export default patchById;