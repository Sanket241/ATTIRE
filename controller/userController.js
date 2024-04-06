const User = require('../models/Model')



const signup=async(req,resp)=>{
    try {
        const { fname,email,mobile,password,cpassword } = req.body;
        const findmail = await User.findOne({email:email})
        if(findmail){
            return resp.status(400).json({msg:"Email already exists"})
        }
        const response = await User.create({fname,email,mobile,password,cpassword })
        console.log(response)
        resp.status(200).json({msg:"Successfully created", token : await response.generateToken() })

    } catch (error) {
        console.log(error)
    }

}

const login=async(req,resp)=>{
    try {
        const { email,password} = req.body;
        const checkUser = await User.findOne({email:email})
        if(!checkUser){
            return resp.status(400).json({msg:"Invalid credentials"})
        }
        const response = await checkUser.comparePassword(password);
        if(response)(
            resp.status(200).json({msg:"Successfully logged in", token : await checkUser.generateToken(), response:"ok"})
        )
        else{
            resp.status(400).json({msg:"Invalid credentials"})
        }


    } catch (error) {
        console.log(error)
    }

}

module.exports = {login,signup};