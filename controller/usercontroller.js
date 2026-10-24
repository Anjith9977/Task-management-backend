const users = require('../model/userModel')
const Jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {
    console.log("Inside registerUser")

    const { email, password} = req.body

    try {

        const existingUser = await users.findOne({ email })

        if (existingUser) {
            res.status(409).json('User exist redirect to login page')
        }
        else {
            const newuser = users({ email, password})
            await newuser.save()
            res.status(200).json({user: {id: newuser._id,
                    email: newuser.email
                }
            })
        }

    } catch (error) {
        res.status(500).json(error)
        
    }
}


exports.loginController=async(req,res)=>{
    console.log("inside logincontroller")

    const {email,password}=req.body

    try {

        const existingUser = await users.findOne({email})

        if(existingUser){
            if(existingUser.password==password){

                const token = Jwt.sign({id: existingUser._id, email: existingUser.email},process.env.JWT_PASSWORD)
                res.status(200).json({user:{id:existingUser.id, email:existingUser.email},token})

            }
            else{
                res.status(401).json("incorrect password")
            }

        }
        else{
            res.status(404).json("user not found")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}