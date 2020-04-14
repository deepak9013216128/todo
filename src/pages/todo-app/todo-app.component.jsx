import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import useTodos from '../../hook/useTodos';
import FormInput from '../../component/form-input/form-input.component';
import TodoItem from '../../component/todo-item/todo-item.component';
import { firestore } from '../../firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
	todos: {
		margin: '5% 10%',
    padding: '0 5% 5% 5%',
    fontFamily: 'Bigelow Rules'
	},
	header: {
    textAlign: 'center',
    color: 'blueviolet',
    fontSize: '5rem',
    margin: '0',
	},
	todoItem: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	}
}));


const TodoApp = () =>{
	const [todos,setTodos,addNewTodo] = useTodos([]);
	const classes = useStyles();
	useEffect(()=>{
		const todosRef = firestore.collection("todos");
		todosRef.onSnapshot(snapshot=>{
			let tempTodos=[];
			snapshot.forEach(doc=>{
				const tempTodo = {...doc.data() , id: doc.id}
				// console.log(tempTodo)
				tempTodos = [...tempTodos,tempTodo];
			})
			console.log(tempTodos)
			setTodos([...tempTodos] )
		})
	},[])
	return (
		<Paper  className={classes.todos} elevation={3}>
			<h1 className={classes.header}>Todos List</h1>
			<FormInput handleSubmit={addNewTodo} initialValue=''/>
			<div className={classes.todoItem}>
			{
				todos.map((item) => <TodoItem key={item.id} item={item}/>)
			}
			</div>
		</Paper>
	) 
}
    
export default TodoApp;


// class Todos extends React.Component{
//     state = {
//         todo : '',
//         todos : []
//     }
//     // fun = async()=>{
//     //     const to = await todosList();
//     //     console.log(to)
//     // }
//     componentDidMount(){
//         const todosRef = firestore.collection("todos");
//         // console.log(todosRef)
//         todosRef.onSnapshot(snapshot=>{
//             this.setState({todos: []});
//             snapshot.forEach(doc=>{
//                 this.setState({todos:[doc.data(),...this.state.todos] })
//             })
//         })
//         // fun();
//     }
//     handleChange = async (event)=>{
//         const {name,value} = event.target;
//         this.setState({[name]: value})
//     }
//     handleSubmit = async (event)=>{
//         event.preventDefault();
//         const newTodo = {
//             todo: this.state.todo,
//             date: await new Date()
//         };
//         if(this.state.todo){
//             // await this.setState({todos: [newTodo, ...this.state.todos]})
//             addTodo(newTodo);
//         }else{
//             alert("You have to write some message...")
//         }
//         this.setState({todo: ''})
//     }
//     render(){
//         const {todos} = this.state;
//         // console.log(this.state)
//         return (
//             <div className='todos'>
//                 <h1 className='header'>Todos List</h1>
//                 <form className='form' onSubmit={this.handleSubmit} >
//                     <FormInput 
//                         name='todo'
//                         type='text' 
//                         value= {this.state.todo}
//                         handleChange={this.handleChange}
//                         label='New Todo'
//                     />
//                     <CustomButton type='submit'>Submit</CustomButton>
//                 </form>
//                 <div>
//                 {
//                     todos.map((item,index) => <TodoItem key={index} item={item}/>)
//                 }
//                 </div>
//             </div>
//         )
//     }
// }