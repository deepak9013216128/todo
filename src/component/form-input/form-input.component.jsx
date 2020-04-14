import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import useTodo from '../../hook/useTodo';
import CustomButton from '../../component/custom-button/custom-button.component';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const FormInput = (props) => {
	const classes = useStyles();
	const [todo,handleChange,handleSubmit] = useTodo(props.initialValue);
	return (
		<form 
			className={classes.root} 
			noValidate 
			autoComplete="off" 
			onSubmit={(e)=>{
				handleSubmit(e)
				props.handleSubmit(todo)
			}}
		>
      <TextField 
				id="standard-basic" 
				label='New Todo' 
				value={todo} 
				onChange={handleChange} 
				fullWidth
			/>
			<CustomButton type='submit'>Submit</CustomButton>
    </form>
	);
}

export default FormInput;