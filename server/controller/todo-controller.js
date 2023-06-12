// we are using this controller file to run the logics to add todo to our application and passingit as argument to the api request endpoint 
import Todo from '../model/Todo.js';
import storage from 'node-persist';

storage.init();
// this part is to make request to the server side database and give back to the client side to display on the screen


// this function is to run when the page is on the todo section of our application to run add todo function
// this will be for single todo to add as its the post request end point logic
export const addTodo = async (req, res) => {
    // when working with the mongodb(external entity) use try and catch good practice
        // it will validate the data by todo.create
    const todos = await storage.getItem("todos")||[];
    const newTodo = req.body;
    newTodo.id = todos ? todos.length + 1 : 1;
    await storage.setItem("todos", [...todos, newTodo]);
    res.send(todos);

         // to send the response to the user of the data being validated or not
}

// Make to call the api request to the server side and store response on the redux database by await send to the todos component
export const getAllTodos = async (req, res) => {
    const todos = await storage.getItem("todos");
    res.send(todos);
    
}


// it will give response based on if the todo is done or not if yes it goes into done tab if not then into active tab
// export const toggleTodoDone = async (request, response) => {
//     try {
//         const todoRef = await Todo.findById(request.params.id);

//         const todo = await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             // comes from the todo
//             { done: !todoRef.done }
//         )

//         await todo.save();

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

// // updtae the inner text of the todo based on which tab is selected
// export const updateTodo = async (request, response) => {
//     try {
//         await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { data: request.body.data }
//         )

//         const todo = await Todo.findById(request.params.id);

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }


// // delete todo if the id matched 
// export const deleteTodo = async (request, response) => {
//     try {
//         // find by id dosent required to put id: of the mogodb
//         const todo = await Todo.findByIdAndDelete(request.params.id)

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }