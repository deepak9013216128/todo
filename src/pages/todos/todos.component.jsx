import React from 'react';

import './todos.styles.css';

import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import TodoItem from '../../component/todo-item/todo-item.component';

class Todos extends React.Component{
    state = {
        todo : '',
        todos : []
    }
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({[name]: value})
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        const newTodo = this.state.todo;
        if(newTodo){
            this.setState({todos: [newTodo, ...this.state.todos]})
        }
        this.setState({todo: ''})
    }
    render(){
        const {todos} = this.state;
        return (
            <div className='todos'>
                <h1 className='header'>Todos</h1>
                <form className='form' onSubmit={this.handleSubmit} >
                    <FormInput 
                        name='todo'
                        type='text' 
                        placeholder='New Todo'
                        value= {this.state.todo}
                        handleChange={this.handleChange}
                        label='Create New Todo'
                    />
                    <CustomButton type='submit'>Submit</CustomButton>
                </form>
                <div>
                {
                    todos.map((todo,index) => <TodoItem key={index} todo={todo}/>)
                }
                </div>
            </div>
        )
    }
}
    
export default Todos;