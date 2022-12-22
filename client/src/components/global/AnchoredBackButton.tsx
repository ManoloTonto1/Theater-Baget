import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
	IconButton 
} from '@mui/material';
import {
	useNavigate 
} from 'react-router-dom';

type props = {
    newLocation: string
}

function AnchoredBackButton(props: props): JSX.Element {
	const navigate = useNavigate();
	const changeLocation = React.useCallback(async (newLocation:string): Promise<void> => {
		navigate(newLocation);
	}, [navigate]);
    
	return (
		<IconButton
			onClick={(): Promise<void> => changeLocation(props.newLocation)}
			sx={{
				color: 'black',
				bgcolor: 'secondary.main',
				'&:hover': {
					bgcolor: 'secondary.light',
				},
				position: 'absolute',
				left: 10,
				top: 10
			}}>
			<ArrowBackIcon />
		</IconButton>
	);
}

export default AnchoredBackButton;