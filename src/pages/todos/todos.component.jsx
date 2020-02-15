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
    handleSubmit = async (event)=>{
        event.preventDefault();
        const newTodo = {
            todo: this.state.todo,
            date: await new Date()
        };
        //if(newTodo){
        await this.setState({todos: [newTodo, ...this.state.todos]})
        //}
        this.setState({todo: ''})
        console.log(this.state)
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
                    todos.map((item,index) => <TodoItem key={index} item={item}/>)
                }
                </div>
            </div>
        )
    }
}
    
export default Todos;