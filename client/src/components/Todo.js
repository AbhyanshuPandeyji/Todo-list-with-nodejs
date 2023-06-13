// this will handle the styling of the data of the render todo in the todos file


import React from 'react'

// always do default export of the main component



import './Todo.css'



const Todo = ({ todo }) => {

  // using the state when the tab is beign update

    // setting text base on the adding of the todo

    // intializing dispatch


    return (
        // all in the list for the better styling in one line
        <li
            className="task"
        >
           {/* for dispalying the data on the todo input box when the action is happening in the todo line */}
            <span >{todo?.data}</span>
        </li>
    )
}

export default Todo;