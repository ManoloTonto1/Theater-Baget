import {
	Card, Grid, Avatar, Box, Typography 
} from '@mui/material';
import React from 'react';
import UserContext from '../context/UserContext';

export type ProfileCardProps = {
    image: string,
    name: string,
    email: string,
    ageGroep: string
}
export function ProfileCard(props: ProfileCardProps) {
	const { user } = React.useContext(UserContext);

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
					<Typography variant='h4'>
						{user.userData?.naam}
					</Typography>
					<Typography variant='h5'>
						{user.userData?.email}
					</Typography>
					<Typography>
						{/* Leeftijd: {user.userData?.ageGroup} */}
					</Typography>
				</Box>
			</Grid>

		</Card>
	);
}