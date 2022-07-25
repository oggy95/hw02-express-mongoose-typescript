import mongoose from "mongoose";

import { createError } from "../helpers";
import {NextFunction, Request, Response} from "express";

const {isValidObjectId} = mongoose;

const isValidId = (req: Request, res: Response, next: NextFunction): NextFunction|void => {
    const {id} = req.params;
    if(!isValidObjectId(id)) {
        return next(createError(400, `${id} is not valid id format`))
    }
    next();
}

export default isValidId;