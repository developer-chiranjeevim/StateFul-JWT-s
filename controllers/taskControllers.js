import Tasks from "../models/tasksModel.js";



const fetchTasks = async(request, response) => {
    const email = request.token.id;

    try{
        
        const tasks = await Tasks.find({owner: email });
        if(tasks.length == 0){
            response.status(404).json({message: "not tasks found"});
        }else{
            response.status(200).json(tasks);
        };


    }catch(error){
        response.status(400).json({message: error.message});
    };
};

export {fetchTasks};
