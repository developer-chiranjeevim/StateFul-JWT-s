import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";
import Token from "../models/tokenModel.js";

const generateToken = async(id) => {
    const token_id = uuidv4();


    const token =  jwt.sign({ id , token_id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIERS_IN
    });
    

    await Token.create({id, token_id});

    return token;
};



export { generateToken };