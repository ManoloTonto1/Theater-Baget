import {
	Card, Grid, Avatar, Box, Typography 
} from '@mui/material';
import React from 'react';
import type {
	userData 
} from '../context/UserContext';
import Monki from '../assets/gorilla.jfif';

export function ProfileCard(props:userData) {
	return (
		<Card elevation={4} sx={{
			marginBottom: 2,
			display: 'flex',
			justifyContent: 'center'
		}}>
			<Grid container>
				<Avatar
					alt={props.naam}
					src={Monki}
					sx={{
						width: 100,
						height: 100,
						m: 2
					}} />
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column'
				}}>
					<Typography>
                        Naam: {props.naam}
					</Typography>
					<Typography>
                        Email: {props.email}
					</Typography>
					<Typography>
                        Leeftijd: {props.leeftijdsGroep}
					</Typography>
				</Box>
			</Grid>

		</Card>
	);
}