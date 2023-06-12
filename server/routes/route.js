// routing using express
import express, {Router} from 'express';

// these are all business logics to be done is been imported by the index.js action file
import {
    addTodo,
    getAllTodos,
} from '../controller/todo-controller.js';

const route = express.Router();

// type of request  then the endpoint to be reached then the type of logic to be performed using the
route.post('/todos', addTodo);

route.get('/todos', getAllTodos);



export default route;
