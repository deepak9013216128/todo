import React from 'react';

import {deleteTodo} from '../../firebase/firebase.utils';

import './todo-item.style.css';

class TodoItem extends React.Component{
    state = {
        active: false,
    }
    changeActive = ()=>{
        this.setState({active: !this.state.active})
        // console.log(this.state)
    }
    handleChange = (event)=>{
        alert('Do you complete this task!');
        const {todo} = this.props.item;
        deleteTodo(todo)
    }

    render(){
        const {todo,date} = this.props.item;
        return (
            <div className='todo-item'>
                <div className='content'>
                    <i className={this.state.active?'hidden':'fas fa-check-circle'} ></i>
                    
                    <span 
                        className={this.state.active?'active todo-name':'todo-name'}
                        onClick={this.changeActive}
                    >
                        {todo}
                    </span>
                    <span className={this.state.active?'delete':'hidden'}
                        onClick={this.handleChange}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </div>
                <h5 className='date'>- {date}</h5>
            </div>
        )
    }
}
export default TodoItem;