import User from "../models/sampleModels.js";


export const InsertChallenges = async(req,res,next) => {
    try {


        //         let data = {
        //     title:'hfd',
        //     url:'fhff',
        //     funding:'dfhfj',
        //     deadline:'dfhfj',
        //     Description:'dfhfj',
        //     review:'dfhfj',
        //     challenge:'dfhfj',
        //     status:'dfhfj'
        // }
        console.log(req.body)

        await User.create(req.body)
        console.log('one data inserted')
        
    }
    catch(error) {
        console.error(error)
    }
}




export const challengesData = async(req,res,next) => {
    try {
        let data = await User.find()
        // console.log(data)
        console.log('data viewed')
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