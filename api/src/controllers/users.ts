
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {

    const userInformation = req.body;
    console.log(userInformation);

    res.status(200).json(userInformation);
};
