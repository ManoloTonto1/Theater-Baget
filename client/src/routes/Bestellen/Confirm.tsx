import React from 'react';
import {
	Slide, Grid, Box, Typography,  Button 
} from '@mui/material';
import type {
	Programma 
} from '../../components/global/globalTypes';
import type {
	Data 
} from './types';

type props = {
    ticket: Programma
    previousStep: () => Promise<void>;
    data: Data | null;
    nextStep: () => Promise<void>
}

function Confirm(props: props): JSX.Element {
	const info = [
		{
			label: 'Programma:',
			data: props.ticket.titel
		},
		{
			label: 'Omschrijving:',
			data: props.ticket.omschrijving
		},
		{
			label: 'Hoeveelheid:',
			data: `€ ${props.data?.amount.toFixed(2) }`
		},
		{
			label: 'Rekeningsnummer:',
			data: props.data?.cardNum
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
						src={props.ticket?.afbeelding}
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
                        gereed
					</Button>
					<Button variant='outlined' onClick={props.previousStep}>terug</Button>
				</Grid>
			</Grid>
		</Slide>
	);
}

export default Confirm;