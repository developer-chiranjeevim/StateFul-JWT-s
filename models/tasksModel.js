import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    
    task_name: {type: String, require: true},
    owner: {type: String, require: true},

}, {timestamps: true});


const Tasks = mongoose.model("Tasks", taskSchema);


export default Tasks;