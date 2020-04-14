import {useState} from 'react';

function useTodos(intialValue){
	const [state,setState] = useState(intialValue);
	const handleChange = (event) => {
		setState(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		setState('')
	}
	return [state,handleChange,handleSubmit]
}

export default useTodos;