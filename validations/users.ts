import Joi from 'joi';

function validateUser(user:any){
    const schema = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        gender: Joi.string().required(),
        address: Joi.string().required(),
        donationAmount: Joi.number().required()
    });

    return schema.validate(user)
}

export default validateUser;