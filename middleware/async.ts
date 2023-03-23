import {Request,Response, NextFunction} from 'express';

function asyncMiddleware(handler:any) {
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
            await handler(req,res);
        } catch(error){
            console.log(error);
            next(error);
        }
    }
}

export default asyncMiddleware;