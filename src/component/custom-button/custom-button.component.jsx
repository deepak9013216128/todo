import React from 'react';

import Button from '@material-ui/core/Button';

const CustomButton = ({children,...props}) =>{
	
	return (
		<Button variant="contained" color="primary" {...props}>
        {children}
    </Button>
	);
};
export default CustomButton;