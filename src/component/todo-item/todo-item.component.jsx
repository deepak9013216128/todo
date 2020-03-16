import React from 'react';

import './todo-item.style.css';

class TodoItem extends React.Component{
    state = {
        active: false,
    }
    changeActive = ()=>{
        this.setState({active: !this.state.active})
        console.log(this.state)
    }
    render(){
        const {todo,date} = this.props.item;
        return (
            <div className='todo-item'>
                <div className='content'>
                    <h2 
                        className={this.state.active?'active todo-name':'todo-name'}
                        onClick={this.changeActive}
                    >
                        <i className={this.state.active?'hidden':'fas fa-check-circle'} ></i>
                        {todo}
                    </h2>
                    <h5 className={this.state.active?'delete':'hidden'}><i className="fas fa-trash-alt"></i></h5>
                </div>
                <h5 className='date'>- {date}</h5>
            </div>
        )
    }
}
export default TodoItem;