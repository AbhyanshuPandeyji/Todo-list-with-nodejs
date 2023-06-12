// This file is to render and display all todos

import { useEffect } from 'react';

import { 
    // deleteTodo,
    getAllTodos } from '../redux/actions/index';

import { useDispatch, useSelector } from 'react-redux';

import './Todos.css'


// component
import Todo from './Todo';

// funtion to show all todos
export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    // will take all todos and run every time a new todo is been added
    useEffect(() => {
        dispatch(getAllTodos());
        localStorage.clear();
    }, [dispatch])

    return (
        <article>

            <ul>
                {
                    // to loop our todos and dispaly in the page
                    todos && todos.map((todo) => (
                        // it will handle our styling of the todo and working of the todo
                        <Todo 
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;