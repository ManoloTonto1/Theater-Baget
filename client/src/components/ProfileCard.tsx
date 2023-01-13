import {
	Card, Grid, Avatar, Box, Typography 
} from '@mui/material';
import React from 'react';

export type ProfileCardProps = {
    image: string,
    name: string,
    email: string,
    ageGroep: string
}
export function ProfileCard(props:ProfileCardProps) {
	return (
		<Card elevation={4} sx={{
			marginBottom: 2,
			display: 'flex',
			justifyContent: 'center'
		}}>
			<Grid container>
				<Avatar
					alt={props.name}
					src={props.image}
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
                        Naam: {props.name}
					</Typography>
					<Typography>
                        Email: {props.email}
					</Typography>
					<Typography>
                        Leeftijd: {props.ageGroep}
					</Typography>
				</Box>
			</Grid>

		</Card>
	);
}