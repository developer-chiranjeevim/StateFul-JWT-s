import jwt from "jsonwebtoken";
import Token from "../models/tokenModel.js";

const tokenMiddleware = async(request, response, next) => {
    let token;
    

    if(request.headers.authorization && request.headers.authorization.startsWith("Bearer")){
        try{
            token = request.headers.authorization.split(" ")[1];
            const decoded_token = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const is_token_active = await Token.findOne({token_id: decoded_token.token_id});
            
            if(is_token_active){
                request.token = decoded_token;
                next();
            }else{
                response.status(401).json({message: "Token Revoked or Expired"});
            };
           
        }catch(error){
            response.status(400).json({message: error.message});
        };

    }else{
        return response.status(401).json({message: "Not Authorized, Token Not Found"});
    };

};



export default tokenMiddleware;