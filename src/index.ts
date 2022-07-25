import express, {Express, NextFunction, Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactsRouter from "./routes/api/contacts";
import {ERROR_CODE, RequestError} from "./types";

dotenv.config()

const {DB_HOST = "http://127.0.0.1:27017/", PORT = 3000} = process.env;

const app: Express = express();

app.use(cors());
app.use(express.json())

app.use("/api/contacts", contactsRouter);

app.use((req: Request, res: Response): Response => {
    return res.status(404).json({
        message: "Not found"
    })
})

app.use((error: RequestError, req: Request, res: Response, next: NextFunction): Response => {
    const {status = 500, message = "Server error"} = error;
    return res.status(status).json({
        message
    })
})

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch((error): void => {
        console.log(error.message);
        process.exit(ERROR_CODE);
    })