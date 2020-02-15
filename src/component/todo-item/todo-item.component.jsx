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
                <h2 
                    className={this.state.active?'active':'todo-name'}
                    onClick={this.changeActive}
                >
                    {todo}
                </h2>
            <h5 className='date'>- {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h5>
            </div>
        )
    }
}
export default TodoItem;