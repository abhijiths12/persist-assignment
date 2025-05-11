import User from "../models/sampleModels.js"

export const InsertChallenges = async(req,res,next) => {
    try {
        await User.create(req.body)
    }
    catch(error) {
        console.error(error)
    }
}


export const challengesData = async(req,res,next) => {
    try {
        let data = await User.find()
        // console.log(data)
        res.json(data)
    }
    catch(error) {
        console.error(error)
    }
}


export const UpdateData = async(req,res,next) => {
    try {
        let a = await User.findById(req.body.id)
        if (a.status == 1) {
            await User.findByIdAndUpdate(req.body.id,{status:0})
        } 
        if(a.status==0) {
            await User.findByIdAndUpdate(req.body.id,{status:1})
        }


        // console.log(a)
        // let data = await User.find()
        // console.log(data)
        res.json('sucess')
    }
    catch(error) {
        console.error(error)
    }
}