import React from 'react';

import './todos.styles.css';

import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import TodoItem from '../../component/todo-item/todo-item.component';
import { todosList, addTodo,firestore } from '../../firebase/firebase.utils';

class Todos extends React.Component{
    state = {
        todo : '',
        todos : []
    }
    // fun = async()=>{
    //     const to = await todosList();
    //     console.log(to)
    // }
    componentDidMount(){
        const todosRef = firestore.collection("todos");
        // console.log(todosRef)
        todosRef.onSnapshot(snapshot=>{
            this.setState({todos: []});
            snapshot.forEach(doc=>{
                this.setState({todos:[doc.data(),...this.state.todos] })
            })
        })
        // fun();
    }
    handleChange = async (event)=>{
        const {name,value} = event.target;
        this.setState({[name]: value})
    }
    handleSubmit = async (event)=>{
        event.preventDefault();
        const newTodo = {
            todo: this.state.todo,
            date: await new Date()
        };
        if(this.state.todo){
            // await this.setState({todos: [newTodo, ...this.state.todos]})
            addTodo(newTodo);
        }else{
            alert("You have to write some message...")
        }
        this.setState({todo: ''})
    }
    render(){
        const {todos} = this.state;
        // console.log(this.state)
        return (
            <div className='todos'>
                <h1 className='header'>Todos List</h1>
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