import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [false,"Email is required"],
        // unique: false,

    },

    url: {
        type: String,
        required:[false,'password is required'],

    },
    
    funding: {
        type: String,
        required:[false,'password is required'],

    },
    deadline: {
        type: String,
        required:[false,'password is required'],

    },
    Description: {
        type: String,
        required:[false,'password is required'],

    },
    review: {
        type: String,
        required:[false,'password is required'],

    },
    challenge: {
        type: String,
        required:[false,'password is required'],

    },
    status: {
        type: String,
        required:[false,'password is required'],

    }

})


const User = mongoose.model('Users',userSchema)

export default User