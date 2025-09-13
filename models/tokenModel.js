import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    email: {type: String, require: true},
    token_id: {type: String, require: true},
    createdAt: {type: Date, default: Date.now, expires: "1h"}

});


const Token = mongoose.model("Token", tokenSchema);
export default Token;