import {
	Box,
	Button,
	Grid, InputAdornment, Slide, TextField, Typography 
} from '@mui/material';
import type {
	ChangeEvent 
} from 'react';
import React from 'react';
import type {
	Charity,Data
} from './types';

type props = {
    chosenCharity: Charity | null
	nextStep: (data: Data) => Promise<void>;
	previousStep: () => Promise<void>;
}
function PayDetails(props: props): JSX.Element {
	const [amount,setAmount] = React.useState(0);
	const [comment, setComment] = React.useState('Met ❤️');
	const [isDisabled, setDisabled] = React.useState(true);

	const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'comment') {
			e.target.value ? setDisabled(false) : setDisabled(true);
			setComment(e.target.value);
			return; 
		}
		e.target.value ? setDisabled(false) : setDisabled(true);
		setAmount(parseInt(e.target.value) | 0);
	}, []);

	const setData = React.useCallback(() => {
		props.nextStep({
			comment,amount
		});	
	},[amount, comment, props]);
	return (
		<Slide in direction='left'>
			<Grid container
				spacing={3}
				pt={2}
				p={3}
			>
				<Grid item xs={12}
					sm lg={3}>
					<Box component={'img'}
						src={props.chosenCharity?.image}
						sx={{
							width: 200,
							p: 2,
							bgcolor: 'divider',
							borderRadius:1
						}}
					/>
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<Typography variant='body2' sx={{
						color:'primary.main'
					}}>
						Goede Doel:
					</Typography>
					<Typography>
						{props.chosenCharity?.name}
					</Typography>
					<br />
					<Typography variant='body2' sx={{
						color:'primary.main'
					}}>
						Informatie:
					</Typography>
					<Typography>
						{props.chosenCharity?.description}
					</Typography>
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<TextField
						name='amount'
						value={amount}
						onChange={handleChange}
						fullWidth
						label='Hoeveelheid'
						InputProps={{
							startAdornment: <InputAdornment position='start'>€</InputAdornment>
						}}
					/>
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<TextField
						value={comment}
						onChange={handleChange}
						name='comment'
						fullWidth
						label='Commentaar' />
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<Button
						disabled={isDisabled}
						variant='contained'
						onClick={setData}
						sx={{
							mr:2
						}}>
						next
					</Button>
					<Button variant='outlined' onClick={props.previousStep}>terug</Button>
				</Grid>
			</Grid>
		</Slide>
	);
}

export default PayDetails;