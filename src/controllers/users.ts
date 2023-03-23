import { Request , Response } from 'express';
import {User} from '../models/users';
import validateUser from '../../validations/users';

export const getUsers = async (req:Request, res: Response) =>{
    const users = await User.find();
    res.send(users);
}

export const createdonations = async (req: Request, res: Response) =>{
    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        donationAmount: req.body.donationAmount
    });
    user.noofdonations++;
    
    await user.save();
    res.send(user);
}

export const redonation = async (req: Request, res: Response) => {

    const user:any = await User.findByIdAndUpdate(req.params.id,
        {
            donationAmount: req.body.donationAmount
        });
        
        user.noofdonations++;
        await user?.save();

        res.send(user);
}

export const checkdonations =async (req:Request, res: Response) => {
    const user: any= await User.findById(req.params.id);

    if(user?.noofdonations >= 2)
    res.send("Thanks for continous contribution to our charity");

    else
    res.send("Please contribute to for our charity");
}