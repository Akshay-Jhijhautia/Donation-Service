import logger from "../config/error";
import {Request,Response, NextFunction} from 'express';

export default function (err:any,req: Request,res: Response){
    logger.error(err,err.message);
    //res.status(500).send("Something Failed")
} 

