
const todosController = require('../Controllers/todos')
const todosRoutes = ({ app }) => {
    //get all todos
    app.get("/tasks/getAll", async (req, res) => {
        todosController.getAll(req,res)
    });
    //create a todo item
    app.post("/tasks", async (req, res) => {
        todosController.create(req, res)
    });
}
module.exports = todosRoutes;
