import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    donationAmount:{
        type: Number,
        required: true
    },
    noofdonations:{
        type: Number,
        default: 0
    }
})

export const User = mongoose.model('User',userSchema);

