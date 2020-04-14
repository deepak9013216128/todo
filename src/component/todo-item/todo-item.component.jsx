import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {deleteTodo,updateTodo} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 250,
		maxWidth: '100%',
		margin: '0.1rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
	margin: {
    margin: theme.spacing(1),
  },
	complete: {
		backgroundColor: '#b9f6ca',
		color: 'gray',
	}
}));

const TodoItem = ({item})=> {
	const {todo,date,completed} = item;
	const classes = useStyles();
	const [isActive, setIsActive] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	useEffect(()=>{
		setIsActive(completed)
	},[completed])
	return (
		<Card className={classes.root} variant="outlined" className={completed && classes.complete}>
			<CardActionArea>
				<CardContent >
					{
						isEdit ? (
							<FormInput 
								handleSubmit={(todo)=>{
									updateTodo('todo',item.id,todo)
									setIsEdit(!isEdit)
								}} 
								edit 
								initialValue={todo}
							/>
						):(
							<Typography variant="h5" component="h2">
								{todo}
							</Typography>
						)
					}
					<Typography className={classes.pos} color="textSecondary">
						- {date}
					</Typography>
				</CardContent>
			</CardActionArea>
      <CardActions>
				<Checkbox
					checked={isActive}
					color="primary"
					className={classes.margin}
					onClick={()=>{
						updateTodo('completed',item.id,!isActive)
						setIsActive(!isActive)
					}}
					inputProps={{ 'aria-label': 'secondary checkbox' }}
				/>
				{
					!isActive ?(
						<IconButton 
							aria-label="edit" 
							size="medium" 
							onClick={()=>setIsEdit(!isEdit)}
							className={classes.margin}
							color='primary'
						>
							<EditIcon />
						</IconButton>
					):(
						<IconButton 
							aria-label="delete" 
							size="medium" 
							onClick={() => deleteTodo(item.id)}
							className={classes.margin}
							color='secondary'
							style={{marginLeft: 'auto'}}
						>
							<DeleteIcon />
						</IconButton>
					)
				}
      </CardActions>
    </Card>
	)
}
export default TodoItem;