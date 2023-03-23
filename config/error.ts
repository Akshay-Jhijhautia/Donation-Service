import {createLogger, transports} from 'winston';
import 'winston-mongodb';

const logger = createLogger({
    transports: [
        new transports.MongoDB({
            level: 'error',
            db: 'mongodb://localhost/donation',
            options : { useUnifiedTopology: true }
        })
    ]
})

export default logger;