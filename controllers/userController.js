import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const createUser = async(request, response) => {

    try{
        const {name, email} = request.body;

        const user = await User.findOne({email: email});
        if(!user){
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const user = await User.create({name, email, password: hashedPassword});
            
            response.status(201).json(user);
        }else{
            response.status(409).json({message: "user already exists"});
        };
      
        
    }catch(error){
        response.status(400).json({message: error.message});
    };
};

const loginUser = async(request, response) => {

    try{
        const email = request.body.email;
        const password = request.body.password;

        const user = await User.findOne({email:email});
        if(user.length == 0){
            response.status(404).json({message: "user not found"});
        }else{
            const comparePassword = await bcrypt.compare(password, user.password);
            if(comparePassword){
                response.status(200).json(user);
            }else{
                response.status(401).json({message: "incorrect password"});
            };
        };

    }catch(error){
        response.status(400).json({message: error.message});
    };
};

export {createUser, loginUser};