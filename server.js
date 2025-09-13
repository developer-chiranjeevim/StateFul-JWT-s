import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/tasksRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/apis/users", userRoutes);
app.use("/apis/tasks", taskRoutes);

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log(error.message);
    }else{
        console.log(`SERVER STARTED IN PORT : ${process.env.PORT}`);
    };
});


