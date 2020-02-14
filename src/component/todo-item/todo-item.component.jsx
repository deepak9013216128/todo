import React from 'react';

import './todo-item.style.css';

const TodoItem = ({todo})=>(
    <div className='todo-item'>
        <h2 className='todo-name'>{todo}</h2>
    </div>
)
export default TodoItem;