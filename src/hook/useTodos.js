import {useState} from 'react';
import { addTodo } from '../firebase/firebase.utils';


function useTodos(intialValue){
	const [state,setState] = useState(intialValue);
	const addNewTodo = (todo) => {
		const date = new Date();
		const newTodo = {
			todo,
			date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
			completed: false
		}
		setState([...state,newTodo])
		addTodo(newTodo);
	}
	return [state,setState,addNewTodo]
}

export default useTodos;