import logger from "../config/error";

export default function(){
    process.on('uncaughtException', (ex:any) => {
        console.log("uncaught Exception");
        logger.error(ex,ex.message);  
    });

    process.on('unhandledRejection', (ex:any) =>{
        console.log("unhandled Rejection");
        logger.error(ex,ex.message);
    })
}