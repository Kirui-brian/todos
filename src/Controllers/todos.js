const Tasks = require('../Models/todos')
module.exports = {
    // method to get all todos from database
    getAll: async (req, res) => {
        try {
            const tasks = await Tasks.find().lean().select('name status -_id');
            console.log('============== tasks ========', tasks);
            res.status(200).json({ tasks });
        } catch (error) {
            console.log("Error creating task", error);
            res.status(500).send('There was an error getting all tasks')
        }
    },
    // method to create a new todo task
    create: async (req, res) => {
        try {
            const body = req.body
            let task = new Tasks(body);
            task = await task.save();
            res.status(200).json({
                message: 'Successfully created task',
                task: task
            });
        } catch (error) {
            console.log("Error creating task", error);
            res.status(500).send('There was an error creating task')
        }
    }
    
}