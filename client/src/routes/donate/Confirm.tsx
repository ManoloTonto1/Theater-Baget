import React from 'react';
import type {
	Charity,Data 
} from './types';
import {
	Slide, Grid, Box, Typography,  Button 
} from '@mui/material';

type props = {
    chosenCharity: Charity | null
    previousStep: () => Promise<void>;
    data: Data;
    nextStep: () => Promise<void>
}

function Confirm(props: props): JSX.Element {
	const info = [
		{
			label: 'Goede Doel:',
			data: props.chosenCharity?.name
		},
		{
			label: 'Informatie:',
			data: props.chosenCharity?.description
		},
		{
			label: 'Hoeveelheid:',
			data: `€ ${props.data.amount.toFixed(2) }`
		},
		{
			label: 'Commentaar:',
			data: props.data.comment
		}
	];

	return (
		<Slide in direction='left'>
			<Grid container
				spacing={3}
				pt={2}
				p={3}
			>
				<Grid item xs={12}
					sm lg={4}>
					<Box component={'img'}
						src={props.chosenCharity?.image}
						sx={{
							width: 250,
							p: 2,
							bgcolor: 'divider',
							borderRadius: 1
						}}
					/>
				</Grid>
				<Grid item xs={12}
					sm={6}>
					{info.map((item) => {
						return (
							<>
                        
								<Typography variant='body2' sx={{
									color: 'primary.main'
								}}>
									{item.label}
								</Typography>
								<Typography>
									{item.data}
								</Typography>
								<br />
							</>
						);
					})}
				</Grid>
				<Grid item xs={12}
					sm={6}>
					<Button
						variant='contained'
						onClick={props.nextStep}
						sx={{
							mr: 2
						}}>
                        Gereed
					</Button>
					<Button variant='outlined' onClick={props.previousStep}>terug</Button>
				</Grid>
			</Grid>
		</Slide>
	);
}

export default Confirm;